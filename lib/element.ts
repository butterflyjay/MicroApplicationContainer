import CreateApp, { appInstanceMap } from "./app";
import logger from "./logger";
import { LifeCycles } from "./types/constance";
import {
  LifecycleEventName,
  MicroElementType,
  OptionsType,
  UrlType,
} from "./types/types";
// import { formatEntry } from "./utils";
//自定义微元素组件
export class MicroElement extends HTMLElement implements MicroElementType {
  public appName: string = ""; //app name
  public appEntry: string = ""; //app entry
  public options: OptionsType = {
    name: this.appName,
    entry: this.appEntry,
    shadowDom: true,
  }; //全局options
  static get observedAttributes(): Array<string> {
    return ["name", "entry"];
  }
  constructor() {
    super();
    logger.log("Creating component elements", this.appName);
  }
  /**
   * 自定义元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
   */
  public connectedCallback() {
    logger.log("The component is already mounted in the document");
    const isAppEffective: boolean = !!(this.appName && this.appEntry);
    dispatchLifecyclesEvent(this, LifeCycles.CREATED);

    isAppEffective && this.handleConnected();
  }
  /**
   * 自定义元素从DOM中删除时执行，此时进行一些卸载操作
   */
  public disconnectedCallback() {
    console.log("micro-app has disconnected");
    //获取应用实例
    const app = appInstanceMap.get(this.appName)!;
    //如果有属性destory，则完全卸载应用包括缓存的文件
    app.unmount(this.hasAttribute("destory"));
  }
  /**
   * 元素属性发生变化时执行，可以获取name，entry等属性的值
   * @param attr
   * @param oldVal
   * @param newVal
   */
  public attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
    console.log(`attribute ${attr}: ${newVal}`);
    if (attr === "name" && !this.appName && newVal) {
      this.appName = newVal;
    } else if (attr === "entry" && !this.appEntry && newVal) {
      this.appEntry = newVal;
    }
  }
  /**
   * 首次挂载微应用
   */
  private handleConnected(): void {
    if (!this.appName || !this.appEntry) {
      return logger.warn(
        "Mount failed, app name and app entry are required",
        this.appName
      );
    }
    //初始化shadowDom
    this.initShadowDom();
    //创建App
    const appAlreadyCreated = appInstanceMap.has(this.appName);
    if (appAlreadyCreated) {
      return;
    }
    this.handleCreateApp();
  }
  /**
   * 创建App实例
   */
  private handleCreateApp(): void {
    //TODO: 卸载app并删除实例
    const app = appInstanceMap.get(this.appName);
    if (app) {
    }
    const newApp = new CreateApp({
      name: this.appName,
      entry: this.appEntry,
      container: this.shadowRoot ?? this,
      disableScopecss: true,
      disableSandbox: false,
    });
    appInstanceMap.set(newApp.name, newApp);
  }
  /**
   * 初始化shadowDom
   */
  private initShadowDom(): void {
    this.attachShadow({ mode: "open" });
  }
  /**
   * 获取配置
   * 全局设置为最低优先级
   * @param名称 配置项名称
   */
  private getDisposeResult<T extends keyof OptionsType>(name: T) {
    return this.compatibleProperties(name);
  }
  /**
   * 判断属性是否存在于自定义标签上
   * @param name 属性名
   * @returns boolean
   */
  private compatibleProperties(name: string): boolean {
    if (name === "disable-scopecss") {
      return (
        this.hasAttribute("disable-scopecss") || this.hasAttribute("disableScopecss")
      );
    } else if (name === "disable-sandbox") {
      return this.hasAttribute("disable-sandbox") || this.hasAttribute("disableSandbox");
    }
    return this.hasAttribute(name);
  }
}

export function defineElement() {
  //如果已经定义过，则忽略
  if (!window.customElements.get("micro-element")) {
    /**
     * 注册元素
     * 注册后，就可以像普通元素一样使用micro-web，当micro-web元素被插入或删除DOM时即可触发相应的生命周期函数。
     */
    window.customElements.define("micro-element", MicroElement);
  }
}

export function dispatchLifecyclesEvent(
  element: HTMLElement | ShadowRoot,
  lifecycleName: LifecycleEventName
) {
  logger.log(`触发生命周期事件: ` + lifecycleName);
}

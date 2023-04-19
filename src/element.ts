import CreateApp, { appInstanceMap } from "./app";
import { MicroElementType, UrlType } from "./types/types";
import { formatEntry } from "./utils";
//自定义微元素组件
export class MicroElement extends HTMLElement implements MicroElementType {
  public url: UrlType = { origin: "", pathname: "", search: "" };
  public appName: string = "";
  public appEntry: string = "";
  static get observedAttributes() {
    return ["name", "entry"];
  }
  constructor() {
    super();
  }
  /**
   * 自定义元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
   */
  public connectedCallback() {
    console.log("micro-app is connected");
    //创建微应用实例
    const app = new CreateApp({
      name: this.appName,
      entry: this.appEntry,
      container: this,
      url: this.url,
    });
    //记入缓存，用于后续功能
    appInstanceMap.set(this.appName, app);
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
      formatEntry(newVal, this);
    }
  }
  /**
   * 首次挂载微应用
   */
  private handleConnected(): void {
    if (!this.appName || !this.appEntry) return;
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

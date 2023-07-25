import InitApp from "./init_app";
import { AppManager } from "./app_manager";
import logger from "./logger";
import globalEnv, { initGlobalEnv } from "./patch/global_env";
import { EL_LOCAL_NAME, LifeCycles } from "./types/constants";
import { appendChildTo, assign, defineProperties, toCamelCase } from "./utils";
import { hijackNodeMethodsOfGlobal } from "./hijack/hijack_node_methods";
//自定义微元素组件
export class MicroElement extends HTMLElement implements MicroAppElement {
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
  }
  /**
   * 自定义元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
   */
  public connectedCallback() {
    const isAppEffective = !!(this.appName && this.appEntry);
    isAppEffective && this.handleConnected();
  }
  /**
   * 自定义元素从DOM中删除时执行，此时进行一些卸载操作
   */
  public disconnectedCallback() {
    AppManager.getInstance().delete(this.appName);
    this.shadowRoot!.innerHTML = "";
    defineProperties(this.shadowRoot, {
      documentElement: {
        value: null,
      },
      head: {
        value: null,
      },
      body: {
        value: null,
      },
    });
  }
  /**
   * 元素属性发生变化时执行，可以获取name，entry等属性的值
   * @param attr
   * @param oldVal
   * @param newVal
   */
  public attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
    if (attr === "name" && !this.appName && newVal) {
      this.appName = newVal + "-" + Math.random().toString(36).slice(2);
      this.setAttribute("scope", this.appName);
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
    this.initOptions();
    if (this.options.shadowDom) {
      this.initShadowDom();
    }
    this.handleCreateApp();
  }
  /**
   * 创建App实例
   */
  private handleCreateApp(): void {
    //TODO: 对象化options
    const newApp = new InitApp({
      name: this.appName,
      entry: this.appEntry,
      container: this.shadowRoot,
      route: this.options.route!,
      initialUrl: this.options.initialUrl!,
      initialState: this.options.initialState!,
    });
    AppManager.getInstance().set(newApp.name, newApp);
  }
  /**
   * 初始化shadowDom
   */
  private initShadowDom(): void {
    this.attachShadow({ mode: "open" });
  }
  private initOptions(): void {
    const { attributes } = this;
    const option: { [propName: string]: unknown } = {
      initialUrl: globalEnv.rawWindow.location.href,
      initialState: history.state,
    };
    for (let i = attributes.length - 1; i >= 0; --i) {
      let { name, value } = attributes[i];
      name = toCamelCase(name);
      if (name === "name" || name === "entry" || name === "scope") {
        continue;
      }
      option[name] = value;
    }
    this.initRoute();
    assign(this.options, option);
  }
  private initRoute() {
    let pathnameList = globalEnv.rawWindow.location.pathname.split("/");
    let route = pathnameList[pathnameList.length - 1];
    if (route[0] !== "^") {
      route = "^/" + route + "/";
    }
    this.options["route"] = new RegExp(route);
  }
}

export function defineElement() {
  initGlobalEnv();
  //如果已经定义过，则忽略
  if (!window.customElements.get(EL_LOCAL_NAME)) {
    const { rawDocument, rawWindow } = globalEnv;
    const styleEl = rawDocument.createElement("style");
    styleEl.textContent = `${EL_LOCAL_NAME} {display:block;postion:relative;}`;
    appendChildTo(document.head, styleEl);
    hijackNodeMethodsOfGlobal();
    rawWindow.customElements.define("m-document", class extends HTMLElement {});
    rawWindow.customElements.define(EL_LOCAL_NAME, MicroElement);
  }
}

export function dispatchLifecyclesEvent(
  element: HTMLElement | ShadowRoot,
  lifecycleName: LifecycleEventName
) {
  logger.log(lifecycleName);
}

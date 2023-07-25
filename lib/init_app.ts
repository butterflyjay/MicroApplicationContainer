import { hijackEventAttr } from "./hijack/hijack_event_attr";
import { hijackNodeMethodsOfIframe } from "./hijack/hijack_node_methods";
import { syncUrlToRawWindow, updateRawWindowUrl } from "./hijack/sync_url";
import logger from "./logger";
import globalEnv from "./patch/global_env";
import initShadowDom from "./source/loader";
import { AppStatus, INNERHTML } from "./types/constants";
import {
  addEventListenerTo,
  appendChildTo,
  defineProperties,
  defineProperty,
  fetchSource,
  replaceChild,
} from "./utils";

export default class InitApp implements AppInterface {
  public name: string;
  public entry: string;
  public container: MicroAppRoot | null;
  public route: RegExp;
  public initialUrl: string;
  public initialState: unknown;
  public state: string = AppStatus.CREATED; // 组件状态，包括created/loading/mounted/unmount
  public source: SourceType = {
    links: new Set(), //link元素对应的静态资源
    scripts: new Set(), //script元素对应的静态资源
    html: null,
  };
  constructor({
    name,
    entry,
    container,
    route,
    initialUrl,
    initialState,
  }: CreateAppParam) {
    this.name = name; // 应用名称
    this.entry = entry; // 应用地址
    this.container = container; //应用容器
    this.route = route;
    this.initialUrl = initialUrl;
    this.initialState = initialState;
    this.initSandbox();
  }
  public async initSandbox() {
    this.setAppState(AppStatus.LOADING);
    try {
      const iframe = this.createIframeElement();
      defineProperty(this.container, "frameElement", { value: iframe });
      const doc = document.createElement("m-document");
      defineProperty(this.container, "document", { value: doc });
      const [response] = await Promise.all([
        fetchSource(this.entry),
        new Promise(resolve => {
          addEventListenerTo(iframe, "load", resolve, { once: true });
          DocumentFragment.prototype.append.call(this.container, iframe, doc);
        }),
      ]);
      this.createIframeTemplate(iframe);
      addEventListenerTo(iframe, "load", () => onIframeReload(this));
      initShadowDom(this, response);
    } catch (e) {
      logger.error(e, this.name);
    }
  }
  private createIframeElement() {
    const { location: rawLocation } = globalEnv.rawWindow;
    const iframe = globalEnv.rawDocument.createElement("iframe");
    iframe.src = rawLocation.protocol + "//" + rawLocation.host;
    iframe.hidden = true;
    return iframe;
  }
  private createIframeTemplate(iframe: HTMLIFrameElement) {
    const microDocument = iframe.contentWindow?.document!;
    while (microDocument?.firstChild) {
      microDocument?.removeChild(microDocument?.firstChild);
    }
    const html = microDocument?.createElement("html");
    html.innerHTML = INNERHTML;
    microDocument.appendChild(html);
  }
  /**
   * 设置状态
   * @param state 状态
   */
  private setAppState(state: string): void {
    this.state = state;
  }
  /**
   * 资源加载完时执行
   */
  onLoad(htmlDom: Element): void {}
  /**
   * 资源加载完成后进行渲染
   */
  mount(): void {}
  /**
   * 卸载应用
   * @param destory 是否完全销毁，删除缓存资源
   */
  unmount(destory: boolean): void {}
}

function onIframeReload(app: AppInterface) {
  const { contentWindow, contentDocument } = app.container?.frameElement!;
  if (contentDocument === null) {
    logger.warn(`lost connection`, app.name);
    return;
  }
  const { documentElement, head, body } = contentDocument;
  const newHtmlEl = contentDocument.createElement("html");
  const baseEl = documentElement.querySelector("base");
  defineProperty(contentWindow, "mAppRoot", { value: app.container });
  updateRawWindowUrl(contentWindow!, app);
  syncUrlToRawWindow(contentWindow!, app);
  hijackEventAttr([documentElement], app.container!, contentWindow!);
  hijackNodeMethodsOfIframe(contentWindow!);

  requestAnimationFrame(() => {
    if (baseEl) {
      appendChildTo(newHtmlEl, baseEl);
    }
    replaceChild.call(
      app.container?.document,
      documentElement,
      app.container?.documentElement!
    );
    defineProperties(app.container, {
      documentElement: { value: documentElement },
      head: {
        value: head,
      },
      body: {
        value: body,
      },
    });
    appendChildTo(contentDocument, newHtmlEl);
    contentWindow?.dispatchEvent(new Event("MicroAppReady"));
  });
}

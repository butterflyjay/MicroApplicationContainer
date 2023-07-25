import { hijackEventAttr } from "../hijack/hijack_event_attr";
import { hijackNodeMethodsOfIframe } from "../hijack/hijack_node_methods";
import { syncUrlToRawWindow } from "../hijack/sync_url";
import logger from "../logger";
import scopedCss from "../scopedcss";
import { SCRIPT_TYPES } from "../types/constants";
import {
  addEventListenerTo,
  appendChildTo,
  appendTo,
  defineProperties,
  defineProperty,
  domParser,
  fetchSource,
  isPath,
} from "../utils";
import sourceCenter from "./sourceCenter";

/**
 * initShadowDom
 * @param app
 * @param htmlStr
 */
export default function initShadowDom(app: AppInterface, htmlStr: string) {
  const { contentWindow, contentDocument } = app.container?.frameElement!;
  const htmlTemplate = domParser.parseFromString(htmlStr, "text/html");
  //html element of m-app
  const externalHtmlEl = htmlTemplate.documentElement;
  app.source.html = externalHtmlEl;
  defineProperties(app.container, {
    documentElement: {
      configurable: true,
      value: externalHtmlEl,
    },
    head: {
      configurable: true,
      value: htmlTemplate.head,
    },
    body: {
      configurable: true,
      value: htmlTemplate.body,
    },
  });
  //html element of iframe
  const internalHtmlEl = contentDocument?.documentElement;
  const baseEl = externalHtmlEl.querySelector("base");
  if (baseEl) {
    appendChildTo(internalHtmlEl!, baseEl);
  }
  const scriptsList = new Array<Array<HTMLScriptElement>>(3)
    .fill(Array<HTMLScriptElement>())
    .map(() => {
      return new Array<HTMLScriptElement>();
    });
  const stylesList = new Array<HTMLStyleElement>();
  // scriptsList[0]: narmolScripts, scriptsList[1]: deferScripts, scriptsList[2]: asyncScripts
  extractDealSource(externalHtmlEl, contentDocument!, scriptsList, stylesList, app);
  if (scriptsList[0].length) {
    let lastScriptEl: HTMLScriptElement;
    if (scriptsList[1].length) {
      lastScriptEl = scriptsList[1][scriptsList[1].length - 1];
    } else if (scriptsList[2].length) {
      lastScriptEl = scriptsList[2][scriptsList[2].length - 1];
    } else {
      lastScriptEl = scriptsList[0][scriptsList[0].length - 1];
    }
    const listener = () => {
      contentWindow?.dispatchEvent(new Event("MicroAppReady"));
    };
    addEventListenerTo(lastScriptEl, "load", listener);
    addEventListenerTo(lastScriptEl, "error", listener);
  }
  defineProperty(contentWindow, "mAppRoot", { value: app.container });
  const fragment = document.createDocumentFragment();
  Array.from(externalHtmlEl.childNodes).forEach(node => {
    fragment.appendChild(node);
  });
  contentWindow?.history.replaceState(
    app.initialState,
    "",
    app.initialUrl + app.initialUrl.endsWith("/") ? "" : "/"
  );
  syncUrlToRawWindow(contentWindow!, app);
  hijackEventAttr([externalHtmlEl], app.container!, contentWindow!);
  hijackNodeMethodsOfIframe(contentWindow as Window);
  requestAnimationFrame(() => {
    appendChildTo(app.container?.document!, fragment);
    appendTo(internalHtmlEl!, ...scriptsList[0]);   //iframe.contentDocument.documentElement
    appendTo(app.container?.document?.querySelector("head")!, ...stylesList);
  });
}

export async function extractDealSource(
  parent: HTMLElement,
  contentDocument: Document,
  scriptsList: Array<Array<HTMLScriptElement>>,
  stylesList: Array<HTMLStyleElement>,
  app: AppInterface
) {
  const children = Array.from(parent.children);
  children.length &&
    children.forEach(child => {
      extractDealSource(
        child as HTMLElement,
        contentDocument,
        scriptsList,
        stylesList,
        app
      );
    });
  for (const dom of children) {
    if (dom instanceof HTMLScriptElement) {
      const { type, attributes } = dom;
      if (SCRIPT_TYPES.includes(type)) {
        const newDom = contentDocument.createElement("script");
        newDom.text = dom.text;
        //fix: the default value of "async" is true
        newDom.async = dom.async;
        for (let i = 0, { length } = attributes; i < length; ++i) {
          if (attributes[i].name === "src" && isPath(attributes[i].value)) {
            attributes[i].value = new URL(attributes[i].value, app.entry).href;
          }
          newDom.setAttribute(attributes[i].name, attributes[i].value);
        }
        dom.type = "m;" + dom.type;
        scriptsList[0].push(newDom);
        if (newDom.defer) {
          scriptsList[1].push(newDom);
        } else if (newDom.async) {
          scriptsList[2].push(newDom);
        }
      }
    } else if (dom instanceof HTMLStyleElement) {
      const newDom = contentDocument.createElement("style");
      newDom.textContent = dom.textContent;
      stylesList.push(newDom);
    } else if (dom instanceof HTMLMetaElement || dom instanceof HTMLTitleElement) {
      parent.removeChild(dom);
    } else if (
      dom instanceof HTMLLinkElement &&
      dom.getAttribute("rel") === "stylesheet" &&
      dom.getAttribute("href")
    ) {
      let url = dom.getAttribute("href")!;
      if (isPath(url)) {
        url = new URL(url, app.entry).href;
      }
      const styleText = await fetchSource(url);
      const newDom = contentDocument.createElement("style");
      newDom.textContent = styleText;
      stylesList.push(newDom);
    }
  }
}
/**
 * 获取link远程资源
 * @param app 微应用实例
 * @param mAppHead microweb-head
 * @param htmlTemplate 微应用
 */
export function fetchLinksFromHtml(
  app: AppInterface,
  mAppHead: Element | null,
  htmlTemplate: Element
): void {
  const linkEntries = Array.from(app.source.links.values());
  //通过fetch请求所有css资源
  const fetchLinkPromise: Array<Promise<string>> = [];
  for (const [url] of linkEntries) {
    fetchLinkPromise.push(fetchSource(url));
  }
  Promise.all(fetchLinkPromise)
    .then(res => {
      for (let i = 0, len = res.length; i < len; i++) {
        const code = res[i];
        //拿到css资源后放入style元素并插入到microweb-head中
        const linkSheetStyle = document.createElement("style");
        linkSheetStyle.textContent = code;
        scopedCss(linkSheetStyle, app.name);
        mAppHead?.appendChild(linkSheetStyle);
        sourceCenter.getSource("link", linkEntries[i])!.code = code;
      }
      app.onLoad(htmlTemplate);
    })
    .catch(e => {
      logger.error(e, app.name);
    });
}
/**
 * 获取js远程资源
 * @param app 微应用实例
 * @param htmlTemplate 微应用dom结构
 */
export function fetchScriptsFromHtml(app: AppInterface, htmlTemplate: Element): void {
  const scriptsValues = Array.from(app.source.scripts.values());
  const fetchScriptPromise: Array<Promise<string>> = [];
  for (const address of scriptsValues) {
    const info = sourceCenter.getSource("script", address)!;
    fetchScriptPromise.push(
      info.isExternal ? fetchSource(address) : Promise.resolve(info.code)
    );
  }
  Promise.all(fetchScriptPromise)
    .then(res => {
      for (let i = 0; i < res.length; i++) {
        const code = res[i];
        sourceCenter.getSource("script", scriptsValues[i])!.code = code;
      }
      app.onLoad(htmlTemplate);
    })
    .catch(e => {
      logger.error(e, app.name);
    });
}

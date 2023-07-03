import { isBrowser } from "../utils";

declare global {
  interface Node {
    __MICRO_WEB_NAME__?: string | null;
  }
}

const globalEnv: Record<string, any> = {};

export function initGlobalEnv(): void {
  if (isBrowser) {
    const rawWindow = new Function("return window")();
    const rawDocument = new Function("return document")();
    const rawRootDocument = new Function("return Document")();
    const rawRootElement = rawWindow.Element;
    const rawRootNode = rawWindow.Node;
    const rawRootEventTarget = rawWindow.EventTarget;

    //methods
    const rawSetAttribute = rawRootElement.prototype.setAttribute;
    const rawAppendChild = rawRootElement.prototype.appendChild;
    const rawInsertBefore = rawRootElement.prototype.insertBefore;
    const rawReplaceChild = rawRootElement.prototype.replaceChild;
    const rawRemoveChild = rawRootElement.prototype.removeChild;
    const rawAppend = rawRootElement.prototype.append;
    const rawPrepend = rawRootElement.prototype.prepend;
    const rawCloneNode = rawRootElement.prototype.cloneNode;
    const rawElementQuerySelector = rawRootElement.prototype.querySelector;
    const rawElementQuerySelectorAll = rawRootElement.prototype.querySelectorAll;
    const rawInsertAdjacentElement = rawRootElement.prototype.insertAdjacentElment;
    const rawInnerHTMLDesc = Object.getOwnPropertyDescriptor(
      rawRootElement.prototype,
      "innerHTML"
    );
    const rawParentNodeDesc = Object.getOwnPropertyDescriptor(
      rawRootNode.prototype,
      "parentNode"
    );

    //Document proto methods
    const rawCreateElement = rawRootDocument.prototype.createElement;
    const rawCreateElementNS = rawRootDocument.prototype.createElementNS;
    const rawCreateDocumentFragment = rawRootDocument.prototype.createDocumentFragment;
    const rawCreateTextNode = rawRootDocument.prototype.createTextNode;
    const rawCreateComment = rawRootDocument.prototype.createComment;
    const rawQuerySelector = rawRootDocument.prototype.querySelector;
    const rawQuerySelectorAll = rawRootDocument.prototype.querySelectorAll;
    const rawGetElementById = rawRootDocument.prototype.getElementById;
    const rawGetElementsByClassName = rawRootDocument.prototype.getElementsByClassName;
    const rawGetElementsByTagName = rawRootDocument.prototype.getElementsByTagName;
    const rawGetElementsByName = rawRootDocument.prototype.getElementsByName;

    const ImageProxy = new Proxy(Image, {
      construct(Target, args): HTMLImageElement {
        const elementImage = new Target(...args);
        elementImage.__MICRO_WEB_NAME__ = "true";
        return elementImage;
      },
    });

    const rawSetInterval = rawWindow.setInterval;
    const rawSetTimeout = rawWindow.setTimeout;
    const rawClearInterval = rawWindow.clearInterval;
    const rawClearTimeout = rawWindow.clearTimeout;
    const rawPushState = rawWindow.history.pushState;
    const rawReplaceState = rawWindow.history.replaceState;
    const rawAddEventListener = rawRootEventTarget.prototype.addEventListener;
    const rawRemoveEventListener = rawRootEventTarget.prototype.removeEventListener;
    const rawDispatchEvent = rawRootEventTarget.prototype.dispatchEvent;

    Object.assign(globalEnv, {
      //common global vars
      rawWindow,
      rawDocument,
      rawRootDocument,
      rawRootElement,
      rawRootNode,

      //source/patch
      rawSetAttribute,
      rawAppendChild,
      rawInsertBefore,
      rawReplaceChild,
      rawRemoveChild,
      rawAppend,
      rawPrepend,
      rawCloneNode,
      rawElementQuerySelector,
      rawElementQuerySelectorAll,
      rawInsertAdjacentElement,
      rawInnerHTMLDesc,
      rawParentNodeDesc,

      rawCreateElement,
      rawCreateElementNS,
      rawCreateDocumentFragment,
      rawCreateTextNode,
      rawCreateComment,
      rawQuerySelector,
      rawQuerySelectorAll,
      rawGetElementById,
      rawGetElementsByClassName,
      rawGetElementsByTagName,
      rawGetElementsByName,
      ImageProxy,

      // sandbox/effect
      rawSetInterval,
      rawSetTimeout,
      rawClearInterval,
      rawClearTimeout,
      rawPushState,
      rawReplaceState,
      rawAddEventListener,
      rawRemoveEventListener,
      rawDispatchEvent,
    });
  }
}

export default globalEnv;

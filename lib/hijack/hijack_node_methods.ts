import { EL_TAG_NAME, PROTOTYPE } from "../types/constants";
import {
  createElement,
  defineProperties,
  defineProperty,
  entries,
  getOwnPropertyDescriptor,
  keys,
} from "../utils";
import { alternativeMethods } from "./alternative_methods";

function getObjectMethods(obj: object): string[] {
  const methods: string[] = [];
  for (const key of keys(obj)) {
    const desc = getOwnPropertyDescriptor(obj, key);
    if (typeof desc?.value === "function") {
      methods.push(key);
    }
  }
  return methods;
}
//["addEventListener", "dispatchEvent", "removeEventListener"]
const methodsOfEventTargetProto = getObjectMethods(EventTarget[PROTOTYPE]);
//["appendChild", "cloneNode","contains","compareDocumentPostion",...]
const methodsOfNodeProto = getObjectMethods(Node[PROTOTYPE]);
//["append", "getElementById", "prepend", "querySelector","querySelectorAll", "replaceChildren"]
const methodsOfParentNodeProto = getObjectMethods(DocumentFragment[PROTOTYPE]);
const methodsOfDocument = methodsOfParentNodeProto.concat(
  methodsOfNodeProto,
  methodsOfEventTargetProto
);
//Document & ShadowRoot
const methodsOfDocumentOrShadowRoot = [
  "caretPositionFromPoint",
  "elementFromPoint",
  "elementsFromPoint",
  "getAnimations",
  "getSelection",
  "nodeFromPoint",
  "nodesFromPoint",
];
//Document & ShadowRoot
const propsOfDocumentOrShadowRoot = [
  "activeElement",
  "fullscreenElement",
  "pictureInPictureElement",
  "pointerLockElement",
  "styleSheets",
];

export function hijackNodeMethodsOfGlobal() {
  hijackElement(window);
  hijackShadowRoot(window);
}

function hijackShadowRoot({ ShadowRoot }: Window) {
  for (const [key, method] of entries(alternativeMethods)) {
    if (key in ShadowRoot[PROTOTYPE]) {
      ShadowRoot[PROTOTYPE][key] = method;
    }
  }
}

export function hijackNodeMethodsOfIframe(contentWindow: Window) {
  hijackDocument(contentWindow);
  hijackElement(contentWindow);
  hijackWindow(contentWindow);
}

const commonDesc = {
  configurable: true,
  enumerable: false,
  writable: true,
};

export function hijackDocument({ document, mAppRoot }: Window) {
  // let shadowRoot work
  for (const key of methodsOfDocument) {
    //getRootNode is hijacked, get shadowRoot
    defineProperty(document, key, {
      ...commonDesc,
      value: (...args: unknown[]) => mAppRoot![key](...args),
    });
  }
  for (const key of methodsOfDocumentOrShadowRoot) {
    if (key in document && key in mAppRoot!) {
      defineProperty(document, key, {
        ...commonDesc,
        value: (...args: unknown[]) => mAppRoot![key](...args),
      });
    }
  }
  for (const key of propsOfDocumentOrShadowRoot) {
    if (key in document && key in mAppRoot!) {
      defineProperty(document, key, {
        enumerable: true,
        get: () => mAppRoot![key],
        set: val => (mAppRoot![key] = val),
      });
    }
  }
  defineProperties(document, {
    getElementById: {
      ...commonDesc,
      value: (id: string) => mAppRoot?.querySelector(`#${id}`),
    },
    getElementsByClassName: {
      ...commonDesc,
      value(names: string) {
        const selector = names
          .split(/\s+/)
          .map(name => `.${name}`)
          .join("");
        return mAppRoot?.querySelectorAll(selector);
      },
    },
    getElementsByName: {
      ...commonDesc,
      value: (name: string) => mAppRoot?.querySelectorAll(`[name=${name}]`),
    },
    getElementsByTagName: {
      ...commonDesc,
      value: (name: string) => mAppRoot?.querySelectorAll(name),
    },
    documentElement: {
      enumerable: true,
      get: () => mAppRoot?.documentElement, //externalHtml
    },
    __documentElment: {
      value: document.documentElement, //iframe.contentDocument.documentElement
    },
    head: {
      enumerable: true,
      get: () => mAppRoot?.head,
    },
    body: {
      enumerable: true,
      get: () => mAppRoot?.body,
    },
    exitFullscreen: {
      value: () => document.exitFullscreen(),
    },
    addEventListener: {
      value: (
        ...args: [
          string,
          EventListenerOrEventListenerObject,
          boolean | EventListenerOptions | undefined
        ]
      ) => mAppRoot?.document?.addEventListener(...args), //mAppRoot.document ===> m-document
    },
    removeEventListener: {
      value: (
        ...args: [
          string,
          EventListenerOrEventListenerObject,
          boolean | EventListenerOptions | undefined
        ]
      ) => mAppRoot?.document?.removeEventListener(...args),
    },
  });
}
export function hijackElement({ HTMLElement }: Window) {
  for (const [key, method] of entries(alternativeMethods)) {
    HTMLElement[PROTOTYPE][key] = method;
  }
  const desc = Object.getOwnPropertyDescriptor(Node[PROTOTYPE], "ownerDocument")!;
  desc.enumerable = false;
  defineProperties(HTMLElement[PROTOTYPE], {
    _rawOwnerDoc: desc,
    ownerDocument: {
      ...desc,
      get() {
        const root = this.getRootNode() as MicroAppRoot;
        const isMicroApp = root?.host?.tagName === EL_TAG_NAME;
        return isMicroApp ? root?.frameElement?.contentDocument : this._rawOwnerDoc;
      },
    },
  });
}

const eventPropsOfWindow = Object.keys(window).filter(key => key.startsWith("on"));
const eventPropsOfHTMLElement = Object.keys(HTMLElement.prototype).filter(key =>
  key.startsWith("on")
);
const uniqueEventsOfWindow = eventPropsOfWindow.filter(
  key => !eventPropsOfHTMLElement.includes(key)
);

function hijackWindow(contentWindow: Window) {
  contentWindow.getComputedStyle = (el: Element, ...args) => {
    return (<any>el)?.host?.tagName === EL_TAG_NAME
      ? (<any>el)?.host?.style
      : getComputedStyle(el, ...args);
  };
  contentWindow.requestAnimationFrame = (callback: FrameRequestCallback) =>
    requestAnimationFrame(callback);
  contentWindow.cancelAnimationFrame = (handle: number) => cancelAnimationFrame(handle);
  contentWindow.getSelection = () => getSelection();

  const { mAppRoot, addEventListener, removeEventListener, dispatchEvent } =
    contentWindow;
  contentWindow.addEventListener = (
    type: string,
    ...args: [
      EventListenerOrEventListenerObject,
      boolean | undefined | EventListenerOptions
    ]
  ) => {
    if (uniqueEventsOfWindow.includes(type)) {
      addEventListener(type, ...args);
    } else {
      mAppRoot?.addEventListener(type, ...args);
    }
  };
  contentWindow.removeEventListener = (
    type: string,
    ...args: [
      EventListenerOrEventListenerObject,
      boolean | undefined | EventListenerOptions
    ]
  ) => {
    if (uniqueEventsOfWindow.includes(type)) {
      removeEventListener(type, ...args);
    } else {
      mAppRoot?.removeEventListener(type, ...args);
    }
  };
  contentWindow.dispatchEvent = (event: Event) => {
    return uniqueEventsOfWindow.includes(event?.type)
      ? dispatchEvent(event)
      : mAppRoot?.dispatchEvent(event)!;
  };
}

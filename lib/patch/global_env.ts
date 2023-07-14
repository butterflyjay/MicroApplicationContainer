import { assign, isBrowser } from "../utils";

const globalEnv: Record<string, any> = {};

export function initGlobalEnv(): void {
  if (isBrowser) {
    const rawWindow = new Function("return window")();
    const rawDocument = new Function("return document")();
    const rawRootDocument = new Function("return Document")();
    const rawRootElement = rawWindow.Element;
    const rawRootNode = rawWindow.Node;
    const rawRootEventTarget = rawWindow.EventTarget;
    assign(globalEnv, {
      //common global vars
      rawWindow,
      rawDocument,
      rawRootDocument,
      rawRootElement,
      rawRootNode,
      rawRootEventTarget,
    });
  }
}

export default globalEnv;

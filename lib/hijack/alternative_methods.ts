import { EL_TAG_NAME, SCRIPT_TYPES } from "../types/constants";
import {
  after,
  append,
  appendChild,
  appendTo,
  before,
  insertBefore,
  isObject,
  isPath,
  isString,
  prepend,
  replaceChild,
  replaceChildren,
  replaceWith,
  setAttribute,
} from "../utils";
import { hijackEventAttr } from "./hijack_event_attr";

type alterMethodsType = {
  [key: string]: Function;
};
export const alternativeMethods: alterMethodsType = {
  //fatherDom.appendChild()
  appendChild<T extends Node>(aChild: T): T {
    const root = this.getRootNode() as MicroAppRoot; //shadowRoot
    const nodes = [aChild];
    hijackEventAttr(nodes, root);
    hijackScriptElements(nodes, appendChild, this, nodes, root);
    return aChild;
  },
  //fatherDom.insertBefore(insertdom, referencedom)
  insertBefore<T extends Node>(newNode: T, referenceNode: Node): T {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr([newNode], root);
    hijackScriptElements([newNode], insertBefore, this, [newNode, referenceNode], root);
    return newNode;
  },
  replaceChild<T extends Node>(newChild: Node, oldChild: T): T {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr([newChild], root);
    hijackScriptElements([newChild], replaceChild, this, [newChild, oldChild], root);
    return oldChild;
  },
  append(...nodes: (string | Node)[]) {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr(nodes, root);
    hijackScriptElements(nodes, append, this, nodes, root);
  },
  prepend(...nodes: (string | Node)[]) {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr(nodes, root);
    hijackScriptElements(nodes, prepend, this, nodes, root);
  },
  after(...nodes: (string | Node)[]) {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr(nodes, root);
    hijackScriptElements(nodes, after, this, nodes, root);
  },
  before(...nodes: (string | Node)[]) {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr(nodes, root);
    hijackScriptElements(nodes, before, this, nodes, root);
  },
  replaceWith(...nodes: (string | Node)[]) {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr(nodes, root);
    hijackScriptElements(nodes, replaceWith, this, nodes, root);
  },
  replaceChildren(...nodes: (string | Node)[]) {
    const root = this.getRootNode() as MicroAppRoot;
    hijackEventAttr(nodes, root);
    hijackScriptElements(nodes, replaceChildren, this, nodes, root);
  },
};
//element fragelement
const ELEMENT_OR_DOCUMENT_FRAGMENT = [1, 11];

function hijackScriptElements(
  nodes: Array<string | Node>,
  method: Function,
  ctx: Node,
  args: unknown[],
  root: MicroAppRoot
) {
  const newScripts: HTMLScriptElement[] = [];
  const isMicroApp = root?.host?.tagName === EL_TAG_NAME; //root.host ===> <m-app></m-app>
  if (isMicroApp) {
    for (const node of nodes) {
      if (!isObject(node)) continue;
      if ((<Element>node).tagName === "IMG") {
        modifyAssetPath(node as Element, "src", root);
      }
      if ((<Element>node).tagName === "SCRIPT") {
        const el = <HTMLScriptElement>node;
        modifyAssetPath(el, "src", root);
        if (SCRIPT_TYPES.includes(el.type)) {
          newScripts.push(el.cloneNode(true) as HTMLScriptElement);
          el.type = "m;" + el.type;
        }
      }
      if ((node as Element).tagName === "LINK") {
        modifyAssetPath(<Element>node, "href", root);
      } else if (
        ELEMENT_OR_DOCUMENT_FRAGMENT.includes(node.nodeType) &&
        (<Element>node).children.length
      ) {
        const list = (<Element>node).querySelectorAll("script");
        for (let i = 0, { length } = list; i < length; ++i) {
          const el = list[i];
          if (SCRIPT_TYPES.includes(el.type)) {
            newScripts.push(<HTMLScriptElement>node.cloneNode(true));
            el.type = "m;" + el.type;
          }
        }
      }
    }
  }
  method.apply(ctx, args);
  if (isMicroApp && newScripts.length) {
    appendTo(
      root?.frameElement?.contentDocument?.__documentElement as Node,
      ...newScripts
    );
  }
}

export function modifyAssetPath(el: Element, attr: string, root: MicroAppRoot) {
  const url = el.getAttribute(attr)!;
  if (!isPath(url)) {
    return;
  }
  const publicPath = root?.host?.appEntry;
  if (publicPath) {
    el.setAttribute(attr, new URL(url, publicPath).href);
  }
}

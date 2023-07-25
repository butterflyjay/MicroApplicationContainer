import { modifyAssetPath } from "./alternative_methods";

/**
 * hijack event of attribute
 * @param nodes
 * @param root
 * @param win
 * @returns
 */
export function hijackEventAttr(
  nodes: (string | Node)[] | HTMLCollection,
  root: MicroAppRoot,
  win?: Window
) {
  for (const node of <Node[]>nodes) {
    //nodeType 1：元素节点 2：属性节点 3：文本节点 8：注释节点 9：文档节点
    if (typeof node === "string" || node.nodeType !== 1) {
      continue;
    }
    if (!win) {
      win = root?.frameElement?.contentWindow!;
      //the node is not under <m-app>
      if (!win) return;
    }
    const el = <HTMLElement>node;
    for (let i = el.attributes.length - 1; i >= 0; --i) {
      const { name, value } = el.attributes[i];
      if (name.startsWith("on")) {
        const listener = <(ev: Event) => void>win.Function("event", value);
        el.addEventListener(name.substring(2), listener);
        el.setAttribute(name, "");
      }
    }
    if (el.children.length) {
      hijackEventAttr(el.children, root, win);
    }
  }
}

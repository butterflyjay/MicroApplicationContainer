import { PROTOTYPE } from "./types/constants";

/**
 * 是否为浏览器环境
 */
export const isBrowser = typeof window !== "undefined";
/**
 * 获取静态资源
 * @param {string} entry 静态资源地址
 * @returns
 */
export function fetchSource(entry: string): Promise<string> {
  return fetch(entry).then(res => {
    return res.text();
  });
}

/**
 * 判断目标是否为字符串
 * @param target 目标
 * @returns {boolean}
 */
export function isString(target: unknown): target is string {
  return typeof target === "string";
}

/**
 * 判断是否为纯对象
 * @param target 纯对象
 * @returns {boolean}
 */
export function isPlainObject<T = Record<PropertyKey, unknown>>(
  target: unknown
): target is T {
  return toString.call(target) === "[object Object]";
}

export function isObject(target: unknown): target is object {
  return typeof target === "object";
}
/**
 * 判断是否为函数类型
 * @param target 函数
 * @returns {boolean}
 */
export function isFunction(target: unknown): target is Function {
  return typeof target === "function";
}
// is number
export function isNumber(target: unknown): target is number {
  return typeof target === "number";
}
//is Promise
export function isPromise(target: unknown): target is Promise<unknown> {
  return toString.call(target) === "[object Promise]";
}

export function isBoolean(target: unknown): target is boolean {
  return typeof target === "boolean";
}
/**
 * 判断目标是否为bind后的函数
 * @param target 检测目标
 * @returns boolean
 */
export function isBoundFunction(target: unknown): boolean {
  return (
    isFunction(target) &&
    target.name.indexOf("bound") === 0 &&
    !target.hasOwnProperty("prototype")
  );
}

export function isConstructor(target: unknown): boolean {
  if (isFunction(target)) {
    const targetStr = target.toString();
    return (
      (target.prototype?.constructor === target &&
        Object.getOwnPropertyNames(target.prototype).length > 1) ||
      /^function\s+[A-Z]/.test(targetStr) ||
      /^class\s+/.test(targetStr)
    );
  }
  return false;
}

export function isProxyDocument(target: unknown): target is Document {
  return toString.call(target) === "[object ProxyDocument]";
}

export function formatAppEntry(
  entry: string | null,
  appName: string | null = null
): string {
  if (!isString(entry) || !entry) return "";
  return "";
}
/**
 * 给地址添加协议
 * @param entry 地址
 * @returns 添加协议的地址
 */
export function addProtocol(entry: string): string {
  return entry.startsWith("//") ? `${globalThis.location.protocol}${entry}` : entry;
}
/**
 * 解析，构造，规范化和编码
 * @param entry 地址
 * @returns URL
 */
export function createUrl(entry: string): URL {
  return new URL(entry);
}

// export function formatEntry(entry: string, el: MicroAppElement): string {
//   if (!isString(entry) || !entry) return "";
//   try {
//     //origin: 包含协议名、域名和端口号 pathname：以"/"起头紧跟着URL文件路径 search：指示URL的参数字符串
//     const { origin, pathname, search } = createUrl(addProtocol(entry));
//     console.log(origin, pathname, search);
//     el.appEntry = { origin, pathname, search };
//     return `${origin}${pathname}${search}`;
//   } catch (e) {
//     console.error(e, el.appName);
//     return "";
//   }
// }

export const {
  defineProperty,
  defineProperties,
  entries,
  assign,
  keys,
  getOwnPropertyDescriptor,
} = Object;

export const {
  //EventTarget
  addEventListener,
  //Node
  appendChild,
  insertBefore,
  replaceChild,
  //ParentNode,
  append,
  prepend,
  replaceChildren,
  //ChildNode,
  after,
  before,
  replaceWith,
} = HTMLElement[PROTOTYPE];

export function addEventListenerTo(
  target: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  captureOrOptions?: AddEventListenerOptions | boolean
): void {
  addEventListener.call(target, type, listener, captureOrOptions);
}

export function appendChildTo(node: Node, newChild: Node): Node {
  return appendChild.call(node, newChild);
}

export function appendTo(node: Node, ...args: Array<Node | string>) {
  append.apply(node, args);
}

export function defer(fn: Function, ...args: unknown[]): void {
  Promise.resolve().then(fn.bind(null, ...args));
}

export function isUndefined(target: unknown): target is undefined {
  return typeof target === "undefined";
}

export function isPath(url: string) {
  return !(!url || /^((((ht|f)tps?)|file):)?\/\//.test(url) || /^(data|blob):/.test(url));
}

export function toCamelCase(attrName: string): string {
  const list = attrName.split("-");
  let newName = list[0];
  for (let i = 1, { length } = list; i < length; ++i) {
    const [firstLetter, ...rest] = list[i];
    newName += firstLetter.toUpperCase() + rest.join("");
  }
  return newName;
}

export const domParser = new DOMParser();

import { MicroElement } from "./element";
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

export function formatEntry(entry: string, el: MicroElement): string {
  if (!isString(entry) || !entry) return "";
  try {
    //origin: 包含协议名、域名和端口号 pathname：以"/"起头紧跟着URL文件路径 search：指示URL的参数字符串
    const { origin, pathname, search } = createUrl(addProtocol(entry));
    console.log(origin, pathname, search);
    el.url = { origin, pathname, search };
    return `${origin}${pathname}${search}`;
  } catch (e) {
    console.error(e, el.appName);
    return "";
  }
}

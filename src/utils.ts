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

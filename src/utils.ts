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

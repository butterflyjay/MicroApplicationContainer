type T = {
  code: string;
  isExternal?: boolean;
};
export interface SourceCenterType {
  linkMap: Map<string, T>;
  scriptMap: Map<string, T>;
  getSource(target: string, key: string): T | undefined;
  setSource(target: string, key: string, value: T): void;
}
export class SourceCenter implements SourceCenterType {
  public linkMap: Map<string, T> = new Map();
  public scriptMap: Map<string, T> = new Map();
  public getSource(target: string, key: string) {
    return target === "script" ? this.scriptMap.get(key) : this.linkMap.get(key);
  }
  public setSource(target: string, key: string, value: T) {
    target === "script" ? this.scriptMap.set(key, value) : this.linkMap.set(key, value);
  }
}

export default new SourceCenter();

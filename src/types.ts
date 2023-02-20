export interface CreateAppType {
  name: string;
  entry: string;
  container: Element;
}
export interface AppSourceMap {
  links: Map<string, AppSourceMapValue>;
  scripts: Map<string, AppSourceMapValue>;
  html: Element | null;
}
export interface MicroApp {
  name: string;
  entry: string;
  container: Element | null;
  status: string;
  source: AppSourceMap;
  onLoad(dom: Element): void;
  unmount(isDestory: boolean): void;
}
export type AppSourceMapValue = {
  code: string;
  isExternal?: boolean;
};

export enum AppStatus {
  CREATED = "CREATED",
  MOUNTED = "MOUNTED",
  UNMOUNT = "UNMOUNT",
  LOADING = "LOADING",
}
//created/loading/mount/unmount

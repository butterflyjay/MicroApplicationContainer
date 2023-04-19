//app 状态
export enum AppStatus {
  CREATED = "created",
  LOADING = "loading",
  LOADED = "loaded",
  LOAD_FAILED = "load_failed",
  MOUNTING = "mounting",
  MOUNTED = "mounted",
  UNMOUNT = "UNMOUNT",
}

//lifecycle 常量
export enum LifeCycles {
  CREATED = "created",
  BEFOREMOUNT = "beforemount",
  MOUNTED = "mounted",
  UNMOUNT = "unmount",
  ERROR = "error",
}

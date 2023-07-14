export const EL_LOCAL_NAME = "m-app";
export const EL_TAG_NAME = EL_LOCAL_NAME.toUpperCase();
export const PROTOTYPE = "prototype";
export const IFRAMEHTMLCODE = `<html><head></head><body></body></html>`;
export const SCRIPT_TYPES = ["", "text/javascript", "module"];

export const M_DOCUMENT_STYLE =
  "m-document{display:block;position:absolute;top:0;left:0;width:100%'height:100%;}";
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

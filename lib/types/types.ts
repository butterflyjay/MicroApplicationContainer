//TypeScript声明文件(.d.ts)的使用
//使用场景
//1.在ts文件中对引用的外部库做类型判断；
//2.制作npm包时，书写自己的声明文件，需要在package.json的typing/types字段注册声明文件的路径；
//3.不使用ts时，也可以添加声明文件与（自己的）的模块存放在同一目录下，简单做一下数据结构体，对IDE参数声明也有用哦；

import SandBox from "../sandbox";

export interface Window {
  proxyWindow?: object;
  addEventListener?(type: string, handler: Function, useCapture?: boolean): void;
  removeEventListener?(type: string, handler: Function, useCapture?: boolean): void;
}

export type SourceType = {
  links: Map<string, AppSourceMapValue>;
  scripts: Map<string, AppSourceMapValue>;
  html: Element | null;
};
export interface AppInterface {
  name: string;
  entry: string;
  container?: Element | ShadowRoot;
  status?: string;
  source: SourceType;
  sandBox: SandBox | null;
  onLoad(dom: Element): void;
  unmount(isDestory: boolean): void;
}

export interface UrlType {
  origin: string;
  pathname: string;
  search: string;
}

export type AppSourceMapValue = {
  code: string;
  isExternal?: boolean;
};

type ObservedAttr = "name" | "entry";

type AttrType = string | null;

//单个微应用元素类型
export interface MicroElementType {
  appName: AttrType;
  appEntry: AttrType;

  //元素挂载到document时的钩子
  connectedCallback(): void;

  //元素从document文档卸载时的钩子
  disconnectedCallback(): void;

  //元素属性改变时的钩子
  attributeChangedCallback(attr: ObservedAttr, oldVal: string, newVal: string): void;
}
export type CreateAppParam = {
  name: string;
  entry: string;
  disableScopecss?: boolean;
  disableSandbox?: boolean;
  container?: HTMLElement | ShadowRoot;
};
// 单个应用的配置
export type MicroAppConfig = {
  name: string; // name: app name
  entry: string; // entry: app entry
  shadowDom?: boolean; //是否使用shadowDom
  disableScopecss?: boolean; // 禁用css作用域
  disableSandbox?: boolean; // 禁用沙箱
  baseRoute?: string; // 路由前缀
  destroy?: boolean; // 应用卸载后强制删除缓存资源
  "keep-alive"?: boolean; //应用卸载后会缓存状态
};

//全局配置
export interface OptionsType extends MicroAppConfig {
  tagName?: string;
  lifeCycles?: LifeCyclesType; //生命周期
  globalAssets?: GlobalAssetsType; //全局共享资源
}

//全局执行的js 和 css
type GlobalAssetsType = {
  js?: string[];
  css?: string[];
};
export type LifecycleEventName = keyof LifeCyclesType;
//lifecycle类型
export type LifeCyclesType = {
  created(e: CustomEvent): void;
  beforemount(e: CustomEvent): void;
  mounted(e: CustomEvent): void;
  unmount(e: CustomEvent): void;
  error(e: CustomEvent): void;
};

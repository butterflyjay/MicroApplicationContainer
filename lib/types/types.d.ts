//TypeScript声明文件(.d.ts)的使用
//使用场景
//1.在ts文件中对引用的外部库做类型判断；
//2.制作npm包时，书写自己的声明文件，需要在package.json的typing/types字段注册声明文件的路径；
//3.不使用ts时，也可以添加声明文件与（自己的）的模块存放在同一目录下，简单做一下数据结构体，对IDE参数声明也有用哦；

declare interface Window {
  HTMLElement: Function;
  mAppRoot?: MicroAppRoot;
  ShadowRoot: Function;
  History: Function;
  Node: Function;
  Function: (...args: string[]) => Function;
}

declare interface Document {
  __documentElement: HTMLElement;
}

declare interface ShadowRoot {
  [methodName: string]: Function;
}

declare interface MicroAppRoot extends ShadowRoot {
  frameElement?: HTMLIFrameElement;
  documentElement?: HTMLHtmlElement;
  head?: HTMLHeadElement;
  body?: HTMLBodyElement;
  host?: MicroAppElement;
  document?: HTMLElement;
}

declare type SourceType = {
  links: Set<string>;
  scripts: Set<string>;
  html: Element | null;
};
declare interface AppInterface {
  name: string;
  entry: string;
  container: MicroAppRoot | null;
  state: string;
  source: SourceType;
  route: RegExp;
  initialUrl: string;
  initialState: unknown;
  onLoad(dom: Element): void;
  unmount(isDestory: boolean): void;
}

declare interface UrlType {
  origin: string;
  pathname: string;
  search: string;
}

declare type AppSourceMapValue = {
  code: string;
  isExternal?: boolean;
};

declare type ObservedAttr = "name" | "entry";

declare type AttrType = string | null;

//单个微应用元素类型
declare interface MicroAppElement {
  tagName?: string;
  appName?: AttrType;
  appEntry?: AttrType;
  //元素挂载到document时的钩子
  connectedCallback?(): void;

  //元素从document文档卸载时的钩子
  disconnectedCallback?(): void;

  //元素属性改变时的钩子
  attributeChangedCallback?(attr: ObservedAttr, oldVal: string, newVal: string): void;
}
declare type CreateAppParam = {
  name: string;
  entry: string;
  container: MicroAppRoot | null;
  route: RegExp;
  initialUrl: string;
  initialState: unknown;
};
// 单个应用的配置
declare type MicroAppConfig = {
  name: string; // name: app name
  entry: string; // entry: app entry
  shadowDom?: boolean; //是否使用shadowDom
  baseRoute?: string; // 路由前缀
  destroy?: boolean; // 应用卸载后强制删除缓存资源
};

//全局配置
declare interface OptionsType extends MicroAppConfig {
  tagName?: string;
  route?: RegExp;
  initialUrl?: string;
  initialState?: unknown;
  lifeCycles?: LifeCyclesType; //生命周期
  globalAssets?: GlobalAssetsType; //全局共享资源
}

declare type LifecycleEventName = keyof LifeCyclesType;
//lifecycle类型
declare type LifeCyclesType = {
  created(e: CustomEvent): void;
  beforemount(e: CustomEvent): void;
  mounted(e: CustomEvent): void;
  unmount(e: CustomEvent): void;
  error(e: CustomEvent): void;
};

import SandBox from "./sandbox";
import loadHtml from "./source";
import { AppStatus } from "./types/constance";
import { SourceType, CreateAppParam, AppInterface } from "./types/types";
export default class CreateApp implements AppInterface {
  public sandBox: SandBox;
  public loadCount: number = 0;
  public name: string;
  public entry: string;
  public container?: Element | ShadowRoot;
  public disableScopecss?: boolean;
  public disableSandbox?: boolean;
  public status: string = AppStatus.LOADED; // 组件状态，包括created/loading/mounted/unmount
  public source: SourceType = {
    links: new Map(), //link元素对应的静态资源
    scripts: new Map(), //script元素对应的静态资源
    html: null,
  };

  constructor({
    name,
    entry,
    container,
    disableSandbox,
    disableScopecss,
  }: CreateAppParam) {
    this.name = name; // 应用名称
    this.entry = entry; // 应用地址
    this.container = container; //应用容器
    this.disableSandbox = disableSandbox;
    this.disableScopecss = disableScopecss;
    this.status = AppStatus.CREATED;
    this.sandBox = new SandBox(name);
    loadHtml(this);
  }
  /**
   * 资源加载完时执行
   */
  onLoad(htmlDom: Element): void {
    this.loadCount = this.loadCount ? this.loadCount + 1 : 1;
    //第二次执行且组件未卸载时执行渲染
    if (this.loadCount === 2 && this.status !== AppStatus.UNMOUNT) {
      //记录DOM结构用于后续操作
      this.source.html = htmlDom;
      this.mount();
    }
  }
  /**
   * 资源加载完成后进行渲染
   */
  mount(): void {
    //克隆DOM节点
    const cloneHtml = this.source.html?.cloneNode(true)!; //非空断言运算符，从值域中排除null、undefined
    //创建一个fragment节点作为模板，这样不会产生冗余的元素
    const fragment = document.createDocumentFragment();
    Array.from(cloneHtml.childNodes).forEach(node => {
      fragment.appendChild(node);
    });
    //将格式化后的DOM结构插入到容器中
    this.container!.appendChild(fragment);
    //激活沙箱
    this.sandBox.active();
    //执行js
    this.source.scripts.forEach(info => {
      try {
        // (0, eval)(this.sandBox.bindScope(info.code));
        new Function(this.sandBox.bindScope(info.code))();
      } catch (error) {
        console.error("微应用执行js代码错误!", error);
      }
    });
    //标记应用为已渲染
    this.status = AppStatus.MOUNTED;
  }
  /**
   * 卸载应用
   * @param destory 是否完全销毁，删除缓存资源
   */
  unmount(destory: boolean): void {
    //更新状态
    this.status = AppStatus.UNMOUNT;
    //清空容器
    this.container = void 0;
    //关闭沙箱
    this.sandBox.inActive();
    //destory为true，则删除应用
    if (destory) {
      appInstanceMap.delete(this.name);
    }
  }
}
export const appInstanceMap: Map<string, AppInterface> = new Map();

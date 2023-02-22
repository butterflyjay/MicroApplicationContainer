import { Window } from "@MicroWebTypes";
export default class SandBox {
  public isActive: boolean = false; //沙箱激活状态
  public fakeWindow: Window = {}; //被代理的对象
  public newAddedProps: Set<string | symbol> = new Set(); //新添加的属性，在卸载时清空
  public proxyWindow: object = {};
  public releaseEffect: Function;
  constructor(appName: string) {
    //卸载钩子
    this.releaseEffect = effect(this.fakeWindow);
    this.proxyWindow = new Proxy(this.fakeWindow, {
      get: (target, prop, receiver) => {
        //防止window.window逃逸，类似的还有window.self之类的API
        //需要特别注意一些边界case
        if (prop === "window") {
          return target;
        }
        //优先从代理对象上取值
        if (Reflect.has(target, prop)) {
          return Reflect.get(target, prop, receiver);
        }
        //否则从原生window对象上取值
        const value: any = Reflect.get(window, prop, receiver);
        //如果兜底的值为函数，则需要绑定window对象，如: console、alert等
        if (typeof value === "function") {
          const valueStr = value.toString();
          //排除构造函数
          if (!/^function\s+[A-Z]/.test(valueStr) && !/^class\s+/.test(valueStr)) {
            return value.bind(window);
          }
        }
        //其他情况直接返回
        return value;
      },
      set: (target, prop, nVal, receiver) => {
        if (this.isActive) {
          Reflect.set(target, prop, nVal, receiver);
          //记录添加的变量，用于后续清空操作
          this.newAddedProps.add(prop);
        }
        return true;
      },
      deleteProperty: (target, prop) => {
        //当前key存在于代理对象上时才满足删除条件
        if (target.hasOwnProperty(prop)) {
          return Reflect.deleteProperty(target, prop);
        }
        return true;
      },
    });
  }
  /**
   * 激活沙箱
   */
  public active() {
    if (!this.isActive) {
      this.isActive = true;
    }
  }
  /**
   * 关闭沙箱
   */
  public inActive() {
    if (this.isActive) {
      this.isActive = false;
      //清空变量
      this.newAddedProps.forEach(prop => {
        Reflect.deleteProperty(this.fakeWindow, prop);
      });
      this.newAddedProps.clear();
      //卸载全局事件
      this.releaseEffect();
    }
  }
  /**
   * 修改js作用域
   * @param code 代码
   */
  public bindScope(code: string): string {
    (<Window>window).proxyWindow = this.proxyWindow;
    return `;(function(window, self){with(window){;${code}\n}}).call(window.proxyWindow, window.proxyWindow, window.proxyWindow);`;
  }
}
//记录addEventListener、removeEventListener原生方法
const rawWindowAddEventListener: Function = window.addEventListener;
const rawWindowRemoveEventListener: Function = window.removeEventListener;
/**
 * 重写全局事件的监听和解绑
 * @param fakeWindow
 */
function effect(fakeWindow: Window) {
  const eventListenerMap: Map<string, Set<Function>> = new Map();
  //重写addEventListener
  fakeWindow.addEventListener = function (
    type: string,
    handler: Function,
    useCapture?: boolean
  ) {
    const listenerList = eventListenerMap.get(type);
    //当前事件非第一次监听，则添加缓存
    if (listenerList) {
      listenerList.add(handler);
    } else {
      //当前第一次监听，初始化数据
      eventListenerMap.set(type, new Set([handler]));
    }
    //执行原生监听函数
    return rawWindowAddEventListener.call(window, type, handler, useCapture);
  };

  //重写removeEventListener
  fakeWindow.removeEventListener = function (
    type: string,
    handler: Function,
    useCapture?: boolean
  ) {
    const listenerList = eventListenerMap.get(type);
    if (listenerList?.size && listenerList.has(handler)) {
      listenerList.delete(handler);
    }
    //执行原生解绑函数
    return rawWindowRemoveEventListener.call(window, type, handler, useCapture);
  };
  // 清空残余事件
  return () => {
    console.log("需要卸载的全局事件", eventListenerMap);
    //清空window绑定事件
    if (eventListenerMap.size) {
      // 将残余的没有解绑的函数依次解绑
      eventListenerMap.forEach((listenerList, type) => {
        if (listenerList.size) {
          for (const handler of listenerList) {
            rawWindowRemoveEventListener.call(window, type, handler);
          }
        }
      });
      eventListenerMap.clear();
    }
  };
}

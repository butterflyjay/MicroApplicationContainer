class SandBox {
    constructor(appName) {
        this.isActive = false; //沙箱激活状态
        this.fakeWindow = Object.create(null); //被代理的对象
        this.newAddedProps = new Set(); //新添加的属性，在卸载时清空
        this.appName = appName;
        //卸载钩子
        this.releaseEffect = effect(this.fakeWindow);
        this.proxyWindow = new Proxy(this.fakeWindow, {
            get: (target, prop, receiver) => {
                //防止window.window逃逸，类似的还有window.self之类的API
                //需要特别注意一些边界case
                if (prop in ["0", "1", "self", "window"]) {
                    return receiver;
                }
                //优先从代理对象上取值
                if (Object.prototype.hasOwnProperty.call(target, prop)) {
                    return Reflect.get(target, prop);
                }
                //否则从原生window对象上取值
                const value = Reflect.get(window, prop);
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
            set: (target, prop, newVal) => {
                if (this.isActive) {
                    Reflect.set(target, prop, newVal);
                    //记录添加的变量，用于后续清空操作
                    this.newAddedProps.add(prop);
                }
                return true;
            },
            deleteProperty: (target, prop) => {
                //当前prop存在于代理对象上时才满足删除条件
                if (Object.prototype.hasOwnProperty.call(target, prop)) {
                    return Reflect.deleteProperty(target, prop);
                }
                return true;
            },
        });
    }
    /**
     * 激活沙箱
     */
    active() {
        if (this.isActive) {
            return console.warn(`[microApp ${this.appName}]: The sandbox is Running, please do not open it repeatedly!`);
        }
        this.isActive = false;
    }
    /**
     * 关闭沙箱
     */
    inActive() {
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
    bindScope(code) {
        window.proxyWindow = this.proxyWindow;
        return `;(function(window, self){with(window){;${code}\n}}).call(window.proxyWindow, window.proxyWindow, window.proxyWindow);`;
    }
}
//记录addEventListener、removeEventListener原生方法
const rawWindowAddEventListener = window.addEventListener;
const rawWindowRemoveEventListener = window.removeEventListener;
/**
 * 重写全局事件的监听和解绑
 * @param fakeWindow
 */
function effect(fakeWindow) {
    const eventListenerMap = new Map();
    //重写addEventListener
    fakeWindow.addEventListener = function (type, handler, useCapture) {
        const listenerList = eventListenerMap.get(type);
        //当前事件非第一次监听，则添加缓存
        if (listenerList) {
            listenerList.add(handler);
        }
        else {
            //当前第一次监听，初始化数据
            eventListenerMap.set(type, new Set([handler]));
        }
        //执行原生监听函数
        return rawWindowAddEventListener.call(window, type, handler, useCapture);
    };
    //重写removeEventListener
    fakeWindow.removeEventListener = function (type, handler, useCapture) {
        const listenerList = eventListenerMap.get(type);
        if ((listenerList === null || listenerList === void 0 ? void 0 : listenerList.size) && listenerList.has(handler)) {
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

//模板style
let templateStyle;
/**
 * 进行样式隔离
 * @param { HTMLStyleElement } styleElement style元素
 * @param appName 应用名称
 */
function scopedCss(styleElement, appName) {
    var _a, _b;
    //前缀
    const prefix = `micro-web[name=${appName}]`;
    //初始化时创建模板标签
    if (!templateStyle) {
        templateStyle = document.createElement("style");
        document.body.appendChild(templateStyle);
        // 设置样式表无效，防止对应用造成影响
        templateStyle.sheet.disabled = true;
    }
    if (styleElement.textContent) {
        //将元素的内容赋值给模板元素
        templateStyle.textContent = styleElement.textContent;
        //格式化规则，并将格式化后的规则赋值给style元素   (??空值合并运算符)
        styleElement.textContent = scopedRule(Array.from((_b = (_a = templateStyle.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) !== null && _b !== void 0 ? _b : []), prefix);
        //清空模板style内容
        templateStyle.textContent = "";
    }
    else {
        //监听动态添加内容的style元素
        const observer = new MutationObserver(function () {
            var _a, _b;
            //断开监听
            observer.disconnect();
            //格式化规则，并将格式化后的规则赋值给style元素
            styleElement.textContent = scopedRule(Array.from((_b = (_a = styleElement.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) !== null && _b !== void 0 ? _b : []), prefix);
        });
        //监听style元素的内容是否变化
        observer.observe(styleElement, { childList: true });
    }
}
/**
 * 依次处理每个cssRule
 * @param rules cssRule
 * @param prefix prefix 前缀
 * @returns
 */
function scopedRule(rules, prefix) {
    let result = "";
    //遍历rules，处理每一条规则
    for (const rule of rules) {
        //rule.type已不被推荐, 推荐使用rule.constructor.name
        switch (rule.type) {
            case 1:
                result += scopedStyleRule(rule, prefix);
                break;
            case 4:
                result += scopedPackRule(rule, prefix, "media");
                break;
            case 12:
                result += scopedPackRule(rule, prefix, "supports");
                break;
            default:
                result += rule.cssText;
                break;
        }
    }
    return result;
}
/**
 * 处理media 和 supports
 * @param { CSSMediaRule } rule 媒体规则
 * @param prefix 前缀
 * @param packName
 * @returns
 */
function scopedPackRule(rule, prefix, packName) {
    //递归执行scopedRule，处理media 和 supports内部规则
    const result = scopedRule(Array.from(rule.cssRules), prefix);
    return `@${packName} ${rule.conditionText} {${result}}`;
}
/**
 * 修改CSS规则，添加前缀
 * @param {CSSRule} rule CSS规则
 * @param {string} prefix 前缀
 */
function scopedStyleRule(rule, prefix) {
    // 获取CSS规则对象的选择和内容
    const { selectorText, cssText } = rule;
    // 处理顶层选择器，如 body，html 都转换为 micro-app[name=xxx]
    if (/^((html[\s>~,]+body)|(html|body|:root))$/.test(selectorText)) {
        return cssText.replace(/^((html[\s>~,]+body)|(html|body|:root))/, prefix);
    }
    else if (selectorText === "*") {
        // 选择器 * 替换为 micro-app[name=xxx] *
        return cssText.replace("*", `${prefix} *`);
    }
    const builtInRootSelectorRE = /(^|\s+)((html[\s>~]+body)|(html|body|:root))(?=[\s>~]+|$)/;
    // 匹配查询选择器
    return cssText.replace(/^[\s\S]+{/, selectors => {
        //[^,]匹配除","以外所有字符，(^|,))匹配开头或者","
        return selectors.replace(/(^|,)([^,]+)/g, (all, $1, $2) => {
            // 如果含有顶层选择器，需要单独处理
            if (builtInRootSelectorRE.test($2)) {
                // body[name=xx]|body.xx|body#xx 等都不需要转换
                return all.replace(builtInRootSelectorRE, prefix);
            }
            // 在选择器前加上前缀
            return `${$1} ${prefix} ${$2.replace(/^\s*/, "")}`;
        });
    });
}

/**
 * 是否为浏览器环境
 */
const isBrowser = typeof window !== "undefined";
/**
 * 获取静态资源
 * @param {string} entry 静态资源地址
 * @returns
 */
function fetchSource(entry) {
    return fetch(entry).then(res => {
        return res.text();
    });
}
/**
 * 判断目标是否为字符串
 * @param target 目标
 * @returns {boolean}
 */
function isString(target) {
    return typeof target === "string";
}
/**
 * 给地址添加协议
 * @param entry 地址
 * @returns 添加协议的地址
 */
function addProtocol(entry) {
    return entry.startsWith("//") ? `${globalThis.location.protocol}${entry}` : entry;
}
/**
 * 解析，构造，规范化和编码
 * @param entry 地址
 * @returns URL
 */
function createUrl(entry) {
    return new URL(entry);
}
function formatEntry(entry, el) {
    if (!isString(entry) || !entry)
        return "";
    try {
        //origin: 包含协议名、域名和端口号 pathname：以"/"起头紧跟着URL文件路径 search：指示URL的参数字符串
        const { origin, pathname, search } = createUrl(addProtocol(entry));
        console.log(origin, pathname, search);
        el.url = { origin, pathname, search };
        return `${origin}${pathname}${search}`;
    }
    catch (e) {
        console.error(e, el.appName);
        return "";
    }
}

/**
 * 访问微应用资源
 * @param app 微应用实例对象
 */
function loadHtml(app) {
    fetchSource(app.entry)
        .then(html => {
        html = html
            .replace(/<head[^>]*>[\s\S]*?<\/head>/i, match => {
            // 将head标签替换为micro-app-head，因为web页面只允许有一个head标签
            return match
                .replace(/<head/i, "<microweb-head")
                .replace(/<\/head>/i, "</microweb-head>");
        })
            .replace(/<body[^>]*>[\s\S]*?<\/body>/i, match => {
            // 将body标签替换为micro-app-body，防止与基座应用的body标签重复导致的问题。
            return match
                .replace(/<body/i, "<microweb-body")
                .replace(/<\/body>/i, "</microweb-body>");
        });
        // 将html字符串转化为DOM结构
        const htmlDom = document.createElement("div");
        htmlDom.innerHTML = html;
        // 进一步提取和处理js、css等静态资源
        extractSourceDom(htmlDom, app);
        //获取micro-app-head元素
        const microWebHead = htmlDom.querySelector("microweb-head");
        // 如果有远程css资源，则通过fetch请求
        if (app.source.links.size) {
            fetchLinksFromHtml(app, microWebHead, htmlDom);
        }
        else {
            app.onLoad(htmlDom);
        }
        //如果有远程js资源，则通过fetch请求
        if (app.source.scripts.size) {
            fetchScriptsFromHtml(app, htmlDom);
        }
        else {
            app.onLoad(htmlDom);
        }
    })
        .catch(e => {
        console.error("加载html出错", e);
    });
}
/**
 * 递归处理每一个子元素
 * @param { Element } parent 父元素
 * @param { MicroApp } app 应用实例
 */
function extractSourceDom(parent, app) {
    const children = Array.from(parent.children); //Element.children是类数组对象，没有数组特有的方法
    //递归每一个子元素
    children.length &&
        children.forEach(child => {
            extractSourceDom(child, app);
        });
    for (const dom of children) {
        if (dom instanceof HTMLLinkElement) {
            //提取css地址
            const href = dom.getAttribute("href");
            if (dom.getAttribute("rel") === "stylesheet" && href) {
                //记入source缓存中
                app.source.links.set(href, {
                    code: "", //代码内容
                });
            }
            //删除原有元素
            parent.removeChild(dom);
        }
        else if (dom instanceof HTMLScriptElement) {
            const src = dom.getAttribute("src");
            if (src) {
                //远程script
                app.source.scripts.set(src, {
                    code: "",
                    isExternal: true, //是否远程script
                });
            }
            else if (dom.textContent) {
                //内联script
                const nonceStr = Math.random().toString(36).slice(2, 16); //生成包含(0-9a-z)随机字符串
                app.source.scripts.set(nonceStr, {
                    code: dom.textContent,
                    isExternal: false, //是否远程script
                });
            }
            parent.removeChild(dom);
        }
        else if (dom instanceof HTMLStyleElement) {
            //进行样式隔离
            scopedCss(dom, app.name);
        }
    }
}
/**
 * 获取link远程资源
 * @param app 微应用实例
 * @param microWebHead microweb-head
 * @param htmlDom 微应用
 */
function fetchLinksFromHtml(app, microWebHead, htmlDom) {
    const linkEntries = Array.from(app.source.links.entries());
    //通过fetch请求所有css资源
    const fetchLinkPromise = [];
    for (const [url] of linkEntries) {
        fetchLinkPromise.push(fetchSource(app.url.origin + url));
    }
    Promise.all(fetchLinkPromise)
        .then(res => {
        for (let i = 0, len = res.length; i < len; i++) {
            const code = res[i];
            //拿到css资源后放入style元素并插入到microweb-head中
            const linkSheetStyle = document.createElement("style");
            linkSheetStyle.textContent = code;
            scopedCss(linkSheetStyle, app.name);
            microWebHead === null || microWebHead === void 0 ? void 0 : microWebHead.appendChild(linkSheetStyle);
            //将代码放入缓存，再次渲染时可以从缓存中获取
            linkEntries[i][1].code = code;
        }
        //处理完成后执行onLoad方法
        app.onLoad(htmlDom);
    })
        .catch(e => {
        console.error("加载css出错", e);
    });
}
/**
 * 获取js远程资源
 * @param app 微应用实例
 * @param htmlDom 微应用dom结构
 */
function fetchScriptsFromHtml(app, htmlDom) {
    const scriptEntries = Array.from(app.source.scripts.entries());
    //通过fetch请求所有js资源
    const fetchScriptPromise = [];
    for (const [url, info] of scriptEntries) {
        //如果是内联script，则不需要请求资源
        fetchScriptPromise.push(info.isExternal ? fetchSource(app.url.origin + url) : Promise.resolve(info.code));
    }
    Promise.all(fetchScriptPromise)
        .then(res => {
        for (let i = 0; i < res.length; i++) {
            const code = res[i];
            //将代码放入缓存，再次渲染时可以从缓存中获取
            scriptEntries[i][1].code = code;
        }
        app.onLoad(htmlDom);
    })
        .catch(e => {
        console.error("加载js出错", e);
    });
}

//TypeScript声明文件(.d.ts)的使用
//使用场景
//1.在ts文件中对引用的外部库做类型判断；
//2.制作npm包时，书写自己的声明文件，需要在package.json的typing/types字段注册声明文件的路径；
//3.不使用ts时，也可以添加声明文件与（自己的）的模块存放在同一目录下，简单做一下数据结构体，对IDE参数声明也有用哦；
var AppStatus;
(function (AppStatus) {
    AppStatus["CREATED"] = "CREATED";
    AppStatus["MOUNTED"] = "MOUNTED";
    AppStatus["UNMOUNT"] = "UNMOUNT";
    AppStatus["LOADING"] = "LOADING";
})(AppStatus || (AppStatus = {}));

class CreateApp {
    constructor({ name, entry, container, url }) {
        this.loadCount = 0;
        this.status = AppStatus.CREATED; // 组件状态，包括created/loading/mounted/unmount
        this.source = {
            links: new Map(),
            scripts: new Map(),
            html: null,
        };
        this.name = name; // 应用名称
        this.entry = entry; // 应用地址
        this.container = container; //应用容器
        this.status = AppStatus.LOADING;
        this.url = url;
        loadHtml(this);
        this.sandBox = new SandBox(name);
    }
    /**
     * 资源加载完时执行
     */
    onLoad(htmlDom) {
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
    mount() {
        var _a;
        //克隆DOM节点
        const cloneHtml = (_a = this.source.html) === null || _a === void 0 ? void 0 : _a.cloneNode(true); //非空断言运算符，从值域中排除null、undefined
        //创建一个fragment节点作为模板，这样不会产生冗余的元素
        const fragment = document.createDocumentFragment();
        Array.from(cloneHtml.childNodes).forEach(node => {
            fragment.appendChild(node);
        });
        //将格式化后的DOM结构插入到容器中
        this.container.appendChild(fragment);
        //激活沙箱
        this.sandBox.active();
        //执行js
        this.source.scripts.forEach(info => {
            try {
                // (0, eval)(this.sandBox.bindScope(info.code));
                (new Function(this.sandBox.bindScope(info.code)))();
            }
            catch (error) {
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
    unmount(destory) {
        //更新状态
        this.status = AppStatus.UNMOUNT;
        //清空容器
        this.container = null;
        //关闭沙箱
        this.sandBox.inActive();
        //destory为true，则删除应用
        if (destory) {
            appInstanceMap.delete(this.name);
        }
    }
}
const appInstanceMap = new Map();

//自定义微元素组件
class MicroElement extends HTMLElement {
    static get observedAttributes() {
        return ["name", "entry"];
    }
    constructor() {
        super();
        this.url = { origin: "", pathname: "", search: "" };
        this.appName = "";
        this.appEntry = "";
    }
    /**
     * 自定义元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
     */
    connectedCallback() {
        console.log("micro-app is connected");
        //创建微应用实例
        const app = new CreateApp({
            name: this.appName,
            entry: this.appEntry,
            container: this,
            url: this.url,
        });
        //记入缓存，用于后续功能
        appInstanceMap.set(this.appName, app);
    }
    /**
     * 自定义元素从DOM中删除时执行，此时进行一些卸载操作
     */
    disconnectedCallback() {
        console.log("micro-app has disconnected");
        //获取应用实例
        const app = appInstanceMap.get(this.appName);
        //如果有属性destory，则完全卸载应用包括缓存的文件
        app.unmount(this.hasAttribute("destory"));
    }
    /**
     * 元素属性发生变化时执行，可以获取name，entry等属性的值
     * @param attr
     * @param oldVal
     * @param newVal
     */
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log(`attribute ${attr}: ${newVal}`);
        if (attr === "name" && !this.appName && newVal) {
            this.appName = newVal;
        }
        else if (attr === "entry" && !this.appEntry && newVal) {
            this.appEntry = newVal;
            formatEntry(newVal, this);
        }
    }
}
function defineElement() {
    //如果已经定义过，则忽略
    if (!window.customElements.get("micro-web")) {
        /**
         * 注册元素
         * 注册后，就可以像普通元素一样使用micro-web，当micro-web元素被插入或删除DOM时即可触发相应的生命周期函数。
         */
        window.customElements.define("micro-web", MicroElement);
    }
}

const MicroWeb = {
    start() {
        if (!isBrowser) {
            console.error("The environment is not support MicroWeb!");
            return;
        }
        defineElement();
    },
};

export { MicroWeb as default };
//# sourceMappingURL=microweb.js.map

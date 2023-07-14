class Logger {
    isShowLogger;
    constructor({ isShowLogger }) {
        this.isShowLogger = isShowLogger;
    }
    log(msg, appName) {
        if (this.isShowLogger) {
            console.log(`[Micro Frontend${appName ? "--" + appName : ""}]: `, msg);
        }
    }
    warn(msg, appName) {
        if (this.isShowLogger) {
            console.warn(`[Micro Frontend${appName ? "--" + appName : ""}]: `, msg);
        }
    }
    error(msg, appName) {
        if (this.isShowLogger) {
            console.error(`[Micro Frontend${appName ? "--" + appName : ""}]: `, msg);
        }
    }
}
var logger = new Logger({ isShowLogger: true });

const EL_LOCAL_NAME = "m-app";
const EL_TAG_NAME = EL_LOCAL_NAME.toUpperCase();
const PROTOTYPE = "prototype";
const SCRIPT_TYPES = ["", "text/javascript", "module"];
//app 状态
var AppStatus;
(function (AppStatus) {
    AppStatus["CREATED"] = "created";
    AppStatus["LOADING"] = "loading";
    AppStatus["LOADED"] = "loaded";
    AppStatus["LOAD_FAILED"] = "load_failed";
    AppStatus["MOUNTING"] = "mounting";
    AppStatus["MOUNTED"] = "mounted";
    AppStatus["UNMOUNT"] = "UNMOUNT";
})(AppStatus || (AppStatus = {}));
//lifecycle 常量
var LifeCycles;
(function (LifeCycles) {
    LifeCycles["CREATED"] = "created";
    LifeCycles["BEFOREMOUNT"] = "beforemount";
    LifeCycles["MOUNTED"] = "mounted";
    LifeCycles["UNMOUNT"] = "unmount";
    LifeCycles["ERROR"] = "error";
})(LifeCycles || (LifeCycles = {}));

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
function isObject(target) {
    return typeof target === "object";
}
// export function formatEntry(entry: string, el: MicroAppElement): string {
//   if (!isString(entry) || !entry) return "";
//   try {
//     //origin: 包含协议名、域名和端口号 pathname：以"/"起头紧跟着URL文件路径 search：指示URL的参数字符串
//     const { origin, pathname, search } = createUrl(addProtocol(entry));
//     console.log(origin, pathname, search);
//     el.appEntry = { origin, pathname, search };
//     return `${origin}${pathname}${search}`;
//   } catch (e) {
//     console.error(e, el.appName);
//     return "";
//   }
// }
const { defineProperty, defineProperties, entries, assign, keys, getOwnPropertyDescriptor, } = Object;
const { 
//EventTarget
addEventListener, 
//Node
appendChild, insertBefore, replaceChild, 
//ParentNode,
append, prepend, replaceChildren, 
//ChildNode,
after, before, replaceWith, } = HTMLElement[PROTOTYPE];
function addEventListenerTo(target, type, listener, captureOrOptions) {
    addEventListener.call(target, type, listener, captureOrOptions);
}
function appendChildTo(node, newChild) {
    return appendChild.call(node, newChild);
}
function appendTo(node, ...args) {
    append.apply(node, args);
}
function isPath(url) {
    return !(!url || /^((((ht|f)tps?)|file):)?\/\//.test(url) || /^(data|blob):/.test(url));
}
function toCamelCase(attrName) {
    const list = attrName.split("-");
    let newName = list[0];
    for (let i = 1, { length } = list; i < length; ++i) {
        const [firstLetter, ...rest] = list[i];
        newName += firstLetter.toUpperCase() + rest.join("");
    }
    return newName;
}
const domParser = new DOMParser();

const globalEnv = {};
function initGlobalEnv() {
    if (isBrowser) {
        const rawWindow = new Function("return window")();
        const rawDocument = new Function("return document")();
        const rawRootDocument = new Function("return Document")();
        const rawRootElement = rawWindow.Element;
        const rawRootNode = rawWindow.Node;
        const rawRootEventTarget = rawWindow.EventTarget;
        assign(globalEnv, {
            //common global vars
            rawWindow,
            rawDocument,
            rawRootDocument,
            rawRootElement,
            rawRootNode,
            rawRootEventTarget,
        });
    }
}

/**
 * hijack event of attribute
 * @param nodes
 * @param root
 * @param win
 * @returns
 */
function hijackEventAttr(nodes, root, win) {
    for (const node of nodes) {
        //nodeType 1：元素节点 2：属性节点 3：文本节点 8：注释节点 9：文档节点
        if (typeof node === "string" || node.nodeType !== 1) {
            continue;
        }
        if (!win) {
            win = root?.frameElement?.contentWindow;
            //the node is not under <m-app>
            if (!win)
                return;
        }
        const el = node;
        for (let i = el.attributes.length - 1; i >= 0; --i) {
            const { name, value } = el.attributes[i];
            if (name.startsWith("on")) {
                const listener = win.Function("event", value);
                el.addEventListener(name.substring(2), listener);
                el.setAttribute(name, "");
            }
        }
        if (el.children.length) {
            hijackEventAttr(el.children, root, win);
        }
    }
}

const alternativeMethods = {
    appendChild(aChild) {
        const root = this.getRootNode(); //shadowRoot
        const nodes = [aChild];
        hijackEventAttr(nodes, root);
        hijackScriptElements(nodes, appendChild, this, nodes, root);
        return aChild;
    },
    insertBefore(newNode, referenceNode) {
        const root = this.getRootNode();
        hijackEventAttr([newNode], root);
        hijackScriptElements([newNode], insertBefore, this, [newNode, referenceNode], root);
        return newNode;
    },
    replaceChild(newChild, oldChild) {
        const root = this.getRootNode();
        hijackEventAttr([newChild], root);
        hijackScriptElements([newChild], replaceChild, this, [newChild, oldChild], root);
        return oldChild;
    },
    append(...nodes) {
        const root = this.getRootNode();
        hijackEventAttr(nodes, root);
        hijackScriptElements(nodes, append, this, nodes, root);
    },
    prepend(...nodes) {
        const root = this.getRootNode();
        hijackEventAttr(nodes, root);
        hijackScriptElements(nodes, prepend, this, nodes, root);
    },
    after(...nodes) {
        const root = this.getRootNode();
        hijackEventAttr(nodes, root);
        hijackScriptElements(nodes, after, this, nodes, root);
    },
    before(...nodes) {
        const root = this.getRootNode();
        hijackEventAttr(nodes, root);
        hijackScriptElements(nodes, before, this, nodes, root);
    },
    replaceWith(...nodes) {
        const root = this.getRootNode();
        hijackEventAttr(nodes, root);
        hijackScriptElements(nodes, replaceWith, this, nodes, root);
    },
    replaceChildren(...nodes) {
        const root = this.getRootNode();
        hijackEventAttr(nodes, root);
        hijackScriptElements(nodes, replaceChildren, this, nodes, root);
    },
};
const ELEMENT_OR_DOCUMENT_FRAGMENT = [1, 11];
function hijackScriptElements(nodes, method, ctx, args, root) {
    const newScripts = [];
    const isMicroApp = root?.host?.tagName === EL_TAG_NAME; //root.host ===> <m-app></m-app>
    if (isMicroApp) {
        for (const node of nodes) {
            if (!isObject(node))
                continue;
            if (node.tagName === "SCRIPT") {
                const el = node;
                modifyAssetPath(el, "src", root);
                if (SCRIPT_TYPES.includes(el.type)) {
                    newScripts.push(el.cloneNode(true));
                    el.type = "m;" + el.type;
                }
            }
            if (node.tagName === "LINK") {
                modifyAssetPath(node, "href", root);
            }
            else if (ELEMENT_OR_DOCUMENT_FRAGMENT.includes(node.nodeType) &&
                node.children.length) {
                const list = node.querySelectorAll("script");
                for (let i = 0, { length } = list; i < length; ++i) {
                    const el = list[i];
                    if (SCRIPT_TYPES.includes(el.type)) {
                        newScripts.push(node.cloneNode(true));
                        el.type = "m;" + el.type;
                    }
                }
            }
        }
    }
    method.apply(ctx, args);
    if (isMicroApp && newScripts.length) {
        appendTo(root?.frameElement?.contentDocument?.__documentElement, ...newScripts);
    }
}
function modifyAssetPath(el, attr, root) {
    const url = el.getAttribute(attr);
    if (!isPath(url)) {
        return;
    }
    const publicPath = root?.host?.appEntry;
    if (publicPath) {
        el.setAttribute(attr, new URL(url, publicPath).href);
    }
}

function getObjectMethods(obj) {
    const methods = [];
    for (const key of keys(obj)) {
        const desc = getOwnPropertyDescriptor(obj, key);
        if (typeof desc?.value === "function") {
            methods.push(key);
        }
    }
    return methods;
}
//["addEventListener", "dispatchEvent", "removeEventListener"]
const methodsOfEventTargetProto = getObjectMethods(EventTarget[PROTOTYPE]);
//["appendChild", "cloneNode","contains","compareDocumentPostion",...]
const methodsOfNodeProto = getObjectMethods(Node[PROTOTYPE]);
//["append", "getElementById", "prepend", "querySelector","querySelectorAll", "replaceChildren"]
const methodsOfParentNodeProto = getObjectMethods(DocumentFragment[PROTOTYPE]);
const methodsOfDocument = methodsOfParentNodeProto.concat(methodsOfNodeProto, methodsOfEventTargetProto);
const methodsOfDocumentOrShadowRoot = [
    "caretPositionFromPoint",
    "elementFromPoint",
    "elementsFromPoint",
    "getAnimations",
    "getSelection",
    "nodeFromPoint",
    "nodesFromPoint",
];
const propsOfDocumentOrShadowRoot = [
    "activeElement",
    "fullscreenElement",
    "pictureInPictureElement",
    "pointerLockElement",
    "styleSheets",
];
function hijackNodeMethodsOfIframe(contentWindow) {
    hijackDocument(contentWindow);
    hijackElement(contentWindow);
    hijackWindow(contentWindow);
}
const commonDesc = {
    configurable: true,
    enumerable: false,
    writable: true,
};
function hijackDocument({ document, mAppRoot }) {
    for (const key of methodsOfDocument) {
        defineProperty(document, key, {
            ...commonDesc,
            value: (...args) => mAppRoot[key](...args),
        });
    }
    for (const key of methodsOfDocumentOrShadowRoot) {
        if (key in document && key in mAppRoot) {
            defineProperty(document, key, {
                ...commonDesc,
                value: (...args) => mAppRoot[key](...args),
            });
        }
    }
    for (const key of propsOfDocumentOrShadowRoot) {
        if (key in document && key in mAppRoot) {
            defineProperty(document, key, {
                enumerable: true,
                get: () => mAppRoot[key],
                set: val => (mAppRoot[key] = val),
            });
        }
    }
    defineProperties(document, {
        getElementById: {
            ...commonDesc,
            value: (id) => mAppRoot?.querySelector(`#${id}`),
        },
        getElementsByClassName: {
            ...commonDesc,
            value(names) {
                const selector = names
                    .split(/\s+/)
                    .map(name => `.${name}`)
                    .join("");
                return mAppRoot?.querySelectorAll(selector);
            },
        },
        getElementsByName: {
            ...commonDesc,
            value: (name) => mAppRoot?.querySelectorAll(`[name=${name}]`),
        },
        getElementsByTagName: {
            ...commonDesc,
            value: (name) => mAppRoot?.querySelectorAll(name),
        },
        documentElement: {
            enumerable: true,
            get: () => mAppRoot?.documentElement, //externalHtml
        },
        __documentElment: {
            value: document.documentElement, //iframe.contentDocument.documentElement
        },
        head: {
            enumerable: true,
            get: () => mAppRoot?.head,
        },
        body: {
            enumerable: true,
            get: () => mAppRoot?.body,
        },
        exitFullscreen: {
            value: () => document.exitFullscreen(),
        },
        addEventListener: {
            value: (...args) => mAppRoot?.document?.addEventListener(...args), //mAppRoot.document ===> m-document
        },
        removeEventListener: {
            value: (...args) => mAppRoot?.document?.removeEventListener(...args),
        },
    });
}
function hijackElement({ HTMLElement }) {
    for (const [key, method] of entries(alternativeMethods)) {
        HTMLElement[PROTOTYPE][key] = method;
    }
    const desc = Object.getOwnPropertyDescriptor(Node[PROTOTYPE], "ownerDocument");
    desc.enumerable = false;
    defineProperties(HTMLElement[PROTOTYPE], {
        _rawOwnerDoc: desc,
        ownerDocument: {
            get() {
                const root = this.getRootNode();
                const isMicroApp = root?.host?.tagName === EL_TAG_NAME;
                return isMicroApp ? root?.frameElement?.contentDocument : this._rawOwnerDoc;
            },
        },
    });
}
const eventPropsOfWindow = Object.keys(window).filter(key => key.startsWith("on"));
const eventPropsOfHTMLElement = Object.keys(HTMLElement.prototype).filter(key => key.startsWith("on"));
const uniqueEventsOfWindow = eventPropsOfWindow.filter(key => !eventPropsOfHTMLElement.includes(key));
function hijackWindow(contentWindow) {
    contentWindow.getComputedStyle = (el, ...args) => {
        return el?.host?.tagName === EL_TAG_NAME
            ? el?.host?.style
            : getComputedStyle(el, ...args);
    };
    contentWindow.requestAnimationFrame = (callback) => requestAnimationFrame(callback);
    contentWindow.cancelAnimationFrame = (handle) => cancelAnimationFrame(handle);
    contentWindow.getSelection = () => getSelection();
    const { mAppRoot, addEventListener, removeEventListener, dispatchEvent } = contentWindow;
    contentWindow.addEventListener = (type, ...args) => {
        if (uniqueEventsOfWindow.includes(type)) {
            addEventListener(type, ...args);
        }
        else {
            mAppRoot?.addEventListener(type, ...args);
        }
    };
    contentWindow.removeEventListener = (type, ...args) => {
        if (uniqueEventsOfWindow.includes(type)) {
            removeEventListener(type, ...args);
        }
        else {
            mAppRoot?.removeEventListener(type, ...args);
        }
    };
    contentWindow.dispatchEvent = (event) => {
        return uniqueEventsOfWindow.includes(event?.type)
            ? dispatchEvent(event)
            : mAppRoot?.dispatchEvent(event);
    };
}

function syncUrlToRawWindow(contentWindow, app) {
    const { history: contentHistory } = contentWindow;
    const { pushState, replaceState } = contentWindow.History[PROTOTYPE];
    contentHistory.pushState = (...args) => {
        pushState.apply(contentHistory, args);
        updateRawWindowUrl(contentWindow, app);
    };
    contentHistory.replaceState = (...args) => {
        replaceState.apply(contentHistory, args);
        updateRawWindowUrl(contentWindow, app);
    };
    addEventListenerTo(contentWindow, "hashchange", () => {
        updateRawWindowUrl(contentWindow, app);
    });
}
function updateRawWindowUrl(contentWindow, app) {
    const { route } = app;
    const { location: contentLocation, history: contentHistory } = contentWindow;
    const { pathname, href } = contentLocation;
    if (route.test(pathname)) {
        history.replaceState(contentHistory.state, "", href);
    }
    else {
        logger.warn(`mismatched pathname "${pathname}", expect ${route.toString()}`);
    }
}

/**
 * initShadowDom
 * @param app
 * @param htmlStr
 */
function initShadowDom(app, htmlStr) {
    const { contentWindow, contentDocument } = app.container?.frameElement;
    const htmlTemplate = domParser.parseFromString(htmlStr, "text/html");
    //html element of m-app
    const externalHtmlEl = htmlTemplate.documentElement;
    app.source.html = externalHtmlEl;
    defineProperties(app.container, {
        documentElement: {
            configurable: true,
            value: externalHtmlEl,
        },
        head: {
            configurable: true,
            value: htmlTemplate.head,
        },
        body: {
            configurable: true,
            value: htmlTemplate.body,
        },
    });
    //html element of iframe
    const internalHtmlEl = contentDocument?.documentElement;
    const baseEl = externalHtmlEl.querySelector("base");
    if (baseEl) {
        appendChildTo(internalHtmlEl, baseEl);
    }
    const scriptsList = new Array(3)
        .fill(Array())
        .map(() => {
        return new Array();
    });
    const stylesList = new Array();
    // scriptsList[0]: narmolScripts, scriptsList[1]: deferScripts, scriptsList[2]: asyncScripts
    extractDealSource(externalHtmlEl, contentDocument, scriptsList, stylesList, app);
    if (scriptsList[0].length) {
        let lastScriptEl;
        if (scriptsList[1].length) {
            lastScriptEl = scriptsList[1][scriptsList[1].length - 1];
        }
        else if (scriptsList[2].length) {
            lastScriptEl = scriptsList[2][scriptsList[2].length - 1];
        }
        else {
            lastScriptEl = scriptsList[0][scriptsList[0].length - 1];
        }
        const listener = () => {
            contentWindow?.dispatchEvent(new Event("MicroAppReady"));
        };
        addEventListenerTo(lastScriptEl, "load", listener);
        addEventListenerTo(lastScriptEl, "error", listener);
    }
    defineProperty(contentWindow, "mAppRoot", { value: app.container });
    const fragment = document.createDocumentFragment();
    Array.from(externalHtmlEl.childNodes).forEach(node => {
        fragment.appendChild(node);
    });
    contentWindow?.history.replaceState(app.initialState, "", app.initialUrl + app.initialUrl.endsWith("/") ? "" : "/");
    syncUrlToRawWindow(contentWindow, app);
    hijackEventAttr([externalHtmlEl], app.container, contentWindow);
    hijackNodeMethodsOfIframe(contentWindow);
    requestAnimationFrame(() => {
        appendChildTo(app.container?.document, fragment);
        appendTo(internalHtmlEl, ...scriptsList[0]);
        appendTo(app.container?.document?.querySelector("head"), ...stylesList);
    });
}
async function extractDealSource(parent, contentDocument, scriptsList, stylesList, app) {
    const children = Array.from(parent.children);
    children.length &&
        children.forEach(child => {
            extractDealSource(child, contentDocument, scriptsList, stylesList, app);
        });
    for (const dom of children) {
        if (dom instanceof HTMLScriptElement) {
            const { type, attributes } = dom;
            if (SCRIPT_TYPES.includes(type)) {
                const newDom = contentDocument.createElement("script");
                newDom.text = dom.text;
                //fix: the default value of "async" is true
                newDom.async = dom.async;
                for (let i = 0, { length } = attributes; i < length; ++i) {
                    if (attributes[i].name === "src" && isPath(attributes[i].value)) {
                        attributes[i].value = new URL(attributes[i].value, app.entry).href;
                    }
                    newDom.setAttribute(attributes[i].name, attributes[i].value);
                }
                dom.type = "m;" + dom.type;
                scriptsList[0].push(newDom);
                if (newDom.defer) {
                    scriptsList[1].push(newDom);
                }
                else if (newDom.async) {
                    scriptsList[2].push(newDom);
                }
            }
        }
        else if (dom instanceof HTMLStyleElement) {
            const newDom = contentDocument.createElement("style");
            newDom.textContent = dom.textContent;
            stylesList.push(newDom);
        }
        else if (dom instanceof HTMLMetaElement || dom instanceof HTMLTitleElement) {
            parent.removeChild(dom);
        }
        else if (dom instanceof HTMLLinkElement &&
            dom.getAttribute("rel") === "stylesheet" &&
            dom.getAttribute("href")) {
            let url = dom.getAttribute("href");
            if (isPath(url)) {
                url = new URL(url, app.entry).href;
            }
            const styleText = await fetchSource(url);
            const newDom = contentDocument.createElement("style");
            newDom.textContent = styleText;
            stylesList.push(newDom);
        }
    }
}

class InitApp {
    name;
    entry;
    container;
    route;
    initialUrl;
    initialState;
    state = AppStatus.CREATED; // 组件状态，包括created/loading/mounted/unmount
    source = {
        links: new Set(),
        scripts: new Set(),
        html: null,
    };
    constructor({ name, entry, container, route, initialUrl, initialState, }) {
        this.name = name; // 应用名称
        this.entry = entry; // 应用地址
        this.container = container; //应用容器
        this.route = route;
        this.initialUrl = initialUrl;
        this.initialState = initialState;
        this.initSandbox();
    }
    async initSandbox() {
        this.setAppState(AppStatus.LOADING);
        try {
            const iframe = this.createIframeElement();
            defineProperty(this.container, "frameElement", { value: iframe });
            const doc = document.createElement("m-document");
            defineProperty(this.container, "document", { value: doc });
            const [response] = await Promise.all([
                fetchSource(this.entry),
                new Promise(resolve => {
                    addEventListenerTo(iframe, "load", resolve, { once: true });
                    DocumentFragment.prototype.append.call(this.container, iframe, doc);
                }),
            ]);
            this.createIframeTemplate(iframe);
            initShadowDom(this, response);
        }
        catch (e) {
            logger.error(e, this.name);
        }
    }
    createIframeElement() {
        const { location: rawLocation } = globalEnv.rawWindow;
        const iframe = globalEnv.rawDocument.createElement("iframe");
        iframe.src = rawLocation.protocol + "//" + rawLocation.host;
        iframe.hidden = true;
        return iframe;
    }
    createIframeTemplate(iframe) {
        const microDocument = iframe.contentWindow?.document;
        while (microDocument?.firstChild) {
            microDocument?.removeChild(microDocument?.firstChild);
        }
        const html = microDocument?.createElement("html");
        html.innerHTML = "<head></head><body></body>";
        microDocument.appendChild(html);
    }
    /**
     * 设置状态
     * @param state 状态
     */
    setAppState(state) {
        this.state = state;
    }
    /**
     * 资源加载完时执行
     */
    onLoad(htmlDom) { }
    /**
     * 资源加载完成后进行渲染
     */
    mount() { }
    /**
     * 卸载应用
     * @param destory 是否完全销毁，删除缓存资源
     */
    unmount(destory) { }
}

class AppManager {
    static instance;
    appInstanceMap = new Map();
    static getInstance() {
        if (!this.instance) {
            this.instance = new AppManager();
        }
        return this.instance;
    }
    get(appName) {
        return this.appInstanceMap.get(appName);
    }
    set(appName, app) {
        this.appInstanceMap.set(appName, app);
    }
    getAll() {
        return Array.from(this.appInstanceMap.values());
    }
    delete(appName) {
        return this.appInstanceMap.delete(appName);
    }
    clear() {
        this.appInstanceMap.clear();
    }
}

//自定义微元素组件
class MicroElement extends HTMLElement {
    appName = ""; //app name
    appEntry = ""; //app entry
    options = {
        name: this.appName,
        entry: this.appEntry,
        shadowDom: true,
    }; //全局options
    static get observedAttributes() {
        return ["name", "entry"];
    }
    constructor() {
        super();
    }
    /**
     * 自定义元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
     */
    connectedCallback() {
        const isAppEffective = !!(this.appName && this.appEntry);
        isAppEffective && this.handleConnected();
    }
    /**
     * 自定义元素从DOM中删除时执行，此时进行一些卸载操作
     */
    disconnectedCallback() {
        AppManager.getInstance().delete(this.appName);
    }
    /**
     * 元素属性发生变化时执行，可以获取name，entry等属性的值
     * @param attr
     * @param oldVal
     * @param newVal
     */
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "name" && !this.appName && newVal) {
            this.appName = newVal + "-" + Math.random().toString(36).slice(2);
            this.setAttribute("scope", this.appName);
        }
        else if (attr === "entry" && !this.appEntry && newVal) {
            this.appEntry = newVal;
        }
    }
    /**
     * 首次挂载微应用
     */
    handleConnected() {
        if (!this.appName || !this.appEntry) {
            return logger.warn("Mount failed, app name and app entry are required", this.appName);
        }
        this.initOptions();
        if (this.options.shadowDom) {
            this.initShadowDom();
        }
        this.handleCreateApp();
    }
    /**
     * 创建App实例
     */
    handleCreateApp() {
        //TODO: 对象化options
        const newApp = new InitApp({
            name: this.appName,
            entry: this.appEntry,
            container: this.shadowRoot,
            route: this.options.route,
            initialUrl: this.options.initialUrl,
            initialState: this.options.initialState,
        });
        AppManager.getInstance().set(newApp.name, newApp);
    }
    /**
     * 初始化shadowDom
     */
    initShadowDom() {
        this.attachShadow({ mode: "open" });
    }
    initOptions() {
        const { attributes } = this;
        const option = {
            initialUrl: globalEnv.rawWindow.location.href,
            initialState: history.state,
        };
        for (let i = attributes.length - 1; i >= 0; --i) {
            let { name, value } = attributes[i];
            name = toCamelCase(name);
            if (name === "name" || name === "entry" || name === "scope") {
                continue;
            }
            option[name] = value;
        }
        this.initRoute();
        assign(this.options, option);
    }
    initRoute() {
        let pathnameList = globalEnv.rawWindow.location.pathname.split("/");
        let route = pathnameList[pathnameList.length - 1];
        if (route[0] !== "^") {
            route = "^/" + route + "/";
        }
        this.options["route"] = new RegExp(route);
    }
}
function defineElement() {
    initGlobalEnv();
    //如果已经定义过，则忽略
    if (!window.customElements.get(EL_LOCAL_NAME)) {
        const { rawDocument, rawWindow } = globalEnv;
        const styleEl = rawDocument.createElement("style");
        styleEl.textContent = `${EL_LOCAL_NAME} {display:block;postion:relative;}`;
        appendChildTo(document.head, styleEl);
        // hijackNodeMethodsOfGlobal();
        rawWindow.customElements.define("m-document", class extends HTMLElement {
        });
        rawWindow.customElements.define(EL_LOCAL_NAME, MicroElement);
    }
}

class Mapp {
    start() {
        if (!isBrowser || !window.customElements) {
            return logger.error("The environment is not support MicroWeb.");
        }
        defineElement();
    }
}
const mApp = new Mapp();

export { Mapp, mApp as default, mApp };
//# sourceMappingURL=micro-frontend.js.map

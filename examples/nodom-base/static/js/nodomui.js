/**
 * 自定义元素管理器
 */
class DefineElementManager {
    /**
     * 添加自定义元素类
     * @param clazz     自定义元素类或类数组
     * @param alias     别名
     */
    static add(clazz, alias) {
        if (Array.isArray(clazz)) {
            for (let c of clazz) {
                this.elements.set(c.name.toUpperCase(), c);
            }
        }
        else {
            this.elements.set((alias || clazz.name).toUpperCase(), clazz);
        }
    }
    /**
     * 获取自定义元素类
     * @param tagName   元素名
     * @returns         自定义元素类
     */
    static get(tagName) {
        return this.elements.get(tagName.toUpperCase());
    }
    /**
     * 是否存在自定义元素
     * @param tagName   元素名
     * @returns         存在或不存在
     */
    static has(tagName) {
        return this.elements.has(tagName.toUpperCase());
    }
}
/**
 * 自定义element
 */
DefineElementManager.elements = new Map();

/**
 * 指令类
 */
class DirectiveType {
    /**
     * 构造方法
     * @param name      指令类型名
     * @param handle    渲染时执行方法
     * @param prio      类型优先级
     */
    constructor(name, handle, prio) {
        this.name = name;
        this.prio = prio >= 0 ? prio : 10;
        this.handle = handle;
    }
}

/**
 * 指令管理器
 */
class DirectiveManager {
    /**
     * 增加指令映射
     * @param name      指令类型名
     * @param handle    渲染处理函数
     * @param prio      类型优先级
     */
    static addType(name, handle, prio) {
        this.directiveTypes.set(name, new DirectiveType(name, handle, prio));
    }
    /**
     * 移除指令映射
     * @param name  指令类型名
     */
    static removeType(name) {
        this.directiveTypes.delete(name);
    }
    /**
     * 获取指令
     * @param name  指令类型名
     * @returns     指令类型或undefined
     */
    static getType(name) {
        return this.directiveTypes.get(name);
    }
    /**
     * 是否含有某个指令
     * @param name  指令类型名
     * @returns     true/false
     */
    static hasType(name) {
        return this.directiveTypes.has(name);
    }
}
/**
 * 指令映射
 */
DirectiveManager.directiveTypes = new Map();

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/*
 * 消息js文件 中文文件
 */
const NodomMessage_en = {
    /**
     * tip words
     */
    TipWords: {
        application: "Application",
        system: "System",
        module: "Module",
        moduleClass: 'ModuleClass',
        model: "Model",
        directive: "Directive",
        directiveType: "Directive-type",
        expression: "Expression",
        event: "Event",
        method: "Method",
        filter: "Filter",
        filterType: "Filter-type",
        data: "Data",
        dataItem: 'Data-item',
        route: 'Route',
        routeView: 'Route-container',
        plugin: 'Plugin',
        resource: 'Resource',
        root: 'Root',
        element: 'VirtualDom'
    },
    /**
     * error info
     */
    ErrorMsgs: {
        unknown: "unknown error",
        paramException: "{0} '{1}' parameter error，see api",
        invoke: "method {0} parameter {1} must be {2}",
        invoke1: "method {0} parameter {1} must be {2} or {3}",
        invoke2: "method {0} parameter {1} or {2} must be {3}",
        invoke3: "method {0} parameter {1} not allowed empty",
        exist: "{0} is already exist",
        exist1: "{0} '{1}' is already exist",
        notexist: "{0} is not exist",
        notexist1: "{0} '{1}' is not exist",
        notupd: "{0} not allow to change",
        notremove: "{0} not allow to delete",
        notremove1: "{0} {1} not allow to delete",
        namedinvalid: "{0} {1} name error，see name rules",
        initial: "{0} init parameter error",
        jsonparse: "JSON parse error",
        timeout: "request overtime",
        config: "{0} config parameter error",
        config1: "{0} config parameter '{1}' error",
        itemnotempty: "{0} '{1}' config item '{2}' not allow empty",
        itemincorrect: "{0} '{1}' config item '{2}' error",
        wrongTemplate: "wrong template"
    },
    WeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};

/*
 * 消息js文件 中文文件
 */
const NodomMessage_zh = {
    /**
     * 提示单词
     */
    TipWords: {
        application: "应用",
        system: "系统",
        module: "模块",
        moduleClass: '模块类',
        model: "模型",
        directive: "指令",
        directiveType: "指令类型",
        expression: "表达式",
        event: "事件",
        method: "方法",
        filter: "过滤器",
        filterType: "过滤器类型",
        data: "数据",
        dataItem: '数据项',
        route: '路由',
        routeView: '路由容器',
        plugin: '插件',
        resource: '资源',
        root: '根',
        element: '元素'
    },
    /**
     * 异常信息
     */
    ErrorMsgs: {
        unknown: "未知错误",
        paramException: "{0}'{1}'方法参数错误，请参考api",
        invoke: "{0} 方法参数 {1} 必须为 {2}",
        invoke1: "{0} 方法参数 {1} 必须为 {2} 或 {3}",
        invoke2: "{0} 方法参数 {1} 或 {2} 必须为 {3}",
        invoke3: "{0} 方法参数 {1} 不能为空",
        exist: "{0} 已存在",
        exist1: "{0} '{1}' 已存在",
        notexist: "{0} 不存在",
        notexist1: "{0} '{1}' 不存在",
        notupd: "{0} 不可修改",
        notremove: "{0} 不可删除",
        notremove1: "{0} {1} 不可删除",
        namedinvalid: "{0} {1} 命名错误，请参考用户手册对应命名规范",
        initial: "{0} 初始化参数错误",
        jsonparse: "JSON解析错误",
        timeout: "请求超时",
        config: "{0} 配置参数错误",
        config1: "{0} 配置参数 '{1}' 错误",
        itemnotempty: "{0} '{1}' 配置项 '{2}' 不能为空",
        itemincorrect: "{0} '{1}' 配置项 '{2}' 错误",
        compile1: "{0} 标签未闭合",
        compile2: "结束标签 {0} 未找到与之匹配的开始标签",
        compile3: "请检查模板标签闭合情况，模板需要有一个闭合的根节点",
        wrongTemplate: "模版格式错误"
    },
    WeekDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
};

/**
 * 过滤器工厂，存储模块过滤器
 */
class ModuleFactory {
    /**
     * 添加模块到工厂
     * @param item  模块对象
     */
    static add(item) {
        // 第一个为主模块
        if (this.modules.size === 0) {
            this.mainModule = item;
        }
        this.modules.set(item.id, item);
        //添加模块类
        this.addClass(item.constructor);
    }
    /**
     * 获得模块
     * @param name  类、类名或实例id
     */
    static get(name) {
        if (typeof name === 'number') {
            return this.modules.get(name);
        }
        else {
            return this.getInstance(name);
        }
    }
    /**
     * 是否存在模块类
     * @param clazzName     模块类名
     * @returns     true/false
     */
    static hasClass(clazzName) {
        return this.classes.has(clazzName.toLowerCase());
    }
    /**
     * 添加模块类
     * @param clazz     模块类
     * @param alias     注册别名
     */
    static addClass(clazz, alias) {
        //转换成小写
        let name = clazz.name.toLowerCase();
        if (this.classes.has(name)) {
            return;
        }
        this.classes.set(name, clazz);
        if (alias) {
            this.classes.set(alias.toLowerCase(), clazz);
        }
    }
    /**
     * 获取模块实例（通过类名）
     * @param className     模块类或类名
     * @param props         模块外部属性
     */
    static getInstance(clazz) {
        let className = (typeof clazz === 'string') ? clazz : clazz.name.toLowerCase();
        let cls;
        // 初始化模块
        if (!this.classes.has(className) && typeof clazz === 'function') {
            cls = clazz;
        }
        else {
            cls = this.classes.get(className);
        }
        if (!cls) {
            return;
        }
        let m = Reflect.construct(cls, []);
        m.init();
        return m;
    }
    /**
     * 从工厂移除模块
     * @param id    模块id
     */
    static remove(id) {
        this.modules.delete(id);
    }
    /**
     * 设置主模块
     * @param m 	模块
     */
    static setMain(m) {
        this.mainModule = m;
    }
    /**
     * 获取主模块
     * @returns 	应用的主模块
     */
    static getMain() {
        return this.mainModule;
    }
}
/**
 * 模块对象工厂 {moduleId:{key:容器key,className:模块类名,instance:模块实例}}
 */
ModuleFactory.modules = new Map();
/**
 * 模块类集合 {className:class}
 */
ModuleFactory.classes = new Map();

/**
 * 表达式类
 */
class Expression {
    /**
     * @param exprStr	表达式串
     */
    constructor(exprStr) {
        this.id = Util.genId();
        this.allModelField = true;
        if (!exprStr) {
            return;
        }
        const funStr = this.compile(exprStr);
        this.execFunc = new Function('$model', `return ` + funStr);
    }
    /**
     * 编译表达式串，替换字段和方法
     * @param exprStr   表达式串
     * @returns         编译后的表达式串
     */
    compile(exprStr) {
        //字符串，object key，有效命名(函数或字段)
        const reg = /('[\s\S]*?')|("[\s\S]*?")|(`[\s\S]*?`)|([a-zA-Z$_][\w$]*\s*?:)|((\.{3}|\.)?[a-zA-Z$_][\w$]*(\.[a-zA-Z$_][\w$]*)*(\s*[\[\(](\s*\))?)?)/g;
        let r;
        let retS = '';
        let index = 0; //当前位置
        while ((r = reg.exec(exprStr)) !== null) {
            let s = r[0];
            if (index < r.index) {
                retS += exprStr.substring(index, r.index);
            }
            if (s[0] === "'" || s[0] === '"' || s[0] === '`') { //字符串
                retS += s;
            }
            else {
                let lch = s[s.length - 1];
                if (lch === ':') { //object key
                    retS += s;
                }
                else if (lch === '(' || lch === ')') { //函数，非内部函数
                    retS += handleFunc(s);
                }
                else { //字段 this $model .field等不做处理
                    if (s.startsWith('this.') || s === '$model' || s.startsWith('$model.') || Util.isKeyWord(s) || (s[0] === '.' && s[1] !== '.')) { //非model属性
                        retS += s;
                    }
                    else { //model属性
                        let s1 = '';
                        if (s.startsWith('...')) { // ...属性名
                            s1 = '...';
                            s = s.substring(3);
                        }
                        retS += s1 + '$model.' + s;
                        //存在‘.’，则变量不全在在当前模型中
                        if (s.indexOf('.') !== -1) {
                            this.allModelField = false;
                        }
                    }
                }
            }
            index = reg.lastIndex;
        }
        if (index < exprStr.length) {
            retS += exprStr.substring(index);
        }
        return retS;
        /**
         * 处理函数串
         * @param str   源串
         * @returns     处理后的串
         */
        function handleFunc(str) {
            let ind = str.indexOf('.');
            //中间无'.'
            if (ind === -1) {
                let ind1 = str.lastIndexOf('(');
                let fn = str.substring(0, ind1);
                //末尾字符
                if (!Util.isKeyWord(fn)) {
                    let lch = str[str.length - 1];
                    if (lch !== ')') { //有参数
                        return 'this.invokeMethod("' + fn + '",';
                    }
                    else { //无参数
                        return 'this.invokeMethod("' + fn + '")';
                    }
                }
            }
            else if (str[0] !== '.') { //第一个为点不处理
                let fn = str.substring(0, ind);
                if (!Util.isKeyWord(fn)) { //首字段非关键词，则为属性
                    return '$model.' + str;
                }
            }
            return str;
        }
    }
    /**
     * 表达式计算
     * @param module    模块
     * @param model 	模型
     * @returns 		计算结果
     */
    val(module, model) {
        let v;
        try {
            v = this.execFunc.apply(module, [model]);
        }
        catch (e) {
            // console.error(e);
        }
        this.value = v;
        return v;
    }
    /**
     * 克隆
     */
    clone() {
        return this;
    }
}

/**
 * css 管理器
 * 针对不同的rule，处理方式不同
 * CssStyleRule 进行保存和替换，同时 scopeInModule(模块作用域)有效
 * CssImportRule 路径不重复添加，因为必须加在stylerule前面，所以需要记录最后的import索引号
 */
class CssManager {
    /**
     * 处理style 元素
     * @param module    模块
     * @param dom       虚拟dom
     * @param root      模块root dom
     * @param add       是否添加根模块类名
     * @returns         如果是styledom，则返回true，否则返回false
     */
    static handleStyleDom(module, dom, root, add) {
        if (dom.tagName.toLowerCase() !== 'style') {
            return false;
        }
        if (add) {
            let cls = this.cssPreName + module.id;
            if (root.props['class']) {
                root.props['class'] = dom.props['class'] + ' ' + cls;
            }
            else {
                root.props['class'] = cls;
            }
        }
        return true;
    }
    /**
     * 处理 style 下的文本元素
     * @param module    模块
     * @param dom       style text element
     * @returns         如果是styleTextdom返回true，否则返回false
     */
    static handleStyleTextDom(module, dom) {
        if (!dom.parent || dom.parent.tagName.toLowerCase() !== 'style') {
            return false;
        }
        //scope=this，在模块根节点添加 限定 class
        CssManager.addRules(module, dom.textContent, dom.parent.props['scope'] === 'this' ? '.' + this.cssPreName + module.id : undefined);
        return true;
    }
    /**
     * 添加多个css rule
     * @param cssText           rule集合
     * @param module            模块
     * @param scopeName         作用域名(前置选择器)
     */
    static addRules(module, cssText, scopeName) {
        //sheet 初始化
        if (!this.sheet) {
            //safari不支持 cssstylesheet constructor，用 style代替
            let sheet = document.createElement('style');
            document.head.appendChild(sheet);
            this.sheet = document.styleSheets[0];
        }
        //如果有作用域，则清除作用域下的rule
        if (scopeName) {
            this.clearModuleRules(module);
        }
        //是否限定在模块内
        //cssRule 获取正则式  @import
        const reg = /(@[a-zA-Z]+\s+url\(.+?\))|([.#@a-zA-Z]\S*(\s*\S*\s*?)?{)|\}/g;
        //import support url正则式
        const regImp = /@[a-zA-Z]+\s+url/;
        // keyframe font page support... 开始 位置
        let startIndex = -1;
        // { 个数，遇到 } -1 
        let beginNum = 0;
        let re;
        while ((re = reg.exec(cssText)) !== null) {
            if (regImp.test(re[0])) { //import namespace
                handleImport(re[0]);
            }
            else if (re[0] === '}') { //回收括号，单个样式结束判断
                if (startIndex >= 0 && --beginNum <= 0) { //style @ end
                    let txt = cssText.substring(startIndex, re.index + 1);
                    if (txt[0] === '@') { //@开头
                        this.sheet.insertRule(txt, CssManager.sheet.cssRules ? CssManager.sheet.cssRules.length : 0);
                    }
                    else { //style
                        handleStyle(module, txt, scopeName);
                    }
                    startIndex = -1;
                    beginNum = 0;
                }
            }
            else { //style 或 @内部
                if (startIndex === -1) {
                    startIndex = re.index;
                    beginNum++;
                }
                else {
                    beginNum++;
                }
            }
        }
        /**
         * 处理style rule
         * @param module         模块
         * @param cssText        css 文本
         * @param scopeName      作用域名(前置选择器)
         * @returns              如果css文本最后一个"{"前没有字符串，则返回void
         */
        function handleStyle(module, cssText, scopeName) {
            const reg = /.+(?=\{)/; //匹配字符"{"前出现的所有字符
            let r = reg.exec(cssText);
            if (!r) {
                return;
            }
            // 保存样式名，在模块 object manager 中以数组存储
            if (scopeName) {
                let arr = module.objectManager.get('$cssRules');
                if (!arr) {
                    arr = [];
                    module.objectManager.set('$cssRules', arr);
                }
                arr.push((scopeName + ' ' + r[0]));
                //为样式添加 scope name
                cssText = scopeName + ' ' + cssText;
            }
            //加入到样式表
            CssManager.sheet.insertRule(cssText, CssManager.sheet.cssRules ? CssManager.sheet.cssRules.length : 0);
        }
        /**
         * 处理import rule
         * @param cssText   css文本
         * @returns         如果cssText中"()"内有字符串且importMap中存在键值为"()"内字符串的第一个字符，则返回void
         */
        function handleImport(cssText) {
            let ind = cssText.indexOf('(');
            let ind1 = cssText.lastIndexOf(')');
            if (ind === -1 || ind1 === -1 || ind >= ind1) {
                return;
            }
            let css = cssText.substring(ind, ind1);
            if (CssManager.importMap.has(css)) {
                return;
            }
            //插入import rule
            CssManager.sheet.insertRule(cssText, CssManager.importIndex++);
            CssManager.importMap.set(css, true);
        }
    }
    /**
     * 清除模块css rules
     * @param module  模块
     * @returns       如果模块不存在css rules，则返回void
     */
    static clearModuleRules(module) {
        let rules = module.objectManager.get('$cssRules');
        if (!rules || rules.length === 0) {
            return;
        }
        //从sheet清除
        for (let i = 0; i < this.sheet.cssRules.length; i++) {
            let r = this.sheet.cssRules[i];
            if (r.selectorText && rules.indexOf(r.selectorText) !== -1) {
                this.sheet.deleteRule(i--);
            }
        }
        //置空cache
        module.objectManager.set('$cssRules', []);
    }
}
/**
 * import url map，用于存储import的url路径
 */
CssManager.importMap = new Map();
/**
 * importrule 位置
 */
CssManager.importIndex = 0;
/**
 * css class 前置名
 */
CssManager.cssPreName = '___nodommodule___';

/**
 * 事件类
 * @remarks
 * 事件分为自有事件和代理事件
 * @author      yanglei
 * @since       1.0
 */
class NEvent {
    /**
     * @param eventName     事件名
     * @param eventStr      事件串或事件处理函数,以“:”分割,中间不能有空格,结构为: 方法名[:delg(代理到父对象):nopopo(禁止冒泡):once(只执行一次):capture(useCapture)]
     *                      如果为函数，则替代第三个参数
     * @param handler       事件执行函数，如果方法不在module methods中定义，则可以直接申明，eventStr第一个参数失效，即eventStr可以是":delg:nopopo..."
     */
    constructor(module, eventName, eventStr, handler) {
        this.id = Util.genId();
        this.module = module;
        this.name = eventName;
        // GlobalCache.saveEvent(this);
        //如果事件串不为空，则不需要处理
        if (eventStr) {
            let tp = typeof eventStr;
            if (tp === 'string') {
                let eStr = eventStr.trim();
                eStr.split(':').forEach((item, i) => {
                    item = item.trim();
                    if (i === 0) { //事件方法
                        this.handler = item;
                    }
                    else { //事件附加参数
                        switch (item) {
                            case 'delg':
                                this.delg = true;
                                break;
                            case 'nopopo':
                                this.nopopo = true;
                                break;
                            case 'once':
                                this.once = true;
                                break;
                            case 'capture':
                                this.capture = true;
                                break;
                        }
                    }
                });
            }
            else if (tp === 'function') {
                handler = eventStr;
            }
        }
        //新增事件方法（不在methods中定义）
        if (handler) {
            this.handler = handler;
        }
        if (document.ontouchend) { //触屏设备
            switch (this.name) {
                case 'click':
                    this.name = 'tap';
                    break;
                case 'mousedown':
                    this.name = 'touchstart';
                    break;
                case 'mouseup':
                    this.name = 'touchend';
                    break;
                case 'mousemove':
                    this.name = 'touchmove';
                    break;
            }
        }
        else { //转非触屏
            switch (this.name) {
                case 'tap':
                    this.name = 'click';
                    break;
                case 'touchstart':
                    this.name = 'mousedown';
                    break;
                case 'touchend':
                    this.name = 'mouseup';
                    break;
                case 'touchmove':
                    this.name = 'mousemove';
                    break;
            }
        }
    }
    /**
     * 设置附加参数值
     * @param module    模块
     * @param dom       虚拟dom
     * @param name      参数名
     * @param value     参数值
     */
    setParam(module, dom, name, value) {
        module.objectManager.setEventParam(this.id, dom.key, name, value);
    }
    /**
     * 获取附加参数值
     * @param module    模块
     * @param dom       虚拟dom
     * @param name      参数名
     * @returns         附加参数值
     */
    getParam(module, dom, name) {
        return module.objectManager.getEventParam(this.id, dom.key, name);
    }
    /**
     * 移除参数
     * @param module    模块
     * @param dom       虚拟dom
     * @param name      参数名
     */
    removeParam(module, dom, name) {
        return module.objectManager.removeEventParam(this.id, dom.key, name);
    }
    /**
     * 清参数cache
     * @param module    模块
     * @param dom       虚拟dom
     */
    clearParam(module, dom) {
        module.objectManager.clearEventParam(this.id, dom.key);
    }
}

/**
 * 事件管理器
 */
class EventManager {
    /**
     * 绑定事件
     * @param module
     * @param dom
     */
    static bind(module, dom) {
        const eobj = module.eventFactory.getEvent(dom.key);
        if (!eobj) {
            return;
        }
        //判断并设置事件绑定标志
        const parent = dom.parent;
        for (let evt of eobj) {
            if (evt[0] === 'bindMap') {
                continue;
            }
            //代理事件
            if (evt[1].toDelg) {
                for (let i = 0; i < evt[1].toDelg.length; i++) {
                    let ev = evt[1].toDelg[i];
                    //事件添加到父dom
                    module.eventFactory.addEvent(parent.key, ev, dom.key);
                    module.eventFactory.bind(parent.key, evt[0], handler, ev.capture);
                }
            }
            //自己的事件
            if (evt[1].own) {
                // 保存handler
                module.eventFactory.bind(dom.key, evt[0], handler, evt[1].capture);
            }
        }
        /**
         * 事件handler
         * @param e  Event
         */
        function handler(e) {
            //从事件element获取事件
            let el = e.currentTarget;
            const dom = el.$vdom;
            const eobj = module.eventFactory.getEvent(dom.key);
            if (!dom || !eobj || !eobj.has(e.type)) {
                return;
            }
            const evts = eobj.get(e.type);
            if (evts.capture) { //先执行自己的事件
                doOwn(evts.own);
                doDelg(evts.delg);
            }
            else {
                if (!doDelg(evts.delg)) {
                    doOwn(evts.own);
                }
            }
            if (evts.own && evts.own.length === 0) {
                delete evts.own;
            }
            if (evts.delg && evts.delg.length === 0) {
                delete evts.delg;
            }
            /**
             * 处理自有事件
             * @param events
             * @returns
             */
            function doOwn(events) {
                if (!events) {
                    return;
                }
                let nopopo = false;
                for (let i = 0; i < events.length; i++) {
                    const ev = events[i];
                    if (typeof ev.handler === 'string') {
                        module.invokeMethod(ev.handler, dom.model, dom, ev, e);
                    }
                    else if (typeof ev.handler === 'function') {
                        ev.handler.apply(module, [dom.model, dom, ev, e]);
                    }
                    if (ev.once) { //移除事件
                        events.splice(i--, 1);
                    }
                    nopopo = ev.nopopo;
                }
                if (nopopo) {
                    e.stopPropagation();
                }
            }
            /**
             * 处理代理事件
             * @param events
             * @returns         是否禁止冒泡
             */
            function doDelg(events) {
                if (!events) {
                    return false;
                }
                let nopopo = false;
                for (let i = 0; i < events.length; i++) {
                    const evo = events[i];
                    const ev = evo.event;
                    for (let j = 0; j < e.path.length && e.path[j] !== el; j++) {
                        if (e.path[j].$vdom && e.path[j].$vdom.key === evo.key) {
                            const dom1 = e.path[j].$vdom;
                            if (typeof ev.handler === 'string') {
                                module.invokeMethod(ev.handler, dom.model, dom, ev, e);
                            }
                            else if (typeof ev.handler === 'function') {
                                ev.handler.apply(module, [dom.model, dom, ev, e]);
                            }
                            // 保留nopopo
                            nopopo = ev.nopopo;
                            if (ev.once) { //移除代理事件，需要从被代理元素删除
                                //从当前dom删除
                                events.splice(i--, 1);
                                //从被代理dom删除
                                module.eventFactory.removeEvent(dom1.key, ev, null, true);
                            }
                            break;
                        }
                    }
                }
                return nopopo;
            }
        }
    }
    /**
     * 处理外部事件
     * @param dom       dom节点
     * @param event     事件对象
     * @returns         如果有是外部事件，则返回true，否则返回false
     */
    static handleExtendEvent(module, dom, event) {
        let evts = this.get(event.name);
        if (!evts) {
            return false;
        }
        for (let key of Object.keys(evts)) {
            let ev = new NEvent(module, key, evts[key]);
            ev.capture = event.capture;
            ev.nopopo = event.nopopo;
            ev.delg = event.delg;
            ev.once = event.once;
            //设置依赖事件
            ev.dependEvent = event;
            module.eventFactory.addEvent(dom.key, ev);
        }
        return true;
    }
    /**
      * 注册扩展事件
      * @param eventName    事件名
      * @param handleObj    事件处理集
      */
    static regist(eventName, handleObj) {
        this.extendEventMap.set(eventName, handleObj);
    }
    /**
     * 取消注册扩展事件
     * @param eventName     事件名
     */
    static unregist(eventName) {
        return this.extendEventMap.delete(eventName);
    }
    /**
     * 获取扩展事件
     * @param eventName     事件名
     * @returns             事件处理集
     */
    static get(eventName) {
        return this.extendEventMap.get(eventName);
    }
}
/**
 * 外部事件集
 */
EventManager.extendEventMap = new Map();

/**
 * 渲染器
 */
class Renderer {
    /**
     * 添加到渲染列表
     * @param module 模块
     */
    static add(module) {
        //如果已经在列表中，不再添加
        if (!this.waitList.includes(module.id)) {
            //计算优先级
            this.waitList.push(module.id);
        }
    }
    /**
     * 从渲染队列移除
     * @param moduleId
     */
    static remove(moduleId) {
        let index;
        if ((index = this.waitList.indexOf(moduleId)) !== -1) {
            //不能破坏watiList顺序，用null替换
            this.waitList.splice(index, 1, null);
        }
    }
    /**
     * 队列渲染
     */
    static render() {
        for (; this.waitList.length > 0;) {
            let id = this.waitList[0];
            if (id) { //存在id为null情况，remove方法造成
                ModuleFactory.get(id).render();
            }
            //渲染后移除
            this.waitList.shift();
        }
    }
    /**
     * 渲染dom
     * @param module            模块
     * @param src               源dom
     * @param model             模型，如果src已经带有model，则此参数无效
     * @param parent            父dom
     * @param key               key 附加key，放在domkey的后面
     * @returns
     */
    static renderDom(module, src, model, parent, key) {
        let dst = {
            key: key ? src.key + '_' + key : src.key,
            vdom: src
        };
        if (src.tagName) {
            dst.tagName = src.tagName;
            dst.props = {};
        }
        else {
            dst.textContent = src.textContent;
        }
        //设置model
        model = src.model || model;
        //设置当前根root
        if (!parent) {
            this.currentModuleRoot = dst;
        }
        else {
            if (!model) {
                model = parent.model;
            }
            // 设置父对象
            dst.parent = parent;
        }
        // 默认根model
        if (!model) {
            model = module.model;
        }
        dst.model = model;
        dst.staticNum = src.staticNum;
        if (src.staticNum > 0) {
            src.staticNum--;
        }
        //先处理model指令
        if (src.directives && src.directives.length > 0 && src.directives[0].type.name === 'model') {
            src.directives[0].exec(module, dst);
        }
        if (dst.tagName) {
            if (!dst.notChange) {
                handleProps();
                //处理style，如果为style，则不处理assets和events
                if (!CssManager.handleStyleDom(module, src, Renderer.currentModuleRoot, src.getProp('scope') === 'this')) {
                    //assets
                    if (src.assets && src.assets.size > 0) {
                        for (let p of src.assets) {
                            dst[p[0]] = p[1];
                        }
                    }
                }
                if (!handleDirectives()) {
                    return null;
                }
            }
            //复制源dom事件到事件工厂
            if (src.events && !module.eventFactory.getEvent(dst.key)) {
                for (let evt of src.events) {
                    module.eventFactory.addEvent(dst.key, evt);
                }
            }
            // 子节点
            if (src.children && src.children.length > 0) {
                dst.children = [];
                for (let c of src.children) {
                    Renderer.renderDom(module, c, dst.model, dst, key ? key : null);
                }
            }
        }
        else if (!dst.notChange) {
            if (src.expressions) { //文本节点
                let value = '';
                src.expressions.forEach((v) => {
                    if (v instanceof Expression) { //处理表达式
                        let v1 = v.val(module, dst.model);
                        value += v1 !== undefined ? v1 : '';
                    }
                    else {
                        value += v;
                    }
                });
                dst.textContent = value;
                dst.staticNum = -1;
            }
            else {
                dst.textContent = src.textContent;
            }
        }
        //添加到dom tree
        if (parent) {
            parent.children.push(dst);
        }
        return dst;
        /**
         * 处理指令
         * @returns     true继续执行，false不执行后续渲染代码
         */
        function handleDirectives() {
            if (!src.directives || src.directives.length === 0) {
                return true;
            }
            dst.staticNum = -1;
            for (let d of src.directives) {
                //model指令不执行
                if (d.type.name === 'model') {
                    continue;
                }
                if (!d.exec(module, dst)) {
                    return false;
                }
            }
            return true;
        }
        /**
         * 处理属性（带表达式）
         */
        function handleProps() {
            if (!src.props || src.props.size === 0) {
                return;
            }
            //因为存在大小写，所以用正则式进行匹配
            const styleReg = /^style$/i;
            const classReg = /^class$/i;
            let value;
            for (let k of src.props) {
                if (Array.isArray(k[1])) { //数组，需要合并
                    value = [];
                    for (let i = 0; i < k[1].length; i++) {
                        let a = k[1][i];
                        if (a instanceof Expression) {
                            value.push(a.val(module, dst.model));
                            dst.staticNum = -1;
                        }
                        else {
                            value.push(a);
                        }
                    }
                    if (styleReg.test(k[0])) {
                        value = src.getStyleString(value);
                    }
                    else if (classReg.test(k[0])) {
                        value = src.getClassString(value);
                    }
                }
                else if (k[1] instanceof Expression) {
                    value = k[1].val(module, dst.model);
                    dst.staticNum = -1;
                }
                else {
                    value = k[1];
                }
                dst.props[k[0]] = value;
            }
        }
    }
    /**
     * 更新到html树
     * @param module    模块
     * @param src       渲染节点
     * @returns         渲染后的节点
     */
    static updateToHtml(module, src) {
        let el = module.getElement(src.key);
        if (!el) {
            return this.renderToHtml(module, src, null);
        }
        else if (src.tagName) { //html dom节点已存在
            //修改$vdom
            el['$vdom'] = src;
            module.saveElement(src.key, el);
            let attrs = el.attributes;
            let arr = [];
            for (let i = 0; i < attrs.length; i++) {
                arr.push(attrs[i].name);
            }
            //设置属性
            for (let p of Object.keys(src.props)) {
                el.setAttribute(p, src.props[p] === undefined ? '' : src.props[p]);
                let ind;
                if ((ind = arr.indexOf(p)) !== -1) {
                    arr.splice(ind, 1);
                }
            }
            //清理多余attribute
            if (arr.length > 0) {
                for (let a of arr) {
                    el.removeAttribute(a);
                }
            }
            //处理asset
            if (src.assets) {
                for (let k of Object.keys(src.assets)) {
                    el[k] = src.assets[k];
                }
            }
        }
        else { //文本节点
            el.textContent = src.textContent;
        }
        return el;
    }
    /**
     * 渲染到html树
     * @param module 	        模块
     * @param src               渲染节点
     * @param parentEl 	        父html
     * @param isRenderChild     是否渲染子节点
     */
    static renderToHtml(module, src, parentEl, isRenderChild) {
        let el;
        if (src.tagName) {
            el = newEl(src);
        }
        else {
            el = newText(src);
        }
        //先创建子节点，再添加到html dom树，避免频繁添加
        if (el && src.tagName && isRenderChild) {
            genSub(el, src);
        }
        if (el && parentEl) {
            parentEl.appendChild(el);
        }
        return el;
        /**
         * 新建element节点
         * @param dom 		虚拟dom
         * @returns 		新的html element
         */
        function newEl(dom) {
            //style不处理
            if (dom.tagName.toLowerCase() === 'style') {
                return;
            }
            //创建element
            let el = document.createElement(dom.tagName);
            //保存虚拟dom
            el['$vdom'] = dom;
            //把el引用与key关系存放到cache中
            module.saveElement(dom.key, el);
            //保存自定义key对应element
            if (dom.props['key']) {
                module.saveElement(dom.props['key'], el);
            }
            //子模块容器的处理由子模块处理
            if (!dom.subModuleId) {
                //设置属性
                for (let p of Object.keys(dom.props)) {
                    el.setAttribute(p, dom.props[p] === undefined ? '' : dom.props[p]);
                }
                //asset
                if (dom.assets) {
                    for (let p of Object.keys(dom.assets)) {
                        el[p] = dom.assets[p];
                    }
                }
                //处理event
                EventManager.bind(module, dom);
            }
            return el;
        }
        /**
         * 新建文本节点
         */
        function newText(dom) {
            //样式表处理，如果是样式表文本，则不添加到dom树
            if (CssManager.handleStyleTextDom(module, dom)) {
                return;
            }
            let node = document.createTextNode(dom.textContent || '');
            module.saveElement(dom.key, node);
            return node;
        }
        /**
         * 生成子节点
         * @param pEl 	父节点
         * @param vdom  虚拟dom节点
         */
        function genSub(pEl, vdom) {
            if (vdom.children && vdom.children.length > 0) {
                vdom.children.forEach(item => {
                    let el1;
                    if (item.tagName) {
                        el1 = newEl(item);
                        genSub(el1, item);
                    }
                    else {
                        el1 = newText(item);
                    }
                    if (el1) {
                        pEl.appendChild(el1);
                    }
                });
            }
        }
    }
    /**
     * 处理更改的dom节点
     * @param module        待处理模块
     * @param changeDoms    更改的dom参数数组
     */
    static handleChangedDoms(module, changeDoms) {
        //保留原有html节点
        for (let item of changeDoms) {
            let o = {};
            if (item[1]) {
                //新节点
                o['new'] = module.getElement(item[1].key);
            }
            if (item[2]) {
                o['old'] = module.getElement(item[2].key);
            }
            if (item[3]) {
                //旧父节点
                o['p'] = module.getElement(item[3].key);
            }
            item.els = o;
            //从模块移除
            if (item[0] === 3) {
                module.freeNode(item[1]);
            }
            else if (item[0] === 5) {
                module.freeNode(item[2]);
            }
        }
        //第二轮待处理数组
        const secondArr = [];
        for (let item of changeDoms) {
            //父htmlelement，新html节点，旧html节点
            let pEl, n1, n2;
            switch (item[0]) {
                case 1: //添加
                    pEl = item.els.p;
                    n1 = Renderer.renderToHtml(module, item[1], null, true);
                    if (pEl.children && pEl.children.length - 1 > item[4]) {
                        pEl.insertBefore(n1, pEl.children[item[4]]);
                    }
                    else {
                        pEl.appendChild(n1);
                    }
                    break;
                case 2: //修改
                    Renderer.updateToHtml(module, item[1]);
                    break;
                case 3: //删除
                    pEl = item.els.p;
                    n1 = item.els.new;
                    if (pEl && n1 && n1.parentElement === pEl) {
                        pEl.removeChild(n1);
                    }
                    break;
                case 4: //移动
                    //移动时可能存在节点尚未添加，对应目标index不可及，需要加入第二轮处理
                    pEl = item.els.p;
                    n1 = module.getElement(item[1].key);
                    // 插入节点时，可能存在move的位置与现节点相同
                    if (n1 && n1 !== pEl.children[item[4]]) {
                        if (pEl.children.length > item[4]) {
                            pEl.insertBefore(n1, pEl.children[item[4]]);
                        }
                        else if (pEl.children.length === item[4]) { //刚好放在最后
                            pEl.appendChild(n1);
                        }
                        else { //index不可及，放入第二轮
                            secondArr.push(item);
                        }
                    }
                    break;
                case 5: //替换
                    pEl = item.els.p;
                    n2 = item.els.old;
                    n1 = Renderer.renderToHtml(module, item[1], null, true);
                    if (pEl && n2) {
                        pEl.replaceChild(n1, n2);
                    }
            }
        }
        //处理剩余的move节点
        for (let i = 0; i < secondArr.length; i++) {
            const item = secondArr[i];
            const pEl = module.getElement(item[3].key);
            const n1 = module.getElement(item[1].key);
            if (n1 && n1 !== pEl.children[item[4]]) {
                if (pEl.children.length > item[4]) {
                    pEl.insertBefore(n1, pEl.children[item[4]]);
                }
                else {
                    pEl.appendChild(n1);
                }
            }
        }
    }
}
/**
 * 等待渲染列表（模块名）
 */
Renderer.waitList = [];

/**
 * 模型工厂
 */
class ModelManager {
    /**
     * 获取model map
     * @returns  model map
     */
    static getMap() {
        return this.modelMap;
    }
    /**
     * 获取model，不存在则新建
     * @param data      数据
     * @param module    所属模块
     * @returns         model
     */
    static getModel(data, receiver) {
        // let model;
        if (this.dataMap.has(data)) {
            const mdl = this.dataMap.get(data);
            //存在暂存的数据模块绑定，需要添加到model模块绑定
            if (this.tempMap.has(data)) {
                const mids = this.getModuleIds(mdl);
                const newIds = this.tempMap.get(data);
                this.tempMap.delete(data);
                for (let id of newIds) {
                    if (mids.indexOf(id) === -1) {
                        mids.push(id);
                    }
                }
            }
            return mdl;
        }
    }
    /**
     * 获取model key
     * @param model     model对象
     * @returns         model对应key
     */
    static getModelKey(model) {
        if (this.modelMap.has(model)) {
            return this.modelMap.get(model).key;
        }
    }
    /**
     * 添加数据到map
     * @param data
     */
    static add(data, model, receiver) {
        this.dataMap.set(data, model);
        // 复制父model模块
        let mids = [];
        if (receiver) {
            mids = this.getModuleIds(receiver).slice(0);
        }
        this.modelMap.set(model, { key: Util.genId(), modules: mids });
    }
    /**
     * 绑定model到module
     * @param model     模型
     * @param module    模块
     * @param isSecond  是否为第二次绑定（通常为传递给子模块的数据对象）
     * @returns
     */
    static bindToModule(model, module, isSecond) {
        if (!this.modelMap.has(model)) {
            this.modelMap.set(model, { key: Util.genId() });
        }
        let obj = this.modelMap.get(model);
        if (!obj.modules) {
            obj.modules = [module.id];
        }
        else {
            if (obj.modules.indexOf(module.id) === -1) {
                obj.modules.push(module.id);
            }
        }
        /**
         * 第二次为增量绑定，需要对子对象进行处理
         */
        if (isSecond) {
            saveChildren(model, this.tempMap);
        }
        /**
         * 保存子对象的模块绑定到临时map中
         * @param mdl   模型
         * @param map   临时map
         */
        function saveChildren(mdl, map) {
            for (let key of Object.keys(mdl)) {
                if (mdl[key] && typeof mdl[key] === 'object') {
                    let d = mdl[key].___source;
                    if (map.has(d)) {
                        map.get(d).push(module.id);
                    }
                    else {
                        map.set(d, [module.id]);
                    }
                    //递归处理
                    saveChildren(mdl[key], map);
                }
            }
        }
    }
    /**
     * 获取model绑定的moduleId
     * @param model     模型
     * @returns model绑定的模块id数组
     */
    static getModuleIds(model) {
        if (!this.modelMap.has(model)) {
            return;
        }
        return this.modelMap.get(model).modules;
    }
    /**
     * 更新导致渲染
     * 如果不设置oldValue和newValue，则直接强制渲染
     * @param model     model
     * @param key       属性
     * @param oldValue  旧值
     * @param newValue  新值
     */
    static update(model, key, oldValue, newValue) {
        const modules = this.getModuleIds(model);
        if (!modules) {
            return;
        }
        //所有module渲染
        for (let mid of modules) {
            const m = ModuleFactory.get(mid);
            if (m) {
                Renderer.add(m);
            }
        }
        let watchers = this.modelMap.get(model)['watchers'];
        if (!watchers) {
            return;
        }
        if (!watchers.has(key)) {
            return;
        }
        let foos = watchers.get(key);
        for (let v of foos) {
            for (let mid of v[1]) {
                const m = ModuleFactory.get(mid);
                if (m) {
                    v[0].call(m, model, key, oldValue, newValue);
                }
            }
        }
    }
    /**
     * 观察某个数据项
     * @param model     带watch的model
     * @param key       数据项名或数组
     * @param operate   数据项变化时执行方法
     * @param module    指定模块，如果指定，则表示该model绑定的所有module都会触发watch事件，在model父(模块)传子(模块)传递的是对象时会导致多个watch出发
     * @param deep      是否深度观察，如果是深度观察，则子对象更改，也会触发观察事件
     *
     * @returns         unwatch函数
     */
    static watch(model, key, operate, module, deep) {
        let mids = module ? [module.id] : ModelManager.getModuleIds(model);
        //撤销watch数组，数据项为{m:model,k:监听属性,f:触发方法}
        let arr = [];
        if (Array.isArray(key)) {
            for (let k of key) {
                watchOne(model, k, operate);
            }
        }
        else {
            watchOne(model, key, operate);
        }
        //返回取消watch函数
        return () => {
            if (arr) {
                for (let f of arr) {
                    let map = ModelManager.modelMap.get(f.m)['watchers'];
                    if (!map || !map.has(f.k)) {
                        continue;
                    }
                    if (!f.operate) {
                        map.delete(f.k);
                    }
                    else if (map.get(f.k).has(f.operate)) {
                        map.get(f.k).delete(f.operate);
                    }
                }
            }
            //释放arr
            arr = null;
        };
        /**
         * 监听一个
         * @param model     当前model
         * @param key       监听键
         * @param operate   操作方法
         * @returns
         */
        function watchOne(model, key, operate) {
            let index = -1;
            //如果带'.'，则只取最里面那个对象
            if ((index = key.lastIndexOf('.')) !== -1) {
                model = ModelManager.get(model, key.substring(0, index));
                key = key.substring(index + 1);
            }
            if (!model) {
                return;
            }
            const obj = ModelManager.modelMap.get(model);
            if (!obj['watchers']) {
                obj['watchers'] = new Map();
            }
            let map = obj['watchers'];
            if (!map.has(key)) {
                map.set(key, new Map());
            }
            map.get(key).set(operate, mids);
            //添加到撤销数组
            arr.push({ m: model, k: key, f: operate });
            //深度监听
            if (deep && model[key] && typeof model[key] === 'object') {
                for (let k of Object.keys(model[key])) {
                    if (typeof model[key][k] !== 'function') {
                        watchOne(model[key], k, operate);
                    }
                }
            }
        }
    }
    /**
     * 查询model子属性
     * @param key       属性名，可以分级，如 name.firstName
     * @param model     模型
     * @returns         属性对应model proxy
     */
    static get(model, key) {
        if (key) {
            if (key.indexOf('.') !== -1) { //层级字段
                let arr = key.split('.');
                for (let i = 0; i < arr.length - 1; i++) {
                    model = model[arr[i]];
                    if (!model) {
                        break;
                    }
                }
                if (!model) {
                    return;
                }
                key = arr[arr.length - 1];
            }
            model = model[key];
        }
        return model;
    }
    /**
     * 设置值
     * @param model     模型
     * @param key       子属性，可以分级，如 name.firstName
     * @param value     属性值
     */
    static set(model, key, value) {
        if (key.indexOf('.') !== -1) { //层级字段
            let arr = key.split('.');
            for (let i = 0; i < arr.length - 1; i++) {
                //不存在，则创建新的model
                if (!model[arr[i]]) {
                    model[arr[i]] = {};
                }
                model = model[arr[i]];
            }
            key = arr[arr.length - 1];
        }
        model[key] = value;
    }
    /**
     * 判断一个对象是否为model（proxy）
     * @param model     待检测对象
     * @returns         true/false
     */
    static isModel(model) {
        return model !== undefined && model !== null && model.___source !== undefined;
    }
}
/**
 * 数据map
 * {data:model}，
 * 其中：
 *      data:       初始数据对象
 *      model:      model对象
 *
 */
ModelManager.dataMap = new WeakMap();
/**
 * 模型map
 * {model:{key:,modules:,watchers:}}
 * 其中：
 *  key:        model key
 *  modules:    该model对象绑定的模块id数组
 *  watchers:   model对应监听器map {prop:{foo:modules}}
 *               其中：prop为被监听属性，foo为监听器方法，modules为被监听属性所影响的模块数组
 */
ModelManager.modelMap = new Map();
/**
 * 用于保存bindToModule时的子对象对应mids
 * {data:[mids]}
 * 其中：
 *  data:   data object
 *  mids:   moduleid 数组
 */
ModelManager.tempMap = new WeakMap();

/**
 * 路由类
 */
class Route {
    /**
     *
     * @param config 路由配置项
     */
    constructor(config, parent) {
        /**
         * 路由参数名数组
         */
        this.params = [];
        /**
         * 路由参数数据
         */
        this.data = {};
        /**
         * 子路由
         */
        this.children = [];
        if (!config || Util.isEmpty(config.path)) {
            return;
        }
        this.id = Util.genId();
        //参数赋值
        for (let o of Object.keys(config)) {
            this[o] = config[o];
        }
        this.parent = parent;
        //解析路径
        if (this.path) {
            this.parse();
        }
        if (parent) {
            parent.addChild(this);
        }
        //子路由
        if (config.routes && Array.isArray(config.routes)) {
            config.routes.forEach((item) => {
                new Route(item, this);
            });
        }
    }
    /**
     * 添加子路由
     * @param child
     */
    addChild(child) {
        this.children.push(child);
        child.parent = this;
    }
    /**
     * 通过路径解析路由对象
     */
    parse() {
        let pathArr = this.path.split('/');
        let node = this.parent;
        let param = [];
        let paramIndex = -1; //最后一个参数开始
        let prePath = ''; //前置路径
        for (let i = 0; i < pathArr.length; i++) {
            let v = pathArr[i].trim();
            if (v === '') {
                pathArr.splice(i--, 1);
                continue;
            }
            if (v.startsWith(':')) { //参数
                if (param.length === 0) {
                    paramIndex = i;
                }
                param.push(v.substring(1));
            }
            else {
                paramIndex = -1;
                param = []; //上级路由的参数清空
                this.path = v; //暂存path
                let j = 0;
                for (; j < node.children.length; j++) {
                    let r = node.children[j];
                    if (r.path === v) {
                        node = r;
                        break;
                    }
                }
                //没找到，创建新节点
                if (j === node.children.length) {
                    if (prePath !== '') {
                        new Route({ path: prePath }, node);
                        node = node.children[node.children.length - 1];
                    }
                    prePath = v;
                }
            }
            //不存在参数
            this.params = paramIndex === -1 ? [] : param;
        }
    }
    /**
     * 克隆
     * @returns 克隆对象
     */
    clone() {
        let r = new Route();
        Object.getOwnPropertyNames(this).forEach(item => {
            if (item === 'data') {
                return;
            }
            r[item] = this[item];
        });
        if (this.data) {
            r.data = Util.clone(this.data);
        }
        return r;
    }
}

/**
 * 模块状态类型
 */
var EModuleState;
(function (EModuleState) {
    /**
     * 准备好，可渲染
     */
    EModuleState[EModuleState["READY"] = 1] = "READY";
    /**
     * 未挂载到html dom
     */
    EModuleState[EModuleState["UNMOUNTED"] = 3] = "UNMOUNTED";
    /**
     * 已挂载到dom树
     */
    EModuleState[EModuleState["MOUNTED"] = 4] = "MOUNTED";
})(EModuleState || (EModuleState = {}));

/**
 * 路由管理类
 * @since 	1.0
 */
class Router {
    /**
     * 把路径加入跳转列表(准备跳往该路由)
     * @param path 	路径
     */
    static go(path) {
        //相同路径不加入
        if (path === this.currentPath) {
            return;
        }
        //添加路径到等待列表，已存在，不加入
        if (this.waitList.indexOf(path) === -1) {
            this.waitList.push(path);
        }
        //延迟加载，避免同一个路径多次加入
        setTimeout(() => {
            this.load();
        }, 0);
    }
    /**
     * 启动加载
     */
    static load() {
        //在加载，或无等待列表，则返回
        if (this.waitList.length === 0) {
            return;
        }
        let path = this.waitList.shift();
        this.start(path).then(() => {
            //继续加载
            this.load();
        });
    }
    /**
     * 切换路由
     * @param path 	路径
     */
    static start(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let diff = this.compare(this.currentPath, path);
            // 当前路由依赖的容器模块
            let parentModule;
            if (diff[0] === null) {
                parentModule = ModuleFactory.getMain();
            }
            else {
                parentModule = yield this.getModule(diff[0]);
            }
            //onleave事件，从末往前执行
            for (let i = diff[1].length - 1; i >= 0; i--) {
                const r = diff[1][i];
                if (!r.module) {
                    continue;
                }
                let module = yield this.getModule(r);
                if (Util.isFunction(this.onDefaultLeave)) {
                    this.onDefaultLeave(module.model);
                }
                if (Util.isFunction(r.onLeave)) {
                    r.onLeave(module.model);
                }
                // 清理map映射
                this.activeFieldMap.delete(module.id);
                //module置为不激活
                // module.unactive();
                // 取消挂载
                module.unmount();
            }
            if (diff[2].length === 0) { //路由相同，参数不同
                let route = diff[0];
                if (route !== null) {
                    let module = yield this.getModule(route);
                    // 模块处理
                    this.dependHandle(module, route, diff[3] ? diff[3].module : null);
                }
            }
            else { //路由不同
                //加载模块
                for (let ii = 0; ii < diff[2].length; ii++) {
                    let route = diff[2][ii];
                    //路由不存在或路由没有模块（空路由）
                    if (!route || !route.module) {
                        continue;
                    }
                    let module = yield this.getModule(route);
                    // 模块处理
                    this.dependHandle(module, route, parentModule);
                    //默认全局路由enter事件
                    if (Util.isFunction(this.onDefaultEnter)) {
                        this.onDefaultEnter(module.model);
                    }
                    //当前路由进入事件
                    if (Util.isFunction(route.onEnter)) {
                        route.onEnter(module.model);
                    }
                    parentModule = module;
                }
            }
            //如果是history popstate，则不加入history
            if (this.startStyle === 0) {
                let path1 = (Router.basePath || '') + path;
                //子路由，替换state
                if (path.startsWith(this.currentPath)) {
                    history.replaceState(path1, '', path1);
                }
                else { //路径push进history
                    history.pushState(path1, '', path1);
                }
            }
            //修改currentPath
            this.currentPath = path;
            //设置start类型为正常start
            this.startStyle = 0;
        });
    }
    /*
     * 重定向
     * @param path 	路径
     */
    static redirect(path) {
        this.go(path);
    }
    /**
     * 获取module
     * @param route 路由对象
     * @returns     路由对应模块
     */
    static getModule(route) {
        return __awaiter(this, void 0, void 0, function* () {
            let module = route.module;
            //已经是模块实例
            if (typeof module === 'object') {
                return module;
            }
            //非模块类，是加载函数
            if (!module.__proto__.name) {
                const m = yield module();
                //通过import的模块，查找模块类
                for (let k of Object.keys(m)) {
                    if (m[k].name) {
                        module = m[k];
                        break;
                    }
                }
            }
            //模块类
            if (typeof module === 'function') {
                module = ModuleFactory.get(module);
            }
            route.module = module;
            return module;
        });
    }
    /**
     * 比较两个路径对应的路由链
     * @param path1 	第一个路径
     * @param path2 	第二个路径
     * @returns 		数组 [父路由或不同参数的路由，第一个需要销毁的路由数组，第二个需要增加的路由数组，不同参数路由的父路由]
     */
    static compare(path1, path2) {
        // 获取路由id数组
        let arr1 = null;
        let arr2 = null;
        if (path1) {
            //采用克隆方式复制，避免被第二个路径返回的路由覆盖参数
            arr1 = this.getRouteList(path1, true);
        }
        if (path2) {
            arr2 = this.getRouteList(path2);
        }
        let len = 0;
        if (arr1 !== null) {
            len = arr1.length;
        }
        if (arr2 !== null) {
            if (arr2.length < len) {
                len = arr2.length;
            }
        }
        else {
            len = 0;
        }
        //需要销毁的旧路由数组
        let retArr1 = [];
        //需要加入的新路由数组
        let retArr2 = [];
        let i = 0;
        for (i = 0; i < len; i++) {
            //找到不同路由开始位置
            if (arr1[i].id === arr2[i].id) {
                //比较参数
                if (JSON.stringify(arr1[i].data) !== JSON.stringify(arr2[i].data)) {
                    i++;
                    break;
                }
            }
            else {
                break;
            }
        }
        //旧路由改变数组
        if (arr1 !== null) {
            retArr1 = arr1.slice(i);
        }
        //新路由改变数组（相对于旧路由）
        if (arr2 !== null) {
            retArr2 = arr2.slice(i);
        }
        //上一级路由或参数不同的当前路由
        let p1 = null;
        //上二级路由或参数不同路由的上一级路由
        let p2 = null;
        if (arr2 && i > 0) {
            // 可能存在空路由，需要向前遍历
            for (let j = i - 1; j >= 0; j--) {
                if (!p1) {
                    if (arr2[j].module) {
                        p1 = arr2[j];
                        continue;
                    }
                }
                else if (!p2) {
                    if (arr2[j].module) {
                        p2 = arr2[j];
                        break;
                    }
                }
            }
        }
        return [p1, retArr1, retArr2, p2];
    }
    /**
     * 添加激活字段
     * @param module    模块
     * @param path      路由路径
     * @param model     激活字段所在model
     * @param field     字段名
     */
    static addActiveField(module, path, model, field) {
        if (!model || !field) {
            return;
        }
        let arr = Router.activeFieldMap.get(module.id);
        if (!arr) { //尚未存在，新建
            Router.activeFieldMap.set(module.id, [{ path: path, model: model, field: field }]);
        }
        else if (arr.find(item => item.model === model && item.field === field) === undefined) { //不重复添加
            arr.push({ path: path, model: model, field: field });
        }
    }
    /**
     * 依赖模块相关处理
     * @param module 	模块
     * @param pm        依赖模块
     * @param path 		view对应的route路径
     */
    static dependHandle(module, route, pm) {
        const me = this;
        //设置参数
        let o = {
            path: route.path
        };
        if (!Util.isEmpty(route.data)) {
            o['data'] = route.data;
        }
        module.model['$route'] = o;
        if (pm) {
            if (pm.state === EModuleState.MOUNTED) { //被依赖已挂载在html dom树中
                module.setContainer(pm.getElement(Router.routerKeyMap.get(pm.id)));
                //激活
                module.active();
                this.setDomActive(pm, route.fullPath);
            }
            else { //被依赖模块不处于被渲染后状态
                if (pm['onMount']) {
                    const foo = pm['onMount'];
                    pm['onMount'] = (model) => {
                        foo(model);
                        module.setContainer(pm.getElement(Router.routerKeyMap.get(pm.id)));
                        //激活
                        module.active();
                        me.setDomActive(pm, route.fullPath);
                        //还原onMount方法
                        pm['onMount'] = foo;
                    };
                }
                else {
                    pm['onMount'] = (model) => {
                        module.setContainer(pm.getElement(Router.routerKeyMap.get(pm.id)));
                        //激活
                        module.active();
                        me.setDomActive(pm, route.fullPath);
                        //只执行一次
                        delete pm['onMount'];
                    };
                }
            }
        }
    }
    /**
     * 设置路由元素激活属性
     * @param module    模块
     * @param path      路径
     * @returns
     */
    static setDomActive(module, path) {
        let arr = Router.activeFieldMap.get(module.id);
        if (!arr) {
            return;
        }
        for (let o of arr) {
            o.model[o.field] = o.path === path;
        }
    }
    /**
     * 获取路由数组
     * @param path 	要解析的路径
     * @param clone 是否clone，如果为false，则返回路由树的路由对象，否则返回克隆对象
     * @returns     路由对象数组
     */
    static getRouteList(path, clone) {
        if (!this.root) {
            return [];
        }
        let pathArr = path.split('/');
        let node = this.root;
        let paramIndex = 0; //参数索引
        let retArr = [];
        let fullPath = ''; //完整路径
        let preNode = this.root; //前一个节点
        for (let i = 0; i < pathArr.length; i++) {
            let v = pathArr[i].trim();
            if (v === '') {
                continue;
            }
            let find = false;
            for (let j = 0; j < node.children.length; j++) {
                if (node.children[j].path === v) {
                    //设置完整路径
                    if (preNode !== this.root) {
                        preNode.fullPath = fullPath;
                        preNode.data = node.data;
                        retArr.push(preNode);
                    }
                    //设置新的查找节点
                    node = clone ? node.children[j].clone() : node.children[j];
                    //参数清空
                    node.data = {};
                    preNode = node;
                    find = true;
                    //参数索引置0
                    paramIndex = 0;
                    break;
                }
            }
            //路径叠加
            fullPath += '/' + v;
            //不是孩子节点,作为参数
            if (!find) {
                if (paramIndex < node.params.length) { //超出参数长度的废弃
                    node.data[node.params[paramIndex++]] = v;
                }
            }
        }
        //最后一个节点
        if (node !== this.root) {
            node.fullPath = fullPath;
            retArr.push(node);
        }
        return retArr;
    }
}
/**
 * path等待链表
 */
Router.waitList = [];
/**
 * 启动方式 0:直接启动 1:popstate 启动
 */
Router.startStyle = 0;
/**
 * 激活Dom map，格式为{moduleId:[]}
 */
Router.activeFieldMap = new Map();
/**
 * 绑定到module的router指令对应的key，即router容器对应的key，格式为 {moduleId:routerKey,...}
 */
Router.routerKeyMap = new Map();
/**
 * 根路由
 */
Router.root = new Route();
//处理popstate事件
window.addEventListener('popstate', function (e) {
    //根据state切换module
    const state = history.state;
    if (!state) {
        return;
    }
    Router.startStyle = 1;
    Router.go(state);
});

/**
 * 调度器，用于每次空闲的待操作序列调度
 */
class Scheduler {
    static dispatch() {
        Scheduler.tasks.forEach((item) => {
            if (Util.isFunction(item.func)) {
                if (item.thiser) {
                    item.func.call(item.thiser);
                }
                else {
                    item.func();
                }
            }
        });
    }
    /**
     * 启动调度器
     * @param scheduleTick 	渲染间隔
     */
    static start(scheduleTick) {
        Scheduler.dispatch();
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(Scheduler.start);
        }
        else {
            window.setTimeout(Scheduler.start, scheduleTick || 50);
        }
    }
    /**
     * 添加任务
     * @param foo 		任务和this指向
     * @param thiser 	this指向
     */
    static addTask(foo, thiser) {
        if (!Util.isFunction(foo)) {
            throw new NError("invoke", "Scheduler.addTask", "0", "function");
        }
        Scheduler.tasks.push({ func: foo, thiser: thiser });
    }
    /**
     * 移除任务
     * @param foo 	任务
     */
    static removeTask(foo) {
        if (!Util.isFunction(foo)) {
            throw new NError("invoke", "Scheduler.removeTask", "0", "function");
        }
        let ind = -1;
        if ((ind = Scheduler.tasks.indexOf(foo)) !== -1) {
            Scheduler.tasks.splice(ind, 1);
        }
    }
}
Scheduler.tasks = [];

/**
 * nodom提示消息
 */
var NodomMessage;
/**
 * 新建一个App
 * @param clazz     模块类
 * @param el        el选择器
 * @param language  语言（zh,en），默认zh
 */
function nodom(clazz, el, language) {
    return __awaiter(this, void 0, void 0, function* () {
        //设置nodom语言
        switch (language || 'zh') {
            case 'zh':
                NodomMessage = NodomMessage_zh;
                break;
            case 'en':
                NodomMessage = NodomMessage_en;
        }
        //渲染器启动渲染
        Scheduler.addTask(Renderer.render, Renderer);
        //启动调度器
        Scheduler.start();
        let mdl = ModuleFactory.get(clazz);
        mdl.setContainer(document.querySelector(el));
        mdl.active();
    });
}
/**
 * 暴露的创建路由方法
 * @param config  数组或单个配置
 */
function createRoute(config, parent) {
    let route;
    parent = parent || Router.root;
    if (Util.isArray(config)) {
        for (let item of config) {
            route = new Route(item, parent);
        }
    }
    else {
        route = new Route(config, parent);
    }
    return route;
}
/**
 * 创建指令
 * @param name      指令名
 * @param priority  优先级（1最小，1-10为框架保留优先级）
 * @param init      初始化方法
 * @param handler   渲染时方法
 */
function createDirective(name, handler, priority) {
    return DirectiveManager.addType(name, handler, priority);
}
/**
 * 注册模块
 * @param clazz     模块类
 * @param name      注册名，如果没有，则为类名
 */
function registModule(clazz, name) {
    ModuleFactory.addClass(clazz, name);
}
/**
 * ajax 请求
 * @param config    object 或 string
 *                  如果为string，则直接以get方式获取资源
 *                  object 项如下:
 *                  参数名|类型|默认值|必填|可选值|描述
 *                  -|-|-|-|-|-
 *                  url|string|无|是|无|请求url
 *					method|string|GET|否|GET,POST,HEAD|请求类型
 *					params|Object/FormData|{}|否|无|参数，json格式
 *					async|bool|true|否|true,false|是否异步
 *  				timeout|number|0|否|无|请求超时时间
 *                  type|string|text|否|json,text|
 *					withCredentials|bool|false|否|true,false|同源策略，跨域时cookie保存
 *                  header|Object|无|否|无|request header 对象
 *                  user|string|无|否|无|需要认证的请求对应的用户名
 *                  pwd|string|无|否|无|需要认证的请求对应的密码
 *                  rand|bool|无|否|无|请求随机数，设置则浏览器缓存失效
 */
function request(config) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (typeof config === 'string') {
                config = {
                    url: config
                };
            }
            config.params = config.params || {};
            //随机数
            if (config.rand) { //针对数据部分，仅在app中使用
                config.params.$rand = Math.random();
            }
            let url = config.url;
            const async = config.async === false ? false : true;
            const req = new XMLHttpRequest();
            //设置同源策略
            req.withCredentials = config.withCredentials;
            //类型默认为get
            const method = (config.method || 'GET').toUpperCase();
            //超时，同步时不能设置
            req.timeout = async ? config.timeout : 0;
            req.onload = () => {
                if (req.status === 200) {
                    let r = req.responseText;
                    if (config.type === 'json') {
                        try {
                            r = JSON.parse(r);
                        }
                        catch (e) {
                            reject({ type: "jsonparse" });
                        }
                    }
                    resolve(r);
                }
                else {
                    reject({ type: 'error', url: url });
                }
            };
            req.ontimeout = () => reject({ type: 'timeout' });
            req.onerror = () => reject({ type: 'error', url: url });
            //上传数据
            let data = null;
            switch (method) {
                case 'GET':
                    //参数
                    let pa;
                    if (Util.isObject(config.params)) {
                        let ar = [];
                        for (let k of Object.keys(config.params)) {
                            const v = config.params[k];
                            if (v === undefined || v === null) {
                                continue;
                            }
                            ar.push(k + '=' + v);
                        }
                        pa = ar.join('&');
                    }
                    if (pa !== undefined) {
                        if (url.indexOf('?') !== -1) {
                            url += '&' + pa;
                        }
                        else {
                            url += '?' + pa;
                        }
                    }
                    break;
                case 'POST':
                    if (config.params instanceof FormData) {
                        data = config.params;
                    }
                    else {
                        let fd = new FormData();
                        for (let k of Object.keys(config.params)) {
                            const v = config.params[k];
                            if (v === undefined || v === null) {
                                continue;
                            }
                            fd.append(k, v);
                        }
                        data = fd;
                    }
                    break;
            }
            req.open(method, url, async, config.user, config.pwd);
            //设置request header
            if (config.header) {
                Util.getOwnProps(config.header).forEach((item) => {
                    req.setRequestHeader(item, config.header[item]);
                });
            }
            req.send(data);
        }).catch((re) => {
            switch (re.type) {
                case "error":
                    throw new NError("notexist1", NodomMessage.TipWords['resource'], re.url);
                case "timeout":
                    throw new NError("timeout");
                case "jsonparse":
                    throw new NError("jsonparse");
            }
        });
    });
}
/**
 * 观察某个数据项
 * @param model     带watch的model
 * @param key       数据项名或数组
 * @param operate   数据项变化时执行方法
 * @param module    指定模块，如果指定，则表示该model绑定的所有module都会触发watch事件，在model父(模块)传子(模块)传递的是对象时会导致多个watch出发
 * @param deep      是否深度观察，如果是深度观察，则子对象更改，也会触发观察事件
 *
 * @returns         unwatch函数
 */
function watch(model, key, operate, module, deep) {
    return ModelManager.watch(model, key, operate, module, deep);
}
/**
 * 获取模型key
 * @param model     模型
 * @returns         模型key
 */
function getmkey(model) {
    return ModelManager.getModelKey(model);
}
/**
 * 设置值
 * @param model     模型
 * @param key       子属性，可以分级，如 name.firstName
 * @param value     属性值
 */
function $set(model, key, value) {
    return ModelManager.set(model, key, value);
}
/**
 * 查询model子属性
 * @param model     模型
 * @param key       属性名，可以分级，如 name.firstName，如果为null，则返回自己
 * @returns         属性对应model proxy
 */
function $get(model, key) {
    return ModelManager.get(model, key);
}

/**
 * 异常处理类
 * @since       1.0.0
 */
class NError extends Error {
    constructor(errorName, p1, p2, p3, p4) {
        super(errorName);
        let msg = NodomMessage.ErrorMsgs[errorName];
        if (msg === undefined) {
            this.message = "未知错误";
            return;
        }
        //复制请求参数
        let params = [msg];
        for (let i = 1; i < arguments.length; i++) {
            params.push(arguments[i]);
        }
        this.message = this.compile.apply(null, params);
    }
    /**
     * 编译字符串，把{n}替换成带入值
     * @param src   待编译的字符串
     * @returns     转换后的消息
     */
    compile(src, p1, p2, p3, p4, p5) {
        let reg;
        let args = arguments;
        let index = 0;
        for (;;) {
            if (src.indexOf('\{' + index + '\}') !== -1) {
                reg = new RegExp('\\{' + index + '\\}', 'g');
                src = src.replace(reg, args[index + 1]);
                index++;
            }
            else {
                break;
            }
        }
        return src;
    }
}

/**
 * 基础服务库
 * @since       1.0.0
 */
class Util {
    /**
     * 唯一主键
     */
    static genId() {
        return this.generatedId++;
    }
    /**
     * 初始化保留字map
     */
    static initKeyMap() {
        this.keyWordMap.set('arguments', true);
        this.keyWordMap.set('boolean', true);
        this.keyWordMap.set('break', true);
        this.keyWordMap.set('byte', true);
        this.keyWordMap.set('catch', true);
        this.keyWordMap.set('char', true);
        this.keyWordMap.set('const', true);
        this.keyWordMap.set('default', true);
        this.keyWordMap.set('delete', true);
        this.keyWordMap.set('do', true);
        this.keyWordMap.set('double', true);
        this.keyWordMap.set('else', true);
        this.keyWordMap.set('enum', true);
        this.keyWordMap.set('eval', true);
        this.keyWordMap.set('false', true);
        this.keyWordMap.set('float', true);
        this.keyWordMap.set('for', true);
        this.keyWordMap.set('function', true);
        this.keyWordMap.set('goto', true);
        this.keyWordMap.set('if', true);
        this.keyWordMap.set('in', true);
        this.keyWordMap.set('instanceof', true);
        this.keyWordMap.set('int', true);
        this.keyWordMap.set('let', true);
        this.keyWordMap.set('long', true);
        this.keyWordMap.set('new', true);
        this.keyWordMap.set('null', true);
        this.keyWordMap.set('return', true);
        this.keyWordMap.set('short', true);
        this.keyWordMap.set('switch', true);
        this.keyWordMap.set('this', true);
        this.keyWordMap.set('throw', true);
        this.keyWordMap.set('true', true);
        this.keyWordMap.set('try', true);
        this.keyWordMap.set('this', true);
        this.keyWordMap.set('throw', true);
        this.keyWordMap.set('typeof', true);
        this.keyWordMap.set('var', true);
        this.keyWordMap.set('while', true);
        this.keyWordMap.set('with', true);
        this.keyWordMap.set('Array', true);
        this.keyWordMap.set('Date', true);
        this.keyWordMap.set('JSON', true);
        this.keyWordMap.set('Set', true);
        this.keyWordMap.set('Map', true);
        this.keyWordMap.set('eval', true);
        this.keyWordMap.set('function', true);
        this.keyWordMap.set('Infinity', true);
        this.keyWordMap.set('isFinite', true);
        this.keyWordMap.set('isNaN', true);
        this.keyWordMap.set('isPrototypeOf', true);
        this.keyWordMap.set('Math', true);
        this.keyWordMap.set('NaN', true);
        this.keyWordMap.set('Number', true);
        this.keyWordMap.set('Object', true);
        this.keyWordMap.set('prototype', true);
        this.keyWordMap.set('String', true);
        this.keyWordMap.set('isPrototypeOf', true);
        this.keyWordMap.set('undefined', true);
        this.keyWordMap.set('valueOf', true);
    }
    /**
     * 是否为 js 保留关键字
     * @param name  名字
     * @returns     如果为保留字，则返回true，否则返回false
     */
    static isKeyWord(name) {
        return this.keyWordMap.has(name);
    }
    /******对象相关******/
    /**
     * 对象复制
     * @param srcObj    源对象
     * @param expKey    不复制的键正则表达式或名
     * @param extra     clone附加参数
     * @returns         复制的对象
     */
    static clone(srcObj, expKey, extra) {
        let me = this;
        let map = new WeakMap();
        return clone(srcObj, expKey, extra);
        /**
         * clone对象
         * @param src      待clone对象
         * @param expKey   不克隆的键
         * @param extra    clone附加参数
         * @returns        克隆后的对象
         */
        function clone(src, expKey, extra) {
            //非对象或函数，直接返回            
            if (!src || typeof src !== 'object' || Util.isFunction(src)) {
                return src;
            }
            let dst;
            //带有clone方法，则直接返回clone值
            if (src.clone && Util.isFunction(src.clone)) {
                return src.clone(extra);
            }
            else if (me.isObject(src)) {
                dst = new Object();
                //把对象加入map，如果后面有新克隆对象，则用新克隆对象进行覆盖
                map.set(src, dst);
                Object.getOwnPropertyNames(src).forEach((prop) => {
                    //不克隆的键
                    if (expKey) {
                        if (expKey.constructor === RegExp && expKey.test(prop) //正则表达式匹配的键不复制
                            || Util.isArray(expKey) && expKey.includes(prop) //被排除的键不复制
                        ) {
                            return;
                        }
                    }
                    dst[prop] = getCloneObj(src[prop], expKey, extra);
                });
            }
            else if (me.isMap(src)) {
                dst = new Map();
                //把对象加入map，如果后面有新克隆对象，则用新克隆对象进行覆盖
                src.forEach((value, key) => {
                    //不克隆的键
                    if (expKey) {
                        if (expKey.constructor === RegExp && expKey.test(key) //正则表达式匹配的键不复制
                            || expKey.includes(key)) { //被排除的键不复制
                            return;
                        }
                    }
                    dst.set(key, getCloneObj(value, expKey, extra));
                });
            }
            else if (me.isArray(src)) {
                dst = new Array();
                //把对象加入map，如果后面有新克隆对象，则用新克隆对象进行覆盖
                src.forEach(function (item, i) {
                    dst[i] = getCloneObj(item, expKey, extra);
                });
            }
            return dst;
        }
        /**
         * 获取clone对象
         * @param value     待clone值
         * @param expKey    排除键
         * @param extra     附加参数
         */
        function getCloneObj(value, expKey, extra) {
            if (typeof value === 'object' && !Util.isFunction(value)) {
                let co = null;
                if (!map.has(value)) { //clone新对象
                    co = clone(value, expKey, extra);
                }
                else { //从map中获取对象
                    co = map.get(value);
                }
                return co;
            }
            return value;
        }
    }
    /**
     * 合并多个对象并返回
     * @param   参数数组
     * @returns 返回对象
     */
    static merge(o1, o2, o3, o4, o5, o6) {
        let me = this;
        for (let i = 0; i < arguments.length; i++) {
            if (!this.isObject(arguments[i])) {
                throw new NError('invoke', 'Util.merge', i + '', 'object');
            }
        }
        let retObj = Object.assign.apply(null, arguments);
        subObj(retObj);
        return retObj;
        //处理子对象
        function subObj(obj) {
            for (let o of Object.keys(obj)) {
                if (me.isObject(obj[o]) || me.isArray(obj[o])) { //对象或数组
                    retObj[o] = me.clone(retObj[o]);
                }
            }
        }
    }
    /**
     * 把obj2对象所有属性赋值给obj1
     * @returns 返回对象obj1
     */
    static assign(obj1, obj2) {
        if (Object.assign) {
            Object.assign(obj1, obj2);
        }
        else {
            this.getOwnProps(obj2).forEach(function (p) {
                obj1[p] = obj2[p];
            });
        }
        return obj1;
    }
    /**
     * 比较两个对象值是否相同(只比较object和array)
     * @param src   源对象
     * @param dst   目标对象
     * @returns     值相同则返回true，否则返回false
     */
    static compare(src, dst, deep) {
        if (!src && !dst) {
            return true;
        }
        if (typeof src !== 'object' || typeof dst !== 'object') {
            return false;
        }
        const keys = Object.getOwnPropertyNames(src);
        if (keys.length !== Object.getOwnPropertyNames(dst).length) {
            return false;
        }
        for (let k of keys) {
            if (src[k] !== dst[k]) {
                return false;
            }
        }
        //深度比较
        if (deep) {
            for (let k of keys) {
                let r = this.compare(src[k], dst[k]);
                if (!r) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * 获取对象自有属性
     * @param obj   需要获取属性的对象
     * @returns     返回属性数组
     */
    static getOwnProps(obj) {
        if (!obj) {
            return [];
        }
        return Object.getOwnPropertyNames(obj);
    }
    /**************对象判断相关************/
    /**
     * 判断是否为函数
     * @param foo   检查的对象
     * @returns     true/false
     */
    static isFunction(foo) {
        return foo !== undefined && foo !== null && foo.constructor === Function;
    }
    /**
     * 判断是否为数组
     * @param obj   检查的对象
     * @returns     true/false
     */
    static isArray(obj) {
        return Array.isArray(obj);
    }
    /**
     * 判断是否为map
     * @param obj   检查的对象
     */
    static isMap(obj) {
        return obj !== null && obj !== undefined && obj.constructor === Map;
    }
    /**
     * 判断是否为对象
     * @param obj   检查的对象
     * @returns     true/false
     */
    static isObject(obj) {
        return obj !== null && obj !== undefined && obj.constructor === Object;
    }
    /**
     * 判断是否为整数
     * @param v     检查的值
     * @returns     true/false
     */
    static isInt(v) {
        return Number.isInteger(v);
    }
    /**
     * 判断是否为number
     * @param v     检查的值
     * @returns     true/false
     */
    static isNumber(v) {
        return typeof v === 'number';
    }
    /**
     * 判断是否为boolean
     * @param v     检查的值
     * @returns     true/false
     */
    static isBoolean(v) {
        return typeof v === 'boolean';
    }
    /**
     * 判断是否为字符串
     * @param v     检查的值
     * @returns     true/false
     */
    static isString(v) {
        return typeof v === 'string';
    }
    /**
     * 判断是否为数字串
     * @param v     检查的值
     * @returns     true/false
     */
    static isNumberString(v) {
        return /^\d+\.?\d*$/.test(v);
    }
    /**
     * 判断对象/字符串是否为空
     * @param obj   检查的对象
     * @returns     true/false
     */
    static isEmpty(obj) {
        if (obj === null || obj === undefined)
            return true;
        let tp = typeof obj;
        if (this.isObject(obj)) {
            let keys = Object.keys(obj);
            if (keys !== undefined) {
                return keys.length === 0;
            }
        }
        else if (tp === 'string') {
            return obj === '';
        }
        return false;
    }
    /**
     * 把srcNode替换为nodes
     * @param srcNode       源dom
     * @param nodes         替换的dom或dom数组
     */
    static replaceNode(srcNode, nodes) {
        let pnode = srcNode.parentNode;
        let bnode = srcNode.nextSibling;
        if (pnode === null) {
            return;
        }
        pnode.removeChild(srcNode);
        const nodeArr = this.isArray(nodes) ? nodes : [nodes];
        nodeArr.forEach(function (node) {
            if (bnode === undefined || bnode === null) {
                pnode.appendChild(node);
            }
            else {
                pnode.insertBefore(node, bnode);
            }
        });
    }
    /**
     * 清空子节点
     * @param el   需要清空的节点
     */
    static empty(el) {
        let nodes = el.childNodes;
        for (let i = nodes.length - 1; i >= 0; i--) {
            el.removeChild(nodes[i]);
        }
    }
    /******日期相关******/
    /**
     * 日期格式化
     * @param timestamp  时间戳
     * @param format     日期格式
     * @returns          日期串
     */
    static formatDate(timeStamp, format) {
        if (this.isString(timeStamp)) {
            //排除日期格式串,只处理时间戳
            let reg = /^\d+$/;
            if (reg.test(timeStamp)) {
                timeStamp = Number(timeStamp);
            }
            else {
                throw new NError('invoke', 'Util.formatDate', '0', 'date string', 'date');
            }
        }
        //得到日期
        let date = new Date(timeStamp);
        // invalid date
        if (isNaN(date.getDay())) {
            throw new NError('invoke', 'Util.formatDate', '0', 'date string', 'date');
        }
        let o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "H+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "S": date.getMilliseconds() //毫秒
        };
        let re;
        //年
        if (re = /(y+)/.exec(format)) {
            format = format.replace(re[0], (date.getFullYear() + "").substring(4 - re[0].length));
        }
        //月日
        this.getOwnProps(o).forEach(function (k) {
            if (re = new RegExp("(" + k + ")").exec(format)) {
                format = format.replace(re[0], re[0].length === 1 ? o[k] : ("00" + o[k]).substring((o[k] + '').length));
            }
        });
        //星期
        format = format.replace(/(E+)/, NodomMessage.WeekDays[date.getDay() + ""]);
        return format;
    }
    /******字符串相关*****/
    /**
     * 编译字符串，把{n}替换成带入值
     * @param src   待编译的字符串
     * @returns     转换后的消息
     */
    static compileStr(src, p1, p2, p3, p4, p5) {
        let reg;
        let args = arguments;
        let index = 0;
        for (;;) {
            if (src.indexOf('\{' + index + '\}') !== -1) {
                reg = new RegExp('\\{' + index + '\\}', 'g');
                src = src.replace(reg, args[index + 1]);
                index++;
            }
            else {
                break;
            }
        }
        return src;
    }
    /**
     * 函数调用
     * @param foo   函数
     * @param obj   this指向
     * @param args  参数数组
     */
    static apply(foo, obj, args) {
        if (!foo) {
            return;
        }
        return Reflect.apply(foo, obj || null, args);
    }
    /**
     * 合并并修正路径，即路径中出现'//','///','\/'的情况，统一置换为'/'
     * @param paths     待合并路径数组
     * @returns         返回路径
     */
    static mergePath(paths) {
        return paths.join('/').replace(/(\/{2,})|\\\//g, '\/');
    }
    /**
     * eval
     * @param evalStr   eval串
     * @returns         eval值
     */
    static eval(evalStr) {
        return new Function(`return(${evalStr})`)();
    }
    /**
     * 改造 dom key，避免克隆时重复，格式为：key_id
     * @param node    节点
     * @param id      附加id
     * @param deep    是否深度处理
     */
    static setNodeKey(node, id, deep) {
        node.key += '_' + (id || Util.genId());
        if (deep && node.children) {
            for (let c of node.children) {
                Util.setNodeKey(c, id, deep);
            }
        }
    }
    /**
     * 设置dom asset
     * @param dom       渲染后的dom节点
     * @param name      asset name
     * @param value     asset value
     */
    static setDomAsset(dom, name, value) {
        if (!dom.assets) {
            dom.assets = {};
        }
        dom.assets[name] = value;
    }
    /**
     * 删除dom asset
     * @param dom   渲染后的dom节点
     * @param name  asset name
     * @returns
     */
    static delDomAsset(dom, name) {
        if (!dom.assets) {
            return;
        }
        delete dom.assets[name];
    }
}
/**
 * 全局id
 */
Util.generatedId = 1;
/**
 * js 保留字 map
 */
Util.keyWordMap = new Map();
//初始化keymap
Util.initKeyMap();

/**
 * 指令类
 */
class Directive {
    /**
     * 构造方法
     * @param type  	类型名
     * @param value 	指令值
     */
    constructor(type, value) {
        this.id = Util.genId();
        if (type) {
            this.type = DirectiveManager.getType(type);
            if (!this.type) {
                throw new NError('notexist1', NodomMessage.TipWords['directive'], type);
            }
        }
        if (Util.isString(value)) {
            this.value = value.trim();
        }
        else if (value instanceof Expression) {
            this.expression = value;
        }
        else {
            this.value = value;
        }
    }
    /**
     * 执行指令
     * @param module    模块
     * @param dom       渲染目标节点对象
     * @returns         true/false
     */
    exec(module, dom) {
        //禁用，不执行
        if (this.disabled) {
            return true;
        }
        if (this.expression) {
            this.value = this.expression.val(module, dom.model);
        }
        return this.type.handle.apply(this, [module, dom]);
    }
    /**
     * 克隆
     */
    clone() {
        let d = new Directive();
        d.type = this.type;
        d.expression = this.expression;
        d.value = this.value;
        return d;
    }
}

/**
 * 虚拟dom
 */
class VirtualDom {
    /**
     * @param tag       标签名
     * @param key       key
     */
    constructor(tag, key, module) {
        /**
         * staticNum 静态标识数
         *  0 表示静态，不进行比较
         *  > 0 每次比较后-1
         *  < 0 不处理
         */
        this.staticNum = 0;
        /**
         * 对应的所有表达式的字段都属于dom model内
         */
        this.allModelField = true;
        this.key = key || ((module ? module.getDomKeyId() : Util.genId()) + '');
        if (tag) {
            this.tagName = tag;
        }
    }
    /**
     * 移除多个指令
     * @param directives 	待删除的指令类型数组或指令类型
     * @returns             如果虚拟dom上的指令集为空，则返回void
     */
    removeDirectives(directives) {
        if (!this.directives) {
            return;
        }
        //数组
        directives.forEach(d => {
            this.removeDirective(d);
        });
    }
    /**
     * 移除指令
     * @param directive 	待删除的指令类型名
     * @returns             如果虚拟dom上的指令集为空，则返回void
     */
    removeDirective(directive) {
        if (!this.directives) {
            return;
        }
        let ind;
        if ((ind = this.directives.findIndex(item => item.type.name === directive)) !== -1) {
            this.directives.splice(ind, 1);
        }
        if (this.directives.length === 0) {
            delete this.directives;
        }
    }
    /**
     * 添加指令
     * @param directive     指令对象
     * @param sort          是否排序
     * @returns             如果虚拟dom上的指令集不为空，且指令集中已经存在传入的指令对象，则返回void
     */
    addDirective(directive, sort) {
        if (!this.directives) {
            this.directives = [];
        }
        else if (this.directives.find(item => item.type.name === directive.type.name)) {
            return;
        }
        this.directives.push(directive);
        //指令按优先级排序
        if (sort) {
            this.sortDirective();
        }
    }
    /**
     * 指令排序
     * @returns           如果虚拟dom上指令集为空，则返回void
     */
    sortDirective() {
        if (!this.directives) {
            return;
        }
        if (this.directives.length > 1) {
            this.directives.sort((a, b) => {
                return DirectiveManager.getType(a.type.name).prio < DirectiveManager.getType(b.type.name).prio ? -1 : 1;
            });
        }
    }
    /**
     * 是否有某个类型的指令
     * @param typeName 	    指令类型名
     * @returns             如果指令集不为空，且含有传入的指令类型名则返回true，否则返回false
     */
    hasDirective(typeName) {
        return this.directives && this.directives.findIndex(item => item.type.name === typeName) !== -1;
    }
    /**
     * 获取某个类型的指令
     * @param module            模块
     * @param directiveType 	指令类型名
     * @returns                 如果指令集为空，则返回void；否则返回指令类型名等于传入参数的指令对象
     */
    getDirective(directiveType) {
        if (!this.directives) {
            return;
        }
        return this.directives.find(item => item.type.name === directiveType);
    }
    /**
     * 添加子节点
     * @param dom       子节点
     * @param index     指定位置，如果不传此参数，则添加到最后
     */
    add(dom, index) {
        if (!this.children) {
            this.children = [];
        }
        if (index) {
            this.children.splice(index, 0, dom);
        }
        else {
            this.children.push(dom);
        }
        dom.parent = this;
    }
    /**
     * 移除子节点
     * @param dom   子节点
     */
    remove(dom) {
        let index = this.children.indexOf(dom);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
    /**
     * 添加css class
     * @param cls class名或表达式,可以多个，以“空格”分割
     */
    addClass(cls) {
        this.addProp('class', cls);
        //需要从remove class map 移除
        if (this.removedClassMap && this.removedClassMap.size > 0) {
            let arr = cls.trim().split(/\s+/);
            for (let a of arr) {
                if (a === '') {
                    continue;
                }
                this.removedClassMap.delete(a);
            }
        }
    }
    /**
     * 删除css class，因为涉及到表达式，此处只记录删除标识
     * @param cls class名,可以多个，以“空格”分割
     */
    removeClass(cls) {
        let pv = this.getProp('class');
        if (!pv) {
            return;
        }
        if (!this.removedClassMap) {
            this.removedClassMap = new Map();
        }
        let arr = cls.trim().split(/\s+/);
        for (let a of arr) {
            if (a === '') {
                continue;
            }
            this.removedClassMap.set(a, true);
        }
        this.setStaticOnce();
    }
    /**
     * 获取class串
     * @returns class 串
     */
    getClassString(values) {
        let clsArr = [];
        for (let pv of values) {
            let arr = pv.trim().split(/\s+/);
            for (let a of arr) {
                if (!this.removedClassMap || !this.removedClassMap.has(a)) {
                    if (!clsArr.includes(a)) {
                        clsArr.push(a);
                    }
                }
            }
        }
        if (clsArr.length > 0) {
            return clsArr.join(' ');
        }
    }
    /**
     * 添加style
     *  @param style style字符串或表达式
     */
    addStyle(style) {
        this.addProp('style', style);
        if (typeof style === 'string') {
            //需要从remove class map 移除
            if (this.removedStyleMap && this.removedStyleMap.size > 0) {
                let arr = style.trim().split(/\s*;\s*/);
                for (let a of arr) {
                    if (a === '') {
                        continue;
                    }
                    let sa1 = a.split(/\s*:\s*/);
                    let p = sa1[0].trim();
                    if (p !== '') {
                        this.removedClassMap.delete(sa1[0].trim());
                    }
                }
            }
        }
    }
    /**
     * 删除style
     * @param styleStr style字符串，多个style以空格' '分割
     */
    removeStyle(styleStr) {
        if (!this.removedClassMap) {
            this.removedClassMap = new Map();
        }
        let arr = styleStr.trim().split(/\s+/);
        for (let a of arr) {
            if (a === '') {
                continue;
            }
            this.removedClassMap.set(a, true);
        }
        this.setStaticOnce();
    }
    /**
     * 获取style串
     * @returns style 串
     */
    getStyleString(values) {
        let map = new Map();
        for (let pv of values) {
            let sa = pv.trim().split(/\s*;\s*/);
            for (let s of sa) {
                if (s === '') {
                    continue;
                }
                let sa1 = s.split(/\s*:\s*/);
                //不在移除style map才能加入
                if (!this.removedStyleMap || !this.removedStyleMap.has(sa1[0])) {
                    map.set(sa1[0], sa1[1]);
                }
            }
        }
        if (map.size > 0) {
            return [...map].map(item => item.join(':')).join(';');
        }
    }
    /**
     * 是否拥有属性
     * @param propName  属性名
     * @param isExpr    是否只检查表达式属性
     * @returns         如果属性集含有传入的属性名返回true，否则返回false
     */
    hasProp(propName) {
        if (this.props) {
            return this.props.has(propName);
        }
    }
    /**
     * 获取属性值
     * @param propName  属性名
     * @param isExpr    是否只获取表达式属性
     * @returns         传入属性名的value
     */
    getProp(propName, isExpr) {
        if (this.props) {
            return this.props.get(propName);
        }
    }
    /**
     * 设置属性值
     * @param propName  属性名
     * @param v         属性值
     */
    setProp(propName, v) {
        if (!this.props) {
            this.props = new Map();
        }
        if (propName === 'style') {
            if (this.removedStyleMap) { //清空removedStyleMap
                this.removedStyleMap.clear();
            }
        }
        else if (propName === 'class') {
            if (this.removedClassMap) { //清空removedClassMap
                this.removedClassMap.clear();
            }
        }
        this.props.set(propName, v);
    }
    /**
     * 添加属性，如果原来的值存在，则属性值变成数组
     * @param pName     属性名
     * @param pValue    属性值
     */
    addProp(pName, pValue) {
        let pv = this.getProp(pName);
        if (!pv) {
            this.setProp(pName, pValue);
        }
        else if (Array.isArray(pv)) {
            if (pv.includes(pValue)) {
                return false;
            }
            pv.push(pValue);
        }
        else if (pv !== pValue) {
            this.setProp(pName, [pv, pValue]);
        }
        else {
            return false;
        }
        this.setStaticOnce();
        return true;
    }
    /**
     * 删除属性
     * @param props     属性名或属性名数组
     * @returns         如果虚拟dom上的属性集为空，则返回void
     */
    delProp(props) {
        if (!this.props) {
            return;
        }
        if (Util.isArray(props)) {
            for (let p of props) {
                this.props.delete(p);
            }
        }
        else {
            this.props.delete(props);
        }
        //设置静态标志，至少要比较一次
        this.setStaticOnce();
    }
    /**
     * 设置asset
     * @param assetName     asset name
     * @param value         asset value
     */
    setAsset(assetName, value) {
        if (!this.assets) {
            this.assets = new Map();
        }
        this.assets.set(assetName, value);
    }
    /**
     * 删除asset
     * @param assetName     asset name
     * @returns             如果虚拟dom上的直接属性集为空，则返回void
     */
    delAsset(assetName) {
        if (!this.assets) {
            return;
        }
        this.assets.delete(assetName);
    }
    /**
     * 获取html dom
     * @param module    模块
     * @returns         对应的html dom
     */
    getEl(module) {
        return module.getElement(this.key);
    }
    /**
     * 查找子孙节点
     * @param key 	element key
     * @returns		虚拟dom/undefined
     */
    query(key) {
        if (this.key === key) {
            return this;
        }
        if (this.children) {
            for (let i = 0; i < this.children.length; i++) {
                let dom = this.children[i].query(key);
                if (dom) {
                    return dom;
                }
            }
        }
    }
    /**
     * 设置cache参数
     * @param module    模块
     * @param name      参数名
     * @param value     参数值
     */
    setParam(module, name, value) {
        module.objectManager.setDomParam(this.key, name, value);
    }
    /**
     * 获取参数值
     * @param module    模块
     * @param name      参数名
     * @returns         参数值
     */
    getParam(module, name) {
        return module.objectManager.getDomParam(this.key, name);
    }
    /**
     * 移除参数
     * @param module    模块
     * @param name      参数名
     */
    removeParam(module, name) {
        module.objectManager.removeDomParam(this.key, name);
    }
    /**
     * 设置单次静态标志
     */
    setStaticOnce() {
        if (this.staticNum !== -1) {
            this.staticNum = 1;
        }
    }
    /**
     * 克隆
     */
    clone() {
        let dst = new VirtualDom(this.tagName, this.key);
        if (this.tagName) {
            //属性
            if (this.props && this.props.size > 0) {
                for (let p of this.props) {
                    dst.setProp(p[0], p[1]);
                }
            }
            if (this.assets && this.assets.size > 0) {
                for (let p of this.assets) {
                    dst.setAsset(p[0], p[1]);
                }
            }
            if (this.directives && this.directives.length > 0) {
                dst.directives = [];
                for (let d of this.directives) {
                    dst.directives.push(d.clone());
                }
            }
            //复制事件
            dst.events = this.events;
            //子节点clone
            if (this.children) {
                for (let c of this.children) {
                    dst.add(c.clone());
                }
            }
        }
        else {
            dst.expressions = this.expressions;
            dst.textContent = this.textContent;
        }
        dst.staticNum = this.staticNum;
        return dst;
    }
    /**
     * 保存事件
     * @param key       dom key
     * @param event     事件对象
     */
    addEvent(event) {
        if (!this.events) {
            this.events = [];
        }
        this.events.push(event);
    }
}

class Compiler {
    /**
     * 构造器
     * @param module
     */
    constructor(module) {
        this.module = module;
    }
    /**
    * 编译
    * @param elementStr     待编译html串
    * @returns              虚拟dom
    */
    compile(elementStr) {
        return this.compileTemplate(elementStr);
    }
    /**
     * 编译模版串
     * @param srcStr    源串
     * @returns
     */
    compileTemplate(srcStr) {
        const me = this;
        // 清理comment
        srcStr = srcStr.replace(/\<\!\-\-[\s\S]*?\-\-\>/g, '');
        // 正则式分解标签和属性
        // const regWhole = /((?<!\\)'[\s\S]*?(?<!\\)')|((?<!\\)"[\s\S]*?(?<!\\)")|((?<!\\)`[\s\S]*?(?<!\\)`)|({{{*)|(}*}})|([\w$-]+(\s*=)?)|(<\s*[a-zA-Z][a-zA-Z0-9-_]*)|(\/?>)|(<\/\s*[a-zA-Z][a-zA-Z0-9-_]*>)/g;
        const regWhole = /('[\s\S]*?')|("[\s\S]*?")|(`[\s\S]*?`)|({{{*)|(}*}})|([\w$-]+(\s*=)?)|(<\s*[a-zA-Z][a-zA-Z0-9-_]*)|(\/?>)|(<\/\s*[a-zA-Z][a-zA-Z0-9-_]*>)/g;
        //属性名正则式
        const propReg = /^[a-zA-Z_$][$-\w]*?\s*?=?$/;
        //不可见字符正则式
        const regSpace = /^[\s\n\r\t\v]+$/;
        //dom数组
        let domArr = [];
        //已闭合的tag，与domArr对应
        let closedTag = [];
        //文本开始index
        let txtStartIndex = 0;
        //属性值
        let propName;
        //pre标签标志
        let isPreTag = false;
        //当前标签名
        let tagName;
        //表达式开始index
        let exprStartIndex = 0;
        //表达式计数器
        let exprCount = 0;
        //当前dom节点
        let dom;
        //正则式匹配结果
        let result;
        while ((result = regWhole.exec(srcStr)) !== null) {
            let re = result[0];
            if (re.startsWith('{{')) { //表达式开始符号
                //整除2个数
                if (exprCount === 0) { //表达式开始
                    exprStartIndex = result.index;
                }
                exprCount += re.length / 2 | 0;
            }
            else if (re.endsWith('}}')) { //表达式结束
                exprCount -= re.length / 2 | 0;
                if (exprCount === 0) {
                    handleExpr();
                }
            }
            //不在表达式中
            if (exprCount === 0) {
                if (re[0] === '<') { //标签
                    //处理文本
                    handleText(srcStr.substring(txtStartIndex, result.index));
                    if (re[1] === '/') { //标签结束
                        finishTag(re);
                    }
                    else { //标签开始
                        tagName = re.substring(1).trim().toLowerCase();
                        txtStartIndex = undefined;
                        isPreTag = (tagName === 'pre');
                        //新建dom节点
                        dom = new VirtualDom(tagName, this.genKey());
                        //第一个dom为root
                        if (!me.root) {
                            me.root = dom;
                        }
                        domArr.push(dom);
                        closedTag.push(false);
                    }
                }
                else if (re === '>') { //标签头结束
                    finishTagHead();
                }
                else if (re === '/>') { //标签结束
                    finishTag();
                }
                else if (dom && dom.tagName) { //属性
                    if (propReg.test(re)) {
                        if (propName) { //propName=无值 情况，当无值处理
                            handleProp();
                        }
                        if (re.endsWith('=')) { //属性带=，表示后续可能有值
                            propName = re.substring(0, re.length - 1).trim();
                        }
                        else { //只有属性，无属性值
                            propName = re;
                            handleProp();
                        }
                    }
                    else if (propName) { //属性值
                        handleProp(re);
                    }
                }
            }
        }
        //异常情况
        if (domArr.length > 1 || exprCount !== 0) {
            throw new NError('wrongTemplate');
        }
        return domArr[0];
        /**
         * 标签结束
         * @param ftag      结束标签
         */
        function finishTag(ftag) {
            if (ftag) {
                let finded = false;
                const tag = ftag.substring(2, ftag.length - 1).trim().toLowerCase();
                //反向查找
                for (let i = domArr.length - 1; i >= 0; i--) {
                    if (!closedTag[i] && domArr[i].tagName === tag) {
                        domArr[i].children = domArr.slice(i + 1);
                        //设置parent
                        for (let d of domArr[i].children) {
                            d.parent = domArr[i];
                            extraHandle(d);
                        }
                        //删除后续节点
                        domArr.splice(i + 1);
                        //标注该节点已闭合
                        closedTag.splice(i + 1);
                        finded = true;
                        break;
                    }
                }
                if (!finded) {
                    throw new NError('wrongTemplate');
                }
            }
            //设置标签关闭
            let ele = domArr[domArr.length - 1];
            if (ele === me.root) {
                extraHandle(ele);
            }
            closedTag[closedTag.length - 1] = true;
            dom = undefined;
            propName = undefined;
            txtStartIndex = regWhole.lastIndex;
            exprCount = 0;
            exprStartIndex = 0;
            // ele.allModelField = allModelField;    
        }
        /**
         * 特殊处理
         * @param dom   待处理节点
         */
        function extraHandle(dom) {
            //文本不处理
            if (!dom.tagName) {
                return;
            }
            me.postHandleNode(dom);
            dom.sortDirective();
            me.handleSlot(dom);
        }
        /**
         * 标签头结束
         */
        function finishTagHead() {
            if (dom) {
                txtStartIndex = regWhole.lastIndex;
            }
            dom = undefined;
            propName = undefined;
            exprCount = 0;
            exprStartIndex = 0;
        }
        /**
         * 处理属性
         * @param value     属性值
         */
        function handleProp(value) {
            if (!dom || !propName) {
                return;
            }
            if (value) {
                //去掉字符串两端
                if (['"', "'", '`'].includes(value[0]) && ['"', "'", '`'].includes(value[value.length - 1])) {
                    value = value.substring(1, value.length - 1).trim();
                }
            }
            //指令
            if (propName.startsWith("x-")) {
                //不排序
                dom.addDirective(new Directive(propName.substring(2), value));
            }
            else if (propName.startsWith("e-")) { //事件
                dom.addEvent(new NEvent(me.module, propName.substring(2), value));
            }
            else { //普通属性
                dom.setProp(propName, value);
            }
            propName = undefined;
        }
        /**
         * 处理表达式
         */
        function handleExpr() {
            //处理表达式前的文本
            if (txtStartIndex > 0 && exprStartIndex > txtStartIndex) {
                handleText(srcStr.substring(txtStartIndex, exprStartIndex));
            }
            const s = srcStr.substring(exprStartIndex + 2, regWhole.lastIndex - 2);
            exprCount = 0;
            exprStartIndex = 0;
            //新建表达式
            let expr = new Expression(s);
            if (dom && dom.tagName) { //标签
                handleProp(expr);
            }
            else { //文本节点
                setTxtDom(expr);
                //文本节点，移动txt节点开始位置
                txtStartIndex = regWhole.lastIndex;
            }
            //设置所有字段都在model内标识
            dom.allModelField = expr.allModelField;
        }
        /**
         * 处理txt为文本节点
         * @param txt 文本串
         */
        function handleText(txt) {
            if (txt === '' || !isPreTag && regSpace.test(txt)) { //非pre 标签且全为不可见字符，不处理
                return;
            }
            txt = me.preHandleText(txt);
            setTxtDom(txt);
        }
        /**
         * 新建文本节点
         * @param txt   文本串
         */
        function setTxtDom(txt) {
            if (!dom) {
                dom = new VirtualDom(null, me.genKey());
                domArr.push(dom);
                closedTag.push(false);
            }
            if (dom.expressions) {
                dom.expressions.push(txt);
            }
            else {
                if (typeof txt === 'string') { //字符串
                    dom.textContent = txt;
                }
                else { //表达式
                    if (dom.textContent) { //之前的文本进数组
                        dom.expressions = [dom.textContent, txt];
                        delete dom.textContent;
                    }
                    else {
                        dom.expressions = [txt];
                    }
                }
            }
        }
    }
    /**
     * 处理模块子节点为slot节点
     * @param dom   dom节点
     */
    handleSlot(dom) {
        if (!dom.children || dom.children.length === 0 || !dom.hasDirective('module')) {
            return;
        }
        let slotCt;
        for (let j = 0; j < dom.children.length; j++) {
            let c = dom.children[j];
            if (c.hasDirective('slot')) { //带slot的不处理
                continue;
            }
            if (!slotCt) { //第一个直接被slotCt替换
                slotCt = new VirtualDom('div', this.genKey());
                slotCt.addDirective(new Directive('slot', null));
                //当前位置，用slot替代
                dom.children.splice(j, 1, slotCt);
            }
            else {
                //直接删除
                dom.children.splice(j--, 1);
            }
            slotCt.add(c);
        }
    }
    /**
     * 后置处理
     * 包括：模块类元素、自定义元素
     * @param node  虚拟dom节点
     */
    postHandleNode(node) {
        // 自定义元素判断
        let clazz = DefineElementManager.get(node.tagName);
        if (clazz) { //自定义元素
            Reflect.construct(clazz, [node, this.module]);
        }
        // 模块类判断
        if (ModuleFactory.hasClass(node.tagName)) {
            const dir = new Directive('module', node.tagName);
            dir.params = { srcId: this.module.id };
            node.addDirective(dir);
            node.tagName = 'div';
        }
    }
    /**
     * 预处理html保留字符 如 &nbsp;,&lt;等
     * @param str   待处理的字符串
     * @returns     解析之后的串
     */
    preHandleText(str) {
        let reg = /&[a-z]+;/;
        if (reg.test(str)) {
            let div = document.createElement('div');
            div.innerHTML = str;
            return div.textContent;
        }
        return str;
    }
    /**
     * 产生dom key
     * @returns   dom key
     */
    genKey() {
        return this.module.getDomKeyId() + '';
    }
}

/**
 * 比较器
 */
class DiffTool {
    /**
     * 比较节点
     * @param src           待比较节点（新树节点）
     * @param dst 	        被比较节点 (旧树节点)
     * @param changeArr     增删改的节点数组
     * @returns	            [[type(add 1, upd 2,move 3 ,rep 4,del 5),dom(操作节点),dom1(被替换或修改节点),parent(父节点),loc(位置)]]
     */
    static compare(src, dst) {
        const changeArr = [];
        compare(src, dst);
        return changeArr;
        /**
         * 比较节点
         * @param src           待比较节点（新树节点）
         * @param dst 	        被比较节点 (旧树节点)
         * @returns	            [[type(add 1, upd 2,del 3,move 4 ,rep 5),dom(操作节点),dom1(被替换或修改节点),parent(父节点),
         *                       loc(dom在父的children index)]]
         */
        function compare(src, dst) {
            if (!src.tagName) { //文本节点
                if (!dst.tagName) {
                    if ((src.staticNum || dst.staticNum) && src.textContent !== dst.textContent) {
                        addChange(2, src, null, dst.parent);
                    }
                }
                else { //节点类型不同，替换
                    addChange(5, src, dst, dst.parent);
                }
            }
            else {
                //节点类型不同或对应的子模块不同，替换
                if (src.tagName !== dst.tagName || src.subModuleId !== dst.subModuleId) {
                    addChange(5, src, dst, dst.parent);
                }
                else {
                    //节点类型相同，但有一个不是静态节点，进行属性比较
                    if (src.staticNum || dst.staticNum && isChange(src, dst)) {
                        addChange(2, src, null, dst.parent);
                    }
                    if (!src.subModuleId) { //子模块不比较子节点
                        compareChildren(src, dst);
                    }
                }
            }
            if (src.staticNum > 0) {
                src.staticNum--;
            }
        }
        /**
         * 比较子节点
         * @param src   新节点
         * @param dst   旧节点
         */
        function compareChildren(src, dst) {
            //子节点处理
            if (!src.children || src.children.length === 0) {
                // 旧节点的子节点全部删除
                if (dst.children && dst.children.length > 0) {
                    dst.children.forEach(item => addChange(3, item, null, dst));
                }
            }
            else {
                //全部新加节点
                if (!dst.children || dst.children.length === 0) {
                    src.children.forEach((item, index) => addChange(1, item, null, dst, index));
                }
                else { //都有子节点
                    //存储比较后需要add的key
                    let addObj = {};
                    //子节点对比策略
                    let [newStartIdx, newEndIdx, oldStartIdx, oldEndIdx] = [0, src.children.length - 1, 0, dst.children.length - 1];
                    let [newStartNode, newEndNode, oldStartNode, oldEndNode] = [
                        src.children[newStartIdx],
                        src.children[newEndIdx],
                        dst.children[oldStartIdx],
                        dst.children[oldEndIdx]
                    ];
                    while (newStartIdx <= newEndIdx && oldStartIdx <= oldEndIdx) {
                        if (oldStartNode.key === newStartNode.key) { //新前旧前
                            compare(newStartNode, oldStartNode);
                            if (newStartIdx !== oldStartIdx) {
                                addChange(4, newStartNode, null, dst, newStartIdx);
                            }
                            newStartNode = src.children[++newStartIdx];
                            oldStartNode = dst.children[++oldStartIdx];
                        }
                        else if (oldEndNode.key === newEndNode.key) { //新后旧后
                            compare(newEndNode, oldEndNode);
                            if (oldEndIdx !== newEndIdx) {
                                addChange(4, newEndNode, null, dst, newEndIdx);
                            }
                            newEndNode = src.children[--newEndIdx];
                            oldEndNode = dst.children[--oldEndIdx];
                        }
                        else if (newStartNode.key === oldEndNode.key) { //新前旧后
                            //新前旧后
                            compare(newStartNode, oldEndNode);
                            //放在指定位置
                            if (newStartIdx !== oldEndIdx) {
                                addChange(4, newStartNode, null, dst, newStartIdx);
                            }
                            newStartNode = src.children[++newStartIdx];
                            oldEndNode = dst.children[--oldEndIdx];
                        }
                        else if (newEndNode.key === oldStartNode.key) { //新后旧前
                            compare(newEndNode, oldStartNode);
                            if (newEndIdx !== oldStartIdx) {
                                addChange(4, newEndNode, null, dst, newEndIdx);
                            }
                            newEndNode = src.children[--newEndIdx];
                            oldStartNode = dst.children[++oldStartIdx];
                        }
                        else {
                            //加入到addObj
                            addObj[newStartNode.key] = addChange(1, newStartNode, null, dst, newStartIdx);
                            //新前指针后移
                            newStartNode = src.children[++newStartIdx];
                        }
                    }
                    //多余新节点，需要添加
                    if (newStartIdx <= newEndIdx) {
                        for (let i = newStartIdx; i <= newEndIdx; i++) {
                            // 添加到dst.children[i]前面
                            addChange(1, src.children[i], null, dst, i);
                        }
                    }
                    //有多余老节点，需要删除或变成移动
                    if (oldStartIdx <= oldEndIdx) {
                        for (let i = oldStartIdx, index = i; i <= oldEndIdx; i++, index++) {
                            let ch = dst.children[i];
                            //如果要删除的节点在addArr中，则表示move，否则表示删除
                            if (addObj.hasOwnProperty(ch.key)) {
                                let o = addObj[ch.key];
                                if (index !== o[4]) { //修改为move
                                    o[0] = 4;
                                    //从add转为move，需要比较新旧节点
                                    compare(o[1], ch);
                                }
                                else { //删除不需要移动的元素
                                    let ii;
                                    if ((ii = changeArr.findIndex(item => item[1].key === o[1].key)) !== -1) {
                                        changeArr.splice(ii, 1);
                                    }
                                }
                            }
                            else {
                                addChange(3, ch, null, dst);
                                //删除的元素索引号-1，用于判断是否需要移动节点
                                index--;
                            }
                        }
                    }
                }
            }
        }
        /**
         * 判断节点是否修改
         * @parma src   新树节点
         * @param dst   旧树节点
         *
         */
        function isChange(src, dst) {
            for (let p of ['props', 'assets']) {
                //属性比较
                if (!src[p] && dst[p] || src[p] && !dst[p]) {
                    return true;
                }
                else if (src[p] && dst[p]) {
                    let keys = Object.keys(src[p]);
                    let keys1 = Object.keys(dst[p]);
                    if (keys.length !== keys1.length) {
                        return true;
                    }
                    else {
                        for (let k of keys) {
                            if (src[p][k] !== dst[p][k]) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
        /**
         * 添加刪除替換
         * @param type      类型 add 1, upd 2,del 3,move 4 ,rep 5
         * @param dom       虚拟节点
         * @param dom1      相对节点
         * @param parent    父节点
         * @param loc       添加或移动的目标index
         * @returns         添加的change数组
        */
        function addChange(type, dom, dom1, parent, loc) {
            const o = [type, dom, dom1, parent, loc];
            changeArr.push(o);
            return o;
        }
    }
}

/**
 * 自定义元素
 * 用于扩充定义，主要对ast obj进行前置处理
 */
class DefineElement {
    /**
     * 构造器，在dom编译后执行
     * @param node
     * @param module
     */
    constructor(node) {
        if (node.hasProp('tag')) {
            node.tagName = node.getProp('tag');
            node.delProp('tag');
        }
        else {
            node.tagName = 'div';
        }
    }
}

/**
 * 事件工厂
 * 每个模块一个事件工厂，用于管理模块内虚拟dom对应的事件对象
 */
class EventFactory {
    /**
     * 构造器
     * @param module 模块
     */
    constructor(module) {
        this.module = module;
        this.eventMap = new Map();
    }
    /**
     * 保存事件
     * @param key       dom key
     * @param event     事件对象
     * @param key1      当key1存在时，表示代理子dom事件
     */
    addEvent(key, event, key1) {
        let eobj;
        if (!this.eventMap.has(key)) {
            this.eventMap.set(key, new Map());
        }
        eobj = this.eventMap.get(key);
        if (!eobj.has(event.name)) {
            eobj.set(event.name, {});
        }
        let obj = eobj.get(event.name);
        if (key1) { //代理事件
            if (!obj.delg) {
                obj.delg = [{ key: key1, event: event }];
            }
            else {
                let arr = obj.delg;
                //事件不重复添加
                if (!arr.find(item => item.key === key1 && item.event === event)) {
                    arr.push({ key: key1, event: event });
                }
            }
        }
        else {
            if (event.delg) { //需要被代理的对象
                if (!obj.toDelg) {
                    obj.toDelg = [event];
                }
                else {
                    let arr = obj.toDelg;
                    //事件不重复添加
                    if (arr.find(item => item === event)) {
                        arr.push(event);
                    }
                }
            }
            else {
                if (!obj.own) {
                    obj.own = [event];
                }
                else {
                    let arr = obj.own;
                    //事件不重复添加
                    if (arr.find(item => item === event)) {
                        arr.push(event);
                    }
                }
            }
            // 设置事件capture
            obj.capture = event.capture;
        }
    }
    /**
     * 获取事件对象
     * @param key   dom key
     * @returns     事件对象
     */
    getEvent(key) {
        return this.eventMap.get(key);
    }
    /**
     * 删除事件
     * @param event     事件对象
     * @param key       对应dom keys
     * @param key1      被代理的dom key
     * @param toDelg    从待代理的数组移除（针对虚拟dom自己）
     */
    removeEvent(key, event, key1, toDelg) {
        if (!this.eventMap.has(key)) {
            return;
        }
        let eobj = this.eventMap.get(key);
        if (!eobj.has(event.name)) {
            return;
        }
        let obj = eobj.get(event.name);
        if (key1) { //代理事件
            if (!obj.delg) {
                return;
            }
            else {
                let index = obj.delg.findIndex(item => item.key === key1 && item.event === event);
                if (index !== -1) {
                    obj.delg.splice(index, 1);
                    if (obj.delg.length === 0) {
                        delete obj.delg;
                    }
                }
            }
        }
        else if (toDelg && obj.toDelg) {
            let index = obj.toDelg.findIndex(item => item === event);
            if (index !== -1) {
                obj.toDelg.splice(index, 1);
                if (obj.toDelg.length === 0) {
                    delete obj.toDelg;
                }
            }
        }
        else if (obj.own) {
            let index = obj.own.findIndex(item => item === event);
            if (index !== -1) {
                obj.own.splice(index, 1);
                if (obj.own.length === 0) {
                    delete obj.own;
                }
            }
        }
    }
    /**
     * 绑定事件记录
     * 当绑定到html element时，需要记录
     * @param key           dom key
     * @param eventName     事件名
     * @param handler       事件处理器
     * @param capture       useCapture
     * @returns             是否绑定成功，如果已绑定或不存在，则返回false，否则返回true
     */
    bind(key, eventName, handler, capture) {
        if (!this.eventMap.has(key)) {
            return false;
        }
        const eobj = this.eventMap.get(key);
        if (!eobj.has(eventName)) {
            return false;
        }
        if (!eobj.bindMap) {
            eobj.bindMap = new Map();
        }
        else if (eobj.bindMap.has(eventName)) { //已绑定，不再绑
            return false;
        }
        const el = this.module.getElement(key);
        if (el) {
            el.addEventListener(eventName, handler, capture);
        }
        eobj.bindMap.set(eventName, {
            handler: handler,
            capture: capture
        });
        return true;
    }
    /**
     * 从eventfactory解绑所有事件
     * @param key           dom key
     * @param eventName     事件名
     */
    unbind(key, eventName) {
        if (!this.eventMap.has(key)) {
            return;
        }
        const eobj = this.eventMap.get(key);
        if (!eobj.bindMap || !eobj.has(eventName)) {
            return;
        }
        const el = this.module.getElement(key);
        const cfg = eobj.bindMap.get(eventName);
        //从html element解绑
        if (el && cfg) {
            el.removeEventListener(eventName, cfg.handler, cfg.capture);
        }
        eobj.bindMap.delete(eventName);
    }
    /**
     * 从eventfactory解绑事件
     * @param key           dom key
     */
    unbindAll(key) {
        if (!this.eventMap.has(key)) {
            return;
        }
        const eobj = this.eventMap.get(key);
        if (!eobj.bindMap) {
            return;
        }
        const el = this.module.getElement(key);
        if (el) {
            for (let evt of eobj.bindMap) {
                el.removeEventListener(evt[0], evt[1].handler, evt[1].capture);
            }
        }
        eobj.bindMap.clear();
    }
    /**
     * 是否拥有key对应的事件对象
     * @param key   dom key
     * @returns     如果key对应事件存在，返回true，否则返回false
     */
    hasEvent(key) {
        return this.eventMap.has(key);
    }
    /**
     * 克隆事件对象
     * @param srcKey    源dom key
     * @param dstKey    目标dom key
     */
    cloneEvent(srcKey, dstKey) {
        if (srcKey === dstKey) {
            return;
        }
        let eObj = this.eventMap.get(srcKey);
        if (!eObj) {
            return;
        }
        let map = new Map();
        for (let evt of eObj) {
            if (evt[0] === 'bindMap') { //bindMap不复制
                continue;
            }
            let obj = { capture: evt[1].capture };
            if (evt[1].own) {
                obj['own'] = evt[1].own.slice(0);
            }
            if (evt[1].delg) {
                obj['delg'] = evt[1].delg.slice(0);
            }
            if (evt[1].toDelg) {
                obj['toDelg'] = evt[1].toDelg.slice(0);
            }
            map.set(evt[0], obj);
        }
        this.eventMap.set(dstKey, map);
    }
}

/**
 * NCache模块-存储在内存中
 */
class NCache {
    constructor() {
        /**
         * 订阅map，格式为 {key:[{module:订阅模块,handler:},...]}
         */
        this.subscribeMap = new Map();
        this.cacheData = {};
    }
    /**
     * 通过提供的键名从内存中拿到对应的值
     * @param key   键，支持"."（多级数据分割）
     * @reutrns     值或undefined
     */
    get(key) {
        let p = this.cacheData;
        if (key.indexOf('.') !== -1) {
            let arr = key.split('.');
            if (arr.length > 1) {
                for (let i = 0; i < arr.length - 1 && p; i++) {
                    p = p[arr[i]];
                }
                if (p) {
                    key = arr[arr.length - 1];
                }
            }
        }
        if (p) {
            return p[key];
        }
    }
    /**
     * 通过提供的键名和值将其存储在内存中
     * @param key       键
     * @param value     值
     */
    set(key, value) {
        let p = this.cacheData;
        let key1 = key;
        if (key.indexOf('.') !== -1) {
            let arr = key.split('.');
            if (arr.length > 1) {
                for (let i = 0; i < arr.length - 1; i++) {
                    if (!p[arr[i]] || typeof p[arr[i]] !== 'object') {
                        p[arr[i]] = {};
                    }
                    p = p[arr[i]];
                }
                key = arr[arr.length - 1];
            }
        }
        if (p) {
            p[key] = value;
        }
        //处理订阅
        if (this.subscribeMap.has(key1)) {
            let arr = this.subscribeMap.get(key1);
            for (let a of arr) {
                this.invokeSubscribe(a.module, a.handler, value);
            }
        }
    }
    /**
     * 通过提供的键名将其移除
     * @param key   键
     */
    remove(key) {
        let p = this.cacheData;
        if (key.indexOf('.') !== -1) {
            let arr = key.split('.');
            if (arr.length > 1) {
                for (let i = 0; i < arr.length - 1 && p; i++) {
                    p = p[arr[i]];
                }
                if (p) {
                    key = arr[arr.length - 1];
                }
            }
        }
        if (p) {
            delete p[key];
        }
    }
    /**
     * 订阅
     * @param module    订阅的模块
     * @param key       字段key
     * @param handler   回调函数 参数为key对应value
     */
    subscribe(module, key, handler) {
        if (!this.subscribeMap.has(key)) {
            this.subscribeMap.set(key, [{ module: module, handler: handler }]);
        }
        else {
            let arr = this.subscribeMap.get(key);
            if (!arr.find(item => item.module === module && item.handler === handler)) {
                arr.push({ module: module, handler: handler });
            }
        }
        //如果存在值，则执行订阅回调
        let v = this.get(key);
        if (v) {
            this.invokeSubscribe(module, handler, v);
        }
    }
    /**
     * 调用订阅方法
     * @param module    模块
     * @param foo       方法或方法名
     * @param v         值
     */
    invokeSubscribe(module, foo, v) {
        if (typeof foo === 'string') {
            module.invokeMethod(foo, v);
        }
        else {
            foo.call(module, v);
        }
    }
}

/**
 * 全局缓存
 */
class GlobalCache {
    /**
     * 保存到cache
     * @param key       键，支持"."（多级数据分割）
     * @param value     值
     */
    static set(key, value) {
        this.cache.set(key, value);
    }
    /**
     * 从cache读取
     * @param key   键，支持"."（多级数据分割）
     * @returns     缓存的值或undefined
     */
    static get(key) {
        return this.cache.get(key);
    }
    /**
     * 订阅
     * @param module    订阅的模块
     * @param key       字段key
     * @param handler   回调函数 参数为key对应value
     */
    static subscribe(module, key, handler) {
        this.cache.subscribe(module, key, handler);
    }
    /**
     * 从cache移除
     * @param key   键，支持"."（多级数据分割）
     */
    static remove(key) {
        this.cache.remove(key);
    }
}
//NCache实例
GlobalCache.cache = new NCache();

/**
 * 工厂基类
 */
class NFactory {
    /**
     * @param module 模块
     */
    constructor(module) {
        /**
         * 工厂item对象
         */
        this.items = new Map();
        if (module !== undefined) {
            this.moduleId = module.id;
        }
    }
    /**
     * 添加到工厂
     * @param name 	item name
     * @param item	item
     */
    add(name, item) {
        this.items.set(name, item);
    }
    /**
     * 获得item
     * @param name 	item name
     * @returns     item
     */
    get(name) {
        return this.items.get(name);
    }
    /**
     * 从容器移除
     * @param name 	item name
     */
    remove(name) {
        this.items.delete(name);
    }
    /**
     * 是否拥有该项
     * @param name  item name
     * @return      true/false
     */
    has(name) {
        return this.items.has(name);
    }
}

/**
 * 模型类
 * 对数据做代理
 * 警告：___source属性为保留属性，用户不要使用
 * 通过___source属性可以获取代理对象源数据对象
 */
class Model {
    /**
     * @param data 		数据
     * @param module 	模块对象
     * @returns         模型代理对象
     */
    constructor(data, module) {
        if (!data) {
            return;
        }
        let proxy;
        if (data.___source) {
            proxy = data;
        }
        else {
            //模型管理器
            proxy = new Proxy(data, {
                set(src, key, value, receiver) {
                    //proxy转换为源对象
                    if (value !== null && typeof value === 'object') {
                        value = value.___source || value;
                    }
                    //值未变,proxy 不处理
                    if (src[key] === value) {
                        return true;
                    }
                    let ov = src[key];
                    let r = Reflect.set(src, key, value, receiver);
                    ModelManager.update(receiver, key, ov, value);
                    return r;
                },
                get(src, key, receiver) {
                    if (key === '___source') {
                        return src;
                    }
                    let res = Reflect.get(src, key, receiver);
                    if (res && (res.constructor === Object || res.constructor === Array)) {
                        let m = ModelManager.getModel(res, receiver);
                        if (!m) {
                            m = new Model(res, receiver);
                            ModelManager.add(res, m, receiver);
                        }
                        res = m;
                    }
                    return res;
                },
                deleteProperty(src, key) {
                    let oldValue = src[key];
                    delete src[key];
                    ModelManager.update(ModelManager.getModel(src), key, oldValue, undefined);
                    return true;
                }
            });
            ModelManager.add(data, proxy);
        }
        if (module) {
            ModelManager.bindToModule(proxy, module, data.___source !== undefined);
        }
        return proxy;
    }
}

/**
 * 指令管理器
 * $directives  指令集
 * $expressions 表达式集
 * $events      事件集
 * $savedoms    dom相关缓存 包括 html dom 和 参数
 * $doms        渲染树
 */
class ObjectManager {
    /**
     * module   模块
     * @param module
     */
    constructor(module) {
        this.module = module;
        this.cache = new NCache();
    }
    /**
     * 保存到cache
     * @param key       键，支持"."（多级数据分割）
     * @param value     值
     */
    set(key, value) {
        this.cache.set(key, value);
    }
    /**
     * 从cache读取
     * @param key   键，支持"."（多级数据分割）
     * @returns     缓存的值或undefined
     */
    get(key) {
        return this.cache.get(key);
    }
    /**
     * 从cache移除
     * @param key   键，支持"."（多级数据分割）
     */
    remove(key) {
        this.cache.remove(key);
    }
    /**
     * 设置事件参数
     * @param id        事件id
     * @param key       dom key
     * @param name      参数名
     * @param value     参数值
     */
    setEventParam(id, key, name, value) {
        this.cache.set('$events.' + id + '.$params.' + key + '.' + name, value);
    }
    /**
     * 获取事件参数值
     * @param id        事件id
     * @param key       dom key
     * @param name      参数名
     * @returns         参数值
     */
    getEventParam(id, key, name) {
        return this.get('$events.' + id + '.$params.' + key + '.' + name);
    }
    /**
     * 移除事件参数
     * @param id        事件id
     * @param key       dom key
     * @param name      参数名
     */
    removeEventParam(id, key, name) {
        this.remove('$events.' + id + '.$params.' + key + '.' + name);
    }
    /**
     * 清空事件参数
     * @param id        事件id
     * @param key       dom key
     */
    clearEventParam(id, key) {
        if (key) { //删除对应dom的事件参数
            this.remove('$events.' + id + '.$params.' + key);
        }
        else { //删除所有事件参数
            this.remove('$events.' + id + '.$params');
        }
    }
    /**
     * 设置dom参数值
     * @param key       dom key
     * @param name      参数名
     * @param value     参数值
     */
    setDomParam(key, name, value) {
        this.set('$domparam.' + key + '.' + name, value);
    }
    /**
     * 获取dom参数值
     * @param key       dom key
     * @param name      参数名
     * @returns         参数值
     */
    getDomParam(key, name) {
        return this.get('$domparam.' + key + '.' + name);
    }
    /**
     * 移除dom参数值
     * @param key       dom key
     * @param name      参数名
     */
    removeDomParam(key, name) {
        this.remove('$domparam.' + key + '.' + name);
    }
    /**
     * 清除element 参数集
     * @param key   dom key
     */
    clearDomParams(key) {
        this.remove('$domparam.' + key);
    }
    /**
     * 清除缓存dom对象集
     */
    clearAllDomParams() {
        this.remove('$domparam');
    }
}

/**
 * 模块类
 * 模块方法说明：模板内使用的方法，包括事件，都直接在模块内定义
 *      方法this：指向module实例
 *      事件参数: model(当前按钮对应model),dom(事件对应虚拟dom),eventObj(事件对象),e(实际触发的html event)
 *      表达式方法：参数按照表达式方式给定即可
 * 模块事件
 *      onBeforeFirstRender 首次渲染前
 *      onFirstRender       首次渲染后
 *      onBeforeRender      每次渲染前
 *      onRender            每次渲染后
 *      onCompile           编译后
 *      onMount             挂载到html dom树后(onRender后执行)
 *      onUnmount           从html dom树解挂后
 */
class Module {
    /**
     * 构造器
     */
    constructor() {
        /**
         * 编译后的根结点props
         */
        this.originProps = new Map();
        /**
         * 子模块id数组
         */
        this.children = [];
        /**
         *  key:html node映射
         */
        this.elementMap = new Map();
        this.id = Util.genId();
        this.objectManager = new ObjectManager(this);
        this.eventFactory = new EventFactory(this);
        //加入模块工厂
        ModuleFactory.add(this);
    }
    /**
     * 初始化
     */
    init() {
        //初始化model
        this.model = new Model(this.data() || {}, this);
        //注册子模块
        if (this.modules && Array.isArray(this.modules)) {
            for (let cls of this.modules) {
                ModuleFactory.addClass(cls);
            }
            delete this.modules;
        }
        // 设置状态为准备好
        this.state = EModuleState.READY;
    }
    /**
     * 模板串方法，使用时重载
     * @param props     props对象，在模板容器dom中进行配置，从父模块传入
     * @returns         模板串
     */
    template(props) {
        return null;
    }
    /**
     * 数据方法，使用时重载
     * @returns      model数据
     */
    data() {
        return {};
    }
    /**
     * 模型渲染
     */
    render() {
        if (this.state === EModuleState.UNMOUNTED) {
            return;
        }
        //检测模板并编译
        let templateStr = this.template(this.props);
        if (templateStr !== this.oldTemplate) {
            this.oldTemplate = templateStr;
            this.compile();
        }
        //不存在originTree，不渲染
        if (!this.originTree) {
            return;
        }
        //渲染前事件返回true，则不进行渲染
        if (this.doModuleEvent('onBeforeRender')) {
            return;
        }
        if (!this.hasRendered) { //首次渲染
            this.doModuleEvent('onBeforeFirstRender');
        }
        const oldTree = this.renderTree;
        this.renderTree = Renderer.renderDom(this, this.originTree, this.model);
        if (!this.renderTree) {
            this.unmount();
            this.hasRendered = true;
            return;
        }
        if (!this.hasRendered) { //首次渲染
            this.doModuleEvent('onFirstRender');
            this.hasRendered = true;
        }
        //执行渲染后事件
        this.doModuleEvent('onRender');
        //挂载处理
        if (this.state === EModuleState.MOUNTED) { //已经挂载
            if (oldTree && this.model) {
                // 比较节点
                let changeDoms = DiffTool.compare(this.renderTree, oldTree);
                //执行更改
                if (changeDoms.length > 0) {
                    Renderer.handleChangedDoms(this, changeDoms);
                }
            }
        }
        else { //未挂载
            this.mount();
        }
    }
    /**
     * 添加子模块
     * @param module    模块id或模块
     */
    addChild(module) {
        let mid;
        if (typeof module === 'number') {
            mid = module;
            module = ModuleFactory.get(mid);
        }
        else {
            mid = module.id;
        }
        if (!this.children.includes(mid)) {
            this.children.push(mid);
            module.parentId = this.id;
            //首次添加，激活
            module.active();
        }
    }
    /**
     * 移除子模块
     * @param module    子模块
     */
    removeChild(module) {
        let ind = this.children.indexOf(module.id);
        if (ind !== -1) {
            module.unmount();
            this.children.splice(ind, 1);
        }
    }
    /**
     * 激活模块(准备渲染)
     * @param type  0 手动， 1父节点setProps激活，默认0
     */
    active() {
        //如果为unmounted，则设置渲染为准备好状态
        if (this.state === EModuleState.UNMOUNTED) {
            this.state = EModuleState.READY;
        }
        Renderer.add(this);
    }
    /**
     * 挂载到html dom
     */
    mount() {
        //渲染到html dom
        const el = Renderer.renderToHtml(this, this.renderTree, null, true);
        if (this.container) { //自带容器（主模块或路由模块）
            this.container.appendChild(el);
        }
        else if (this.srcDom) {
            const pm = this.getParent();
            if (!pm) {
                return;
            }
            //替换占位符
            const srcElement = pm.getElement(this.srcDom.key);
            if (srcElement) {
                srcElement.parentElement.replaceChild(el, srcElement);
            }
            pm.saveElement(this.srcDom.key, el);
        }
        this.state = EModuleState.MOUNTED;
        //执行挂载事件
        this.doModuleEvent('onMount');
    }
    /**
     * 解挂，从htmldom 移除
     */
    unmount() {
        // 主模块或状态为unmounted的模块不用处理
        if (this.state === EModuleState.UNMOUNTED || ModuleFactory.getMain() === this) {
            return;
        }
        //从render列表移除
        Renderer.remove(this.id);
        //清空event factory
        this.eventFactory = new EventFactory(this);
        //删除渲染树
        delete this.renderTree;
        //module根与源el切换
        const el = this.getElement('1');
        if (el) {
            if (this.container) { //带容器(路由方法加载)
                this.container.removeChild(el);
            }
            else if (this.srcDom) {
                const pm = this.getParent();
                if (!pm) {
                    return;
                }
                //设置模块占位符
                const srcElement = document.createTextNode("");
                if (el.parentElement) {
                    el.parentElement.replaceChild(srcElement, el);
                }
                pm.saveElement(this.srcDom.key, srcElement);
            }
        }
        //清理dom map
        this.clearElementMap();
        //设置状态
        this.state = EModuleState.UNMOUNTED;
        //子模块递归卸载
        if (this.children) {
            for (let id of this.children) {
                let m = ModuleFactory.get(id);
                if (m) {
                    m.unmount();
                }
            }
        }
    }
    /**
     * 清除html element map 节点
     * @param key   dom key，如果为空，则清空map
     */
    clearElementMap(key) {
        if (key) {
            this.elementMap.delete(key);
        }
        else {
            this.elementMap.clear();
        }
    }
    /**
     * 获取父模块
     * @returns     父模块
     */
    getParent() {
        if (this.parentId) {
            return ModuleFactory.get(this.parentId);
        }
    }
    /**
     * 执行模块事件
     * @param eventName 	事件名
     * @returns             执行结果，各事件返回值如下：
     *                          onBeforeRender：如果为true，表示不进行渲染
     */
    doModuleEvent(eventName) {
        let foo = this[eventName];
        if (foo && typeof foo === 'function') {
            return foo.apply(this, [this.model]);
        }
    }
    /**
     * 获取模块方法
     * @param name  方法名
     * @returns     方法
     */
    getMethod(name) {
        return this[name];
    }
    /**
     * 设置渲染容器
     * @param el        容器
     */
    setContainer(el) {
        this.container = el;
    }
    /**
     * 调用方法
     * @param methodName    方法名
     */
    invokeMethod(methodName, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        let m = this;
        let foo = m[methodName];
        if (!foo && this.compileMid) {
            m = ModuleFactory.get(this.compileMid);
            if (m) {
                foo = m[methodName];
            }
        }
        if (foo && typeof foo === 'function') {
            let args = [];
            for (let i = 1; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            return foo.apply(m, args);
        }
    }
    /**
     * 设置props
     * @param props     属性值
     * @param dom       子模块对应节点
     */
    setProps(props, dom) {
        let dataObj = props.$data;
        this.changedProps = {};
        delete props.$data;
        //props数据复制到模块model
        if (dataObj) {
            for (let d of Object.keys(dataObj)) {
                let o = dataObj[d];
                //如果为对象，需要绑定到模块
                if (o && typeof o === 'object' && this.model[d] !== o) {
                    o = new Model(o, this);
                }
                this.model[d] = o;
            }
        }
        //保留src dom
        this.srcDom = dom;
        //如果不存在旧的props，则change为true，否则初始化为false
        let change = false;
        if (!this.props) {
            this.changedProps = props;
            change = true;
        }
        else {
            for (let k of Object.keys(props)) {
                // object 默认改变
                if (props[k] !== this.props[k]) {
                    change = true;
                    //保留更改的属性
                    this.changedProps[k] = props[k];
                }
            }
        }
        //合并根dom属性
        if (change) {
            this.mergeProps(this.changedProps);
        }
        //props发生改变或unmounted，激活模块
        if (change || this.state === EModuleState.UNMOUNTED) {
            this.active();
        }
        //保存props
        this.props = props;
    }
    /**
     * 编译
     */
    compile() {
        this.domKeyId = 0;
        //清空孩子节点
        this.children = [];
        //清理css url
        CssManager.clearModuleRules(this);
        //清理dom参数
        this.objectManager.clearAllDomParams();
        if (!this.oldTemplate) {
            return;
        }
        this.originTree = new Compiler(this).compile(this.oldTemplate);
        //保存originProps(由编译后的节点属性确认)
        if (this.originTree.props) {
            for (let p of this.originTree.props) {
                this.originProps.set(p[0], p[1]);
            }
        }
        this.mergeProps(this.props);
        //源事件传递到子模块根dom
        let parentModule = this.getParent();
        if (parentModule) {
            const eobj = parentModule.eventFactory.getEvent(this.srcDom.key);
            if (eobj) {
                for (let evt of eobj) {
                    if (evt[1].own) { //子模块不支持代理事件
                        for (let ev of evt[1].own) {
                            this.originTree.addEvent(ev);
                        }
                    }
                }
            }
        }
        //增加编译后事件
        this.doModuleEvent('onCompile');
    }
    /**
     * 设置不渲染到根dom的属性集合
     * @param props     待移除的属性名属组
     */
    setExcludeProps(props) {
        this.excludedProps = props;
    }
    /**
    * 合并根节点属性
    * @param dom       dom节点
    * @param props     属性集合
    * @returns         是否改变
    */
    mergeProps(props) {
        if (!props || !this.originTree) {
            return;
        }
        this.originTree.staticNum = 1;
        //设置根属性
        for (let k of Object.keys(props)) {
            //排除的props不添加到属性
            if (!this.excludedProps || !this.excludedProps.includes(k)) {
                //如果dom自己有k属性，则处理为数组
                if (this.originProps.has(k)) {
                    this.originTree.setProp(k, [props[k], this.originProps.get(k)]);
                }
                else { //dom自己无此属性
                    this.originTree.setProp(k, props[k]);
                }
            }
        }
    }
    /**
     * 获取html node
     * @param key   dom key
     * @returns     html node
     */
    getElement(key) {
        return this.elementMap.get(key);
    }
    /**
     * save html node
     * @param key   dom key
     * @param node  html node
     */
    saveElement(key, node) {
        this.elementMap.set(key, node);
    }
    /**
     * 释放node
     * 包括从dom树解挂，释放对应结点资源
     * @param dom       虚拟dom
     */
    freeNode(dom) {
        if (dom.subModuleId) { //子模块
            let m = ModuleFactory.get(dom.subModuleId);
            if (m) {
                m.unmount();
            }
        }
        else { //普通节点
            //从map移除
            this.clearElementMap(dom.key);
            //解绑所有事件
            this.eventFactory.unbindAll(dom.key);
            //子节点递归操作
            if (dom.children) {
                for (let d of dom.children) {
                    this.freeNode(d);
                }
            }
        }
    }
    /**
     * 从origin tree 获取虚拟dom节点
     * @param key   dom key
     */
    getOriginDom(key) {
        if (!this.originTree) {
            return null;
        }
        return find(this.originTree);
        function find(dom) {
            if (dom.key === key) {
                return dom;
            }
            if (dom.children) {
                for (let d of dom.children) {
                    let d1 = find(d);
                    if (d1) {
                        return d1;
                    }
                }
            }
        }
    }
    /**
     * 从渲染树中获取key对应的渲染节点
     * @param key   dom key
     */
    getRenderedDom(key) {
        if (!this.renderTree) {
            return;
        }
        const d = find(this.renderTree, key);
        return d;
        /**
         * 递归查找
         * @param dom   渲染dom
         * @param key   待查找key
         * @returns     key对应renderdom 或 undefined
         */
        function find(dom, key) {
            if (dom.key === key) {
                return dom;
            }
            if (dom.children) {
                for (let d of dom.children) {
                    let d1 = find(d, key);
                    if (d1) {
                        return d1;
                    }
                }
            }
        }
    }
    /**
     * 获取模块类名对应的第一个子模块(如果设置deep，则深度优先)
     * @param className     子模块类名
     * @param deep          是否深度获取
     * @param attrs         属性集合
     */
    getModule(className, deep, attrs) {
        if (!this.children) {
            return;
        }
        for (let id of this.children) {
            let m = ModuleFactory.get(id);
            if (m && m.constructor) {
                if (m.constructor.name === className) {
                    if (attrs) { //属性集合不为空
                        //全匹配标识
                        let matched = true;
                        for (let k of Object.keys(attrs)) {
                            if (!m.props || m.props[k] !== attrs[k]) {
                                matched = false;
                                break;
                            }
                        }
                        if (matched) {
                            return m;
                        }
                    }
                    else {
                        return m;
                    }
                }
                if (deep) {
                    let r = m.getModule(className, true, attrs);
                    if (r) {
                        return r;
                    }
                }
            }
        }
    }
    /**
     * 获取模块类名对应的所有子模块
     * @param className     子模块类名
     * @param deep          深度查询
     */
    getModules(className, deep) {
        if (!this.children) {
            return;
        }
        let arr = [];
        find(this);
        return arr;
        /**
         * 查询
         * @param module
         */
        function find(module) {
            if (!module.children) {
                return;
            }
            for (let id of module.children) {
                let m = ModuleFactory.get(id);
                if (m && m.constructor) {
                    if (m.constructor.name === className) {
                        arr.push(m);
                    }
                    if (deep) {
                        find(m);
                    }
                }
            }
        }
    }
    /**
     * 获取dom key id
     * @returns     key id
     */
    getDomKeyId() {
        return ++this.domKeyId;
    }
}

/**
 * module 元素
 */
class MODULE extends DefineElement {
    constructor(node, module) {
        super(node);
        //类名
        let clazz = node.getProp('name');
        if (!clazz) {
            throw new NError('itemnotempty', NodomMessage.TipWords['element'], 'MODULE', 'className');
        }
        node.delProp('name');
        node.addDirective(new Directive('module', clazz));
    }
}
/**
 * for 元素
 */
class FOR extends DefineElement {
    constructor(node, module) {
        super(node);
        //条件
        let cond = node.getProp('cond');
        if (!cond) {
            throw new NError('itemnotempty', NodomMessage.TipWords['element'], 'FOR', 'cond');
        }
        node.delProp('cond');
        node.addDirective(new Directive('repeat', cond));
    }
}
/**
 * 递归元素
 */
class RECUR extends DefineElement {
    constructor(node, module) {
        super(node);
        //条件
        let cond = node.getProp('cond');
        node.delProp('cond');
        node.addDirective(new Directive('recur', cond));
    }
}
/**
 * IF 元素
 */
class IF extends DefineElement {
    constructor(node, module) {
        super(node);
        //条件
        let cond = node.getProp('cond');
        if (!cond) {
            throw new NError('itemnotempty', NodomMessage.TipWords['element'], 'IF', 'cond');
        }
        node.delProp('cond');
        node.addDirective(new Directive('if', cond));
    }
}
class ELSE extends DefineElement {
    constructor(node, module) {
        super(node);
        node.addDirective(new Directive('else', null));
    }
}
/**
 * ELSEIF 元素
 */
class ELSEIF extends DefineElement {
    constructor(node, module) {
        super(node);
        //条件
        let cond = node.getProp('cond');
        if (!cond) {
            throw new NError('itemnotempty', NodomMessage.TipWords['element'], 'ELSEIF', 'cond');
        }
        node.delProp('cond');
        node.addDirective(new Directive('elseif', cond));
    }
}
/**
 * ENDIF 元素
 */
class ENDIF extends DefineElement {
    constructor(node, module) {
        super(node);
        node.addDirective(new Directive('endif', null));
    }
}
/**
 * 替代器
 */
class SLOT extends DefineElement {
    constructor(node, module) {
        super(node);
        //条件
        let cond = node.getProp('name') || 'default';
        node.delProp('name');
        node.addDirective(new Directive('slot', cond));
    }
}
DefineElementManager.add([MODULE, FOR, IF, RECUR, ELSE, ELSEIF, ENDIF, SLOT]);

((function () {
    /**
     * 指令类型初始化
     * 每个指令类型都有一个名字、处理函数和优先级，处理函数不能用箭头函数
     * 处理函数在渲染时执行，包含两个参数 module(模块)、dom(目标虚拟dom)、src(源虚拟dom)
     * 处理函数的this指向指令
     * 处理函数的返回值 true 表示继续，false 表示后续指令不再执行
     */
    /**
     * module 指令
     * 用于指定该元素为模块容器，表示子模块
     * 用法 x-module='模块类名'
     */
    createDirective('module', function (module, dom) {
        const src = dom.vdom;
        let m;
        //存在moduleId，表示已经渲染过，不渲染
        let mid = module.objectManager.getDomParam(dom.key, 'moduleId');
        let handle = true;
        if (mid) {
            m = ModuleFactory.get(mid);
            handle = !dom.props['renderOnce'];
        }
        else {
            m = ModuleFactory.get(this.value);
            if (!m) {
                return true;
            }
            //设置编译源id
            if (this.params && this.params.srcId) {
                m.compileMid = this.params.srcId;
            }
            mid = m.id;
            //保留modelId
            module.objectManager.setDomParam(dom.key, 'moduleId', mid);
            module.addChild(m);
            //共享当前dom的model给子模块
            if (src.hasProp('useDomModel')) {
                m.model = dom.model;
                //绑定model到子模块，共享update,watch方法
                ModelManager.bindToModule(m.model, m);
                delete dom.props['useDomModel'];
            }
        }
        //保存到dom上，提升渲染性能
        dom.subModuleId = mid;
        //变成文本节点，作为子模块占位符，子模块渲染后插入到占位符前面
        delete dom.tagName;
        if (handle) { //需要处理
            //设置props，如果改变了props，启动渲染
            let o = {};
            if (dom.props) {
                for (let p of Object.keys(dom.props)) {
                    let v = dom.props[p];
                    if (p[0] === '$') { //数据
                        if (!o.$data) {
                            o.$data = {};
                        }
                        o.$data[p.substring(1)] = v;
                        //删除属性
                        delete dom.props[p];
                    }
                    else {
                        o[p] = v;
                    }
                }
            }
            //传递给模块
            m.setProps(o, dom);
        }
        return true;
    }, 8);
    /**
     *  model指令
     */
    createDirective('model', function (module, dom) {
        let model = ModelManager.get(dom.model, this.value);
        if (model) {
            dom.model = model;
        }
        return true;
    }, 1);
    /**
     * 指令名 repeat
     * 描述：重复指令
     */
    createDirective('repeat', function (module, dom) {
        let rows = this.value;
        // 无数据，不渲染
        if (!Util.isArray(rows) || rows.length === 0) {
            return false;
        }
        const src = dom.vdom;
        //索引名
        const idxName = src.getProp('$index');
        const parent = dom.parent;
        //禁用该指令
        this.disabled = true;
        //避免在渲染时对src设置了model，此处需要删除
        delete src.model;
        for (let i = 0; i < rows.length; i++) {
            if (!rows[i]) {
                continue;
            }
            if (idxName) {
                rows[i][idxName] = i;
            }
            //渲染一次-1，所以需要+1
            src.staticNum++;
            let d = Renderer.renderDom(module, src, rows[i], parent, ModelManager.getModelKey(rows[i]) + '');
            //删除$index属性
            if (idxName) {
                delete d.props['$index'];
            }
        }
        //启用该指令
        this.disabled = false;
        return false;
    }, 2);
    /**
     * 递归指令
     * 作用：在dom内部递归，用于具有相同数据结构的节点递归生成
     * 递归指令不允许嵌套
     * name表示递归名字，必须与内部的recur标签的ref保持一致，名字默认为default
     * 典型模版
     * ```
     * <recur name='r1'>
     *      <div>...</div>
     *      <p>...</p>
     *      <recur ref='r1' />
     * </recur>
     * ```
     */
    createDirective('recur', function (module, dom) {
        const src = dom.vdom;
        //当前节点是递归节点存放容器
        if (dom.props.hasOwnProperty('ref')) {
            //如果出现在repeat中，src为单例，需要在使用前清空子节点，避免沿用上次的子节点
            src.children = [];
            //递归存储名
            const name = '$recurs.' + (dom.props['ref'] || 'default');
            let node = module.objectManager.get(name);
            if (!node) {
                return true;
            }
            let model = dom.model;
            let cond = node.getDirective('recur');
            let m = model[cond.value];
            //不存在子层数组，不再递归
            if (!m) {
                return true;
            }
            //克隆，后续可以继续用
            let node1 = node.clone();
            //recur子节点不为数组，依赖子层数据，否则以来repeat数据
            if (!Array.isArray(m)) {
                node1.model = m;
                Util.setNodeKey(node1, ModelManager.getModelKey(m) + '', true);
            }
            src.children = [node1];
            node1.parent = src;
        }
        else { //递归节点
            let data = dom.model[this.value];
            if (!data) {
                return true;
            }
            //递归名，默认default
            const name = '$recurs.' + (dom.props['name'] || 'default');
            if (!module.objectManager.get(name)) {
                module.objectManager.set(name, src);
            }
        }
        return true;
    }, 2);
    /**
     * 指令名 if
     * 描述：条件指令
     */
    createDirective('if', function (module, dom) {
        if (!dom.parent) {
            return;
        }
        module.objectManager.setDomParam(dom.parent.key, '$if', this.value);
        return this.value;
    }, 5);
    /**
     * 指令名 else
     * 描述：else指令
     */
    createDirective('else', function (module, dom) {
        if (!dom.parent) {
            return;
        }
        return !module.objectManager.getDomParam(dom.parent.key, '$if');
    }, 5);
    /**
     * elseif 指令
     */
    createDirective('elseif', function (module, dom) {
        if (!dom.parent) {
            return;
        }
        let v = module.objectManager.getDomParam(dom.parent.key, '$if');
        if (v === true) {
            return false;
        }
        else {
            if (!this.value) {
                return false;
            }
            else {
                module.objectManager.setDomParam(dom.parent.key, '$if', true);
            }
        }
        return true;
    }, 5);
    /**
     * elseif 指令
     */
    createDirective('endif', function (module, dom) {
        if (!dom.parent) {
            return;
        }
        module.objectManager.removeDomParam(dom.parent.key, '$if');
        //endif 不显示
        return false;
    }, 5);
    /**
     * 指令名 show
     * 描述：显示指令
     */
    createDirective('show', function (module, dom) {
        //show指令参数 {origin:通过style设置的初始display属性,rendered:是否渲染过}
        let showParam = module.objectManager.getDomParam(dom.key, '$show');
        //为false且未渲染过，则不渲染
        if (!this.value && (!showParam || !showParam.rendered)) {
            return false;
        }
        if (!showParam) {
            showParam = {};
            module.objectManager.setDomParam(dom.key, '$show', showParam);
        }
        let style = dom.props['style'];
        const reg = /display\s*\:[\w\-]+/;
        let regResult;
        let display;
        if (style) {
            regResult = reg.exec(style);
            //保存第一个style display属性
            if (regResult !== null) {
                let ra = regResult[0].split(':');
                display = ra[1].trim();
                //保存第一个display属性
                if (!showParam.origin && display !== 'none') {
                    showParam.origin = display;
                }
            }
        }
        // 渲染标识，value为false且尚未进行渲染，则不渲染
        if (!this.value) {
            if (style) {
                if (display) {
                    //把之前的display替换为none
                    if (display !== 'none') {
                        style = style.substring(0, regResult.index) + 'display:none' + style.substring(regResult.index + regResult[0].length);
                    }
                }
                else {
                    style += ';display:none';
                }
            }
            else {
                style = 'display:none';
            }
        }
        else {
            //设置渲染标志
            showParam.rendered = true;
            if (display === 'none') {
                if (showParam.origin) {
                    style = style.substring(0, regResult.index) + 'display:' + showParam.origin + style.substring(regResult.index + regResult[0].length);
                }
                else {
                    style = style.substring(0, regResult.index) + style.substring(regResult.index + regResult[0].length);
                }
            }
        }
        if (style) {
            dom.props['style'] = style;
        }
        return true;
    }, 5);
    /**
     * 指令名 field
     * 描述：字段指令
     */
    createDirective('field', function (module, dom) {
        const type = dom.props['type'] || 'text';
        const tgname = dom.tagName.toLowerCase();
        const model = dom.model;
        if (!model) {
            return true;
        }
        let dataValue = ModelManager.get(model, this.value);
        if (type === 'radio') {
            let value = dom.props['value'];
            if (dataValue == value) {
                dom.props['checked'] = 'checked';
                Util.setDomAsset(dom, 'checked', true);
            }
            else {
                delete dom.props['checked'];
                Util.setDomAsset(dom, 'checked', false);
            }
        }
        else if (type === 'checkbox') {
            //设置状态和value
            let yv = dom.props['yes-value'];
            //当前值为yes-value
            if (dataValue == yv) {
                dom.props['value'] = yv;
                Util.setDomAsset(dom, 'checked', true);
            }
            else { //当前值为no-value
                dom.props['value'] = dom.props['no-value'];
                Util.setDomAsset(dom, 'checked', false);
            }
        }
        else if (tgname === 'select') { //下拉框
            dom.props['value'] = dataValue;
            Util.setDomAsset(dom, 'value', dataValue);
        }
        else {
            let v = (dataValue !== undefined && dataValue !== null) ? dataValue : '';
            dom.props['value'] = v;
            Util.setDomAsset(dom, 'value', v);
        }
        let event = GlobalCache.get('$fieldChangeEvent');
        if (!event) {
            event = new NEvent(null, 'change', function (model, dom) {
                const el = this.getElement(dom.key);
                if (!el) {
                    return;
                }
                let directive = dom.vdom.getDirective('field');
                let type = dom.props['type'];
                let field = directive.value;
                let v = el.value;
                //根据选中状态设置checkbox的value
                if (type === 'checkbox') {
                    if (dom.props['yes-value'] == v) {
                        v = dom.props['no-value'];
                    }
                    else {
                        v = dom.props['yes-value'];
                    }
                }
                else if (type === 'radio') {
                    if (!el.checked) {
                        v = undefined;
                    }
                }
                //修改字段值,需要处理.运算符
                let arr = field.split('.');
                if (arr.length === 1) {
                    model[field] = v;
                }
                else {
                    let temp = model;
                    field = arr.pop();
                    for (let i = 0; i < arr.length && temp; i++) {
                        temp = temp[arr[i]];
                    }
                    if (temp) {
                        temp[field] = v;
                    }
                }
            });
            GlobalCache.set('$fieldChangeEvent', event);
        }
        dom.vdom.addEvent(event);
        return true;
    }, 10);
    /**
     * route指令
     */
    createDirective('route', function (module, dom) {
        //a标签需要设置href
        if (dom.tagName.toLowerCase() === 'a') {
            dom.props['href'] = 'javascript:void(0)';
        }
        dom.props['path'] = this.value;
        //有激活属性
        if (dom.props['active']) {
            let acName = dom.props['active'];
            delete dom.props['active'];
            //active 转expression
            Router.addActiveField(module, this.value, dom.model, acName);
            if (this.value.startsWith(Router.currentPath) && dom.model[acName]) {
                Router.go(this.value);
            }
        }
        //添加click事件,避免重复创建事件对象，创建后缓存
        let event = GlobalCache.get('$routeClickEvent');
        if (!event) {
            event = new NEvent(null, 'click', function (model, dom, evObj, e) {
                let path = dom.props['path'];
                if (Util.isEmpty(path)) {
                    return;
                }
                Router.go(path);
            });
            GlobalCache.set('$routeClickEvent', event);
        }
        dom.vdom.addEvent(event);
        return true;
    }, 10);
    /**
     * 增加router指令
     */
    createDirective('router', function (module, dom) {
        Router.routerKeyMap.set(module.id, dom.key);
        return true;
    }, 10);
    /**
     * 插头指令
     * 用于模块中，可实现同名替换
     */
    createDirective('slot', function (module, dom) {
        this.value = this.value || 'default';
        let mid = dom.parent.subModuleId;
        const src = dom.vdom;
        //父dom有module指令，表示为替代节点，替换子模块中的对应的slot节点；否则为子模块定义slot节点
        if (mid) {
            let m = ModuleFactory.get(mid);
            if (m) {
                //缓存当前替换节点
                m.objectManager.set('$slots.' + this.value, { dom: src, model: dom.model });
            }
        }
        else { //源slot节点
            //获取替换节点进行替换，如果没有，则渲染子节点
            const cfg = module.objectManager.get('$slots.' + this.value);
            const children = cfg ? cfg.dom.children : src.children;
            if (children) {
                for (let d of children) {
                    let model;
                    if (src.hasProp('innerRender')) { //内部数据渲染
                        model = dom.model;
                    }
                    else if (cfg) { //外部数据渲染
                        model = new Model(cfg.model, module);
                        //对象绑定到当前模块
                        // ModelManager.bindToModule(model, module);
                    }
                    //key以s结尾，避免重复，以dom key作为附加key
                    Renderer.renderDom(module, d, model, dom.parent, dom.key + 's');
                }
            }
        }
        return false;
    }, 5);
    /**
     * 指令名
     * 描述：动画指令
     */
    createDirective('animation', function (module, dom) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const confObj = this.value;
        if (!Util.isObject(confObj)) {
            return new Error('未找到animation配置对象');
        }
        // 获得tigger
        const tigger = confObj.tigger == false ? false : true;
        // 用于判断是动画还是过渡
        const type = confObj.type || "transition";
        // 用于判断是否是 进入/离开动画 
        const isAppear = confObj.isAppear == false ? false : true;
        // 提取 动画/过渡 名
        const nameEnter = ((_a = confObj.name) === null || _a === void 0 ? void 0 : _a.enter) || confObj.name;
        const nameLeave = ((_b = confObj.name) === null || _b === void 0 ? void 0 : _b.leave) || confObj.name;
        // 提取 动画/过渡 持续时间
        const durationEnter = ((_c = confObj.duration) === null || _c === void 0 ? void 0 : _c.enter) || confObj.duration || '';
        const durationLeave = ((_d = confObj.duration) === null || _d === void 0 ? void 0 : _d.leavr) || confObj.duration || '';
        // 提取 动画/过渡 延迟时间
        const delayEnter = ((_e = confObj.delay) === null || _e === void 0 ? void 0 : _e.enter) || confObj.delay || '0s';
        const delayLeave = ((_f = confObj.delay) === null || _f === void 0 ? void 0 : _f.leave) || confObj.delay || '0s';
        // 提取 动画/过渡 时间函数
        const timingFunctionEnter = ((_g = confObj.timingFunction) === null || _g === void 0 ? void 0 : _g.enter) || confObj.timingFunction || 'ease';
        const timingFunctionLeave = ((_h = confObj.timingFunction) === null || _h === void 0 ? void 0 : _h.leave) || confObj.timingFunction || 'ease';
        // 提取动画/过渡 钩子函数
        const beforeEnter = ((_k = (_j = confObj.hooks) === null || _j === void 0 ? void 0 : _j.enter) === null || _k === void 0 ? void 0 : _k.before) ? confObj.hooks.enter.before : ((_l = confObj.hooks) === null || _l === void 0 ? void 0 : _l.before) || undefined;
        const afterEnter = ((_o = (_m = confObj.hooks) === null || _m === void 0 ? void 0 : _m.enter) === null || _o === void 0 ? void 0 : _o.after) ? confObj.hooks.enter.after : ((_p = confObj.hooks) === null || _p === void 0 ? void 0 : _p.after) || undefined;
        const beforeLeave = ((_r = (_q = confObj.hooks) === null || _q === void 0 ? void 0 : _q.leave) === null || _r === void 0 ? void 0 : _r.before) ? confObj.hooks.leave.before : ((_s = confObj.hooks) === null || _s === void 0 ? void 0 : _s.before) || undefined;
        const afterLeave = ((_u = (_t = confObj.hooks) === null || _t === void 0 ? void 0 : _t.leave) === null || _u === void 0 ? void 0 : _u.after) ? confObj.hooks.leave.after : ((_v = confObj.hooks) === null || _v === void 0 ? void 0 : _v.after) || undefined;
        // 定义动画或者过渡结束回调。
        let handler = () => {
            const el = module.getElement(dom.key);
            // 离开动画结束之后隐藏元素
            if (!tigger) {
                if (isAppear) {
                    // 离开动画结束之后 把元素隐藏
                    el.style.display = 'none';
                }
                if (afterLeave) {
                    afterLeave.apply(module.model, [module]);
                }
                // 这里如果style里面写了width和height 那么给他恢复成他写的，不然
                [el.style.width, el.style.height] = getOriginalWidthAndHeight(dom);
                // 结束之后删除掉离开动画相关的类
                el.classList.remove(nameLeave + '-leave-active');
                if (type == 'animation') {
                    el.classList.add(nameLeave + '-leave-to');
                }
            }
            else {
                if (afterEnter) {
                    afterEnter.apply(module.model, [module]);
                }
                // 进入动画结束之后删除掉相关的类
                el.classList.remove(nameEnter + '-enter-active');
                if (type == 'animation') {
                    el.classList.add(nameEnter + '-enter-to');
                }
            }
            // 清除事件监听
            el.removeEventListener('animationend', handler);
            el.removeEventListener('transitionend', handler);
        };
        // 获得真实dom
        let el = module.getElement(dom.key);
        if (!tigger) {
            // tigger为false 播放Leave动画
            if (el) {
                if (el.getAttribute('class').indexOf(`${nameLeave}-leave-to`) != -1) {
                    // 当前已经处于leave动画播放完成之后，若是进入离开动画，这时候需要他保持隐藏状态。
                    dom.props['class'] += ` ${nameLeave}-leave-to`;
                    if (isAppear) {
                        dom.props["style"]
                            ? (dom.props["style"] += ";display:none;")
                            : (dom.props["style"] = "display:none;");
                    }
                    return true;
                }
                // // 确保在触发动画之前还是隐藏状态
                // 调用函数触发 Leave动画/过渡
                changeStateFromShowToHide(el);
                return true;
            }
            else {
                // el不存在，第一次渲染
                if (isAppear) {
                    // 是进入离开动画，管理初次渲染的状态，让他隐藏
                    dom.props["style"]
                        ? (dom.props["style"] += ";display:none;")
                        : (dom.props["style"] = "display:none;");
                }
                // 下一帧
                setTimeout(() => {
                    // el已经渲染出来，取得el 根据动画/过渡的类型来做不同的事
                    let el = module.getElement(dom.key);
                    if (isAppear) {
                        // 动画/过渡 是进入离开动画/过渡，并且当前是需要让他隐藏所以我们不播放动画，直接隐藏。
                        el.classList.add(`${nameLeave}-leave-to`);
                        // 这里必须将这个属性加入到dom中,否则该模块其他数据变化触发增量渲染时,diff会将这个节点重新渲染,导致显示异常
                        // 这里添加添加属性是为了避免diff算法重新渲染该节点
                        dom.props['class'] += ` ${nameLeave}-leave-to`;
                        el.style.display = 'none';
                    }
                    else {
                        //  动画/过渡 是 **非进入离开动画/过渡** 我们不管理元素的隐藏，所以我们让他播放一次Leave动画。
                        changeStateFromShowToHide(el);
                    }
                }, 0);
            }
            // 通过虚拟dom将元素渲染出来
            return true;
        }
        else {
            // tigger为true 播放Enter动画
            if (el) {
                if (el.getAttribute('class').indexOf(`${nameEnter}-enter-to`) != -1) {
                    // 这里不需要像tigger=false时那样处理，这时候他已经处于进入动画播放完毕状态，
                    // 模块内其他数据变化引起该指令重新执行，这时候需要他保持现在显示的状态，直接返回true
                    dom.props['class'] += ` ${nameEnter}-enter-to`;
                    return true;
                }
                if (isAppear) {
                    // 如果是进入离开动画，在播放enter动画之前确保该元素是隐藏状态
                    // 确保就算diff更新了该dom还是有隐藏属性
                    dom.props["style"]
                        ? (dom.props["style"] += ";display:none;")
                        : (dom.props["style"] = "display:none;");
                }
                // 调用函数触发Enter动画/过渡
                changeStateFromHideToShow(el);
            }
            else {
                // el不存在，是初次渲染
                if (isAppear) {
                    // 管理初次渲染元素的隐藏显示状态
                    dom.props["style"]
                        ? (dom.props["style"] += ";display:none;")
                        : (dom.props["style"] = "display:none;");
                }
                // 下一帧
                setTimeout(() => {
                    // 等虚拟dom把元素更新上去了之后，取得元素
                    let el = module.getElement(dom.key);
                    if (isAppear) {
                        // 这里必须将这个属性加入到dom中,否则该模块其他数据变化触发增量渲染时,diff会将这个节点重新渲染,导致显示异常
                        // 这里添加添加属性是为了避免diff算法重新渲染该节点
                        dom.props['class'] += ` ${nameEnter}-enter-to`;
                        el.style.display = 'none';
                    }
                    // Enter动画与Leave动画不同，
                    // 不管动画是不是进入离开动画，在初次渲染的时候都要执行一遍动画
                    // Leave动画不一样，如果是开始离开动画，并且初次渲染的时候需要隐藏，那么我们没有必要播放一遍离开动画
                    changeStateFromHideToShow(el);
                }, 0);
            }
            // 通过虚拟dom将元素渲染出来
            return true;
        }
        /**
         * 播放Leave动画
         * @param el 真实dom
         */
        function changeStateFromShowToHide(el) {
            // 动画类型是transitiojn
            if (type == 'transition') {
                // 前面已经对transition的初始状态进行了设置，我们需要在下一帧设置结束状态才能触发过渡
                // 获得宽高的值 因为 宽高的auto 百分比 calc计算值都无法拿来触发动画或者过渡。
                let [width, height] = getElRealSzie(el);
                // setTimeout(() => {
                requestAnimationFrame(() => {
                    // 移除掉上一次过渡的最终状态
                    el.classList.remove(nameEnter + '-enter-to');
                    // 设置过渡的类名
                    el.classList.add(nameLeave + '-leave-active');
                    // 设置离开过渡的开始类
                    el.classList.add(nameLeave + '-leave-from');
                    // fold过渡的开始状态
                    if (nameLeave == 'fold-height') {
                        el.style.height = height;
                    }
                    else if (nameLeave == 'fold-width') {
                        el.style.width = width;
                    }
                    // 处理离开过渡的延时
                    el.style.transitionDelay = delayEnter;
                    // 处理过渡的持续时间
                    if (durationEnter != '') {
                        el.style.transitionDuration = durationEnter;
                    }
                    // 处理过渡的时间函数
                    if (timingFunctionEnter != 'ease') {
                        el.style.transitionTimingFunction = timingFunctionEnter;
                    }
                    // 在触发过渡之前执行hook
                    if (beforeLeave) {
                        beforeLeave.apply(module.model, [module]);
                    }
                    requestAnimationFrame(() => {
                        // 添加结束状态
                        el.classList.add(nameLeave + '-leave-to');
                        // 在动画或者过渡开始之前移除掉初始状态
                        el.classList.remove(nameLeave + '-leave-from');
                        if (nameLeave == 'fold-height') {
                            el.style.height = '0px';
                        }
                        else if (nameLeave == 'fold-width') {
                            el.style.width = '0px';
                        }
                        // 添加过渡结束事件监听
                        el.addEventListener('transitionend', handler);
                    });
                });
            }
            else {
                requestAnimationFrame(() => {
                    // 动画类型是aniamtion
                    el.classList.remove(nameEnter + '-enter-to');
                    // 动画延时时间
                    el.style.animationDelay = delayLeave;
                    // 动画持续时间
                    if (durationLeave != '') {
                        el.style.animationDuration = durationLeave;
                    }
                    if (timingFunctionLeave != 'ease') {
                        el.style.animationTimingFunction = timingFunctionLeave;
                    }
                    // 在触发动画之前执行hook
                    if (beforeLeave) {
                        beforeLeave.apply(module.model, [module]);
                    }
                    // 触发一次回流reflow
                    void el.offsetWidth;
                    // 添加动画类名
                    el.classList.add(nameLeave + '-leave-active');
                    //添加动画结束时间监听
                    el.addEventListener('animationend', handler);
                    // })
                });
            }
        }
        /**
         * 播放Enter动画
         * @param el 真实dom
         */
        function changeStateFromHideToShow(el) {
            // 动画类型是transition
            if (type == 'transition') {
                // 对于进入/离开动画
                // Enter过渡的延迟时间与Leave过渡的延迟时间处理不一样
                // 我们这里把延迟统一设置成0s，然后通过定时器来设置延时，
                // 这样可以避免先渲染一片空白区域占位，然后再延时一段时间执行过渡效果。
                el.style.transitionDelay = '0s';
                let delay = parseFloat(delayEnter) * 1000;
                setTimeout(() => {
                    let [width, height] = getElRealSzie(el);
                    // 在第一帧设置初始状态
                    // 移除掉上一次过渡的最终状态
                    el.classList.remove(nameLeave + '-leave-to');
                    // 添加过渡的类名
                    el.classList.add(nameEnter + '-enter-active');
                    // 给进入过渡设置开始类名
                    el.classList.add(nameEnter + '-enter-from');
                    // 获得元素的真实尺寸
                    if (nameEnter == 'fold-height') {
                        el.style.height = '0px';
                    }
                    else if (nameEnter == 'fold-width') {
                        el.style.width = '0px';
                    }
                    // 设置过渡持续时间
                    if (durationEnter != '') {
                        el.style.transitionDuration = durationEnter;
                    }
                    // 设置过渡时间函数
                    if (timingFunctionEnter != 'ease') {
                        el.style.transitionTimingFunction = timingFunctionEnter;
                    }
                    // 第二帧将带有初始状态的元素显示出来,如果不开这一帧那么fade的进入过渡在初次渲染的时候会被当作离开过渡触发。
                    requestAnimationFrame(() => {
                        // 下一帧请求过渡效果
                        // 过渡开始之前先将元素显示
                        if (isAppear) {
                            el.style.display = '';
                        }
                        // 第三帧触发过渡
                        requestAnimationFrame(() => {
                            if (beforeEnter) {
                                beforeEnter.apply(module.model, [module]);
                            }
                            // 增加 过渡 结束类名
                            el.classList.add(nameEnter + '-enter-to');
                            // 移除过渡的开始类名
                            el.classList.remove(nameEnter + '-enter-from');
                            if (nameEnter == 'fold-height') {
                                el.style.height = height;
                            }
                            else if (nameEnter == 'fold-width') {
                                el.style.width = width;
                            }
                            el.addEventListener('transitionend', handler);
                        });
                    });
                }, delay);
            }
            else {
                // 动画类型是aniamtion
                // 这里动画的延迟时间也与过渡类似的处理方式。
                el.style.animationDelay = "0s";
                let delay = parseFloat(delayEnter) * 1000;
                setTimeout(() => {
                    // 动画开始之前先将元素显示
                    requestAnimationFrame(() => {
                        el.classList.remove(nameLeave + '-leave-to');
                        // 设置动画的持续时间
                        if (durationEnter != '') {
                            el.style.animationDuration = durationEnter;
                        }
                        // 设置动画的时间函数
                        if (timingFunctionEnter != 'ease') {
                            el.style.animationTimingFunction = durationEnter;
                        }
                        if (isAppear) {
                            el.style.display = '';
                        }
                        // 在触发过渡之前执行hook 
                        if (beforeEnter) {
                            beforeEnter.apply(module.model, [module]);
                        }
                        // 触发一次回流reflow
                        void el.offsetWidth;
                        // 重新添加类名
                        el.classList.add(nameEnter + '-enter-active');
                        el.addEventListener('animationend', handler);
                    });
                }, delay);
            }
        }
        /**
         * 获取真实dom绘制出来之后的宽高
         * @param el 真实dom
         * @returns 真实dom绘制出来之后的宽高
         */
        function getElRealSzie(el) {
            if (el.style.display == 'none') {
                // 获取原先的
                const position = window.getComputedStyle(el).getPropertyValue("position");
                const vis = window.getComputedStyle(el).getPropertyValue("visibility");
                // 先脱流
                el.style.position = 'absolute';
                // 然后将元素变为
                el.style.visibility = 'hidden';
                el.style.display = '';
                let width = window.getComputedStyle(el).getPropertyValue("width");
                let height = window.getComputedStyle(el).getPropertyValue("height");
                // 还原样式
                el.style.position = position;
                el.style.visibility = vis;
                el.style.display = 'none';
                return [width, height];
            }
            else {
                let width = window.getComputedStyle(el).getPropertyValue("width");
                let height = window.getComputedStyle(el).getPropertyValue("height");
                return [width, height];
            }
        }
        /**
         * 如果dom上得style里面有width/height
         * @param dom 虚拟dom
         * @returns 获得模板上的width/height 如果没有则返回空字符串
         */
        function getOriginalWidthAndHeight(dom) {
            const oStyle = dom.vdom.getProp('style');
            let width;
            let height;
            if (oStyle) {
                let arr = oStyle.trim().split(/;\s*/);
                for (const a of arr) {
                    if (a.startsWith('width')) {
                        width = a.split(":")[1];
                    }
                    if (a.startsWith('height')) {
                        height = a.split(':')[1];
                    }
                }
            }
            width = width || '';
            height = height || '';
            return [width, height];
        }
    }, 10);
})());

/**
 * tap事件
 */
EventManager.regist('tap', {
    touchstart(dom, module, evtObj, e) {
        let tch = e.touches[0];
        evtObj.dependEvent.setParam(module, dom, 'pos', { sx: tch.pageX, sy: tch.pageY, t: Date.now() });
    },
    touchmove(dom, module, evtObj, e) {
        let pos = evtObj.dependEvent.getParam(module, dom, 'pos');
        if (!pos) {
            return;
        }
        let tch = e.touches[0];
        let dx = tch.pageX - pos.sx;
        let dy = tch.pageY - pos.sy;
        //判断是否移动
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            pos.move = true;
        }
    },
    touchend(dom, module, evtObj, e) {
        let pos = evtObj.dependEvent.getParam(module, dom, 'pos');
        if (!pos) {
            return;
        }
        evtObj.dependEvent.removeParam(module, dom, 'pos');
        let dt = Date.now() - pos.t;
        //点下时间不超过200ms,触发事件
        if (!pos.move && dt < 200) {
            let foo = evtObj.dependEvent.handler;
            if (typeof foo === 'string') {
                module.invokeMethod(evtObj.dependEvent.handler, dom.model, dom, evtObj.dependEvent, e);
            }
            else {
                foo.apply(module, [dom.model, dom, evtObj.dependEvent, e]);
            }
        }
    }
});
/**
 * swipe事件
 */
EventManager.regist('swipe', {
    touchstart(dom, module, evtObj, e) {
        let tch = e.touches[0];
        let t = Date.now();
        evtObj.dependEvent.setParam(module, dom, 'swipe', {
            oldTime: [t, t],
            speedLoc: [{ x: tch.pageX, y: tch.pageY }, { x: tch.pageX, y: tch.pageY }],
            oldLoc: { x: tch.pageX, y: tch.pageY }
        });
    },
    touchmove(dom, module, evtObj, e) {
        let nt = Date.now();
        let tch = e.touches[0];
        let mv = evtObj.dependEvent.getParam(module, dom, 'swipe');
        //50ms记录一次
        if (nt - mv.oldTime[1] > 50) {
            mv.speedLoc[0] = { x: mv.speedLoc[1].x, y: mv.speedLoc[1].y };
            mv.speedLoc[1] = { x: tch.pageX, y: tch.pageY };
            mv.oldTime[0] = mv.oldTime[1];
            mv.oldTime[1] = nt;
        }
        mv.oldLoc = { x: tch.pageX, y: tch.pageY };
    },
    touchend(dom, module, evtObj, e) {
        let mv = evtObj.dependEvent.getParam(module, dom, 'swipe');
        let nt = Date.now();
        //取值序号 0 或 1，默认1，如果释放时间与上次事件太短，则取0
        let ind = (nt - mv.oldTime[1] < 30) ? 0 : 1;
        let dx = mv.oldLoc.x - mv.speedLoc[ind].x;
        let dy = mv.oldLoc.y - mv.speedLoc[ind].y;
        let s = Math.sqrt(dx * dx + dy * dy);
        let dt = nt - mv.oldTime[ind];
        //超过300ms 不执行事件
        if (dt > 300 || s < 10) {
            return;
        }
        let v0 = s / dt;
        //速度>0.1,触发swipe事件
        if (v0 > 0.05) {
            let sname = '';
            if (dx < 0 && Math.abs(dy / dx) < 1) {
                e.v0 = v0; //添加附加参数到e
                sname = 'swipeleft';
            }
            if (dx > 0 && Math.abs(dy / dx) < 1) {
                e.v0 = v0;
                sname = 'swiperight';
            }
            if (dy > 0 && Math.abs(dx / dy) < 1) {
                e.v0 = v0;
                sname = 'swipedown';
            }
            if (dy < 0 && Math.abs(dx / dy) < 1) {
                e.v0 = v0;
                sname = 'swipeup';
            }
            //处理swipe
            if (evtObj.dependEvent.name === sname) {
                let foo = evtObj.dependEvent.handler;
                if (typeof foo === 'string') {
                    module.invokeMethod(foo, dom.model, dom, evtObj.dependEvent, e);
                }
                else if (typeof foo === 'function') {
                    foo.apply(module, [dom.model, dom, evtObj.dependEvent, e]);
                }
            }
        }
    }
});
//把swpie注册到4个方向
EventManager.regist('swipeleft', EventManager.get('swipe'));
EventManager.regist('swiperight', EventManager.get('swipe'));
EventManager.regist('swipeup', EventManager.get('swipe'));
EventManager.regist('swipedown', EventManager.get('swipe'));
/**
 * double click
 */
EventManager.regist('dblclick', {
    click(dom, module, evtObj, e) {
        let firstClick = evtObj.dependEvent.getParam(module, dom, 'firstClick');
        if (firstClick) {
            let t = Date.now();
            //两次点击在300ms内，视为双击
            if (t - firstClick < 300) {
                let foo = evtObj.dependEvent.handler;
                if (typeof foo === 'string') {
                    module.invokeMethod(evtObj.dependEvent.handler, dom.model, dom, evtObj.dependEvent, e);
                }
                else {
                    foo.apply(module, [dom.model, dom, evtObj.dependEvent, e]);
                }
            }
        }
        else {
            evtObj.dependEvent.setParam(module, dom, 'firstClick', Date.now());
        }
        //延迟清理firstClick
        setTimeout(() => {
            evtObj.dependEvent.removeParam(module, dom, 'firstClick');
        }, 500);
    },
});

//关闭右键菜单
document.oncontextmenu = function (e) {
    e.preventDefault();
};
/**
 * 工具类
 */
class UITool {
    /**
     * 去掉字符串的空格
     * @param src
     */
    static clearSpace(src) {
        if (src && typeof src === 'string') {
            return src.replace(/\s+/g, '');
        }
    }
    /**
     * 计算实际位置
     * @param el    待计算的element
     * @returns     [x坐标,y坐标]
     */
    static getRelPos(el) {
        let x = el.offsetLeft - el.scrollLeft;
        let y = el.offsetTop - el.scrollTop;
        let offsetEl = el.offsetParent;
        while (el) {
            el = el.parentElement;
            x -= el.scrollLeft;
            y -= el.scrollTop;
            if (offsetEl === el || el === document.body) {
                break;
            }
        }
        return [x, y];
    }
    /**
     * 获取实际位置
     * @param el    待计算的element
     * @returns     [x坐标,y坐标]
     */
    static getRealPos(el) {
        let x = el.offsetLeft - el.scrollLeft;
        let y = el.offsetTop - el.scrollTop;
        let offsetEl = el.offsetParent;
        while (el) {
            el = el.parentElement;
            x -= el.scrollLeft;
            y -= el.scrollTop;
            if (offsetEl === el) {
                x += el.offsetLeft;
                y += el.offsetTop;
                offsetEl = offsetEl.offsetParent;
            }
            if (el === document.body) {
                break;
            }
        }
        return [x, y];
    }
    /**
     * 计算位置
     * @param event         鼠标事件
     * @param relPos        相对位置：1下 2右
     * @param width         dom宽
     * @param height        dom高
     * @returns             [x,y]
     */
    static cacPosition(event, relPos, width, height) {
        const relEl = event.currentTarget;
        let w = relEl.offsetWidth;
        let h = relEl.offsetHeight;
        let el = event.target;
        //如果点击到内部元素，则通过向上计算偏移量
        let ox = 0;
        let oy = 0;
        //解决父对象transform不为none时的fixed定位问题
        let pox = 0;
        let poy = 0;
        let pel = relEl.parentElement;
        while (pel) {
            let trans = window.getComputedStyle(pel, null).transform;
            if (trans !== 'none') {
                pox += pel.offsetLeft;
                poy += pel.offsetTop;
            }
            pel = pel.parentElement;
        }
        // 计算相对位置
        while (el && el !== relEl) {
            if (el.offsetParent !== relEl && el.offsetParent.contains(relEl)) {
                break;
            }
            ox += el.offsetLeft;
            oy += el.offsetTop;
            el = el.offsetParent;
        }
        //box 阴影面padding为5
        const padding = 5;
        //页面高度和宽度
        const gwidth = window.innerWidth;
        const gheight = window.innerHeight;
        const px = event.clientX - event.offsetX - ox;
        const py = event.clientY - event.offsetY - oy;
        let x;
        let y;
        if (relPos === 1) { //纵向
            x = px - padding + 1;
            y = py + h;
            if (py + h + height > gheight + padding) { //下方不够放
                if (py + h > gheight / 2 + padding) { //起始位置过半，空间较小，移动到上方
                    if (py < height + padding) { //不够放
                        height = py - padding * 2;
                    }
                    y = py - height;
                }
                else {
                    height = gheight - py - h - padding;
                    y = py + h;
                }
            }
        }
        else { //横向
            x = px + w;
            y = py;
            if (x + width > gwidth + padding) { //右方不够放，放左放
                x = px - width;
            }
        }
        return [x - pox, y - poy, width, height];
    }
}
/**
 * animation box 指令
 */
// TODO
createDirective('ui-animationbox', function (module, dom) {
    let dom1 = { key: Util.genId() + '' };
    dom1.children = [dom];
    dom1.props['class'] = 'ui-down-box';
    //延迟获取dom实际宽高度
    setTimeout(item => {
    }, 0);
    return true;
}, 5);

/**
 * 折叠插件
 * 属性配置
 * single: true/false 是否同时只展开一个
 */
class UIAccordion extends Module {
    template(props) {
        this.__single = props.hasOwnProperty('single');
        this.setExcludeProps(['single']);
        //子菜单 type=0表示在当前菜单项下侧，否则表示右侧
        return `
            <div class='ui-accordion'>
                <slot></slot>
            </div>
        `;
    }
}
/**
 * accordion item
 * 属性配置
 * opened: 是否展开
 */
class UIAccordionItem extends Module {
    template(props) {
        if (props.hasOwnProperty('opened')) {
            this.model['__open'] = true;
            // this.model['fold'].tigger = true;
        }
        this.setExcludeProps(['title', 'opened']);
        delete props.opened;
        return `
            <div class='ui-accordion-item'>
                <div class='ui-accordion-title' e-click='__clickItem'>
                    ${props.title}
                    <b class={{__open?'ui-expand-icon ui-expand-open':'ui-expand-icon'}} />
                </div>
                <div class='ui-accordion-content' x-show={{__open}}>
                    <slot></slot>
                </div>
            </div>
        `;
    }
    data() {
        return {
        // fold: {
        // 	tigger: false,
        // 	name: 'fold-height',
        // },
        };
    }
    __clickItem(model) {
        let module = this.getParent();
        if (module['__single']) {
            for (let mid of module.children) {
                let m = ModuleFactory.get(mid);
                if (mid !== this.id) {
                    m.model['__open'] = false;
                    // m.model['fold'].tigger = false;
                }
                else {
                    m.model['__open'] = true;
                    // m.model['fold'].tigger = true;
                }
            }
        }
        else {
            model['__open'] = !model['__open'];
            // model['fold'].tigger = !model['fold'].tigger;
        }
    }
}
registModule(UIAccordion, 'ui-accordion');
registModule(UIAccordionItem, 'ui-accordion-item');

/**
 * 按钮插件
 * 参数说明
 * title:       标题
 * icon:        图标
 * iconPos:     图标位置 left top right bottom,默认left
 * theme:       主题 default active error success warn，默认default
 * size:        按钮size tiny normal large，默认normal
 * nobg:        不需要背景 true false，默认false
 * circle:      圆形
 */
class UIButton extends Module {
    template(props) {
        let arr = ['ui-btn'];
        //字体
        arr.push('ui-btn-' + (props.size || 'normal'));
        //图标
        if (props.icon) {
            arr.push('ui-icon-' + props.icon);
            arr.push('ui-btn-' + (props.iconPos || 'left'));
        }
        //无背景
        if (props.hasOwnProperty('nobg')) {
            arr.push('ui-btn-nobg');
        }
        else {
            arr.push('ui-btn-' + (props.theme || 'default'));
        }
        //圆形
        if (props.hasOwnProperty('circle')) {
            arr.push('ui-btn-circle');
        }
        if (!props.title) {
            arr.push('ui-btn-notext');
        }
        this.setExcludeProps(['theme', 'size', 'nobg', 'circle', 'icon', 'iconPos', 'title']);
        return `
            <button class='${arr.join(" ")}'>
                ${props.title || ''}
            </button>
        `;
    }
}
registModule(UIButton, 'ui-button');

class BaseInput extends Module {
    template(props) {
        this.__field = props.field;
        this.__onChangeName = props.onChange;
        return null;
    }
    onBeforeFirstRender() {
        if (!this.__field) {
            return;
        }
        watch(this.srcDom.model, this.__field, (m, k, ov, nv) => {
            if (this.__disableTrigger) {
                this.__disableTrigger = false;
                return;
            }
            this.__initValue();
        });
    }
    /**
     * 更改值
     * 需要对父模块对应数据项进行更改
     * @param value     新值
     */
    __change(value) {
        if (!this.__field) {
            return;
        }
        let v1 = this.model['__value'];
        if (value === v1) {
            return;
        }
        //调用change事件
        if (this.__onChangeName) {
            this.getParent().invokeMethod(this.__onChangeName, v1, value);
        }
        this.model['__value'] = value;
        this.__disableTrigger = true;
        //更改父模块对应数据项
        $set(this.srcDom.model, this.__field, value);
    }
    /**
     * 每次刷新前获取新值
     */
    onBeforeRender() {
        this.__initValue();
    }
    /**
     * 初始化value
     * @returns
     */
    __initValue() {
        if (!this.__field) {
            return;
        }
        const v = $get(this.srcDom.model, this.__field);
        const v1 = this.model['__value'];
        if (v === v1) {
            return;
        }
        this.model['__value'] = v;
    }
    /**
     * 获取值
     * @returns     模块值
     */
    __getValue() {
        return this.model['__value'];
    }
}

/**
 * checkbox插件
 * 配置说明
 * field        绑定父模块的字段
 * onChange     change事件方法
 */
class UICheckbox extends BaseInput {
    template(props) {
        super.template(props);
        this.__yesValue = props['yes-value'] || true;
        this.__noValue = props['no-value'] || false;
        this.setExcludeProps(['title', 'yes-value', 'no-value']);
        return `
            <span class='ui-checkbox'>
                <b class={{__value==this.__yesValue?'ui-checkbox-checked':'ui-checkbox-uncheck'}} e-click='__clickCheck'/>
                ${props.title}
            </span>
        `;
    }
    __clickCheck(model) {
        model['__value'] = model['__value'] == this.__yesValue ? this.__noValue : this.__yesValue;
        //设置值到父对象
        if (this.__field) {
            $set(this.srcDom.model, this.__field, model['__value']);
        }
    }
}
registModule(UICheckbox, 'ui-checkbox');

/**
 * 树形插件
 * 数据项
 * $data           树结构数据
 * 参数说明
 * field:           如果树作为输入模式，则需要设置
 * displayField：   数据项中用于显示的属性名
 * valueField：     数据项中用于取值的属性名，field存在时，不为空
 * icons：          树节点图标，依次为为非叶子节点关闭状态，打开状态，叶子节点，如果只有两个，则表示非叶子节点和叶子节点，如果1个，则表示非叶子节点
 * onItemClick：    节点点击事件
 */
class UITree extends BaseInput {
    /**
     * 模版函数
     * @param props     父模块传递的属性值
     * @returns         模版字符串
     */
    template(props) {
        super.template(props);
        this.__displayField = props.displayField;
        this.__valueField = props.valueField;
        this.__onItemClick = props.onItemClick;
        this.icons = props.icons ? props.icons.split(',').map(item => item.trim()) : undefined;
        let treeCls = 'ui-tree' + (props.class ? ' ' + props.class : '');
        let needCheck = this.__field ? true : false;
        this.setExcludeProps(['icons', 'checkbox', 'onItemClick']);
        return `
            <div class='${treeCls}' ${props.style ? 'style="' + props.style + '"' : ''} x-model='data'>
                <for cond={{children}} class='ui-tree-nodect'>
				    <div class='ui-tree-node'>
                        <b class={{__genArrowCls(!children||children.length===0,__opened)}} e-click='__expandClose'></b>
                        ${props.icons ? "<b class={{__genFolderCls(!children||children.length===0,__opened)}}></b>" : ""}
                        ${needCheck ? "<b class={{__genCheckCls(__checked)}} e-click='__checkItem'></b>" : ""}
                        <span e-click='__clickItem'>
                            <slot innerRender/>
                        </span>
                    </div>
                    <recur cond='children' class={{ 'ui-tree-subct' + (!__opened?' ui-tree-subct-hide':'')}}>
                        <for cond={{children}} class='ui-tree-nodect'>
                            <div class='ui-tree-node'>
                                <b class={{__genArrowCls(!children||children.length===0,__opened)}} e-click='__expandClose'></b>
                                ${props.icons ? "<b class={{__genFolderCls(!children||children.length===0,__opened)}}></b>" : ""}
                                ${needCheck ? "<b class={{__genCheckCls(__checked)}} e-click='__checkItem'></b>" : ""}
                                <span e-click='__clickItem'>
                                    <slot innerRender/>
                                </span>
                            </div>
                            <recur ref />
                        </for>                
                    </recur>
                </for>
            </div>
        `;
    }
    /**
     * 创建选择框class
     * @param checked   选中标识 true:选中  false:未选中
     * @returns         选择框class
     */
    __genCheckCls(checked) {
        let arr = ['ui-tree-icon'];
        if (!checked) {
            arr.push('ui-tree-uncheck');
        }
        else if (checked === 1) {
            arr.push('ui-tree-checked');
        }
        else {
            arr.push('ui-tree-partchecked');
        }
        return arr.join(' ');
    }
    /**
     * 创建树左侧箭头class
     * @param isLeaf    是否未叶子节点
     * @param isOpen    是否展开
     * @returns         箭头(展开收拢)图标class
     */
    __genArrowCls(isLeaf, isOpen) {
        let arr = ['ui-tree-icon'];
        if (!isLeaf) {
            arr.push('ui-icon-arrow-right');
        }
        if (isOpen) {
            arr.push('ui-tree-node-open');
        }
        return arr.join(' ');
    }
    /**
     * 显示文件夹图标
     * @param isLeaf    是否叶子节点
     * @param isOpen    是否展开
     * @returns         文件夹图标class
     */
    __genFolderCls(isLeaf, isOpen) {
        if (!this.icons || this.icons.length === 0) {
            return;
        }
        const arr = this.icons;
        //icon cls arr
        let arr1 = ['ui-tree-icon'];
        if (arr.length === 1) {
            arr1.push(isLeaf ? '' : 'ui-icon-' + arr[0]);
        }
        else if (arr.length === 2) {
            arr1.push('ui-icon-' + (isLeaf ? arr[1] : arr[0]));
        }
        else if (arr.length === 3) {
            if (isOpen) {
                arr1.push('ui-icon-' + (isLeaf ? arr[2] : arr[1]));
            }
            else {
                arr1.push('ui-icon-' + (isLeaf ? arr[2] : arr[0]));
            }
        }
        return arr1.join(' ');
    }
    /**
     * 点击item事件
     * @param model     当前节点对应model
     * @param dom       virtual dom节点
     * @param eobj      NEvent对象
     * @param e         event对象
     */
    __clickItem(model, dom, eobj, e) {
        if (this.__onItemClick) {
            this.invokeMethod(this.__onItemClick, model, dom, eobj);
        }
    }
    /**
     * 展开关闭节点
     * @param model 当前节点对应model
     * @param dom       virtual dom节点
     * @param eobj      NEvent对象
     * @param e         event对象
     */
    __expandClose(model, dom, eobj, e) {
        model['__opened'] = !model['__opened'];
    }
    /**
     * checkbox 点击
     * @param model     当前节点对应model
     * @param dom       virtual dom节点
     * @param eobj      NEvent对象
     * @param e         event对象
     */
    __checkItem(model, dom, eobj, e) {
        let data = this.keyMap.get(getmkey(dom.model));
        if (!data) {
            return;
        }
        let state = data.state;
        state = state === 0 || state === 2 ? 1 : 0;
        this.__setState(data, state);
    }
    /**
     * 首次渲染事件
     * @param model     树对应model
     */
    __initValue() {
        super.__initValue();
        this.__initMap();
        if (this.__field && this.model['__value']) {
            this.__setValue(this.model['__value']);
        }
    }
    /**
     * 设置值
     * @param value
     */
    __setValue(value) {
        const me = this;
        if (!value || this.__valueField === '' || !this.model['data'] || !this.model['data'].children) {
            return;
        }
        for (let m of this.model['data'].children) {
            setNode(m);
        }
        /**
         * 查找并设置节点
         * @param m     model
         */
        function setNode(m) {
            if (value.indexOf(m[me.__valueField]) !== -1) {
                me.__setState(me.keyMap.get(getmkey(m)), 1);
            }
            else if (m.children) { //处理子节点
                for (let m1 of m.children) {
                    setNode(m1);
                }
            }
        }
    }
    /**
     * 修改树的值
     * @param model     节点model
     * @returns
     */
    __changeValue(data) {
        if (!this.__field) {
            return;
        }
        const model = data.model;
        let state = model['__checked'];
        let value = this.model['__value'];
        if (!value) {
            value = [];
        }
        //当前model的value值
        let cv = model[this.__valueField];
        let ind = value.indexOf(cv);
        if (state === 1) { //选中，增加值
            if (ind === -1) {
                value.push(cv);
            }
        }
        else if (ind !== -1) { //未选中,移除
            value.splice(ind, 1);
        }
        super.__change(value);
    }
    /**
     * 设置state
     * @param data      data
     * @param state     状态值 0/1
     * @param notParent 是否处理祖先节点
     */
    __setState(data, state, notParent) {
        const me = this;
        data.state = state;
        data.model.__checked = state;
        this.__changeValue(data);
        setSubState(data);
        if (!notParent) {
            setParentState(data, state);
        }
        /**
         * 设置子孙节点状态
         */
        function setSubState(data) {
            if (!data.children) {
                return;
            }
            for (let k of data.children) {
                let d = me.keyMap.get(k);
                if (!d) {
                    continue;
                }
                //不处理祖先节点
                me.__setState(d, state, true);
            }
        }
        /**
         * 设置祖先节点状态
         */
        function setParentState(data, state) {
            if (!data.pkey) {
                return;
            }
            let d = me.keyMap.get(data.pkey);
            if (!d) {
                return;
            }
            const key = getmkey(data.model);
            let ind = d.selected.findIndex(item => item.key === key);
            switch (state) {
                case 0: //选中
                    if (ind !== -1) {
                        d.selected.splice(ind, 1);
                    }
                    break;
                case 1: //选中
                    if (ind === -1) {
                        d.selected.push({ key: key, state: 1 });
                    }
                    else {
                        d.selected[ind].state = 1;
                    }
                    break;
                case 2: //半选中
                    if (ind === -1) {
                        d.selected.push({ key: key, state: 2 });
                    }
                    else {
                        d.selected[ind].state = 2;
                    }
            }
            if (d.selected.length === 0) {
                d.state = 0;
            }
            else if (d.selected.length < d.num || d.selected.find(item => item.state === 2)) {
                d.state = 2;
            }
            else {
                d.state = 1;
            }
            d.model.__checked = d.state;
            me.__changeValue(d);
            setParentState(d, d.state);
        }
    }
    /**
     * 初始化key map
     * @param data
     */
    __initMap() {
        const me = this;
        let treeData = this.model['data'];
        if (!this.keyMap) {
            this.keyMap = new Map();
        }
        if (!treeData) {
            return;
        }
        genMap(treeData);
        /**
         * 生产map
         * @param data  模型
         * @param pkey  父对象key
         * @returns
         */
        function genMap(data, pkey) {
            if (!data) {
                return;
            }
            let o = { selected: [], state: 0, model: data };
            if (pkey) {
                o['pkey'] = pkey;
            }
            me.keyMap.set(getmkey(data), o);
            data.__checked = 0;
            if (data.children) {
                o['num'] = data.children.length;
                o['children'] = [];
                for (let d of data.children) {
                    genMap(d, getmkey(data));
                    o['children'].push(getmkey(d));
                }
            }
        }
    }
}
//注册模块
registModule(UITree, 'ui-tree');

/**
 * panel插件
 * 参数说明
 * title:   标题
 * buttons: 按钮，以','分割，按钮事件以'|'分割,如：minus|clickMinus,close|clickClose
 */
class UIPanel extends Module {
    constructor() {
        super(...arguments);
        /**
         * 事件对象，{按钮名:事件名}
         */
        this.events = {};
    }
    /**
     * 模版函数
     * @param props     父模块传递的属性值
     * @returns         模版字符串
     */
    template(props) {
        let iconStr = '';
        let style = '';
        if (props.bgColor) {
            style += 'background-color:' + props.bgColor + ';';
        }
        if (props.color) {
            style += 'color:' + props.color;
        }
        if (props.buttons) {
            iconStr = "<div class='ui-panel-header-bar'>";
            let arr = props.buttons.split(',');
            for (let icon of arr) {
                let a = icon.split('|');
                if (a.length === 1) {
                    iconStr += `<ui-button icon='${a[0]}' nobg/>`;
                }
                else if (a.length === 2) {
                    iconStr += `<ui-button icon='${a[0]}' nobg e-click='clickButton'/>`;
                    this.events[a[0]] = a[1];
                }
            }
            iconStr += "</div>";
        }
        this.setExcludeProps(['title', 'buttons']);
        return `
            <div class='ui-panel'>
                <div class='ui-panel-header' style='${style}'>
                    <span class='ui-panel-title'>${props.title}</span>
                    ${iconStr}
                </div>
                <div class='ui-panel-bodyct'>
                    <slot />
                </div>
            </div>
        `;
    }
    clickButton(model, dom) {
        for (let p in this.events) {
            if (dom.props['class'].indexOf('ui-icon-' + p) !== -1) {
                let pm = this.getParent();
                pm.invokeMethod(this.events[p], pm.model);
                break;
            }
        }
    }
}
/**
 * panel body
 */
class UIPanelBody extends Module {
    template(props) {
        return `
            <div class='ui-panel-body'>
                <slot />
            </div>
        `;
    }
}
/**
 * toolbar
 */
class UIToolbar extends Module {
    constructor() {
        super(...arguments);
        this.modules = [UIButton];
    }
    template(props) {
        return `
            <div class='ui-toolbar'>
                <slot />
            </div>
        `;
    }
}
/**
 * button group
 */
class UIButtonGroup extends Module {
    constructor() {
        super(...arguments);
        this.modules = [UIButton];
    }
    template(props) {
        return `
            <div class='ui-button-group'>
                <slot/>
            </div>
        `;
    }
}
//注册模块
registModule(UIPanel, 'ui-panel');
registModule(UIPanelBody, 'ui-panel-body');
registModule(UIToolbar, 'ui-toolbar');
registModule(UIButtonGroup, 'ui-button-group');

/**
 * dialog插件
 * 参数说明
 * title:       标题
 * openField:   用于控制dialog打开和关闭的字段名
 * showClose:   是否显示close按钮
 */
class UIDialog extends Module {
    /**
     * 模版函数
     * @param props     父模块传递的属性值
     * @returns         模版字符串
     */
    template(props) {
        let closeStr = '';
        this.__openField = props.openField;
        this.__onOpen = props.onOpen;
        this.__onClose = props.onClose;
        this.model['open'] = this.srcDom.model[props.openField];
        if (props.hasOwnProperty('showClose')) {
            closeStr = `<div class='ui-panel-header-bar'>
                            <ui-button icon='cross' nobg='true' e-click='__close'/>
                        </div>`;
        }
        this.setExcludeProps(['title', 'onOpen', 'onClose']);
        return `
            <div class={{open?'ui-dialog':'ui-dialog-hide'}}>
                <div class='ui-dialog-cover' />
                <div class='ui-dialog-body' style='width:${props.width};height:${props.height}'>
                    <div class='ui-panel'>
                        <div class='ui-panel-header'>
                            <span class='ui-panel-title'>${props.title}</span>
                            ${closeStr}
                        </div>
                        <div class='ui-panel-bodyct'>
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    /**
     * 关闭dialog
     * @param model
     * @param dom
     */
    __close(model) {
        this.model['open'] = false;
        this.srcDom.model[this.__openField] = false;
    }
    onBeforeFirstRender(model) {
        //监听打开字段
        watch(model, 'open', (m, key, ov, nv) => {
            let pm = this.getParent();
            if (nv && this.__onOpen) {
                pm.invokeMethod(this.__onOpen, m);
            }
            else if (!nv && this.__onClose) {
                pm.invokeMethod(this.__onClose, m);
            }
        });
    }
}
class UIDialogBody extends UIPanelBody {
}
registModule(UIDialog, 'ui-dialog');
registModule(UIDialogBody, 'ui-dialog-body');

/**
 * file上传插件
 * field        对应数据项名
 * valueField	值数据项名，对应上传后返回的valueField
 * displayField	显示数据项名，对应上传后返回的displayField
 * multiple	    是否支持多个文件，设置则表示上传多个文件
 * uploadUrl	上传url
 * deleteUrl	删除url
 * maxCount	    最大上传数量，multiple设置时有效
 * fileType	    上传资源类型，如果为image，上传成功后显示缩略图，displayField为url对应项，否则显示文件名，对应数据项为displayField。
 */
class UIFile extends BaseInput {
    template(props) {
        super.template(props);
        this.__uploadName = props.uploadName;
        this.__valueField = props.valueField;
        this.__displayField = props.displayField;
        this.__multiple = props.multiple;
        this.__uploadUrl = props.uploadUrl;
        this.__deleteUrl = props.deleteUrl;
        this.__maxCount = props.maxCount ? parseInt(props.maxCount) : 0;
        this.__fileType = props.fileType;
        this.__urlField = props.urlField;
        this.__width = props.width || '100%';
        this.__height = props.height || '100%';
        //根据不同类型显示不同结果串
        const showStr = props.fileType === 'image' ? `<img src={{${props.urlField}}} />` : `<span>{{${props.displayField}}}</span>`;
        const singleStr = !this.__multiple ? 'ui-file-single' : '';
        this.setExcludeProps(['multiple', 'valueField', 'displayField', 'uploadUrl', 'deleteUrl', 'fileType', 'maxCount', 'width', 'height', 'urlField', 'uploadName']);
        return `
            <div class="ui-file ${singleStr}">
                <div class="ui-file-showct" x-show={{__value.length>0}} >
                    <for cond={{__value}} style='width:${this.__width};height:${this.__height}'>
                        <a class="ui-file-content" target="blank" href={{${this.__displayField}}} >
                            ${showStr}
                        </a>
                        <b class="ui-file-del" e-click='__delete'/>
                    </for>
                </div>
                <!--显示upload-->
                <div class="ui-file-uploadct"  
                    x-show={{__value.length===0 || this.__multiple && (this.__maxCount === 0 || this.__maxCount>__value.length)}}
                    style='width:${this.__width};height:${this.__height}'>
                    <if cond={{uploading}}>
                        <span class='ui-file-uploading'>上传中...</span>
                    </if>
                    <else>
                        <div class="ui-file-toupload">
                            <span class="ui-file-add" />
                        </div>
                        <input type="file" class="ui-file-input" ${this.__multiple ? 'multiple' : ''} e-change='__changeFile'/>
                    </else>
                </div>
            </div>
        `;
    }
    data() {
        return {
            uploading: false,
            uploadingText: '上传中...',
            __value: []
        };
    }
    /**
     * 文件修改
     * @param model
     * @param dom
     */
    __changeFile(model, dom, evObj, e) {
        const el = this.getElement(dom.key);
        if (!el.files) {
            return;
        }
        model.uploading = true;
        let form = new FormData();
        for (let i = 0; i < el.files.length; i++) {
            form.append(this.__uploadName, el.files[i]);
        }
        //提交请求
        request({
            url: this.__uploadUrl,
            method: 'POST',
            params: form,
            header: {
                'Content-Type': 'multipart/form-data'
            },
            type: 'json'
        }).then((r) => {
            //上传显示
            model.uploading = false;
            model.__value.push(r);
            //更改父模块对应数据项
            this.__change(model.__value);
        });
    }
    /**
     * 删除上传文件
     * @param model
     */
    __delete(model) {
        if (!this.__deleteUrl || !this.__valueField) {
            return;
        }
        let param = {};
        param[this.__valueField] = model[this.__valueField];
        request({
            url: this.__deleteUrl,
            method: 'GET',
            params: param,
            header: {
                'Content-Type': 'multipart/form-data'
            },
            type: 'json'
        });
        //移除
        let ind = this.model['__value'].findIndex(item => item[this.__valueField] === model[this.__valueField]);
        if (ind !== -1) {
            this.model['__value'].splice(ind, 1);
            this.__change(this.model['__value']);
            Renderer.add(this);
        }
    }
    __initValue() {
        if (!this.__field) {
            return;
        }
        const v = $get(this.srcDom.model, this.__field);
        const v1 = this.model['__value'];
        if (v1 === v && v) {
            return;
        }
        this.model['__value'] = v || [];
    }
    __change(value) {
        if (this.__field) {
            $set(this.srcDom.model, this.__field, value);
        }
    }
}
registModule(UIFile, 'ui-file');

class UIValidator {
    /**
     * 验证方法
     * @param type      类型（参考rules）
     * @param value     验证值
     * @param p1        参数1
     * @param p2        参数2
     * @param p3        参数3
     * @param p4        参数4
     * @returns         字符串: 验证错误
     *                  undefined: 验证通过
     *                  null: 不存在此验证类型
     */
    static verify(type, value, p1, p2, p3, p4) {
        if (UIValidator.rules[type]) {
            return UIValidator.rules[type].apply(null, [value, p1, p2, p3, p4]);
        }
        return null;
    }
    /**
     * 添加校验器
     * @param type      验证类型
     * @param handler   验证方法(参数顺序为value,p1,p2,p3,p4)
     * @param msg       验证失败消息，支持{0..3}传递参数p1,p2,p3,p4
     */
    static addValidator(type, handler, msg) {
        UIValidator.msgs[type] = msg;
        UIValidator.rules[type] = handler;
    }
    /**
     * 转换消息
     * @param type  消息类型
     * @param v1    参数1
     * @param v2    参数2
     * @returns
     */
    static getMsg(type, v1, v2) {
        if (v1 !== undefined) {
            return Util.compileStr(UIValidator.msgs[type], v1, v2);
        }
        return UIValidator.msgs[type];
    }
    /**
     * 检查是否为空串
     * @param value
     * @returns
     */
    static checkEmpty(value) {
        return value === undefined || value === null || value === "" || Array.isArray(value) && value.length === 0;
    }
}
/**
 * 表单信息
 */
UIValidator.msgs = {
    type: "请输入有效的{0}",
    unknown: "输入错误",
    require: "不能为空",
    number: "请输入数字",
    min: "值最小为{0}",
    max: "值最大为{0}",
    between: "值必须在{0}-{1}之间",
    maxLength: "长度不能大于{0}",
    minLength: "长度不能小于{0}",
    betweenLength: '长度必须在{0}-{1}之间',
    email: '请输入有效的email',
    url: '请输入有效的url',
    mobile: '请输入有效的手机号',
    date: "请输入有效日期格式，如：2022-01-01",
    time: "请输入有效时间格式，如：12:30:30",
    datetime: "请输入有效日期时间格式，如：2022-01-01",
    idno: '请输入18位有效身份证号'
};
//验证规则
UIValidator.rules = {
    require(value) {
        if (UIValidator.checkEmpty(value)) {
            return UIValidator.getMsg('require');
        }
    },
    number(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (isNaN(Number(value))) {
            return UIValidator.getMsg('number');
        }
    },
    min(value, v1) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (value && Number(value) < v1) {
            return UIValidator.getMsg('min', v1);
        }
    },
    max(value, v1) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (value && Number(value) > v1) {
            return UIValidator.getMsg('max', v1);
        }
    },
    between(value, v1, v2) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (value) {
            let num = Number(value);
            if (num < v1 || num > v2) {
                return UIValidator.getMsg('between', v1, v2);
            }
        }
    },
    minLength(value, v1) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (value && value.length < v1) {
            return UIValidator.getMsg('minLength', v1);
        }
    },
    maxLength(value, v1) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (value && value.length > v1) {
            return UIValidator.getMsg('maxLength', v1);
        }
    },
    betweenLength(value, v1, v2) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (value && value.length < v1 || value.length > v2) {
            return UIValidator.getMsg('betweenLength', v1, v2);
        }
    },
    email(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (!/^\w+\S*@[\w\d]+(\.\w+)+$/.test(value)) {
            return UIValidator.getMsg('email');
        }
    },
    url(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (!/^(https?|ftp):\/\/[\w\d]+\..*/.test(value)) {
            return UIValidator.getMsg('url');
        }
    },
    mobile(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (!/^1[3-9]\d{9}$/.test(value)) {
            return UIValidator.getMsg('mobile');
        }
    },
    date(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (!/^\d{4}[-\/](0[1-9]|1[0-2])[-\/](0[1-9]|[12]\d|3[01])$/.test(value)) {
            return UIValidator.getMsg('date');
        }
    },
    datetime(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (!/^\d{4}[-\/](0[1-9]|1[0-2])[-\/](0[1-9]|[12]\d|3[01])\s+([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/.test(value)) {
            return UIValidator.getMsg('datetime');
        }
    },
    time(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (!/([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/.test(value)) {
            return UIValidator.getMsg('time');
        }
    },
    idno(value) {
        if (UIValidator.checkEmpty(value)) {
            return;
        }
        if (!/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)) {
            return UIValidator.getMsg('idno');
        }
    }
};

/**
 * form 插件
 */
class UIForm extends Module {
    constructor() {
        super(...arguments);
        /**
         * 子item数组
         */
        this.__formItems = [];
    }
    template(props) {
        this.__labelWidth = props['label-width'] || '100px';
        this.__unitWidth = props['unit-width'] || undefined;
        this.setExcludeProps(['label-width', 'unit-width']);
        return `
            <div class='ui-form'>
            <slot />
            </div>
        `;
    }
    /**
     * 添加form item
     * @param item  form item
     * @returns
     */
    __addItem(item) {
        if (this.__formItems.includes(item)) {
            return;
        }
        this.__formItems.push(item);
    }
    /**
     * 校验
     */
    __verify() {
        let r = true;
        for (let item of this.__formItems) {
            if (!item.__verify()) {
                r = false;
            }
        }
        return r;
    }
    /**
     * 清除错误提示
     */
    __clearErrorTips() {
        for (let item of this.__formItems) {
            item.__clearErrorTip();
        }
    }
}
/**
 * form item
 * 配置项
 *  label：     输入项label
 *  field：     绑定字段
 *  require：   是否必填
 *  invalidMsg: 校验失败消息，其中内置校验器有自己的消息，method方式也会返回错误消息，但是设置了invalidMsg，则其它消息失效
 *  validator： 校验器，支持内置校验器(参见UIValidator.rules)，regexp(正则表达式)，method(模块方法校验)
 *      使用方式 validator='validatorName:param1:param2'，其中validatorName为内置校验器名，regexp和method
 *      param1,param2为校验器参数，可选
 *  检验器示例
 *      between:1:10            校验输入项是否为1-10之间
 *      method:check            通过模块的check方法进行校验，check参数为(value,model)，其中value为对应项值，model为对应model
 *      regexp:^[a-z]{5,20}$    通过正则表达式进行校验，校验数据项是否为 5-20个小写字母
 *
 */
class UIFormItem extends Module {
    template(props) {
        const parent = this.getParent();
        const itemStyle = props['item-width'] ? "style='width:" + props['item-width'] + "'" : '';
        const labelStyle = "style='width:" + parent.__labelWidth + "'";
        this.__field = props.field;
        this.__addValidator(props);
        this.setExcludeProps(['unit', 'field', 'require', 'validator', 'invalidMsg', 'label']);
        //单位串
        const unitStyle = parent.__unitWidth ? `style='width:${parent.__unitWidth}'` : undefined;
        let unitStr = '';
        if (props.unit) {
            unitStr = `<span class='ui-form-item-unit' ${unitStyle}>${props.unit}</span>`;
        }
        else if (unitStyle) {
            unitStr = `<span class='ui-form-item-unit' ${unitStyle}></span>`;
        }
        //验证串，需要设置margin-left宽度，保证与输入框对齐
        const validStr = this.__validator.length > 0 ? `
            <div class='ui-form-item-tip' x-show={{__errorMessage!==undefined}} style='margin-left:${parent.__labelWidth}'>
                <b class='ui-form-item-tip-icon' />
                <span class='ui-form-item-tip-text'>{{__errorMessage}}</span>
            </div>` : '';
        return `
            <div class='ui-form-item' >
                <div class={{'ui-form-item-content' + (__errorMessage?' ui-form-item-error':'')}} ${itemStyle}>
                    <label ${labelStyle}>${props.label ? props.label : ''} </label>
                    <slot/>
                    ${unitStr}
                </div>
                ${validStr}
            </div>
        `;
    }
    /**
      * 添加校验器
      * @param props
      */
    __addValidator(props) {
        this.__field = props.field;
        //校验器已存在，则不再添加
        if (this.__validator) {
            return;
        }
        let validArr = [];
        this.__validator = validArr;
        if (props.field) {
            if (props.require === 'true') {
                validArr.push({ type: 'require' });
            }
            if (props.validator) {
                let item = props.validator;
                let ind = item.indexOf(':');
                if (ind !== -1) {
                    let type = item.substring(0, ind);
                    //需要处理数字
                    if (['min', 'max', 'between', 'minLength', 'maxLength', 'betweenLength'].includes(type)) {
                        let pa = item.substring(ind + 1).split(':');
                        let params = [];
                        for (let p of pa) {
                            params.push(parseInt(p));
                        }
                        validArr.push({ type: type, params: params, msg: props.invalidMsg });
                    }
                    else if ('regexp' === type) { //正则表达式
                        validArr.push({
                            type: type,
                            reg: new RegExp(item.substring(ind + 1)),
                            msg: props.invalidMsg
                        });
                    }
                    else if ('method' === type) {
                        validArr.push({
                            type: type,
                            method: item.substring(ind + 1),
                            msg: props.invalidMsg
                        });
                    }
                }
                else {
                    validArr.push({ type: item, msg: props.invalidMsg });
                }
            }
        }
        if (validArr.length > 0) {
            //添加监听
            watch(this.srcDom.model, props.field, (m, k, ov, nv) => {
                this.__verify(nv);
            }, this);
        }
    }
    /**
     * 校验
     * @param value     值
     * @returns         true 通过 false 失败
     */
    __verify(value) {
        if (this.__validator.length === 0) {
            return true;
        }
        value = value || $get(this.srcDom.model, this.__field);
        let msg, r;
        for (let v of this.__validator) {
            if (v.type === 'regexp') {
                if (!v.reg.test(value)) {
                    msg = v.msg || UIValidator.msgs.unknown;
                    break;
                }
            }
            else if (v.type === 'method') {
                r = this.invokeMethod(v.method, value, this.srcDom.model);
                if (r) {
                    msg = v.msg || r;
                    break;
                }
            }
            else {
                if (v.params) {
                    r = UIValidator.verify.apply(UIValidator, [v.type, value].concat(v.params));
                }
                else {
                    r = UIValidator.verify(v.type, value);
                }
                if (r) {
                    msg = v.msg || r;
                    break;
                }
            }
        }
        this.model['__errorMessage'] = msg;
        return msg === undefined;
    }
    /**
     * 清除错误提示
     */
    __clearErrorTip() {
        this.model['__errorMessage'] = undefined;
    }
    onBeforeFirstRender(model) {
        const parent = this.getParent();
        parent.__addItem(this);
    }
}
registModule(UIForm, 'ui-form');
registModule(UIFormItem, 'ui-form-item');

/**
 * grid 插件
 * 配置参数
 *  $data           表格数据
 *  rowAlt          行颜色交替标志，不用设置值
 *  gridLine        网格线类型，包括cols(列) rows(行) both(行列)，默认无
 *  fixHead         是否固定表头，默认false
 *  checkable       是否显示复选框，默认false
 *  singleSelect    支持单选
 *  onSelectChange  选中更改时触发事件，只针对单行选中有效，传入参数为当前行model，对于头部check框选中无效
 *  onRowClick      行单击事件
 *  onRowDblClick   行双击事件
 */
class UIGrid extends Module {
    constructor() {
        super(...arguments);
        /**
         * 表头选中状态 0未选中 1选中 2部分选中
         */
        this.__headCheck = 0;
    }
    template(props) {
        //列集合为空，进行slot初始化
        if (!this.model['__columns'] || this.model['__columns'].length === 0) {
            return "<div><slot/></div>";
        }
        this.__rowAlt = props.hasOwnProperty('rowAlt');
        this.__fixHead = props.hasOwnProperty('fixHead');
        this.__gridLine = props.gridLine;
        this.__singleSelect = props.hasOwnProperty('singleSelect');
        this.__onSelectChange = props.onSelectChange;
        this.__onRowClick = props.onRowClick;
        this.__onRowDblClick = props.onRowDblClick;
        let expandStr = '';
        let expandHeadStr = '';
        let checkStr = '';
        let checkHeadStr = '';
        this.__width = 0;
        //行展开容器字符串
        let expandCtStr = '';
        if (this.__expandDom) {
            expandStr = `<div class='ui-grid-row-item ui-grid-icon'>
                            <b class={{__expanded?'ui-expand-icon ui-expand-open':'ui-expand-icon'}} e-click='__clickExpand'/>
                        </div>`;
            expandHeadStr = `<div class='ui-grid-row-item ui-grid-icon'></div>`;
            expandCtStr = `<div class={{__expanded?'ui-grid-expand':'ui-grid-expand ui-grid-expand-hide'}} />`;
            this.__width += 25;
        }
        if (props.hasOwnProperty('checkable')) {
            checkStr = `<div class='ui-grid-row-item ui-grid-icon'>
                            <b class={{__genCheckCls(__checked)}} e-click='__clickCheck'/>
                        </div>`;
            checkHeadStr = `<div class='ui-grid-row-item ui-grid-icon'>
                        <b class={{__genCheckCls(this.__headCheck)}} e-click='__clickHeadCheck'/>
                    </div>`;
            this.__width += 25;
        }
        //列标题串
        let colHeadStr = '';
        for (let col of this.model['__columns']) {
            let w = col.width;
            const style = w ? 'width:' + w + 'px' : 'flex:1';
            let sortStr = '';
            if (col.sortable && col.field) {
                sortStr = `<div class='ui-grid-sort' field='${col.field}'>
                    <b class='ui-grid-sort-raise' e-click='__raiseSort' />
                    <b class='ui-grid-sort-down' e-click='__downSort'/>
                </div>`;
            }
            colHeadStr += `
                <div class='ui-grid-row-item' style='${style}'>
                    ${col.title}
                    ${sortStr}
                </div>
            `;
            if (w) {
                if (this.__width >= 0) {
                    this.__width += w;
                }
            }
            else {
                //flex 不计算宽度
                this.__width = -1;
            }
        }
        //删除多余属性
        this.setExcludeProps(['gridLine', 'checkable', 'rowAlt', 'fixHead', 'onSelectChange', 'onRowClick', 'onRowDblClick']);
        return `
            <div class={{__genGridCls()}}>
                <div class={{__genHeadCls()}} style={{__genWidthStyle()}}>
                    <div class='ui-grid-row'>
                        ${expandHeadStr}
                        ${checkHeadStr}
                        ${colHeadStr}
                    </div>
                </div>
                <div class='ui-grid-bodyct' e-scroll='__scrollBody'>
                    <div class={{__genBodyCls()}} style={{__genWidthStyle()}}>
                        <for cond={{data}} class='ui-grid-rowct'>
                            <div class='ui-grid-row'>
                                ${expandStr}
                                ${checkStr}
                            </div>
                            ${expandCtStr}
                        </for>
                    </div>
                </div>
            </div>
        `;
    }
    /**
     * 编译后事件，动态添加列到body
     */
    onCompile() {
        if (this.originTree.children[1]) {
            //处理列节点
            let ct = this.originTree.children[1].children[0].children[0].children[0];
            if (ct) {
                for (let col of this.model['__columns']) {
                    ct.add(col.node);
                }
                // 添加事件
                if (this.__onRowClick) {
                    ct.addEvent(new NEvent(this, 'click', this.__onRowClick));
                }
                if (this.__onRowDblClick) {
                    ct.addEvent(new NEvent(this, 'dblclick', this.__onRowDblClick));
                }
            }
            //处理展开节点
            if (this.__expandDom) {
                ct = this.originTree.children[1].children[0].children[0].children[1];
                if (ct) {
                    ct.children = this.__expandDom.node.children;
                }
            }
        }
    }
    /**
     * 生产grid class
     * @returns     grid class
     */
    __genGridCls() {
        let arr = ['ui-grid'];
        if (this.__fixHead) {
            arr.push("ui-grid-fixhead");
        }
        if (this.__gridLine === 'rows') {
            arr.push('ui-grid-row-line');
        }
        else if (this.__gridLine === 'cols') {
            arr.push('ui-grid-col-line');
        }
        else if (this.__gridLine === 'both') {
            arr.push('ui-grid-all-line');
        }
        if (this.props.class) {
            arr.push(this.props.class);
        }
        return arr.join(' ');
    }
    /**
     * 产生grid width style，用于body和head
     * @returns style样式
     */
    __genWidthStyle() {
        return this.__width > 0 ? 'width:' + this.__width + 'px' : '';
    }
    /**
     * 产生head css
     * @returns css串
     */
    __genHeadCls() {
        let arr = ['ui-grid-head'];
        return arr.join(' ');
    }
    /**
     * 产生body css
     * @returns css串
     */
    __genBodyCls() {
        let arr = ['ui-grid-body'];
        if (this.__rowAlt) {
            arr.push("ui-grid-rowalt");
        }
        return arr.join(' ');
    }
    /**
     * 生成checkbox class
     * @param  st   状态 0未选中 1全选中 2部分选中
     * @returns     checkbox 的class
     */
    __genCheckCls(st) {
        if (!st) {
            return 'ui-icon-checkbox';
        }
        else if (st === 1) {
            return 'ui-icon-checked';
        }
        else {
            return 'ui-icon-partchecked';
        }
    }
    /**
     * 点击expand
     * @param model
     */
    __clickExpand(model) {
        model['__expanded'] = !model['__expanded'];
    }
    /**
     * 点击头部checkbox
     */
    __clickHeadCheck() {
        if (this.__singleSelect) {
            return;
        }
        let st = this.__headCheck === 1 ? 0 : 1;
        this.__headCheck = st;
        if (!this.model['data'] || this.model['data'].length === 0) {
            return;
        }
        //更新行checkbox状态
        for (let m of this.model['data']) {
            m['__checked'] = st;
        }
    }
    /**
     * 点击行 checkbox
     * @param model
     */
    __clickCheck(model, dom, evobj, e) {
        //单选，需要清理之前选中项
        if (this.__singleSelect) {
            if (this.__selectedModel) {
                this.__selectedModel.__checked = false;
            }
            model['__checked'] = 1;
            this.__headCheck = 2;
            this.__selectedModel = model;
        }
        else {
            model['__checked'] = model['__checked'] ? 0 : 1;
            //修改表头checkbox选中状态
            const rows = this.model['data'];
            const arr = rows.filter(item => item.__checked === 1);
            if (arr.length === rows.length) {
                this.__headCheck = 1;
            }
            else if (arr.length === 0) {
                this.__headCheck = 0;
            }
            else {
                this.__headCheck = 2;
            }
        }
        if (this.__onSelectChange) {
            this.invokeMethod(this.__onSelectChange, model, dom, evobj, e);
        }
    }
    /**
     * 升序排序
     * @param model 对应model
     * @param dom   虚拟dom节点
     */
    __raiseSort(model, dom, p) {
        const field = dom.parent.props['field'];
        this.model['data'].sort((a, b) => {
            return a[field] > b[field] ? 1 : -1;
        });
    }
    /**
     * 降序
     * @param model 绑定model
     * @param dom   虚拟dom节点
     */
    __downSort(model, dom) {
        const field = dom.parent.props['field'];
        this.model['data'].sort((a, b) => {
            return a[field] < b[field] ? 1 : -1;
        });
    }
    /**
     * 滚动表格body
     * @param model
     * @param dom
     * @param evObj
     * @param e
     */
    __scrollBody(model, dom, evObj, e) {
        if (!this.__fixHead) {
            return;
        }
        let el = e.currentTarget;
        let left = el.scrollLeft;
        this.getElement(this.originTree.children[0].key).style.transform = 'translateX(-' + left + 'px)';
    }
    /**
     * 添加记录
     * @param rows 数据(数组)
     */
    __addRow(rows) {
        if (Array.isArray(rows)) {
            for (let r of rows) {
                this.model['data'].push(r);
            }
        }
        else {
            this.model['data'].push(rows);
        }
    }
    /**
     * 删除记录
     * @param param     对象参数，用于查找符合该参数条件的所有数据
     */
    __removeRow(param) {
        if (!this.model['data']) {
            return;
        }
        for (let i = 0; i < this.model['data'].length; i++) {
            let item = this.model['data'][i];
            //找到标志
            let finded = true;
            for (let k of Object.keys(param)) {
                if (param[k] !== item.$get(k)) {
                    finded = false;
                    break;
                }
            }
            if (finded) {
                this.model['data'].splice(i--, 1);
            }
        }
    }
    /**
     * 获取选中记录
     * @returns     选中的记录集
     */
    __getSelectedRows() {
        if (!this.model['data']) {
            return;
        }
        return this.model['data'].filter(item => item.__checked);
    }
    /**
     * 添加列
     * @param col
     */
    __addColumn(col) {
        if (!this.model['__columns']) {
            this.model['__columns'] = [];
        }
        let cols = this.model['__columns'];
        let index;
        //如果存在不添加
        if ((index = cols.findIndex(item => item.title === col.title)) === -1) { //列不存在则添加
            cols.push(col);
        }
        else { //列存在则移除
            cols.splice(index, 1, col);
        }
    }
    /**
     * 设置展开节点
     * @param dom
     */
    __setExpandDom(dom) {
        this.__expandDom = dom;
    }
    /**
     * 清空列
     */
    __clearColumns() {
        if (this.model['__columns']) {
            this.model['__columns'] = [];
        }
    }
}
/**
 * grid colunn
 * 配置参数
 *  title       列标题
 *  width       宽度，不带单位，默认为px，如 widt='100'，如果不设置，则默认flex:1，如果自动铺满，最后一列不设置宽度
 *  sortable    是否排序，默认false
 *  field       如果sortable，则需要设置，以该字段排序
 */
class UIGridCol extends Module {
    template(props) {
        //隐藏节点不添加
        if (props.hasOwnProperty('hidden')) {
            return;
        }
        let w = props.width;
        if (w !== undefined) {
            this.width = parseInt(w);
        }
        this.title = props.title;
        this.field = props.field,
            this.sortable = props.hasOwnProperty('sortable');
        if (this.srcDom.vdom.children.length > 0) { //带slot节点
            this.node = this.srcDom.vdom.children[0];
            this.node.tagName = 'div';
            this.node.removeDirective('slot');
        }
        else if (props.field) { //无slot节点，创建新节点
            this.node = new VirtualDom('div');
            const node = new VirtualDom();
            node.expressions = [new Expression(props.field)];
            this.node.add(node);
        }
        Util.setNodeKey(this.node, this.id + '', true);
        this.node.addClass('ui-grid-row-item');
        this.node.addProp('style', w ? 'width:' + w + 'px' : 'flex:1');
        this.getParent().__addColumn(this);
        return null;
    }
}
/**
 * 行展开内容
 */
class UIGridExpand extends Module {
    template(props) {
        this.node = this.srcDom.vdom.children[0];
        this.node.removeDirective('slot');
        Util.setNodeKey(this.node, this.id + '', true);
        this.getParent().__setExpandDom(this);
        return null;
    }
}
//注册模块
registModule(UIGrid, 'ui-grid');
registModule(UIGridCol, 'ui-grid-col');
registModule(UIGridExpand, 'ui-grid-expand');

/**
 * list插件
 * 配置说明
 * $data：          列表数据数组
 * field:           绑定父模块的字段
 * valueField：     值字段
 * disableField：   禁用字段（表示记录项不可点击）
 * onItemClick：    点击事件
 */
class UIList extends BaseInput {
    constructor() {
        super(...arguments);
        /**
         * 选中model
         */
        this.__selectedModels = [];
    }
    template(props) {
        super.template(props);
        this.__multiple = props.hasOwnProperty('multiple');
        this.__valueField = props.valueField;
        this.__disableField = props.disableField;
        this.__onItemClick = props.onItemClick;
        let disableCtx = '';
        if (props.disableField) {
            disableCtx = "+ (" + props.disableField + "?' ui-list-item-disable':'')";
        }
        this.setExcludeProps(['multiple', 'valueField', 'displayField', 'disableField', 'onItemClick']);
        return `
            <div class="ui-list">
                <div x-repeat={{data}} class={{'ui-list-item' + (__selected?' ui-list-item-active':'')  ${disableCtx} }} e-click='__clickItem'>
                    <div class='ui-list-itemcontent'>
                        <slot innerRender/>
                    </div>
                    <b class="ui-list-icon"></b>
                </div>
            </div>
        `;
    }
    /**
     * 点击item
     * @param model
     * @param dom
     * @returns
     */
    __clickItem(model, dom, evobj, e) {
        if (!this.__field || this.__disableField && model[this.__disableField]) {
            return;
        }
        let value;
        if (this.__multiple) {
            model['__selected'] = !model['__selected'];
            value = this.model['__value'] || [];
            if (!Array.isArray(value)) {
                value = [value];
            }
            if (model['__selected']) {
                value.push(model[this.__valueField]);
            }
            else {
                let index = value.indexOf(model[this.__valueField]);
                if (index !== -1) {
                    value.splice(index, 1);
                }
            }
        }
        else {
            if (this.__selectedModels.length > 0) {
                this.__selectedModels[0]['__selected'] = false;
                this.__selectedModels.pop();
            }
            model['__selected'] = true;
            this.__selectedModels.push(model);
            value = model[this.__valueField];
        }
        //设置值
        super.__change(value);
        //触发itemclick事件
        if (this.__onItemClick) {
            this.getParent().invokeMethod(this.__onItemClick, model, dom, evobj, e);
        }
    }
    /**
     * 设置值
     * @param value
     * @returns
     */
    __initValue() {
        super.__initValue();
        let rows = this.model['data'];
        if (!this.__field || !Array.isArray(rows)) {
            return;
        }
        let value = this.model['__value'];
        this.__selectedModels = [];
        if (this.__multiple) {
            if (!Array.isArray(value)) {
                value = [value];
            }
            for (let m of rows) {
                if (value.indexOf(m[this.__valueField]) !== -1) {
                    this.__selectedModels.push(m);
                    m['__selected'] = true;
                }
            }
        }
        else {
            for (let m of rows) {
                if (value === m[this.__valueField]) {
                    this.__selectedModels.push(m);
                    m['__selected'] = true;
                    break;
                }
            }
        }
    }
}
registModule(UIList, 'ui-list');

/**
 * list transfer 插件
 *
 */
class UIListTransfer extends BaseInput {
    template(props) {
        super.template(props);
        this.__valueField = props.valueField;
        this.__disableField = props.disableField;
        let disableCtx = '';
        if (props.disableField) {
            disableCtx = "+ (" + props.disableField + "?' ui-list-item-disable':'')";
        }
        return `
            <div class="ui-listtransfer">
                <div class='ui-list'>
                    <div x-repeat={{__getLeftRows()}} class={{'ui-list-item' + (__selected?' ui-list-item-active':'')  ${disableCtx} }} 
                        e-click='__clickItem'>
                        <div class='ui-list-itemcontent'>
                            <slot innerRender/>
                        </div>
                        <b class="ui-list-icon"></b>
                    </div>
                </div>
                <div class='ui-listtransfer-btngrp'>
                    <div>
                    <ui-button icon='double-arrow-right' e-click='__rightClick1'/>
                    <ui-button icon='arrow-right' e-click='__rightClick'/>
                    <ui-button icon='arrow-left' e-click='__leftClick'/>
                    <ui-button icon='double-arrow-left' e-click='__leftClick1'/>
                    </div>
                </div>
                <div class='ui-list'>
                    <div x-repeat={{selectedRows}} class={{'ui-list-item' + (__selected?' ui-list-item-active':'')  ${disableCtx} }} 
                        e-click='__clickItem'>
                        <div class='ui-list-itemcontent'>
                            <slot innerRender/>
                        </div>
                        <b class="ui-list-icon"></b>
                    </div>
                </div>
            </div>
        `;
    }
    data() {
        return {
            selectedRows: []
        };
    }
    onBeforeRender() {
        super.onBeforeRender();
        if (this.model['__value']) {
            this.__setValue(this.model['__value']);
        }
    }
    /**
     * 获取左边列表数据
     * @returns
     */
    __getLeftRows() {
        if (!this.model['data']) {
            return;
        }
        return this.model['data'].filter(item => !item.__valued);
    }
    /**
     * 点击item
     * @param model
     * @param dom
     * @returns
     */
    __clickItem(model, dom, evobj, e) {
        if (this.__disableField && model[this.__disableField]) {
            return;
        }
        model['__selected'] = !model['__selected'];
    }
    /**
     * 设置值
     * @param value
     * @returns
     */
    __setValue(value) {
        let rows = this.model['data'];
        if (!this.__field || !Array.isArray(rows)) {
            return;
        }
        if (!Array.isArray(value)) {
            value = [value];
        }
        //值相同则不执行
        if (value.join(',') === this.__getSelectedValue().join(',')) {
            return;
        }
        for (let m of rows) {
            if (value.indexOf(m[this.__valueField]) !== -1) {
                this.__addSelect(m);
            }
            else {
                this.__removeSelect(m);
            }
        }
        this.__value = value;
    }
    /**
     * 把选中节点传递到右边
     * @param model
     * @param dom
     */
    __rightClick(model, dom) {
        if (!this.model['data']) {
            return;
        }
        this.model['data'].filter(item => item.__selected).forEach(r => {
            this.__addSelect(r);
        });
    }
    /**
     * 把所有节点传递到右边
     * @param model
     * @param dom
     */
    __rightClick1(model, dom) {
        if (!this.model['data']) {
            return;
        }
        this.model['data'].filter(item => (!this.__disableField || !item[this.__disableField]) && !item.__valued).forEach(r => {
            this.__addSelect(r);
        });
    }
    /**
     * 把选中节点传递到左边
     * @param model
     * @param dom
     * @returns
     */
    __leftClick(model, dom) {
        let rows = this.model['selectedRows'].filter(item => item.__selected);
        if (rows) {
            for (let i = 0; i < rows.length; i++) {
                if (this.__removeSelect(rows[i])) {
                    i--;
                }
            }
        }
    }
    /**
     * 把所有节点传递到左边
     * @param model
     * @param dom
     * @returns
     */
    __leftClick1(model, dom) {
        for (let i = 0; i < this.model['selectedRows'].length; i++) {
            if (this.__removeSelect(this.model['selectedRows'][i])) {
                i--;
            }
        }
    }
    /**
     * 添加选中
     * @param m
     */
    __addSelect(m) {
        m.__valued = true;
        m.__selected = false;
        if (!this.model['selectedRows'].find(item => item[this.__valueField] === m[this.__valueField])) {
            this.model['selectedRows'].push(m);
            this.__updateValue();
        }
    }
    /**
     * 移除选中
     * @param m
     */
    __removeSelect(m) {
        m.__valued = false;
        m.__selected = false;
        const index = this.model['selectedRows'].indexOf(m);
        if (index !== -1) {
            this.model['selectedRows'].splice(index, 1);
            this.__updateValue();
            return true;
        }
        return false;
    }
    /**
     * 更新值
     * @returns
     */
    __updateValue() {
        if (!this.__valueField || !this.__field) {
            return;
        }
        const v = this.__getSelectedValue();
        //设置值
        $set(this.srcDom.model, this.__field, v);
    }
    /**
     * 获取值
     * @returns 值数组
     */
    __getSelectedValue() {
        let v = [];
        for (let r of this.model['selectedRows']) {
            v.push(r[this.__valueField]);
        }
        return v;
    }
}
registModule(UIListTransfer, 'ui-listtransfer');

/**
 * 菜单插件
 * 数据项
 * data             菜单结构数据
 * 参数说明
 * type：           菜单类型: 0横向  1纵向
 * onItemClick：    菜单项点击事件
 */
class UIMenu extends Module {
    /**
     * 模版函数
     * @param props     父模块传递的属性值
     * @returns         模版字符串
     */
    template(props) {
        this.__type = props.type ? parseInt(props.type) : 0;
        this.__onItemClick = props.onItemClick;
        this.__width = props.width && props.width !== '' ? parseInt(props.width) : 150;
        this.__expandType = props.expandType === '1' && props.type === '1' ? 1 : 0;
        let iconStr = '';
        let firstMenuCls = '';
        let menuClass;
        if (this.__type === 0) {
            menuClass = 'ui-menu';
            firstMenuCls = 'ui-menu-hori-first';
        }
        else if (this.__type === 1) {
            firstMenuCls = 'ui-menu-subct-expand';
            iconStr = "<b x-show={{children&&children.length>0}} class='ui-menu-subicon'></b>";
            menuClass = 'ui-menu ui-menu-vert';
        }
        let styleArr1 = [];
        if (props.bgColor) {
            styleArr1.push('background-color:' + props.bgColor);
        }
        if (props.color) {
            styleArr1.push('color:' + props.color);
        }
        let menuStyle = styleArr1.join(';');
        let styleArr2 = [];
        if (props.activeBgColor) {
            styleArr2.push('background-color:' + props.activeBgColor);
        }
        if (props.activeColor) {
            styleArr2.push('color:' + props.activeColor);
        }
        let activeClass = '';
        let activeStyle;
        if (styleArr2.length > 0) {
            activeStyle = "(__active?'" + styleArr2.join(";") + "':'" + styleArr1.join(";") + "')";
        }
        else if (styleArr1.length > 0) {
            activeStyle = "(__active?'':'" + styleArr1.join(";") + "')";
        }
        else {
            //默认激活样式
            activeClass = "+ (__active?' ui-menu-active':'')";
        }
        //菜单style
        let style1 = "style={{" + (this.__type === 1 ? "'padding-left:' + __level * 20 + 'px;'" : '');
        if (activeStyle) {
            style1 += " + " + activeStyle;
        }
        style1 += "}}";
        //容器样式
        let subctStr = '';
        if (this.__expandType === 1) {
            subctStr = "class = {{'ui-menu-subct-expand' + (!__opened?' ui-menu-subct-expand-hide':'')}}";
        }
        else {
            subctStr = `class={{'ui-menu-subct-pop' + (!__opened?' ui-menu-subct-pop-hide':'')}} 
                style={{'width:${this.__width}px;height:' + children.length * 30 + 'px;left:' + __x + 'px;top:' + __y + 'px'}} `;
        }
        //弹出式相关属性
        const popStr = "e-mouseenter='__expandMenu' e-mouseleave='__closeMenu' e-click='__clickMenu:nopopo' type='2'";
        //展开式相关属性
        const expandStr = "e-click='__clickMenu:nopopo'";
        //第一级菜单
        let firstStr;
        if (this.__type === 0) { //横向
            firstStr = "e-mouseenter='__expandMenu' e-mouseleave='__closeMenu' type='1'";
        }
        else if (this.__expandType === 1) { //纵向展开
            firstStr = expandStr;
        }
        else {
            firstStr = popStr;
        }
        this.setExcludeProps(['onItemClick', 'type', 'expandType', 'bgColor', 'color', 'activeBgColor', 'activeColor']);
        return `
            <div class='${menuClass}' style='${menuStyle}'>
                <div class='${firstMenuCls}'>
                    <for cond={{data}} class='ui-menu-nodect ui-menu-first' ${firstStr}>
                        <div class={{'ui-menu-node' ${activeClass}}} 
                            ${style1}
                            e-click='__clickMenu:nopopo'>
                            <slot innerRender/>
                            ${iconStr}
                        </div>
                        <recur cond='children' ${subctStr} >
                            <div style='${menuStyle}'>
                                <for cond={{children}} class='ui-menu-nodect' ${this.__expandType === 1 ? expandStr : popStr} >
                                    <div class={{'ui-menu-node' ${activeClass}}} 
                                        ${style1}
                                        type='${this.__expandType === 1 ? 1 : 2}'>
                                        <slot innerRender/>
                                        <b x-show={{children&&children.length>0}} class='ui-menu-subicon'></b>
                                    </div>
                                    <recur ref />
                                </for>
                            </div>
                        </recur>
                    </for>
                </div>
            </div>
        `;
    }
    /**
     * 点击item事件
     * @param model     当前dom对应model
     * @param dom       virtual dom节点
     * @param eobj      NEvent对象
     * @param e         event对象
     */
    __clickMenu(model, dom, eobj, e) {
        //处理显示和隐藏
        if (model.children && this.__expandType === 1) {
            model['__opened'] = !model['__opened'];
        }
        this.__setActive(model);
        //click事件
        if (this.__onItemClick) {
            this.getParent().invokeMethod(this.__onItemClick, model, dom, eobj, e);
        }
    }
    /**
     * 叶子结点激活
     * @param model
     */
    __setActive(model) {
        if (!model.children) {
            if (this.__activeModel) {
                this.__activeModel['__active'] = false;
            }
            model['__active'] = true;
            this.__activeModel = model;
        }
    }
    /**
     * 展开关闭节点
     * @param model     当前dom对应model
     * @param dom       virtual dom节点
     * @param eobj      NEvent对象
     * @param e         event对象
     */
    __expandMenu(model, dom, eobj, e) {
        if (model['__opened'] || !model['children'] || model['children'].length === 0) {
            return;
        }
        model['__opened'] = true;
        if (!this.__expandType) {
            this.__cacLoc(model, dom, eobj, e);
        }
    }
    /**
     * 关闭子菜单
     * @param model     当前dom对应model
     */
    __closeMenu(model) {
        model['__opened'] = false;
    }
    /**
     * 计算位置
     * @param model     模型
     * @param dom       当前节点
     * @param ev        event object
     * @param e         html event
     */
    __cacLoc(model, dom, ev, e) {
        if (!model.children) {
            return;
        }
        let relPos = dom.props['type'] === '1' ? 1 : 2;
        let pos = UITool.cacPosition(e, relPos, this.__width, model.children.length * 30 + 20);
        model.__x = pos[0];
        model.__y = pos[1];
    }
    onBeforeRender() {
        const me = this;
        //设置level
        if (this.__type === 0 || !this.model['data']) {
            return;
        }
        for (let d of this.model['data']) {
            if (!d.__level) {
                setLevel(d, 1);
            }
        }
        //设置active
        if (!this.__activeModel) {
            for (let d of this.model['data']) {
                if (setActive(d)) {
                    return;
                }
            }
        }
        /**
         * 设置level
         * @param data
         * @param level
         * @returns
         */
        function setLevel(data, level) {
            if (data.__level) {
                return;
            }
            data.__level = level;
            if (data.children) {
                for (let d of data.children) {
                    setLevel(d, level + 1);
                }
            }
        }
        /**
         * 设置激活对象
         * @param data
         * @returns
         */
        function setActive(data) {
            if (data.__active) {
                me.__setActive(data);
                return data;
            }
            if (data.children) {
                for (let d of data.children) {
                    setActive(d);
                }
            }
        }
    }
}
//注册模块
registModule(UIMenu, 'ui-menu');

/**
 * 分页插件
 * $total              total值
 * 参数说明
 * showPageSizeList:    显示pagesize选择列表
 * sizeArray：          页面大小，数组字符串，默认[10,20,30,50]
 * showTotal:           显示总记录数
 * showGo:              显示跳转
 * showNum:             显示页面号的数量，默认10
 * bigStep:             一大步移动页数
 * onChange:            页号或页面大小改变时执行方法名
 */
class UIPagination extends Module {
    /**
     * 模版函数
     * @param props     父模块传递的属性值
     * @returns         模版字符串
     */
    template(props) {
        this.__watch();
        this.__pageChangeHook = props.onChange;
        this.__bigStep = props.bigStep ? parseInt(props.bigStep) : 5;
        if (props.pageSize && !this.model['pageSize']) {
            this.model['pageSize'] = props.pageSize;
            this.__pageSize = parseInt(props.pageSize);
        }
        if (props.pageNo && !this.model['pageNo']) {
            this.model['pageNo'] = props.pageNo;
            this.__pageNo = parseInt(props.pageNo);
        }
        this.__showNum = props.showNum ? parseInt(props.showNum) : 10;
        //页面大小选择列表
        let pageArrStr = '';
        if (props.hasOwnProperty('showPageSizeList')) {
            if (!this.model['pageSizeArr']) {
                let sizeArr = [];
                let a = props.sizeArray ? JSON.parse(props.sizeArray) : [10, 20, 30, 50];
                for (let d of a) {
                    sizeArr.push({
                        size: d + '',
                        text: d + '条/页'
                    });
                }
                this.model['pageSizeArr'] = sizeArr;
            }
            pageArrStr = `
                <ui-select style='width:100px' field='pageSize' $data={{pageSizeArr}} valueField='size' displayField='text'>
                    {{text}}
                </ui-select>
            `;
        }
        let totalStr = '';
        if (props.hasOwnProperty('showTotal')) {
            totalStr = `<div class='ui-pagination-totalct'>共<span class="ui-pagination-total">{{total}}</span>条</div>`;
        }
        let goStr = '';
        if (props.hasOwnProperty('showGo')) {
            goStr = `<div class="ui-pagination-go">
                    第&nbsp;<input type="number" value={{pageNo}} x-field='pageNo' min='1' max={{this.__pageCount}}>&nbsp;页
                </div>`;
        }
        let pageCls = 'ui-pagination' + (props.class ? ' ' + props.class : '');
        this.setExcludeProps(['onChange', 'showNum', 'showGo', 'sizeArray', 'bigStep', 'showPageSizeList']);
        return `
            <div class='${pageCls}' ${props.style ? 'style="' + props.style + '"' : ''}>
                ${totalStr}
                    
                <if cond={{pages.length>0}} class='ui-pagination-data' tag='div'>
                    ${pageArrStr}
                
                    <div class="ui-pagination-pagect">
                        <b class={{'ui-pagination-leftarrow1' + (this.__pageNo===1?' ui-pagination-disable':'')}}  e-click='__reduceMore'/>
                        <b class={{'ui-pagination-leftarrow' + (this.__pageNo===1?' ui-pagination-disable':'')}}  e-click='__reduceOne'/>
                            <span x-repeat={{pages}}
                                class={{'ui-pagination-page' + (this.__pageNo===page?' ui-pagination-active':'')}}
                                e-click='__clickPage'>
                                {{page}}
                            </span>
                            <b class={{'ui-pagination-rightarrow' + (this.__pageNo===this.__pageCount?' ui-pagination-disable':'')}} e-click='__addOne'/>
                            <b class={{'ui-pagination-rightarrow1' + (this.__pageNo===this.__pageCount?' ui-pagination-disable':'')}}  e-click='__addMore'/>
                    </div>
                    ${goStr}
                </if>
                <else class tag='div'>
                    无数据
                </else>
                
            </div>
        `;
    }
    data() {
        return {
            pageNo: 0,
            pageSize: 0,
            total: 0,
            pages: []
        };
    }
    /**
     * 页号修改钩子
     */
    __changePage() {
        if (!this.__pageNo || !this.__pageSize) {
            return;
        }
        let pm = this.getParent();
        //事件回调
        if (this.__pageChangeHook && pm) {
            pm.invokeMethod(this.__pageChangeHook, this.__pageNo, this.__pageSize);
        }
    }
    /**
     * 首次渲染前事件
     * @param model
     */
    onBeforeFirstRender(model) {
        //初始化pagesize列表框
        for (let c of this.originTree.children) {
            if (c.tagName === 'select') {
                //延迟设置，因为option还没渲染出来
                setTimeout(() => {
                    let el = this.getElement(c.key);
                    el.value = model['pageSize'];
                }, 0);
                break;
            }
        }
        //初始化pageCount
        if (!this.__pageCount) {
            let count = model['total'];
            this.__pageCount = Math.ceil(count / this.__pageSize);
        }
    }
    /**
     * 添加监听
     */
    __watch() {
        if (this.__watched) {
            return;
        }
        //增加监听事件
        watch(this.model, 'pageNo', (model, key, ov, nv) => {
            this.__pageNo = parseInt(nv);
            this.__changePage();
            this.__cacPages();
        });
        watch(this.model, 'pageSize', (model, key, ov, nv) => {
            this.__pageSize = parseInt(nv);
            this.__pageCount = Math.ceil(model['total'] / this.__pageSize);
            this.__changePage();
            this.__cacPages();
        });
        watch(this.model, 'total', (m, key, ov, nv) => {
            this.__pageCount = Math.ceil(nv / this.__pageSize);
            this.__cacPages();
        });
        this.__watched = true;
    }
    /**
     * 设置页面
     * @param page  页面号
     */
    __setPage(page) {
        if (!page) {
            page = this.__pageNo;
        }
        let count = this.__pageCount;
        if (page > count) {
            page = count;
        }
        else if (page < 1) {
            page = 1;
        }
        this.model['pageNo'] = page + '';
        this.__pageNo = page;
    }
    /**
     * 点击页
     * @param model
     */
    __clickPage(model) {
        this.__setPage(model.page);
    }
    /**
     * 页号减1
     */
    __reduceOne() {
        if (this.__pageNo === 1) {
            return;
        }
        this.__setPage(this.__pageNo - 1);
    }
    /**
     * 页号加1
     */
    __addOne() {
        if (this.__pageNo === this.__pageCount) {
            return;
        }
        this.__setPage(this.__pageNo + 1);
    }
    /**
     * 页号减bigStep
     */
    __reduceMore() {
        if (this.__pageNo === 1) {
            return;
        }
        this.__setPage(this.__pageNo - this.__bigStep);
    }
    /**
     * 页号加bigStep
     */
    __addMore() {
        if (this.__pageNo === this.__pageCount) {
            return;
        }
        this.__setPage(this.__pageNo + this.__bigStep);
    }
    /**
     * 计算最大最小页号
     */
    __cacPages() {
        let step = this.__showNum / 2 | 0;
        let minPage;
        let maxPage;
        const count = this.__pageCount;
        if (count === 0) {
            minPage = 0;
            maxPage = 0;
            this.model['pages'] = [];
            return;
        }
        else if (count <= this.__showNum) {
            minPage = 1;
            maxPage = count;
        }
        else { //页面数大于显示数
            minPage = this.__pageNo - step;
            maxPage = this.__pageNo + step;
            if (maxPage - minPage === this.__showNum) {
                maxPage--;
            }
            //处理page范畴
            if (minPage > count) {
                minPage = count - this.__showNum + 1;
                maxPage = count;
            }
            else if (minPage < 1) {
                maxPage += 1 - minPage;
                minPage = 1;
            }
            if (maxPage < 1) {
                minPage = 1;
                maxPage = this.__showNum;
            }
            else if (maxPage > count) {
                minPage = count - this.__showNum + 1;
                maxPage = count;
            }
        }
        //重新计算pages
        let pages = this.model['pages'];
        if (pages.length === 0 || pages[0].page !== minPage || pages[pages.length - 1].page !== maxPage) {
            let finded = false;
            pages = [];
            for (let i = minPage; i <= maxPage; i++) {
                pages.push({ page: i });
                if (this.__pageNo === i) {
                    finded = true;
                }
            }
            this.model['pages'] = pages;
            if (!finded) {
                //pageNo不在max min内，需要重新设置
                let pno = this.__pageNo;
                if (pno < minPage) {
                    pno = minPage;
                }
                else if (pno > maxPage) {
                    pno = maxPage;
                }
                this.model['pageNo'] = pno + '';
            }
        }
    }
}
//注册模块
registModule(UIPagination, 'ui-pagination');

/**
 * radio group插件
 */
class UIRadioGroup extends BaseInput {
    constructor() {
        super(...arguments);
        /**
         * 子model数组
         */
        this.__models = [];
    }
    template(props) {
        super.template(props);
        return `
            <div class='ui-radiogroup'>
                <slot />
            </div>
        `;
    }
    /**
     * 设置当前子model
     * @param model
     */
    __setCurrentModel(model) {
        if (this.__currentModel) {
            this.__currentModel.checked = false;
        }
        model.checked = true;
        this.__currentModel = model;
        super.__change(model.value);
    }
    /**
     * 添加子model
     * @param model     子model
     * @returns
     */
    __addModel(model) {
        if (this.__models.includes(model)) {
            return;
        }
        this.__models.push(model);
        if (model.value == this.model['__value']) {
            this.__setCurrentModel(model);
        }
        else {
            model.checked = false;
        }
    }
    /**
     * 更改值
     * @param value     新值
     */
    __change(value) {
        super.__change(value);
        for (let m of this.__models) {
            if (m['value'] == value) {
                this.__setCurrentModel(m);
                break;
            }
        }
    }
}
/**
 * radio插件
 * 配置说明
 * field:           绑定父模块的字段
 */
class UIRadio extends Module {
    template(props) {
        this.model['value'] = props.value;
        return `
            <span class={{'ui-radio ' + (checked?'ui-radio-active':'ui-radio-unactive')}} e-click='__clickCheck'>
                <b/>
                <span>${props.title}</span>
            </span>    
        `;
    }
    onBeforeFirstRender(model) {
        const pm = this.getParent();
        pm.__addModel(model);
    }
    __clickCheck(model) {
        this.getParent().__setCurrentModel(model);
    }
}
registModule(UIRadioGroup, 'ui-radiogroup');
registModule(UIRadio, 'ui-radio');

/**
 * 关系图插件
 * 参数说明
 * $data:           rows和cols定义
 * $value:          对应的数据数组
 * displayField:    用于显示的字段，rows和cols保持已知
 * valueField:      值字段，rows和cols保持已知
 */
class UIRelationMap extends BaseInput {
    /**
     * 模版函数
     * @param props     父模块传递的属性值
     * @returns         模版字符串
     */
    template(props) {
        super.template(props);
        this.__valueField = props.valueField;
        this.__displayField = props.displayField;
        return `
            <table class='ui-relationmap' x-model='data'>
                <tr class="ui-relationmap-head">
                    <td></td> 
                    <td x-repeat={{cols}}>{{${this.__displayField}}}</td>
                </tr>
                <tr class='ui-relationmap-row' x-repeat={{rows}}>
                    <td>{{${this.__displayField}}}</td>
                    <td x-repeat={{__values}} e-click='__clickItem'>
                        <b class={{__checked?'ui-icon-select':''}}/>
                    </td>
                </tr>
            </table>
        `;
    }
    /**
     * 初始化值
     */
    __initValue() {
        super.__initValue();
        let model = this.model;
        if (!model.data) {
            return;
        }
        if (!model.__value) {
            model.__value = [];
        }
        for (let row of model.data.rows) {
            row.__values = [];
            for (let col of model.data.cols) {
                let find = false;
                for (let v of model.__value) {
                    if (v && row[this.__valueField] === v[0] && col[this.__valueField] === v[1]) {
                        find = true;
                        break;
                    }
                }
                row.__values.push({ __checked: find, row: row[this.__valueField], col: col[this.__valueField] });
            }
        }
    }
    /**
     * 点击dom
     * @param model     dom对应model
     */
    __clickItem(model) {
        let index = this.model['__value'].findIndex(item => item[0] === model.row && item[1] === model.col);
        if (model.__checked) {
            if (index !== -1) {
                this.model['__value'].splice(index, 1);
            }
        }
        else if (index === -1) {
            this.model['__value'].push([model.row, model.col]);
        }
        //TODO 数据没触发渲染，强制渲染一下
        Renderer.add(this);
    }
}
//注册模块
registModule(UIRelationMap, 'ui-relationmap');

/**
 * select插件
 * 配置说明
 * $data：          列表数据数组
 * field:           绑定父模块的字段
 * valueField：     值字段
 * displayField：   显示字段
 * disableField：   禁用字段（表示记录项不可点击）
 * listWidth:       下拉框宽度，默认为select宽度，单位px
 * listHeight:      下拉框最大高度，单位px
 */
class UISelect extends BaseInput {
    template(props) {
        super.template(props);
        this.__multiple = props.hasOwnProperty('multiple');
        this.__valueField = props.valueField;
        this.__displayField = props.displayField;
        this.__disableField = props.disableField;
        this.__listWidth = props.listWidth;
        this.__allowEmpty = props.hasOwnProperty('allowEmpty');
        let heightStyle = '';
        if (props.listHeight) {
            this.__listHeight = parseInt(props.listHeight);
            heightStyle = "style='max-height:" + props.listHeight + "px;'";
        }
        let disableCtx = '';
        if (props.disableField) {
            disableCtx = "+ (" + props.disableField + "?' ui-select-item-disable':'')";
        }
        return `
            <div class="ui-select" e-mouseleave='__closeBox'>
                <div class="ui-select-inputct" e-click='__toggleBox:capture'>
                    <input class="ui-select-show" readonly='true' value={{__showText}}>
                    <b />
                </div>
                <div class={{'ui-select-list' + (!__open?' ui-select-list-hide':'')}} 
                    style={{'left:' + __x + 'px;top:' + __y + 'px;width:' + __width + 'px;height:' + __height}}>
                    <div ${heightStyle}>
                        <div class={{'ui-select-item' + (__selected?' ui-select-item-active':'')  ${disableCtx} }}
                            x-repeat={{data}} e-click='__clickItem'>
                            <div class="ui-select-itemcontent"><slot innerRender/></div>
                            <b class="ui-select-icon" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    data() {
        return {
            __open: false,
            __showText: ''
        };
    }
    /**
     * 交替 list box
     */
    __toggleBox(model, dom, ev, e) {
        if (this.model['__open']) {
            this.__closeBox();
        }
        else {
            this.__openBox(model, dom, ev, e);
        }
    }
    /**
     * 打开list box
     */
    __openBox(model, dom, ev, e) {
        model['__width'] = this.__listWidth ? this.__listWidth : e.currentTarget.clientWidth + 10;
        this.__cacLoc(model, dom, ev, e);
        this.model['__open'] = true;
    }
    /**
     * 关闭list box
     */
    __closeBox() {
        this.model['__open'] = false;
    }
    /**
     * 点击item
     * @param model
     * @param dom
     * @returns
     */
    __clickItem(model, dom, evobj, e) {
        if (this.__disableField && model[this.__disableField]) {
            return;
        }
        let value;
        if (this.__multiple) {
            model.__selected = !model.__selected;
            //如果allowEmpty，则选中实际元素时，第一个元素取消选中，否则第一个元素选中
            value = [];
            let index = this.__allowEmpty ? 1 : 0;
            for (let i = index; i < this.model['data'].length; i++) {
                const m = this.model['data'][i];
                if (m.__selected) {
                    value.push(m[this.__valueField]);
                }
            }
            if (this.__allowEmpty) {
                //未选中实际节点，则空选择项被选中，否则空选择项取消选中
                if (value.length === 0) {
                    this.model['data'][0].__selected = true;
                    value = [undefined];
                }
                else {
                    this.model['data'][0].__selected = false;
                }
            }
        }
        else {
            if (model['__selected']) {
                return;
            }
            model['__selected'] = true;
            for (let m of this.model['data']) {
                if (m !== model) {
                    m['__selected'] = false;
                }
            }
            this.__closeBox();
            value = model[this.__valueField];
        }
        this.__change(value);
    }
    /**
     * 设置值
     * @returns
     */
    __initValue() {
        super.__initValue();
        let value = this.model['__value'];
        //如果允许空，则需要在数据最前面加上"请选择"项
        if (this.__allowEmpty) {
            if (!this.model['data']) {
                this.model['data'] = [];
            }
            const rows = this.model['data'];
            //数组为空或者第一项不为空，都需要添加“请选择”项
            if (rows.length === 0 || rows[0][this.__displayField] !== '请选择...') {
                let o = {};
                o[this.__valueField] = undefined;
                o[this.__displayField] = '请选择...';
                this.model['data'].unshift(o);
            }
            if (!value || value.length === 0) {
                rows[0]['__selected'] = true;
            }
            else {
                rows[0]['__selected'] = false;
            }
        }
        let rows = this.model['data'];
        if (!this.__field || !Array.isArray(rows)) {
            return;
        }
        let showArr = [];
        if (this.__multiple) {
            if (!Array.isArray(value)) {
                value = [value];
            }
            for (let m of rows) {
                if (value.indexOf(m[this.__valueField]) !== -1) {
                    m.__selected = true;
                    showArr.push(m[this.__displayField]);
                }
            }
        }
        else {
            for (let m of rows) {
                if (value === m[this.__valueField]) {
                    m.__selected = true;
                    showArr.push(m[this.__displayField]);
                }
                else {
                    m.__selected = false;
                }
            }
        }
        this.model['__showText'] = showArr.join(',');
    }
    /**
     * 计算位置
     * @param model     模型
     * @param dom       当前节点
     * @param ev        event object
     * @param e         html event
     */
    __cacLoc(model, dom, ev, e) {
        let h = model.data.length * 30 + 14;
        if (h > this.__listHeight) {
            h = this.__listHeight;
        }
        let target = e.currentTarget;
        let pos = UITool.cacPosition(e, 1, target.clientWidth, h);
        model.__x = pos[0];
        model.__y = pos[1];
        model.__height = pos[3] + 'px';
    }
}
registModule(UISelect, 'ui-select');

/**
 * 开关插件
 */
class UISwitch extends BaseInput {
    template(props) {
        super.template(props);
        return `
            <div class="ui-switch" e-click='clickIt'>
                <div class={{genClass()}} ></div>
            </div>    
        `;
    }
    genClass() {
        const arr = ['ui-switch-slider'];
        if (this.model['__value']) {
            arr.push('ui-switch-checked');
        }
        return arr.join(' ');
    }
    clickIt(model) {
        super.__change(!model['__value']);
    }
}
registModule(UISwitch, 'ui-switch');

/**
 * select插件
 * 配置说明
 * $data：          列表数据数组
 * field:           绑定父模块的字段
 * valueField：     值字段
 * displayField：   显示字段
 * disableField：   禁用字段（表示记录项不可点击）
 */
class UIDate extends BaseInput {
    template(props) {
        super.template(props);
        return `
            <div class='ui-datetime' e-mouseleave='__closeBox'>
                <div class='ui-datetime-field'  e-click='__toggleBox'>
                    <input value={{__value}} />
                    <b class='ui-datetime-date' />
                </div>
                <div class={{'ui-datetime-picker ' + (__open?'ui-datetime-picker-open':'ui-datetime-picker-hide')}} 
                    style={{'left:' + __x + 'px;top:' + __y + 'px;'}}>
                    <div>
                        <div class='ui-datetime-tbl'>
                            <div class='ui-datetime-datetbl'>
                                <div class='ui-datetime-ymct'>
                                    <b class='ui-datetime-leftarrow1' e-click='__subYear' />
                                    <b class='ui-datetime-leftarrow' e-click='__subMonth' />
                                    <span class='ui-datetime-ym'>{{ year + '/' + month }}</span>
                                    <b class='ui-datetime-rightarrow' e-click='__addMonth' />
                                    <b class='ui-datetime-rightarrow1' e-click='__addYear' />
                                </div>
                                <div class='ui-datetime-weekdays'>
                                    <span>日</span>
                                    <span>一</span>
                                    <span>二</span>
                                    <span>三</span>
                                    <span>四</span>
                                    <span>五</span>
                                    <span>六</span>
                                </div>
                                <div class='ui-datetime-dates'>
                                    <span x-repeat={{dates}} class={{(selected?'ui-datetime-selected':'') + (disable?'ui-datetime-disable':'')}}
                                        e-click='__clickDate'
                                    >{{date}}</span>
                                </div>
                            </div>
                        </div>
                        <div class='ui-datetime-btnct'>
                            <ui-button title='今天' e-click='__today'/>
                            <ui-button theme='active' title='确定' e-click='__okClick'/>
                        </div>
                    </div>
                </div>
             </div>
        `;
    }
    data() {
        return {
            __open: false,
            dates: []
        };
    }
    /**
     * 交替 list box
     */
    __toggleBox(model, dom, ev, e) {
        if (this.model['__open']) {
            this.__closeBox();
        }
        else {
            this.__openBox(model, dom, ev, e);
        }
    }
    /**
     * 打开list box
     */
    __openBox(model, dom, ev, e) {
        this.__setDate(this.model['__value']);
        this.__cacLoc(model, dom, ev, e);
        this.model['__open'] = true;
    }
    /**
     * 关闭list box
     */
    __closeBox() {
        this.model['__open'] = false;
    }
    /**
     * 点击item
     * @param model
     * @param dom
     * @returns
     */
    __clickDate(model, dom, evobj, e) {
        if (!this.__field) {
            return;
        }
        this.model['date'] = model.date;
        this.__setDate(this.model['year'] + '-' + this.model['month'] + '-' + this.model['date']);
    }
    /**
     * 设置今天
     */
    __today() {
        const nda = new Date();
        this.__setDate(nda.getFullYear() + '-' + (nda.getMonth() + 1) + '-' + nda.getDate());
    }
    /**
     * 确定按钮
     */
    __okClick() {
        console.log(this.model['month']);
        const dStr = this.model['year'] + '-' + (this.model['month'] > 9 ? this.model['month'] : ('0' + this.model['month'])) + '-' + (this.model['date'] > 9 ? this.model['date'] : '0' + this.model['date']);
        this.__setDate(dStr);
        this.__change(dStr);
        this.__closeBox();
    }
    /**
     * 设置日期或时间
     * @param module    模块
     * @param str       待设置值
     */
    __setDate(str) {
        if (str && str !== '') {
            str = str.trim();
            if (str === '') {
                return;
            }
            let date = new Date(str);
            if (date.toTimeString() !== 'Invalid Date') {
                this.model['date'] = date.getDate();
                this.__genDates(date.getFullYear(), date.getMonth() + 1);
            }
            else { //日期格式不对，则直接设置插件当前日期时间值
                this.__today();
            }
        }
    }
    /**
     * 计算位置
     * @param model     模型
     * @param dom       当前节点
     * @param ev        event object
     * @param e         html event
     */
    __cacLoc(model, dom, ev, e) {
        const height = Math.ceil(this.model['dates'].length / 7) * 30 + 164;
        const pos = UITool.cacPosition(e, 1, 306, height);
        model.__x = pos[0];
        model.__y = pos[1];
    }
    /**
     * 产生日期数组
     * @param module    模块
     * @param year      年
     * @param month     月
     */
    __genDates(year, month) {
        this.model['year'] = year;
        this.model['month'] = month;
        //获取当日
        let cda = new Date();
        let cy = cda.getFullYear();
        let cm = cda.getMonth() + 1;
        let cd = cda.getDate();
        let days = this.__cacMonthDays(year, month);
        let dayArr = [];
        let date = new Date(year + '-' + month + '-1');
        //周几
        let wd = date.getDay();
        let lastMonthDays = this.__cacMonthDays(year, month, -1);
        //补充1号对应周前几天日期
        for (let d = lastMonthDays, i = 0; i < wd; i++, d--) {
            dayArr.unshift({
                disable: true,
                selected: false,
                date: d
            });
        }
        //当月日期
        for (let i = 1; i <= days; i++) {
            dayArr.push({
                date: i,
                selected: this.model['year'] === year && this.model['month'] === month && this.model['date'] === i,
                today: cy === year && cm === month && cd === i
            });
        }
        //下月日期
        date = new Date(year + '-' + month + '-' + days);
        //周几
        wd = date.getDay();
        for (let i = wd + 1; i <= 6; i++) {
            dayArr.push({
                disable: true,
                selected: false,
                date: i - wd
            });
        }
        this.model['dates'] = dayArr;
        this.model['days'] = dayArr;
    }
    /**
     * 计算一个月的天数
     * @param year      年
     * @param month     月
     * @param disMonth  相差月数
     */
    __cacMonthDays(year, month, disMonth) {
        if (disMonth) {
            month += disMonth;
        }
        if (month <= 0) {
            year--;
            month += 12;
        }
        else if (month > 12) {
            year++;
            month -= 12;
        }
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            return 31;
        }
        else if (month !== 2) {
            return 30;
        }
        else if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
            return 29;
        }
        else {
            return 28;
        }
    }
    /**
     * 修改月份
     * @param module
     * @param distance
     */
    __changeMonth(distance) {
        let year = this.model['year'];
        let month = this.model['month'];
        month += distance;
        if (month <= 0) {
            year--;
            month += 12;
        }
        else if (month > 12) {
            year++;
            month -= 12;
        }
        if (month <= 0) {
            year--;
            month += 12;
        }
        else if (month > 12) {
            year++;
            month -= 12;
        }
        this.__genDates(year, month);
    }
    /**
     * 年-1
     */
    __subYear() {
        this.__changeMonth(-12);
    }
    /**
     * 年+1
     */
    __addYear() {
        this.__changeMonth(12);
    }
    /**
     * 月-1
     */
    __subMonth() {
        this.__changeMonth(-1);
    }
    /**
     * 月+1
     */
    __addMonth() {
        this.__changeMonth(1);
    }
}
registModule(UIDate, 'ui-date');

/**
 * tab插件
 * bgColor          默认t背景色
 * color            默认前景色
 * activeBgColor    激活背景色
 * activeColor      激活前景色
 */
class UITab extends Module {
    constructor() {
        super(...arguments);
        /**
         * 拖动参数
         */
        this.__dragParam = { dx: 0 };
    }
    template(props) {
        this.__onTabClose = props.onTabClose;
        this.__onChange = props.onChange;
        let tabStyle = '';
        let activeStyle = '';
        if (props.activeBgColor) {
            activeStyle += 'background-color:' + props.activeBgColor;
        }
        //激活前景色，如果没设置，但是设置了默认前景色，则使用默认前景色
        let ac = props.activeColor || props.color;
        if (ac) {
            if (activeStyle !== '') {
                activeStyle += ';';
            }
            activeStyle += 'color:' + ac;
        }
        let defaultStyle = '';
        if (props.bgColor) {
            defaultStyle += 'background-color:' + props.bgColor;
        }
        if (props.color) {
            if (defaultStyle !== '') {
                defaultStyle += ';';
            }
            defaultStyle += 'color:' + props.color;
        }
        if (activeStyle) {
            tabStyle = `style={{active?'${activeStyle}':'${defaultStyle}'}}`;
        }
        else if (defaultStyle) {
            tabStyle = `style={{!active?'${props.defaultStyle}':''}}`;
        }
        let headBg = props.bgColor ? "style='background-color:" + props.bgColor + "'" : '';
        this.setExcludeProps(['activeBgColor', 'activeColor', 'bgColor', 'color', 'onChange', 'onTabClose']);
        return `
            <div class='ui-tab'>
                <div class='ui-tab-headct' ${headBg} >
                    <div class='ui-tab-head' e-drag='__dragHead' e-mousedown='__dragStart' e-mousemove='__drag' e-mouseup='__dragEnd' e-mouseleave='__dragEnd'>
                        <for cond={{tabs}} class={{'ui-tab-item' + (active?' ui-tab-item-active':'')}} e-click='__clickTab' ${tabStyle}>
                            {{title}}
                            <b class="ui-tab-close" x-show={{closable}} e-click='__closeTab:nopopo'/>
                        </for>
                    </div>
                </div>
                <div class='ui-tab-body'>
                    <slot />
                </div>
            </div>
        `;
    }
    data() {
        return {
            tabs: []
        };
    }
    /**
     * 添加tab
     * @param cfg tab配置项
     */
    __addTab(cfg) {
        if (this.model['tabs'].find(item => item.tab === cfg.tab)) {
            return;
        }
        this.model['tabs'].push(cfg);
        if (cfg.active || this.model['tabs'].length === 1) {
            this.__activeTab(cfg);
        }
    }
    /**
     * 点击tab
     * @param model
     */
    __clickTab(model) {
        this.__activeTab(model);
    }
    /**
     * 激活新tab
     * @param item tab config对象 或 title 或index
     */
    __activeTab(item) {
        if (typeof item !== 'object') {
            item = this.__getTab(item);
        }
        if (!item || this.__currentTab && this.__currentTab.tab === item.tab) {
            return;
        }
        //之前的active设置为false
        if (this.__currentTab) {
            this.__currentTab.active = false;
            this.__currentTab.tab.__hide();
        }
        item.active = true;
        item.tab.__show();
        //执行change事件
        if (this.__onChange) {
            this.getParent().invokeMethod(this.__onChange, this.__currentTab, item);
        }
        this.__currentTab = item;
    }
    /**
     * 关闭页签
     * @param model     title或对应model或索引号
     * @returns
     */
    __closeTab(model) {
        //最后一个不删除
        if (!model || this.model['tabs'].length === 1) {
            return;
        }
        let index;
        let tp = typeof model;
        if (tp === 'number') {
            index = model;
        }
        else if (tp === 'string') {
            index = this.model['tabs'].findIndex(item => item.title === model);
        }
        else if (tp === 'object') {
            index = this.model['tabs'].findIndex(item => item.tab === model.tab);
        }
        if (index >= 0 || index < this.model['tabs'].length) {
            model = this.model['tabs'][index];
            //执行tabclose事件
            if (this.__onTabClose) {
                this.getParent().invokeMethod(this.__onTabClose, model);
            }
            //移除
            this.model['tabs'].splice(index, 1);
            //被删除为当前tab，需要切换当前tab
            if (model.tab === this.__currentTab.tab) {
                if (index === this.model['tabs'].length) { //最后一个
                    this.__activeTab(this.model['tabs'][index - 1]);
                }
                else { //取后面一个
                    this.__activeTab(this.model['tabs'][index]);
                }
            }
        }
    }
    /**
     * 根据title或索引号获取tab
     * @param item  title或index
     * @returns     tab item model
     */
    __getTab(item) {
        if (typeof item === 'string') {
            return this.model['tabs'].find(t => t.title === item);
        }
        return this.model['tabs'][item];
    }
    /**
     * 头部拖动开始
     * @param model
     * @param dom
     * @param ev
     * @param e
     */
    __dragStart(model, dom, ev, e) {
        let el = e.currentTarget;
        let pel = el.parentElement;
        //设置宽度
        let w = 0;
        for (let d of el.children) {
            w += d.offsetWidth;
        }
        el.style.width = (w + 1) + 'px';
        //不比父宽，不处理
        if (el.offsetWidth < pel.offsetWidth) {
            return;
        }
        this.__dragParam.x = e.pageX;
    }
    /**
     * 拖动
     * @param model
     * @param dom
     * @param ev
     * @param e
     * @returns
     */
    __drag(model, dom, ev, e) {
        if (!this.__dragParam.x) {
            return;
        }
        this.__move(e);
    }
    /**
     * 拖动停止
     * @param model
     * @param dom
     * @param ev
     * @param e
     */
    __dragEnd(model, dom, ev, e) {
        this.__move(e);
        delete this.__dragParam.x;
    }
    /**
     * 移动
     * @param e
     * @returns
     */
    __move(e) {
        if (!this.__dragParam.x) {
            return;
        }
        let dx = e.pageX - this.__dragParam.x;
        if (Math.abs(dx) < 2) {
            return;
        }
        this.__dragParam.dx += dx;
        if (this.__dragParam.dx > 0) {
            this.__dragParam.dx = 0;
        }
        else {
            let el = e.currentTarget;
            let pel = el.parentElement;
            if (el.offsetWidth + this.__dragParam.dx < pel.offsetWidth) {
                this.__dragParam.dx = pel.offsetWidth - el.offsetWidth;
            }
        }
        this.__dragParam.x = e.pageX;
        e.currentTarget.style.transform = 'translateX(' + this.__dragParam.dx + 'px)';
    }
}
/**
 * tab item插件
 * 配置说明
 * title    tab标题
 * closable 是否可关闭
 * active   是否处于active
 */
class UITabItem extends Module {
    template(props) {
        this.__active = (props.active === 'true' || props.active === true);
        this.__closable = (props.closable === 'true' || props.closable === true);
        this.__title = props.title;
        this.setExcludeProps(['title', 'active', 'closable']);
        return `
            <div x-show={{show}}>
                <slot/>
            </div>
        `;
    }
    data() {
        return {
            show: false
        };
    }
    onBeforeFirstRender() {
        //添加到父
        let pm = this.getParent();
        if (pm.constructor !== UITab) {
            return;
        }
        //追加到ui tab插件
        pm.__addTab({
            title: this.__title,
            active: this.__active,
            closable: this.__closable,
            tab: this
        });
    }
    /**
     * 隐藏
     */
    __hide() {
        this.model['show'] = false;
    }
    /**
     * 显示
     */
    __show() {
        this.model['show'] = true;
    }
}
registModule(UITab, 'ui-tab');
registModule(UITabItem, 'ui-tab-item');

/**
 * radio group插件
 */
class UITip extends Module {
    template(props) {
        super.template(props);
        //四个位置
        const arr = ['top', 'right', 'bottom', 'left'];
        //位置item串
        let str = '';
        for (let d of arr) {
            str += `
                <div class='ui-tip ui-tip-${d}'>
                    <for cond={{${d}Data}} class={{'ui-tip-item' + (theme?(' ui-box-' + theme):'')}}>
                        <b x-show={{showIcon}} class={{icon?('ui-icon-' + icon):''}} />
                        <span class='ui-tip-content'>{{text}}</span>
                        <b class='ui-tip-close' e-click='__close' x-show={{closable}}/>
                    </for>
                </div>
            `;
        }
        return `
            <div class='ui-tip'>
                ${str}
            </div>
        `;
    }
    data() {
        return {
            topData: [],
            rightData: [],
            bottomData: [],
            leftData: []
        };
    }
    /**
     * 关闭
     * @param model
     */
    __close(model) {
        //从数据集移除
        let dataArr = ['topData', 'rightData', 'bottomData', 'leftData'];
        for (let d of dataArr) {
            let ind = this.model[d].indexOf(model);
            if (ind !== -1) {
                this.model[d].splice(ind, 1);
                break;
            }
        }
    }
}
registModule(UITip, 'ui-tip');
/**
 * tip 管理器
 */
class UITipManager {
    /**
     * 添加tip
     * @param cfg
     */
    static addTip(cfg) {
        cfg.position || (cfg.position = 'top');
        cfg.theme || (cfg.theme = 'default');
        cfg.id = this.id++;
        const mdl = this.getUITip();
        let rows = mdl.model[cfg.position + 'Data'];
        //排他
        if (cfg.exclusive) {
            rows.splice(0, rows.length);
        }
        cfg.showIcon = cfg.hasOwnProperty('icon');
        //不显示关闭按钮，则设置自动关闭时间
        if (!cfg.closable) {
            //设置关闭时间
            const t = new Date().getTime();
            cfg.closeTime = t + (cfg.timeout || 2000);
            //添加到待关闭队列
            this.tobeClosed.push(cfg);
            //排序
            this.tobeClosed.sort((a, b) => { return a.closeTime < b.closeTime ? -1 : 1; });
            //设置延迟清理
            setTimeout(() => { UITipManager.removeTip(); }, (this.tobeClosed[0].closeTime - t));
        }
        rows.push(cfg);
    }
    /**
     * 移除tip
     */
    static removeTip() {
        let mdl = this.getUITip();
        if (!mdl) {
            return;
        }
        if (this.tobeClosed.length === 0) {
            return;
        }
        let t = new Date().getTime();
        //第一个时间不超时，则后续不超时
        if (this.tobeClosed[0].closeTime > t) {
            return;
        }
        for (let i = 0; i < this.tobeClosed.length; i++) {
            let d = this.tobeClosed[i];
            //从待关闭队列移除
            this.tobeClosed.splice(i--, 1);
            let rows = mdl.model[d.position + 'Data'];
            //从uitip数据移除
            let ind = rows.findIndex(item => item.id === d.id);
            if (ind !== -1) {
                rows.splice(ind, 1);
            }
        }
        if (this.tobeClosed.length > 0) {
            //设置延迟清理
            setTimeout(() => { UITipManager.removeTip(); }, (this.tobeClosed[0].closeTime - t));
        }
    }
    /**
     * 获取uitip插件
     * @returns     uitip插件
     */
    static getUITip() {
        let root = ModuleFactory.getMain();
        for (let mid of root.children) {
            let m = ModuleFactory.get(mid);
            if (m instanceof UITip) {
                return m;
            }
        }
        return null;
    }
}
/**
 * 待关闭tip数组
 */
UITipManager.tobeClosed = [];
/**
 * tip id
 */
UITipManager.id = 0;
/**
 * 暴露tip函数
 * @param cfg   tip 配置
 */
function nuitip(cfg) {
    UITipManager.addTip(cfg);
}

/**
 * 消息框
 */
class UIMessageBox extends Module {
    template(props) {
        let iconStr = this.model['icon'] ? `<b class='ui-messagebox-icon ui-icon-${this.model["icon"]}' />` : '';
        let btnStr = '';
        let index = 0;
        if (this.__buttons) {
            for (let b of this.__buttons) {
                let methodName = b.callback;
                if (typeof b.callback === 'function') {
                    //设定方法名和回调函数
                    methodName = '__genmethod__' + index++;
                    this[methodName] = (model, dom, ev, e) => {
                        this.__close();
                        b.callback(model, dom, ev, e);
                    };
                }
                btnStr += `<ui-button title='${b.text}' theme='${b.theme || "default"}' useDomModel e-click='${methodName}' />`;
            }
        }
        return `
            <div >
                <div x-show={{show}}>
                    <div class='ui-dialog ui-messagebox' >
                        <div class='ui-dialog-cover' />
                        <div class='ui-messagebox-body'>
                            <div class='ui-messagebox-content'>
                                ${iconStr}
                                <span class='ui-messagebox-text'>{{text}}</span>
                            </div>
                            <div class='ui-messagebox-btnct'>
                                ${btnStr}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    data() {
        return {
            show: false
        };
    }
    /**
     * 关闭窗口
     */
    __close() {
        this.model['show'] = false;
    }
}
registModule(UIMessageBox, 'ui-messagebox');
class UIMessageBoxManager {
    /**
     * confirm 对话框
     * @param cfg   confirm 配置
     * @returns
     */
    static confirm(cfg) {
        const mdl = ModuleFactory.getMain().getModule('UIMessageBox');
        if (!mdl) {
            return;
        }
        //修改状态，避免不被渲染
        // mdl.state = EModuleState.INITED;
        mdl.model['text'] = cfg.text;
        mdl.model['icon'] = cfg.icon;
        mdl.model['show'] = true;
        mdl.__buttons = [{ text: '取消', theme: 'default', callback: '__close' }];
        if (Array.isArray(cfg.buttons)) {
            mdl.__buttons = mdl.__buttons.concat(cfg.buttons);
        }
    }
    /**
     * alert 对话框
     * @param cfg   alert 配置
     * @returns
     */
    static alert(cfg) {
        const mdl = ModuleFactory.getMain().getModule('UIMessageBox');
        if (!mdl) {
            return;
        }
        //修改状态，避免不被渲染
        // mdl.state = EModuleState.INITED;
        mdl.model['text'] = cfg.text;
        mdl.model['icon'] = cfg.icon;
        mdl.model['show'] = true;
        mdl.__buttons = [{ text: '确定', theme: 'active', callback: '__close' }];
    }
}
/**
 * confirm创建函数
 * @param cfg {text:消息内容,icon:消息图标,buttons:[{text:按钮标题,callback:回调函数},...]}
 */
function nuiconfirm(cfg) {
    UIMessageBoxManager.confirm(cfg);
}
/**
 * alert 创建函数
 * @param cfg {text:消息内容,icon:消息图标}
 */
function nuialert(cfg) {
    UIMessageBoxManager.alert(cfg);
}

export { $get, $set, Compiler, CssManager, DefineElement, DefineElementManager, DiffTool, Directive, DirectiveManager, DirectiveType, EModuleState, EventFactory, EventManager, Expression, GlobalCache, Model, ModelManager, Module, ModuleFactory, NCache, NError, NEvent, NFactory, NodomMessage, NodomMessage_en, NodomMessage_zh, Renderer, Route, Router, Scheduler, UIAccordion, UIAccordionItem, UIButton, UIButtonGroup, UICheckbox, UIDate, UIDialog, UIFile, UIForm, UIFormItem, UIGrid, UIGridCol, UIGridExpand, UIList, UIListTransfer, UIMenu, UIMessageBox, UIMessageBoxManager, UIPagination, UIPanel, UIPanelBody, UIRadio, UIRadioGroup, UIRelationMap, UISelect, UISwitch, UITab, UITabItem, UITip, UITipManager, UITool, UIToolbar, UITree, Util, VirtualDom, createDirective, createRoute, getmkey, nodom, nuialert, nuiconfirm, nuitip, registModule, request, watch };
//# sourceMappingURL=nodomui.js.map

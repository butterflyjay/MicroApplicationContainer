import { MicroApp } from "./types/types";
import { fetchSource } from "./utils";

/**
 * 访问微应用资源
 * @param app 微应用实例对象
 */
export default function loadHtml(app: MicroApp) {
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
      } else {
        app.onLoad(htmlDom);
      }
      //如果有远程js资源，则通过fetch请求
      if (app.source.scripts.size) {
        fetchScriptsFromHtml(app, htmlDom);
      } else {
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
export function extractSourceDom(parent: Element, app: MicroApp) {
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
    } else if (dom instanceof HTMLScriptElement) {
      const src = dom.getAttribute("src");
      if (src) {
        //远程script
        app.source.scripts.set(src, {
          code: "", //代码内容
          isExternal: true, //是否远程script
        });
      } else if (dom.textContent) {
        //内联script
        const nonceStr = Math.random().toString(36).slice(2, 16); //生成包含(0-9a-z)随机字符串
        app.source.scripts.set(nonceStr, {
          code: dom.textContent, //代码内容
          isExternal: false, //是否远程script
        });
      }
      parent.removeChild(dom);
    } else if (dom instanceof HTMLStyleElement) {
      //进行样式隔离
    }
  }
}
/**
 * 获取link远程资源
 * @param app 微应用实例
 * @param microWebHead microweb-head
 * @param htmlDom 微应用
 */
export function fetchLinksFromHtml(
  app: MicroApp,
  microWebHead: Element | null,
  htmlDom: Element
): void {
  const linkEntries = Array.from(app.source.links.entries());
  //通过fetch请求所有css资源
  const fetchLinkPromise: Array<Promise<string>> = [];
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
        microWebHead?.appendChild(linkSheetStyle);
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
export function fetchScriptsFromHtml(app: MicroApp, htmlDom: Element): void {
  const scriptEntries = Array.from(app.source.scripts.entries());
  //通过fetch请求所有js资源
  const fetchScriptPromise: Array<Promise<string>> = [];
  for (const [url, info] of scriptEntries) {
    //如果是内联script，则不需要请求资源
    fetchScriptPromise.push(
      info.isExternal ? fetchSource(app.url.origin + url) : Promise.resolve(info.code)
    );
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

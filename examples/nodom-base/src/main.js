// import "./main.css";
// import "../static/css/nodomui.css";
import { nodom, Module } from "./static/js/nodomui.js";
import { initRoute } from "./router/routeConfig.js";
import microWeb from "../../dist/microweb.js";

microWeb.start();

class Main extends Module {
  template() {
    return `
      <div class="ui-layout">
        <div class="ui-layout-north">
          微前端框架基座应用
        </div>
        <div class="ui-layout-body">
          <div class="ui-layout-west">
            <div class="ui-vue" x-route="/vue3">vue3</div>
            <div class="ui-react" x-route="/react">react</div>
          </div>
          <div class="ui-layout-east">
            <div x-router></div>
          </div>
        </div>
        
      </div>
    `
  }
  data() {
    return {

    }
  }
}
initRoute();
nodom(Main, "#app");
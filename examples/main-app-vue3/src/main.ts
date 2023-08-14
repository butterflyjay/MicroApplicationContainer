import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import MicroFrontend from "../../dist/micro-frontend.js";
MicroFrontend.start()
const app = createApp(App);

app.use(router)

app.mount("#app");

import { Module } from "../static/js/nodomui.js";

export default class React extends Module {
  template() {
    return `
      <m-app name="react" entry="http://localhost:3000"></m-app>
    `
  }
}
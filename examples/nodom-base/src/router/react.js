import { Module } from "../static/js/nodomui.js";

export default class React extends Module {
  template() {
    return `
      <micro-element name="react" entry="http://localhost:3000"></micro-element>
    `
  }
}
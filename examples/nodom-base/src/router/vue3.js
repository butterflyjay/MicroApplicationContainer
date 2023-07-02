import { Module } from "../static/js/nodomui.js";

export default class Vue3 extends Module {
  template() {
    return `
      <micro-element name="vue3" entry="http://localhost:5173/"></micro-element>
    `
  }
}


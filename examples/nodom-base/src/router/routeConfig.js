import { createRoute } from "../static/js/nodomui";
import React from "./react.js";
import Vue3 from "./vue3.js";
import Base from "./base.js";

export function initRoute() {
  createRoute([{
    path: '/vue3',
    module: Vue3
  }, {
    path: "/react",
    module: React
  }, {
    path: '/',
    module: Base
  }
  ])
}
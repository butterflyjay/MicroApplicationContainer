import { defineElement } from "./element";
import { isBrowser } from "./utils";

const MicroWeb = {
  start() {
    if (!isBrowser) {
      console.error("The environment is not support MicroWeb!");
      return;
    }
    defineElement();
  },
};

export default MicroWeb;

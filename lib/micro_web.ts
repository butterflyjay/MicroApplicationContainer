import { defineElement } from "./element";
import logger from "./logger";
import { OptionsType } from "./types/types";
import { isBrowser } from "./utils";

export class MicroWeb {
  public options: OptionsType = Object.create(null);
  public start(
    options: OptionsType = {
      shadowDom: false,
      disableSandbox: false,
      disableScopecss: false,
      destroy: false,
      "keep-alive": false,
    }
  ): void {
    Object.assign(this.options, options);
    if (!isBrowser || !window.customElements) {
      return logger.error("The environment is not support MicroWeb.");
    }
    defineElement();
  }
}

export default new MicroWeb();

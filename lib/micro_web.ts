import { defineElement } from "./element";
import logger from "./logger";
import { OptionsType } from "./types/types";
import { isBrowser } from "./utils";

export class MicroWeb {
  public start(): void {
    if (!isBrowser || !window.customElements) {
      return logger.error("The environment is not support MicroWeb.");
    }
    defineElement();
  }
}
export const microWeb = new MicroWeb();
export default microWeb;

import { defineElement } from "./m_element";
import logger from "./logger";
import { isBrowser } from "./utils";

export class Mapp {
  public start(): void {
    if (!isBrowser || !window.customElements) {
      return logger.error("The environment is not support MicroWeb.");
    }
    defineElement();
  }
}
export const mApp = new Mapp();
export default mApp;

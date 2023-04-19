import { defineElement } from "./element";
import logger from "./logger";
import { isBrowser } from "./utils";

const MicroWeb = {
  start(): void {
    if (!isBrowser) {
      return logger.error("The environment is not support MicroWeb!");
    }
    defineElement();
  },
};

export default MicroWeb;

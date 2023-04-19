import { isString } from "./utils";

//可开闭式logger
class Logger {
  public isShowLogger: boolean;
  constructor({ isShowLogger }: { isShowLogger: boolean }) {
    this.isShowLogger = isShowLogger;
  }
  public log(msg: unknown, appName: string | null = null, ...args: unknown[]): void {
    if (this.isShowLogger) {
      console.log(`[Micro Web--${appName ? "app" : ""} ${appName}]: `, msg, ...args);
    }
  }
  public warn(msg: unknown, appName: string | null = null, ...args: unknown[]): void {
    if (this.isShowLogger) {
      console.warn(`[Micro Web--${appName ? "app" : ""} ${appName}]: `, msg, ...args);
    }
  }
  public error(msg: unknown, appName: string | null = null, ...args: unknown[]): void {
    if (this.isShowLogger) {
      console.error(`[Micro Web--${appName ? "app" : ""} ${appName}]: `, msg, ...args);
    }
  }
}

export default new Logger({ isShowLogger: true });

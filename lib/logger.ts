type LoggerParam = {
  isShowLogger: boolean;
};
class Logger {
  public isShowLogger: boolean;
  constructor({ isShowLogger }: LoggerParam) {
    this.isShowLogger = isShowLogger;
  }
  public log(msg: unknown, appName?: string): void {
    if (this.isShowLogger) {
      console.log(`[Micro Web--${appName ? appName : ""}]: `, msg);
    }
  }
  public warn(msg: unknown, appName?: string): void {
    if (this.isShowLogger) {
      console.warn(`[Micro Web--${appName ? appName : ""}]: `, msg);
    }
  }
  public error(msg: unknown, appName?: string): void {
    if (this.isShowLogger) {
      console.error(`[Micro Web--${appName ? appName : ""}]: `, msg);
    }
  }
}

export default new Logger({ isShowLogger: true });

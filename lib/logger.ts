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
      console.log(`[Micro Frontend${appName ? "--" + appName : ""}]: `, msg);
    }
  }
  public warn(msg: unknown, appName?: string): void {
    if (this.isShowLogger) {
      console.warn(`[Micro Frontend${appName ? "--" + appName : ""}]: `, msg);
    }
  }
  public error(msg: unknown, appName?: string): void {
    if (this.isShowLogger) {
      console.error(`[Micro Frontend${appName ? "--" + appName : ""}]: `, msg);
    }
  }
}

export default new Logger({ isShowLogger: true });

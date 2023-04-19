//可开闭式logger
class Logger {
  public isShowLogger: boolean;
  constructor({ isShowLogger }: { isShowLogger: boolean }) {
    this.isShowLogger = isShowLogger;
  }
  public log(appName: string | null = null, ...args: any[]): void {
    if (this.isShowLogger) {
      console.log(`[Micro Web--${appName ? "app" : ""} ${appName}]: `, ...args);
    }
  }
  public warn(appName: string, ...args: any[]): void {
    if (this.isShowLogger) {
      console.warn(`[Micro Web--${appName ? "app" : ""} ${appName}]: `, ...args);
    }
  }
  public error(appName: string, ...args: any[]): void {
    if (this.isShowLogger) {
      console.error(`[Micro Web--${appName ? "app" : ""} ${appName}]: `, ...args);
    }
  }
}

export default new Logger({ isShowLogger: true });

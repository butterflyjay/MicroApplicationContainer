export interface AppManagerType {
  get(appName: string): AppInterface | void;
  set(appName: string, app: AppInterface): void;
  delete(appName: string): boolean;
  getAll(): AppInterface[];
  clear(): void;
}
export class AppManager implements AppManagerType {
  private static instance: AppManager;
  private appInstanceMap: Map<string, AppInterface> = new Map();
  public static getInstance(): AppManager {
    if (!this.instance) {
      this.instance = new AppManager();
    }
    return this.instance;
  }
  public get(appName: string) {
    return this.appInstanceMap.get(appName);
  }
  public set(appName: string, app: AppInterface) {
    this.appInstanceMap.set(appName, app);
  }
  public getAll() {
    return Array.from(this.appInstanceMap.values());
  }
  public delete(appName: string) {
    return this.appInstanceMap.delete(appName);
  }
  public clear(): void {
    this.appInstanceMap.clear();
  }
}

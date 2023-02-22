//TypeScript声明文件(.d.ts)的使用
//使用场景
//1.在ts文件中对引用的外部库做类型判断；
//2.制作npm包时，书写自己的声明文件，需要在package.json的typing/types字段注册声明文件的路径；
//3.不使用ts时，也可以添加声明文件与（自己的）的模块存放在同一目录下，简单做一下数据结构体，对IDE参数声明也有用哦；

declare module "@MicroWebTypes" {
  interface Window {
    proxyWindow?: object;
    addEventListener?(type: string, handler: Function, useCapture?: boolean): void;
    removeEventListener?(type: string, handler: Function, useCapture?: boolean): void;
  }
}

//导出defineConfig方法可以让编辑器智能提示所有的rollup的配置项
import { defineConfig } from "rollup";
//babel的插件，用来处理es的转换，会用一个.babelrc配置文件
// import babel from "rollup-plugin-babel";
//解决rollup.js无法识别CommonJS模块
import commonjs from "@rollup/plugin-commonjs"
//nodeResolve将我们编写的源码与依赖的第三方库进行绑定
import nodeResolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript";
import { externals } from "rollup-plugin-node-externals"
import postcss from "rollup-plugin-postcss";
import path from "path";

export default defineConfig({
  input: "./lib/index.ts",
  // preserveModules: true,
  output: {
    file: path.resolve("examples", "dist", "micro-frontend.js"),
    format: "es",
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    externals({ devDeps: false }),
    commonjs(),
    postcss(),
    typescript({
      sourceMap: true
    })
  ],
  // external: []  //告诉rollup哪些是外部的类库
})
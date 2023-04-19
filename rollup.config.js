import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript";
import { externals } from "rollup-plugin-node-externals"
import postcss from "rollup-plugin-postcss";
import path from "path";

export default {
  input: "./src/index.ts",
  // preserveModules: true,
  output: {
    file: path.resolve("examples", "dist", "microweb.js"),
    format: "es",
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    externals({ devDeps: false }),
    commonjs(),
    postcss(),
    typescript()
  ],
  // external: []  //告诉rollup哪些是外部的类库
}
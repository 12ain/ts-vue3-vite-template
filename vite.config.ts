import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import vitePluginImp from "vite-plugin-imp";

export default defineConfig({
  base: "./",
  resolve: {
    alias: [
      { find: "~", replacement: resolve(__dirname, "./") },
      { find: "@", replacement: resolve(__dirname, "./src") },
    ],
  },
  cssPreprocessOptions: {
    less: {
      additionalData: "@import './src/assets/style.less';",
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    // vitePluginImp()
  ],
});

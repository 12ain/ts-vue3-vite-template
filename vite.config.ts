import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vitePluginImp from "vite-plugin-imp";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "./",
  resolve: {
    alias: [
      { find: "~", replacement: resolve(__dirname, "./") },
      { find: "@", replacement: resolve(__dirname, "./src") },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "./src/assets/style.less"`,
          },
        },
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    vitePluginImp({
      libList: [
        {
          libName: "vant",
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file
              return false;
            }
            return `vant/es/${name}/index.css`;
          },
        },
        // {
        //   libName: 'ant-design-vue',
        //   style(name) {
        //     if (/popconfirm/.test(name)) {
        //       // support multiple style file path to import
        //       return [
        //         'ant-design-vue/es/button/style/index.css',
        //         'ant-design-vue/es/popover/style/index.css',
        //       ];
        //     }
        //     return `ant-design-vue/es/${name}/style/index.css`;
        //   },
        // },
        // {
        //   libName: 'element-plus',
        //   style: (name) => {
        //     return `element-plus/lib/theme-chalk/${name}.css`;
        //   },
        // },
      ],
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});

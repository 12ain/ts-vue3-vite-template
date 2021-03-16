# demo-vue3-typescript

## Project setup

```sh
yarn install
```

### Compiles and hot-reloads for development

```sh
yarn serve
```

### Compiles and minifies for production

```sh
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 钩子函数

### 常用

- setup() 组件创建前
- onBeforeMount 组件挂载前
- onMounted 组件挂载后
- onBeforeUpdate 组件更新前
- onUpdated 组件更新后
- onBeforeUnmount 组件卸载前

### 不常用

- onActivated 包含在 kepp-alive 中
- onDeactivated A 组件切换 B 组件，A 组件消失时执行
- onErrorCaptured 捕获子组件异常

#### 从 Webpack 到 Vite 迁移指南

第一步
将 public 文件夹下的 index.html 移动到根目录下并添加如下代码片段

```html
<script type="module" src="/src/main.ts"></script>
```

第二步

删除 vue-cli 相关插件，

- "@vue/cli-plugin-babel": "~5.0.0-alpha.2",
- "@vue/cli-plugin-eslint": "~5.0.0-alpha.2",
- "@vue/cli-plugin-router": "~5.0.0-alpha.2",
- "@vue/cli-plugin-typescript": "~5.0.0-alpha.2",
- "@vue/cli-plugin-vuex": "~5.0.0-alpha.2",
- "@vue/cli-service": "~5.0.0-alpha.2",

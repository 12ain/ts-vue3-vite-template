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

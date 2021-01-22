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

### Lints and fixes files

```sh
yarn lint
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

- onActivated  包含在kepp-alive中
- onDeactivated A组件切换B组件，A组件消失时执行
- onErrorCaptured 捕获子组件异常

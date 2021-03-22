<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/todo">Todo</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    document.title = "Hello,Vue3!";
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
  padding: 10px 20px;
  border-radius: 5px;
  border: 0;
  background-color: rgb(0, 201, 140);
  color: #fff;
  margin: 0 10px;
}
</style>

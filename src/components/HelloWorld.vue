<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    console.log(props);
    const data = reactive({
      message: "Hello,Vue3!",
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>

<style scoped lang="less">
a {
  color: #42b983;
}
</style>

<template>
  <div>
    <div>当前: {{ count }}岁</div>
    <button @click="increment">测试＋</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const Count = defineComponent({
  props: {
    initial: Number,
  },
  setup(props) {
    let count = ref(0);

    const increment = () => {
      const { initial = 0 } = props;
      count.value += initial;
    };
    return { count, increment };
  },
});
export default Count;
</script>

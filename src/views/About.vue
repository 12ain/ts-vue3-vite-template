<template>
  <div class="about">
    <div class="select">
      <van-button
        v-for="(item, index) in options"
        :key="index"
        @click="select(index)"
      >
        {{ item }}
      </van-button>
      <div>当前选择{{ selected }}</div>
      <van-button type="success" @click="finish">选择完成</van-button>
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref, watch, defineComponent } from "vue";

interface DataType {
  options: string[];
  selected: string;
  select: (index: number) => void;
}

export default defineComponent({
  setup() {
    const data: DataType = reactive({
      options: ["first", "second", "third"],
      selected: "",
      select: (index: number) => {
        data.selected = data.options[index];
      },
    });
    // watch的使用
    const text = ref("选项");
    const finish = () => {
      text.value = data.selected;
    };
    watch([text, () => data.select], (newVal, oldVal) => {
      console.log(newVal, oldVal);
      document.title = "选择内容|" + newVal[0];
    });
    return { ...toRefs(data), text, finish };
  },
});
</script>

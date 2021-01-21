<template>
  <div class="about">
    <div class="select">
      <button
        v-for="(item, index) in options"
        :key="index"
        @click="select(index)"
      >
        {{ item }}
      </button>
      <div>当前选择{{ selected }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive } from "vue";
interface DataType {
  options: string[];
  selected: string;
  select: (index: number) => void;
}

export default {
  setup() {
    const data: DataType = reactive({
      options: ["first", "second", "third"],
      selected: "",
      select: (index: number) => {
        data.selected = data.options[index];
      },
    });
    const a = toRefs(data);
    return { ...a };
  },
};
</script>

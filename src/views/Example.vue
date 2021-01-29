<template>
  <div>
    <a-count :initial="1"></a-count>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from "vue";

import ACount from "@/components/Count.vue";

export default {
  setup() {
    interface DataType {
      name: string;
      age?: number;
    }
    const obj: DataType = {
      name: "小明",
      age: 11,
    };
    const counts = ref(10);
    const data = reactive(obj);
    onMounted(() => {
      console.log(data);
    });
    return { counts };
  },
  components: { ACount },
};
</script>

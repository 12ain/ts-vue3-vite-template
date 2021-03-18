<template>
  <div>
    我是{{ name }}
    <a-count :initial="counts"></a-count>
  </div>
</template>

<script lang="ts">
import { ref, toRefs, defineComponent } from "vue";

import ACount from "@/components/Count.vue";

export default defineComponent({
  setup() {
    interface Person {
      name: string;
      age?: number;
    }
    const obj: Person = {
      name: "小明",
      age: 11,
    };
    const counts = ref(1);
    return { counts, ...toRefs(obj) };
  },
  components: { ACount },
});
</script>

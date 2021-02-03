<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="setNew">{{ vuexMsg }}</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    const vuexMsg = computed(() => {
      return store.state.name;
    });
    const setNew = () => {
      store.commit("SET_NAME", "Name has been changed!");
    };

    return { vuexMsg, setNew };
  },
});
</script>

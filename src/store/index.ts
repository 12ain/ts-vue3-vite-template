import { createStore } from "vuex";
import user from "./user";

interface Test {
  name: string;
}

export default createStore({
  state: {
    name: "Hello,Vuex!",
  },
  mutations: {
    SET_NAME: (state: Test, val): void => {
      state.name = val;
    },
  },
  actions: {},
  modules: {
    user,
  },
});

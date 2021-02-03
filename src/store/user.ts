interface User {
  token: string;
  name: string;
  avatar?: string;
  introduction?: string;
}

const state: User = {
  token: "",
  name: "Hello",
  avatar: "",
  introduction: "",
};

const mutations = {
  SET_TOKEN: (state: User, token: string): void => {
    state.token = token;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

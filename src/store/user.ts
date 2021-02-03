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
  SET_NAME: (state: User, name: string): void => {
    state.name = name;
  },
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

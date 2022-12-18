import axios from "axios";

export default {
  namespaced: true,
  state: {
    popular: [],
  },
  mutations: {
    SET_POPULAR_TO_STATE: (state, popular) => {
      state.popular = popular;
    },
  },
  actions: {
    async getPopularFromApi({ commit }) {
      try {
        const popular = await axios("http://localhost:3000/popular", {
          method: "GET",
        });
        commit("SET_POPULAR_TO_STATE", popular.data);
        return popular;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {
    popular(state) {
      return state.popular;
    },
  },
};

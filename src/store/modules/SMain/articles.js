import axios from "axios";

export default {
  namespaced: true,
  state: {
    articles: [],
  },
  mutations: {
    SET_ARTICLES_TO_STATE(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async getArticlesFromApi({ commit }) {
      try {
        const articles = await axios("http://localhost:3000/articles", {
          method: "GET",
        });
        commit("SET_ARTICLES_TO_STATE", articles.data);
        return articles;
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
  getters: {
    articles(state) {
      return state.articles;
    },
  },
};

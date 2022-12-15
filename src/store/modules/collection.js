import axios from "axios";

export default {
  namespaced: true,
  state: {
    collection: [],
  },
  mutations: {
    SET_COLLECTION_TO_STATE: (state, collection) => {
      state.collection = collection;
    },
  },
  actions: {
    async getCollectionFromApi({ commit }) {
      try {
        const collection = await axios("http://localhost:3000/collection", {
          method: "GET",
        });
        commit("SET_COLLECTION_TO_STATE", collection.data);
        return collection;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {
    collection(state) {
      return state.collection;
    },
  },
};

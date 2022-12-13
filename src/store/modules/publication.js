import axios from "axios";

export default {
  namespaced: true,
  state: {
    publication: [],
  },
  mutations: {
    SET_PUBLICATION_TO_STATE: (state, publication) => {
      let extendedPublication = [];
      extendedPublication.push(
        Object.assign({}, publication[publication.length - 1])
      );
      extendedPublication = extendedPublication.concat(publication);
      extendedPublication.push(Object.assign({}, publication[0]));

      extendedPublication.forEach((ext, index) => {
        ext.article = `P${index}`;
        ext.translate = -1;
      });

      state.publication = extendedPublication;
    },
  },
  actions: {
    async getPublicationFromApi({ commit }) {
      try {
        const publication = await axios("http://localhost:3000/publication", {
          method: "GET",
        });
        commit("SET_PUBLICATION_TO_STATE", publication.data);
        return publication;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {
    publication(state) {
      return state.publication;
    },
  },
};

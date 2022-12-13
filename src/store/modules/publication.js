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
    GET_PUBLICATION_FROM_API({ commit }) {
      return axios("http://localhost:3000/publication", {
        method: "GET",
      })
        .then((publication) => {
          commit("SET_PUBLICATION_TO_STATE", publication.data);
          return publication;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    PUBLICATION(state) {
      return state.publication;
    },
  },
};

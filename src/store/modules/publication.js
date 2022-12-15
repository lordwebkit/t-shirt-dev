import axios from "axios";
import mapDataForCarousel from "../function/mapDataForCarousel";

export default {
  namespaced: true,
  state: {
    publication: [],
  },
  mutations: {
    SET_PUBLICATION_TO_STATE: (state, publication) => {
      state.publication = mapDataForCarousel(publication, "P");
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

import mapDataForCarousel from "../function/mapDataForCarousel";

export default {
  namespaced: true,
  state: {
    publication: [
      {
        image: "1.jpg",
        name: "Publication model 1",
        article: "P1",
      },
      {
        image: "2.jpg",
        name: "Publication model 2",
        article: "P2",
      },
      {
        image: "3.jpg",
        name: "Publication model 3",
        article: "P3",
      },
    ],
  },
  mutations: {
    SET_PUBLICATION_TO_STATE: (state, publication) => {
      state.publication = mapDataForCarousel(publication, "P");
    },
  },
  actions: {},
  getters: {
    publication(state) {
      return state.publication;
    },
  },
};

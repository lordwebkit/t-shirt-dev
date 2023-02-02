export default {
  namespaced: true,
  state: {
    popular: [
      {
        prevImage: "1.jpg",
        image: "2.png",
        name: "T-shirt classic black",
        description:
          "Black unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 10.99,
        fabricComposition: "100% cotton",
        availSize: "xs, s, m, l",
        article: "T2",
        available: true,
      },
      {
        prevImage: "2.jpg",
        image: "5.png",
        name: "T-shirt base gray",
        description:
          "Gray unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 11.59,
        fabricComposition: "95% cotton, 5% spandex",
        availSize: "s, m, l",
        article: "T5",
        available: false,
      },
      {
        prevImage: "3.jpg",
        image: "1.png",
        name: "T-shirt classic white",
        description:
          "White unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 10.99,
        fabricComposition: "100% cotton",
        availSize: "xs, s, m, l",
        article: "T1",
        available: true,
      },
    ],
  },
  mutations: {
    SET_POPULAR_TO_STATE: (state, popular) => {
      state.popular = popular;
    },
  },
  actions: {},
  getters: {
    popular(state) {
      return state.popular;
    },
  },
};

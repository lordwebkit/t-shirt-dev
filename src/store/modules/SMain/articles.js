export default {
  namespaced: true,
  state: {
    articles: [
      {
        title: "Choose size",
        classModification: "first",
        text: [
          "Choose your T-shirt and measure with a meter",
          "The width on the dimensional grid is indicated by the letter A,",
          "Measure under the armpits, from seam to seam, as shown by the red line.",
          "The length of the sleeve on the dimensional grid is indicated by the letter C,",
          "Next, compare your measurements with our size table.",
          "Estimating plus / minus a couple of centimeters and choose the size.",
        ],
        img: "1.jpg",
      },
      {
        title: "Take care of a t-shirt",
        classModification: "second",
        text: [
          "Wash inside out, only in a washing machine,",
          "delicate mode, up to 40 degrees, not higher than 600 rpm,",
          "do not use a machine dryer, dry only on a hanger,",
          "without direct sunlight on the fabric.",
          "",
        ],
        img: "2.jpg",
      },
      {
        title: "Remove stains",
        classModification: "third",
        text: [
          "The stain remover must be applied to the outer and wrong side",
          "of the clothing and left for half an hour.",
          "Then rinse with water and machine wash.",
          "For old stains, the treatment time should be doubled.",
        ],
        img: "3.png",
      },
    ],
  },
  mutations: {
    SET_ARTICLES_TO_STATE(state, articles) {
      state.articles = articles;
    },
  },
  actions: {},
  getters: {
    articles(state) {
      return state.articles;
    },
  },
};

export default {
  namespaced: true,
  state: {
    products: [
      {
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
      {
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
        image: "3.png",
        name: "T-shirt classic green",
        description:
          "Green unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 10.99,
        fabricComposition: "100% cotton",
        availSize: "xs, s, m, l",
        article: "T3",
        available: true,
      },
      {
        image: "4.png",
        name: "T-shirt base maroon",
        description:
          "Maroon unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 11.59,
        fabricComposition: "95% cotton, 5% spandex",
        availSize: "s, m, l",
        article: "T4",
        available: true,
      },
      {
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
        image: "6.png",
        name: "T-shirt base dark blue",
        description:
          "Blue unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 11.59,
        fabricComposition: "95% cotton, 5% spandex",
        availSize: "s, m, l",
        article: "T6",
        available: true,
      },
      {
        image: "7.png",
        name: "T-shirt summer lemmony",
        description:
          "Lemmony unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 12.99,
        fabricComposition: "95% cotton, 5% poliester",
        availSize: "xs, s, m, xl",
        article: "T7",
        available: true,
      },
      {
        image: "8.png",
        name: "T-shirt summer pink",
        description:
          "Pink unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 12.99,
        fabricComposition: "95% cotton, 5% poliester",
        availSize: "xs, s, m, xl",
        article: "T8",
        available: true,
      },
      {
        image: "9.png",
        name: "T-shirt summer bright blue",
        description:
          "Bright blue unprinted T-shirt. Stunning quality combined with a refined approach to detail",
        price: 12.99,
        fabricComposition: "95% cotton, 5% poliester",
        availSize: "xs, s, m, xl",
        article: "T9",
        available: true,
      },
    ],
    productDetails: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_PRODUCT_DETAILS_TO_STATE: (state, productDetails) => {
      productDetails.description = productDetails.description.split(".");
      productDetails.availSize = productDetails.availSize
        .split(", ")
        .map((size) => size.toUpperCase());
      productDetails.size = productDetails.availSize[1];
      productDetails.quantity = 1;
      productDetails.visible = true;

      state.productDetails = productDetails;
    },
    CLOSE_PRODUCT_DETAILS: (state) => {
      state.productDetails = [];
    },
    INCREMENT_QUANTITY_PRODUCT_DETAILS: (state) => {
      state.productDetails.quantity < 5
        ? state.productDetails.quantity++
        : state.productDetails.quantity;
    },
    DECREMENT_QUANTITY_PRODUCT_DETAILS: (state) => {
      state.productDetails.quantity > 1
        ? state.productDetails.quantity--
        : state.productDetails.quantity;
    },
    CHANGE_PRODUCT_DETAILS_SIZE: (state, size) => {
      state.productDetails.size = size;
    },
  },
  actions: {
    openDetails({ commit }, productDetails) {
      commit("SET_PRODUCT_DETAILS_TO_STATE", Object.assign({}, productDetails));
    },
    incrementQuantityProductDetails({ commit }) {
      commit("INCREMENT_QUANTITY_PRODUCT_DETAILS");
    },
    decrementQuantityProductDetails({ commit }) {
      commit("DECREMENT_QUANTITY_PRODUCT_DETAILS");
    },
    changeProductDetailsSize({ commit }, size) {
      commit("CHANGE_PRODUCT_DETAILS_SIZE", size);
    },
    closeDetails({ commit }) {
      commit("CLOSE_PRODUCT_DETAILS");
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    productDetails(state) {
      return state.productDetails;
    },
  },
};

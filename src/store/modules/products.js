import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: [],
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
    async getProductsFromApi({ commit }) {
      try {
        const products = await axios("http://localhost:3000/products", {
          method: "GET",
        });
        commit("SET_PRODUCTS_TO_STATE", products.data);
        return products;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
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

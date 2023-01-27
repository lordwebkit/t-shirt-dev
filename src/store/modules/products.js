import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: [],
    details: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_DETAILS_TO_STATE: (state, details) => {
      details.description = details.description.split(".");
      details.size = details.size.split(", ").map((size) => size.toUpperCase());
      details.count = 1;
      details.visible = true;
      
      state.details = details;
    },
    CLOSE_DETAILS: (state) => {
      state.details = [];
    }
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
    openDetails({ commit }, product) {
      console.log(product);
      commit("SET_DETAILS_TO_STATE", Object.assign({}, product));
    },
    closeDetails({ commit }) {
      commit("CLOSE_DETAILS");
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    details(state) {
      return state.details;
    }
  },
};

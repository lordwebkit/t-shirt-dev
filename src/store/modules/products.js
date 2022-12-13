import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
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
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};

import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let unavailable = true;

        state.cart.forEach((cartItem) => {
          if (cartItem.article === product.article) {
            cartItem.quantity++;
            unavailable = false;
          }
        });

        if (unavailable) {
          state.cart.push(Object.assign(product, { quantity: 1 }));
        }
      } else {
        state.cart.push(Object.assign(product, { quantity: 1 }));
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    DECREMENT_QUANTITY_CARD_ITEM: (state, index) => {
      state.cart[index].quantity <= 1 ? 1 : state.cart[index].quantity--
    },
    INCREMENT_QUANTITY_CARD_ITEM: (state, index) => {
      state.cart[index].quantity++
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_QUANTITY_CARD_ITEM({ commit }, index) {
      commit("INCREMENT_QUANTITY_CARD_ITEM", index);
    },
    DECREMENT_QUANTITY_CARD_ITEM({ commit }, index) {
      commit("DECREMENT_QUANTITY_CARD_ITEM", index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
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
    DECREMENT_QUANTITY_CART_ITEM: (state, index) => {
      state.cart[index].quantity <= 1 ? 1 : state.cart[index].quantity--;
    },
    INCREMENT_QUANTITY_CART_ITEM: (state, index) => {
      state.cart[index].quantity++;
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("SET_CART", product);
    },
    deleteFromCart({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    incrementQuantityCartItem({ commit }, index) {
      commit("INCREMENT_QUANTITY_CART_ITEM", index);
    },
    decrementQuantityCartItem({ commit }, index) {
      commit("DECREMENT_QUANTITY_CART_ITEM", index);
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
};

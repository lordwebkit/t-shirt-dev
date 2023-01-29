export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
    SET_CART: (state, product) => {
      // if state not empty
      if (state.cart.length) {
        const cartItemIdx = state.cart.findIndex(
          (cartItem) =>
            cartItem.article === product.article &&
            cartItem.size === product.size
        );
        if (cartItemIdx > -1) {
          state.cart[cartItemIdx].quantity += product.quantity;
        } else {
          state.cart.push(product);
        }
      }
      // if state empty
      else {
        state.cart.push(product);
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

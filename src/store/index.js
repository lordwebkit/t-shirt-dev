import { createStore } from "vuex";

import publication from "./modules/publication";
import products from "./modules/products";
import cart from "./modules/cart";

export default createStore({
  modules: { publication, products, cart },
});

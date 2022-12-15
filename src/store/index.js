import { createStore } from "vuex";

import publication from "./modules/publication";
import products from "./modules/products";
import cart from "./modules/cart";
import collection from "./modules/collection";

export default createStore({
  modules: { publication, collection, products, cart },
});

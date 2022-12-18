import { createStore } from "vuex";

import publication from "./modules/publication";
import products from "./modules/products";
import cart from "./modules/cart";
import popular from "./modules/popular";

export default createStore({
  modules: { publication, popular, products, cart },
});

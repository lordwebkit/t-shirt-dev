import { createStore } from "vuex";

import advantages from "./modules/SMain/advantages";
import publication from "./modules/publication";
import products from "./modules/products";
import cart from "./modules/cart";
import popular from "./modules/popular";

export default createStore({
  modules: { advantages, publication, popular, products, cart },
});

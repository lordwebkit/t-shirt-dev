import { createStore } from "vuex";

import advantages from "./modules/SMain/advantages";
import articles from "./modules/SMain/articles";
import publication from "./modules/publication";
import products from "./modules/products";
import cart from "./modules/cart";
import popular from "./modules/popular";

export default createStore({
  modules: { advantages, articles, publication, popular, products, cart },
});

import { createRouter, createWebHistory } from "vue-router";
import SMain from "@/components/SMain.vue";
import SCatalog from "@/components/SCatalog.vue";
import SCart from "@/components/SCart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/t-shirt/", name: "main", component: SMain },
    { path: "/t-shirt/catalog", name: "catalog", component: SCatalog },
    { path: "/t-shirt/cart", name: "cart", component: SCart, props: true },
  ],
});

export default router;

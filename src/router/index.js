import { createRouter, createWebHistory } from "vue-router";
import SMain from "@/components/SMain.vue";
import SCatalog from "@/components/SCatalog.vue";
import SCart from "@/components/SCart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "main", component: SMain },
    { path: "/catalog", name: "catalog", component: SCatalog },
    { path: "/cart", name: "cart", component: SCart, props: true },
  ],
});

export default router;

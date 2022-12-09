<template>
  <div class="s-catalog">
    <router-link :to="{ name: 'cart' }">
      <div class="s-catalog__link-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="s-catalog__list">
      <s-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product-data="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import SCatalogItem from "./SCatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SCatalog",
  components: {
    SCatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
};
</script>
<style scoped lang="scss">
.s-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link-cart {
    padding: $padding * 2;
    border: solid 1px #aeaeae;
  }
}
</style>

<template>
  <div class="s-catalog-wrapper">
    <section class="s-catalog s-grid-wrapper">
      <div class="s-catalog__title-wrapper">
        <h2 class="s-title s-catalog__title">
          Catalog differen T-shirt for a base look
        </h2>
      </div>
      <div class="s-catalog__list">
        <s-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product-data="product"
          @add-to-cart="addToCart"
        />
      </div>
    </section>
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
    ...mapGetters("products", ["PRODUCTS", "CART"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  methods: {
    ...mapActions("products", ["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
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
  &__title {
    &-wrapper {
      margin: 20px 0 25px 0;
    }
  }
}
</style>

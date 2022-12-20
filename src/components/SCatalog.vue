<template>
  <div class="s-catalog-wrapper">
    <section class="s-catalog">
      <div class="s-catalog__title-wrapper">
        <h2 class="s-title s-catalog__title">
          Catalog differen T-shirt for a base look
        </h2>
      </div>
      <div class="s-catalog__list">
        <s-catalog-item
          v-for="product in products"
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
    ...mapGetters("products", ["products"]),
    ...mapGetters("cart", ["cart"]),
  },
  mounted() {
    this.getProductsFromApi();
  },
  methods: {
    ...mapActions("products", ["getProductsFromApi"]),
    ...mapActions("cart", ["addToCart"]),
  },
};
</script>
<style scoped lang="scss">
.s-catalog {
  @include grid();
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link-cart {
    padding: 10px;
    border: solid 1px #aeaeae;
  }
  &__title {
    @include title(32px);
    &-wrapper {
      margin: 20px 0 25px 0;
    }
  }
}
</style>

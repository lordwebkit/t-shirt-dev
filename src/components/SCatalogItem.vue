<template>
  <div class="s-catalog-item">
    <img
      id="img"
      :src="getImageUrl(productData.image)"
      class="s-catalog-item__image"
      alt="Photo T-shirt"
    />
    <p class="s-catalog-item__name">
      {{ productData.name }}
    </p>
    <p class="s-catalog-item__price">{{ productData.price }}P</p>
    <button @click="giveParentProductData">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "SCatalogItem",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ["addToCart"],
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
  methods: {
    giveParentProductData() {
      this.$emit("addToCart", this.productData);
    },
  },
};
</script>
<style lang="scss" scoped>
.s-catalog-item {
  padding: $padding;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;

  &__image {
    width: 200px;
  }
}
</style>

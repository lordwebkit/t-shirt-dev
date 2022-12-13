<template>
  <div class="s-catalog-item">
    <img
      id="img"
      :src="getImageUrl(productData.image)"
      class="s-catalog-item__image"
      alt="Photo T-shirt"
    />
    <div class="s-catalog-item__info">
      <p class="s-catalog-item__name s-text">
        {{ productData.name }}
      </p>
      <p class="s-catalog-item__price s-text_s">
        price: {{ productData.price }}<span class="s-text_xs">$</span>
      </p>
    </div>
    <button class="s-catalog-item__btn s-btn" @click="giveParentProductData">
      Add to cart
    </button>
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
      return new URL(`../assets/images/catalog/${name}`, import.meta.url).href;
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
  text-align: center;
  display: flex;
  height: 410px;
  flex-direction: column;
  justify-content: space-between;

  &__image {
    width: 285px;
  }
  &__info {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__name {
    flex: 2;
  }
  &__price {
    flex: 1;
  }
  &__name,
  &__price {
    display: inline-block;
  }
  &__btn {
    width: 100%;
    padding: 10px;
  }
}
</style>

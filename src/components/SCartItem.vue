<template>
  <div class="s-cart-item">
    <img
      class="s-cart-item__image"
      :src="getImageUrl(cartItemData.image)"
      alt="Photo T-shirt"
    />
    <div class="s-cart-item__info">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.price }}</p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="s-cart-item__quantity">
      <p>Quantity</p>
      <span @click="callDecrementQuantityCartItem">-</span>
      {{ cartItemData.quantity }}
      <span @click="callIncrementQuantityCartItem">+</span>
    </div>
    <button @click="callDeleteFromCart">Delete</button>
  </div>
</template>
<script>
export default {
  name: "SCartItem",
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: [
    "deleteFromCart",
    "decrementQuantityCartItem",
    "incrementQuantityCartItem",
  ],
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
  mounted() {},
  methods: {
    callDeleteFromCart() {
      this.$emit("deleteFromCart");
    },
    callDecrementQuantityCartItem() {
      this.$emit("decrementQuantityCartItem");
    },
    callIncrementQuantityCartItem() {
      this.$emit("incrementQuantityCartItem");
    },
  },
};
</script>
<style lang="scss" scoped>
.s-cart-item {
  padding: $padding * 2;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 8px 0 #e0e0e0;
  align-items: center;
  flex-wrap: nowrap;

  &__image {
    max-width: 80px;
  }
}
</style>

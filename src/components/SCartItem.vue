<template>
  <div class="s-cart-item">
    <img
      class="s-cart-item__image"
      :src="getImageUrl(cartItemData.image)"
      alt="Photo T-shirt"
    />
    <div class="s-cart-item__info s-text_s">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.price }}$</p>
    </div>
    <div class="s-cart-item__quantity s-text_xs">
      <p>Quantity</p>
      <div class="s-cart-item-quantity__info">
        <span class="s-cart-item-quantity__info-minus" @click="callDecrementQuantityCartItem"></span>
        {{ cartItemData.quantity }}
        <span class="s-cart-item-quantity__info-plus" @click="callIncrementQuantityCartItem"></span>
      </div>
    </div>
    <button class="s-btn s-cart-item__btn " @click="callDeleteFromCart">Delete</button>
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
  margin-top: 12px;
  padding: $padding * 2;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 8px 0 #e0e0e0;
  align-items: center;
  flex-wrap: nowrap;
  &__image {
    max-width: 80px;
  }
  &__btn {
    padding: 5px 10px;
  }
  &-quantity {
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-minus,
      &-plus {
        width: 15px;
        height: 15px;
        background-size: 15px;
        cursor: pointer;
      }
      &-minus {
        background-image: url('@/assets/icons/minus.svg');
      }
      &-plus {
        background-image: url('@/assets/icons/plus.svg');
      }
    }
  }
}
</style>

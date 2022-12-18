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
        <span
          class="s-cart-item-quantity__info-minus"
          @click="decrementQuantityCartItem(index)"
        ></span>
        {{ cartItemData.quantity }}
        <span
          class="s-cart-item-quantity__info-plus"
          @click="incrementQuantityCartItem(index)"
        ></span>
      </div>
    </div>
    <button class="s-btn s-cart-item__btn" @click="deleteFromCart(index)">
      Delete
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "SCartItem",
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: () => 0,
    },
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/images/catalog/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
  mounted() {},
  methods: {
    ...mapActions("cart", [
      "deleteFromCart",
      "decrementQuantityCartItem",
      "incrementQuantityCartItem",
    ]),
  },
};
</script>
<style lang="scss" scoped>
.s-cart-item {
  margin-top: 12px;
  padding: 10px;
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
        background-image: url("@/assets/icons/minus.svg");
      }
      &-plus {
        background-image: url("@/assets/icons/plus.svg");
      }
    }
  }
}
</style>

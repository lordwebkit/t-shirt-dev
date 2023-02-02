<template>
  <div class="s-cart-item">
    <img
      class="s-cart-item__image"
      :src="getImageUrl(cartItemData.image)"
      alt="Photo T-shirt"
    />
    <div class="s-cart-item__info s-info">
      <p class="s-info__name">{{ cartItemData.name }}</p>
      <p class="s-info__price">{{ cartItemData.price }}$</p>
    </div>
    <div class="s-cart-item__size s-size">
      <p class="s-size__title">Size</p>
      <p class="s-size__select-size">
        <span class="s-size__select-decore">{{ cartItemData.size }}</span>
      </p>
    </div>
    <div class="s-cart-item__quantity s-quantity">
      <p class="s-quantity__title">Quantity</p>
      <div class="s-quantity__inner">
        <span
          class="s-quantity__minus"
          @click="decrementQuantityCartItem(index)"
        ></span>
        <p class="s-quantity__num">{{ cartItemData.quantity }}</p>
        <span
          class="s-quantity__plus"
          @click="incrementQuantityCartItem(index)"
        ></span>
      </div>
    </div>
    <button class="s-cart-item__btn" @click="deleteFromCart(index)">
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
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  margin-top: 12px;
  padding: 12px;
  padding-right: 25px;
  box-shadow: 0 0 8px 0 #e0e0e0;
  @media (max-width: 730px) {
    width: calc(50% - 10px);
    margin-right: 10px;
    flex-direction: column;
    padding: 12px 0;
  }
  @media (max-width: 430px) {
    width: 100%
  }
  &__image {
    max-width: 115px;
  }
  &__btn {
    @include btn();
    background-color: #744545;
    padding: 5px 10px;
    &:hover {
      background-color: #744545;
    }
  }
}
.s-info {
  &__name {
    @include title(22px);
  }
  &__price {
    @include text(22px);
    margin-top: 10px;
    background-color: rgb(199, 209, 199);
    padding: 5px 10px;
    display: inline-block;
  }
}
.s-size {
  &__title {
    @include title(22px);
  }
  &__select-size {
    @include text(18px);
    border: 1px solid black;
    width: 38px;
    height: 34px;
    margin: 0 auto;
    margin-top: 10px;
  }
  &__select-decore {
    display: inline-block;
    padding-top: 6px;
    width: 36px;
    height: 26px;
    border: 1px solid white;
    background-color: black;
    color: white;
  }
}
.s-quantity {
  &__title {
    @include title(22px);
  }
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 6px;
    margin-top: 15px;
  }
  &__num {
    @include text(22px);
  }
  &__minus,
  &__plus {
    width: 15px;
    height: 15px;
    background-size: 13px;
    cursor: pointer;
    border: 1px solid black;
    background-repeat: no-repeat;
    background-position: center;
    padding: 2px;
  }
  &__minus {
    background-image: url("@/assets/icons/minus.svg");
  }
  &__plus {
    background-image: url("@/assets/icons/plus.svg");
  }
}
</style>

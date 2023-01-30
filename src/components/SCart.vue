<template>
  <div class="s-cart-wrapper">
    <section class="s-cart">
      <div class="s-cart__title-wrapper">
        <h2 class="s-cart__title">
          Cart
          <div :class="cartEmpty ? 's-cart_flex' : 's-cart_none'">
            is empty please add any thing
            <span class="s-cart__cart-empty"></span>
          </div>
        </h2>
      </div>
      <s-cart-item
        v-for="(item, index) in cart"
        :key="item.article"
        :cart-item-data="item"
        :index="index"
      />
      <div
        class="s-cart__buy-wrapper"
        :class="cartEmpty ? 's-cart_none' : 's-cart_flex'"
      >
        <p class="s-cart__total">Total: {{ cartTotalCost.toFixed(2) }}$</p>
        <button class="s-cart__buy">Buy</button>
      </div>
    </section>
  </div>
</template>
<script>
import SCartItem from "./SCartItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "SCart",
  components: {
    SCartItem,
  },
  computed: {
    ...mapGetters("cart", ["cart"]),
    cartTotalCost() {
      return this.cart.reduce((sum, el) => {
        return sum + el.price * el.quantity;
      }, 0);
    },
    cartEmpty() {
      return this.cart.length === 0 ? true : false;
    },
  },
};
</script>
<style lang="scss" scoped>
.s-cart {
  &-wrapper {
    min-height: 70vh;
  }
  @include grid();
  &_inline-block {
    display: inline-block;
  }
  &__title {
    @include title(32px);
    display: flex;
    align-items: center;
    &-wrapper {
      margin: 20px 0 25px 0;
    }
  }
  &__cart-empty {
    display: inline-block;
    width: 140px;
    height: 100px;
    background: url("@/assets/icons/cart-empty.svg") no-repeat center center;
    background-size: cover;
  }
  &__total {
    @include title(20px);
  }
  &__buy {
    @include btn();
    padding: 8px 24px;
    &-wrapper {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &_flex {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  &_none {
    display: none;
  }
}
</style>

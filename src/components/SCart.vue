<template>
  <div class="s-cart-wrapper">
    <section class="s-grid-wrapper">
      <div class="s-cart__title-wrapper">
        <h2 class="s-title s-cart__title">
          Cart
          <span :class="cartEmpty ? 's-cart_inline-block' : 's-cart_none'"
            >is empty please add any thing
          </span>
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
        <p class="s-text s-cart__total">Total: {{ cartTotalCost }}$</p>
        <button class="s-btn s-cart__buy">BUY</button>
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
  &_inline-block {
    display: inline-block;
  }
  &__title {
    &-wrapper {
      margin: 20px 0 25px 0;
    }
  }
  &__buy {
    padding: 10px 30px;
    &-wrapper {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &_flex {
    display: flex;
  }
  &_none {
    display: none;
  }
}
</style>

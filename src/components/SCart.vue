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
        v-for="(item, index) in CART"
        :key="item.article"
        :cart-item-data="item"
        @delete-from-cart="deleteFromCart(index)"
        @decrement-quantity-cart-item="decrementQuantityCartItem(index)"
        @increment-quantity-cart-item="incrementQuantityCartItem(index)"
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SCart",
  components: {
    SCartItem,
  },
  computed: {
    ...mapGetters("cart", ["CART"]),
    cartTotalCost() {
      return this.CART.reduce((sum, el) => {
        return sum + el.price * el.quantity;
      }, 0);
    },
    cartEmpty() {
      return this.CART.length === 0 ? true : false;
    },
  },
  methods: {
    ...mapActions("cart", [
      "DELETE_FROM_CART",
      "DECREMENT_QUANTITY_CARD_ITEM",
      "INCREMENT_QUANTITY_CARD_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    decrementQuantityCartItem(index) {
      this.DECREMENT_QUANTITY_CARD_ITEM(index);
    },
    incrementQuantityCartItem(index) {
      this.INCREMENT_QUANTITY_CARD_ITEM(index);
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

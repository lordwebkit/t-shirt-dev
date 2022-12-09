<template>
  <div class="s-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="s-catalog__link-cart">Back to Catalog</div>
    </router-link>
    <h2>Cart</h2>
    <p v-if="CART.length === 0">There are no product in card</p>
    <s-cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart-item-data="item"
      @delete-from-cart="deleteFromCart(index)"
      @decrement-quantity-cart-item="decrementQuantityCartItem(index)"
      @increment-quantity-cart-item="incrementQuantityCartItem(index)"
    />
    <div class="s-cart__total">
      <p>Total:</p>
      <p>{{ CART.length === 0 ? 0 : cartTotalCost }}</p>
    </div>
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
    ...mapGetters(["CART"]),
    cartTotalCost() {
      return this.CART.reduce((sum, el) => {
        return sum + el.price * el.quantity;
      }, 0);
    },
  },
  methods: {
    ...mapActions([
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
<style lang="scss" scoped></style>

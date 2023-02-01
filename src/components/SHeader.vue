<template>
  <div class="s-header-wrapper">
    <header class="s-header">
      <div class="s-header__logo-wrapper">
        <router-link class="s-header__logo" :to="{ name: 'main' }" />
      </div>
      <div class="s-header__link s-link">
        <div class="s-link__catalog s-catalog">
          <router-link
            class="s-catalog__icon s-link__icon"
            :to="{ name: 'catalog' }"
          />
          <router-link
            class="s-catalog__link s-link__link"
            :to="{ name: 'catalog' }"
          >
            <p class="s-catalog__text">Catalog</p>
            <span class="s-catalog__decore s-link__decore"></span>
          </router-link>
        </div>
        <div class="s-link__cart s-cart">
          <router-link
            class="s-cart__icon s-link__icon"
            :to="{ name: 'cart' }"
          />
          <router-link class="s-cart__link s-link__link" :to="{ name: 'cart' }">
            <p class="s-cart__text">Cart</p>
            <span class="s-cart__decore s-link__decore"></span>
            <span class="s-cart__count">{{ cartCount }}</span>
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SHeader",
  computed: {
    ...mapGetters("cart", ["cart"]),
    cartCount() {
      if (this.cart.length) {
        return this.cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
      }
      return "";
    },
  },
};
</script>
<style lang="scss" scoped>
.s-header {
  @include grid();
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  &-wrapper {
    background-color: $color-ws;
    @media (max-width: 530px) {
      padding: 2px 0;
    }
  }
  &__logo {
    width: 170px;
    height: 33px;
    display: inline-block;
    background: url("@/assets/icons/logo.svg") no-repeat center center;
    @media (max-width: 768px) {
      width: 160px;
    }
    @media (max-width: 530px) {
      width: 150px;
    }
    @media (max-width: 460px) {
      background: url("@/assets/icons/logo-short.svg") no-repeat center center;
      width: 60px;
    }
  }
}
.s-link {
  @include text(18px);
  display: flex;
  align-items: center;
  &__icon {
    display: inline-block;
    margin-right: 5px;
  }
  &__link {
    text-decoration: none;
    color: black;
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;
    &:hover .s-link__decore {
      opacity: 1;
    }
    @media (max-width: 460px) {
      display: none;
    }
  }
  &__decore {
    width: 54px;
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: 1px;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;
  }
}
.s-cart,
.s-catalog {
  display: flex;
  justify-content: center;
  align-items: center;
}
.s-catalog {
  margin-right: 20px;
  &__icon {
    background: url("@/assets/icons/catalog.svg") no-repeat center center;
    width: 35px;
    height: 35px;
  }
}
.s-cart {
  &__icon {
    background: url("@/assets/icons/cart.svg") no-repeat center center;
    width: 33px;
    height: 33px;
  }
  &__decore {
    width: 35px;
  }
  &__count {
    margin-left: 5px;
    font-size: 22px;
    line-height: 1;
    padding-bottom: 4px;
  }
}
</style>

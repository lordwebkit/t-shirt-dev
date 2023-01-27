<template>
  <div class="s-header-wrapper">
    <header class="s-header">
      <div class="s-header__logo-wrapper">
        <router-link :to="{ name: 'main' }">
          <img
            class="s-header__logo"
            :src="getImageUrl('logo.svg')"
            alt="T-shirt logo company"
          />
        </router-link>
      </div>
      <div class="s-header__link">
        <router-link :to="{ name: 'catalog' }">
          <img
            class="s-header__catalog-icon"
            :src="getImageUrl('t-shirt-new.svg')"
            alt="Catalog icon"
          />
        </router-link>
        <router-link :to="{ name: 'catalog' }" class="s-header__link-text">
          <p>Catalog</p>
          <span class="s-header__link-decore"></span>
        </router-link>
        <router-link :to="{ name: 'cart' }">
          <img
            class="s-header__cart-icon"
            :src="getImageUrl('shopping-cart-base-new.svg')"
            alt="Cart icon"
          />
        </router-link>
        <router-link :to="{ name: 'cart' }" class="s-header__link-text">
          <p>Cart</p>
          <span class="s-header__link-decore s-header__cart-decore"></span>
        </router-link>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "SHeader",
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/icons/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
};
</script>
<style lang="scss" scoped>
.s-header {
  @include grid();
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-wrapper {
    background-color: $color-ws;
  }
  &__logo {
    width: 170px;
  }
  &__link {
    @include text(18px);
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-text {
      text-decoration: none;
      color: black;
      position: relative;
      &:hover .s-header__link-decore {
        opacity: 1;
      }
    }
    &-decore {
      width: 54px;
      height: 1px;
      background-color: black;
      position: absolute;
      bottom: 2px;
      left: 0;
      opacity: 0;
      transition: all 0.3s ease;
    }
  }
  &__catalog {
    &-icon {
      width: 35px;
      height: 35px;
    }
  }
  &__cart {
    &-icon {
      width: 30px;
      height: 30px;
      padding-left: 12px;
    }
    &-decore {
      width: 35px;
    }
  }
}
</style>

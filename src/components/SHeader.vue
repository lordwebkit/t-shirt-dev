<template>
  <div class="s-header-wrapper">
    <header class="s-header s-grid-wrapper">
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
            class="s-header__catalog"
            :src="getImageUrl('t-shirt.svg')"
            alt="Catalog icon"
          />
        </router-link>
        <router-link :to="{ name: 'cart' }">
          <img
            class="s-header__cart"
            :src="getImageUrl('shopping-cart-base.svg')"
            alt="Cart icon"
          />
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-wrapper {
    background-color: $theme-color-ws;
  }
  &__logo {
    width: 200px;
  }
  &__link {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__catalog {
    width: 48px;
    height: 48px;
  }
  &__cart {
    width: 45px;
    height: 45px;
  }
}
</style>

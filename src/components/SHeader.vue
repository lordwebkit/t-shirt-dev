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
      <router-link :to="{ name: 'cart' }">
        <img
          class="s-header__cart"
          :src="getImageUrl('shopping-cart-base.svg')"
          alt="Cart icon"
        />
      </router-link>
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
  &__cart {
    width: 40px;
    height: 40px;
  }
}
</style>

<template>
  <div class="s-popular-item">
    <router-link :to="{ name: 'catalog' }">
      <img
        class="s-popular-item__image"
        :src="getImageUrl(itemData.image, 'popular')"
        alt="Photo popular t-shirt"
      />
    </router-link>
  </div>
</template>
<script>
export default {
  name: "SPopularItem",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const getImageUrl = (name, imgDir) => {
      return new URL(`../../assets/images/${imgDir}/${name}`, import.meta.url)
        .href;
    };
    return { getImageUrl };
  },
};
</script>
<style lang="scss">
.s-popular-item {
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
  &__image {
    width: 100%;
    display: block;
  }
}
</style>

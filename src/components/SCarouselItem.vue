<template>
  <div
    class="s-carousel-item"
    :class="{ 's-carousel-item_animated': isAnimated }"
    :style="{
      transform: `translateX(calc(${(carouselItemData.translate * 100)}%))`,
    }"
  >
    <img
      class="s-carousel-item__image"
      :src="getImageUrl(carouselItemData.image)"
      alt="Product photo"
    />
  </div>
</template>
<script>
export default {
  name: "SCarouselItem",
  props: {
    carouselItemData: {
      type: Object,
      default: () => {},
    },
    isAnimated: {
      type: Boolean,
      default: () => {},
    }
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/images/publication/${name}`, import.meta.url)
        .href;
    };
    return { getImageUrl };
  },
};
</script>
<style lang="scss">
.s-carousel-item {
  width: 1050px;
  height: 100%;
  &__image {
    width: 100%;
    height: 100%;
  }
}
.s-carousel-item_animated {
  transition: transform 1s ease;
}
</style>

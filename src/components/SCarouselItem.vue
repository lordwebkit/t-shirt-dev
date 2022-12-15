<template>
  <div
    class="s-carousel-item"
    :class="{ 's-carousel-item_animated': isAnimated }"
    :style="{
      transform: `translateX(calc(${itemData.translate * 100}%))`,
    }"
  >
    <img
      class="s-carousel-item__image"
      :src="getImageUrl(itemData.image, imgDir)"
      alt="Product photo"
    />
  </div>
</template>
<script>
export default {
  name: "SCarouselItem",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
    isAnimated: {
      type: Boolean,
      default: () => {},
    },
    imgDir: {
      type: String,
      default: () => "",
    },
  },
  setup() {
    const getImageUrl = (name, imgDir) => {
      return new URL(`../assets/images/${imgDir}/${name}`, import.meta.url)
        .href;
    };
    return { getImageUrl };
  },
};
</script>
<style lang="scss">
.s-carousel-item {
  width: 100%;
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

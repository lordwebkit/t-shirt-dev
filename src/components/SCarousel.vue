<template>
  <div
    class="s-carousel-wrapper"
    :style="{ width: `${castomSettings.width}px` }"
  >
    <div
      class="s-carousel"
      :style="{ width: `${castomSettings.width * itemData.length}px` }"
    >
      <s-carousel-item
        v-for="item in itemData"
        :key="item"
        :item-data="item"
        :is-animated="isAnimated"
        :img-dir="castomSettings.imgDir"
      />
    </div>
    <div class="s-carousel-nav">
      <button
        class="s-carousel-nav__button s-carousel-nav__prev"
        @click="prevSlide"
      ></button>
      <button
        class="s-carousel-nav__button s-carousel-nav__next"
        @click="nextSlide"
      ></button>
    </div>
  </div>
</template>
<script>
import SCarouselItem from "./SCarouselItem.vue";

export default {
  name: "SCarousel",
  components: {
    SCarouselItem,
  },
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      },
    },
    castomSettings: {
      type: Object,
      default() {
        return {
          width: 1000,
          imgDir: "",
          interval: 0,
        };
      },
    },
  },
  data() {
    return {
      carouselDataExtended: [],
      isAnimated: true,
      currentSlideIndex: 1,
    };
  },
  methods: {
    prevSlide() {
      this.itemData.forEach((ext) => {
        ext.translate++;
      });
      this.currentSlideIndex--;
      if (this.currentSlideIndex === 0) this.prevMagic();
    },
    nextSlide() {
      this.itemData.forEach((ext) => {
        ext.translate--;
      });
      this.currentSlideIndex++;
      if (this.currentSlideIndex === 4) this.nextMagic();
    },
    prevMagic() {
      const vm = this;
      setTimeout(() => {
        vm.isAnimated = false;
        vm.itemData.forEach((ext) => {
          ext.translate = ext.translate - 3;
        });
        vm.currentSlideIndex = vm.currentSlideIndex + 3;
      }, 1000);
      setTimeout(() => {
        this.isAnimated = true;
      }, 1020);
    },
    nextMagic() {
      const vm = this;
      setTimeout(() => {
        vm.isAnimated = false;
        vm.itemData.forEach((ext) => {
          ext.translate = ext.translate + 3;
        });
        vm.currentSlideIndex = vm.currentSlideIndex - 3;
      }, 1000);
      setTimeout(() => {
        this.isAnimated = true;
      }, 1020);
    },
  },
};
</script>
<style lang="scss">
.s-carousel {
  display: flex;
  height: 100%;
  &-wrapper {
    height: 100%;
    overflow: hidden;

    &:hover {
      .s-carousel-nav__button {
        &::after {
          opacity: 0.7;
        }
      }
    }
  }
  &-nav {
    transform: translate(0, -100%);
    display: flex;
    justify-content: space-between;
    height: 100%;

    &__button {
      width: 300px;
      display: flex;
      align-items: center;
      padding: 20px;
      border: 0;
      background-color: inherit;

      &:hover {
        cursor: pointer;
      }

      &::after {
        content: "";
        transition: all 2s ease;
        display: block;
        opacity: 0;
        width: 70px;
        height: 39px;
        background-image: url("@/assets/icons/arrow.svg");
        background-size: 100%;
      }
    }
    &__prev {
      justify-content: start;
      &::after {
        transform: rotate(180deg);
      }
    }
    &__next {
      justify-content: end;
    }
  }
}
</style>

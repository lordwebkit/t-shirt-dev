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
      currentSlideIndex: 1,
      isAnimated: true,
      isReady: true,
      intervalId: null,
      timeoutId: null,
    };
  },
  mounted() {
    if (this.castomSettings.interval) {
      this.intervalId = setInterval(() => {
        this.nextAutoSlide();
      }, this.castomSettings.interval);
    }
  },
  methods: {
    prevSlide() {
      clearInterval(this.intervalId);
      clearTimeout(this.timeoutId);
      if (this.isReady) {
        this.itemData.forEach((ext) => {
          ext.translate++;
        });
        this.currentSlideIndex--;
        if (this.currentSlideIndex === 0) {
          this.prevMagic();
        } else {
          setTimeout(() => {
            this.isReady = true;
            this.timeoutId = setTimeout(() => {
              this.intervalId = setInterval(() => {
                this.nextAutoSlide();
              }, this.castomSettings.interval);
            }, 3000)
          }, 1000);
        }
      }
    },
    nextSlide() {
      clearInterval(this.intervalId);
      clearTimeout(this.timeoutId);
      if (this.isReady) {
        this.itemData.forEach((ext) => {
          ext.translate--;
        });
        this.currentSlideIndex++;
        this.isReady = false;
        if (this.currentSlideIndex === 4) {
          this.nextMagic();
        } else {
          setTimeout(() => {
            this.isReady = true;
            this.timeoutId = setTimeout(() => {
              this.intervalId = setInterval(() => {
                this.nextAutoSlide();
              }, this.castomSettings.interval);
            }, 3000)
          }, 1000);
        }
      }
    },
    nextAutoSlide() {
      if (this.isReady) {
        this.itemData.forEach((ext) => {
          ext.translate--;
        });
        this.currentSlideIndex++;
        this.isReady = false;
        if (this.currentSlideIndex === 4) {
          this.nextMagic();
        } else {
          setTimeout(() => {
            this.isReady = true;
          }, 1000);
        }
      }
    },
    prevMagic() {
      setTimeout(() => {
        this.isAnimated = false;
        this.itemData.forEach((ext) => {
          ext.translate -= 3;
        });
        this.currentSlideIndex += 3;
      }, 1000);
      setTimeout(() => {
        this.isAnimated = true;
        this.isReady = true;
      }, 1100);
    },
    nextMagic() {
      setTimeout(() => {
        this.isAnimated = false;
        this.itemData.forEach((ext) => {
          ext.translate += 3;
        });
        this.currentSlideIndex -= 3;
      }, 1000);
      setTimeout(() => {
        this.isAnimated = true;
        this.isReady = true;
      }, 1100);
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

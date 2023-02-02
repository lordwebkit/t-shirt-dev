<template>
  <div class="s-popular">
    <h2 class="s-popular__title">Popular</h2>
    <div class="s-popular__catalog">
      <s-popular-item
        v-for="popularItem in popular"
        :key="popularItem"
        :item-data="popularItem"
      />
    </div>
    <s-carousel
      id="s-popular__carousel"
      class="s-popular__carousel"
      :item-data="publication"
      :castom-settings="{
        width: carouselWidth,
        height: carouselHeight,
        imgDir: 'publication',
        interval: 5000,
      }"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SCarousel from "../SCarousel.vue";
import SPopularItem from "./SPopularItem.vue";

export default {
  name: "SCollection",
  components: {
    SCarousel,
    SPopularItem,
  },
  data() {
    const gridWidth = document.documentElement.scrollWidth - 30;
    return {
      carouselWidth: gridWidth >= 980 ? 980 : gridWidth,
      carouselHeight: gridWidth >= 980 ? 305 : 305 / (980 / gridWidth),
    };
  },
  computed: {
    ...mapGetters("popular", ["popular"]),
    ...mapGetters("publication", ["publication"]),
  },
  mounted() {
    window.addEventListener("resize", this.carouselResize);
  },
  destroy() {
    window.removeEventListener("resize", this.carouselResize);
  },
  methods: {
    carouselResize() {
      const gridWidth = document.documentElement.scrollWidth - 30;
      this.carouselWidth = gridWidth >= 980 ? 980 : gridWidth;
      this.carouselHeight = gridWidth >= 980 ? 305 : 305 / (980 / gridWidth);
    },
  },
};
</script>
<style lang="scss" scoped>
.s-popular {
  padding-top: 35px;
  @include grid();
  &__title {
    @include title(46px);
    text-align: center;
    margin-bottom: 35px;
  }
  &__carousel {
    height: 305px;
    margin-top: 14px;
  }
  &__catalog {
    display: flex;
    justify-content: space-around;
    @media (max-width: 850px) {
      flex-wrap: wrap;
      max-width: 600px;
      margin: 0 auto;
    }
  }
}
</style>

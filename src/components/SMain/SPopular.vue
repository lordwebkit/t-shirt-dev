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
        width: carouselSize,
        height: carouselHeight,
        imgDir: 'publication',
        interval: 5000,
      }"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SCarousel from "../SCarousel.vue";
import SPopularItem from "./SPopularItem.vue";

export default {
  name: "SCollection",
  components: {
    SCarousel,
    SPopularItem,
  },
  data() {
    const pageSize = document.documentElement.scrollWidth;
    return {
      carouselSize: pageSize > 1010 ? 980 : pageSize - 30,
      carouselHeight: pageSize > 768 ? 305 : 305 - (pageSize / 1000) * 50,
    };
  },
  computed: {
    ...mapGetters("popular", ["popular"]),
    ...mapGetters("publication", ["publication"]),
  },
  mounted() {
    this.getPopularFromApi();
    this.getPublicationFromApi();

    window.addEventListener("resize", this.carouselResize);
  },
  destroy() {
    window.removeEventListener("resize", this.carouselResize);
  },
  methods: {
    ...mapActions("popular", ["getPopularFromApi"]),
    ...mapActions("publication", ["getPublicationFromApi"]),
    carouselResize() {
      const pageSize = document.documentElement.scrollWidth;
      this.carouselSize = pageSize > 1010 ? 980 : pageSize - 30;
      this.carouselHeight =
        pageSize > 768 ? 305 : 305 - (pageSize / 1000) * 50;
    },
  },
};
</script>
<style lang="scss" scoped>
.s-popular {
  padding-top: 40px;
  @include grid();
  &__title {
    @include title();
    text-align: center;
    font-size: 48px;
    margin-bottom: 50px;
  }
  &__carousel {
    height: 305px;
    margin-top: 14px;
  }
  &__catalog {
    display: flex;
    justify-content: space-around;
  }
}
</style>

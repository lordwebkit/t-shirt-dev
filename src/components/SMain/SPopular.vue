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
      class="s-popular__carousel"
      :item-data="publication"
      :castom-settings="{ width: 980, imgDir: 'publication', interval: 5000 }"
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
    return {};
  },
  computed: {
    ...mapGetters("popular", ["popular"]),
    ...mapGetters("publication", ["publication"]),
  },
  mounted() {
    this.getPopularFromApi();
    this.getPublicationFromApi();
  },
  methods: {
    ...mapActions("popular", ["getPopularFromApi"]),
    ...mapActions("publication", ["getPublicationFromApi"]),
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

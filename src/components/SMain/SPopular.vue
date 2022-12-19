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
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SPopularItem from "./SPopularItem.vue";

export default {
  name: "SCollection",
  components: {
    SPopularItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("popular", ["popular"]),
  },
  mounted() {
    this.getPopularFromApi();
  },
  methods: {
    ...mapActions("popular", ["getPopularFromApi"]),
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
  }
  &__catalog {
    margin-top: 50px;
  }
  &__catalog {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>

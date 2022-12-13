<template>
  <div class="s-main-wrapper">
    <aside class="s-aside">
    </aside>
    <main class="s-main">
      <s-carousel :carousel-data="PUBLICATION" />
    </main>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SCarousel from "./SCarousel.vue";

export default {
  name: "SMain",
  components: {
    SCarousel,
  },
  computed: {
    ...mapGetters(["PUBLICATION"]),
  },
  mounted() {
    this.GET_PUBLICATION_FROM_API();
  },
  methods: {
    ...mapActions(["GET_PUBLICATION_FROM_API"]),
  },
};
</script>
<style lang="scss" scoped>
.s-main {
  height: 305px;
  &-wrapper {
    display: grid;
    grid-template-columns: 1fr 2.4fr 1fr;
  }
}
.s-aside {
  text-align: center;
}
</style>

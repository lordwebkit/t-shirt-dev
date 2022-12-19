<template>
  <div class="s-main-wrapper">
    <main class="s-main">
      <s-info />
      <s-advantages />
      <s-popular />
      <s-carousel
        class="s-main__publication"
        :item-data="publication"
        :castom-settings="{ width: 1050, imgDir: 'publication' }"
      />
      <s-questionnaire />
    </main>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SInfo from "./SMain/SInfo.vue";
import SAdvantages from "./SMain/SAdvantages.vue";
import SPopular from "./SMain/SPopular.vue";
import SCarousel from "./SCarousel.vue";
import SQuestionnaire from "./SMain/SQuestionnaire.vue";
import SArticle from "./SMain/SArticle.vue";

export default {
  name: "SMain",
  components: {
    SInfo,
    SAdvantages,
    SPopular,
    SCarousel,
    SQuestionnaire,
  },
  setup() {
    const getImageUrl = (name, imgDir) => {
      return new URL(`../assets/images/${imgDir}/${name}`, import.meta.url)
        .href;
    };
    return { getImageUrl };
  },
  computed: {
    ...mapGetters("publication", ["publication"]),
  },
  mounted() {
    this.getPublicationFromApi();
  },
  methods: {
    ...mapActions("publication", ["getPublicationFromApi"]),
  },
};
</script>
<style lang="scss" scoped>
.s-main {
  &__publication {
    @include grid();
    margin-top: 67px;
    height: 305px;
  }
}
</style>

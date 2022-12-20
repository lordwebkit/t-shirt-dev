<template>
  <main class="s-main">
    <s-info />
    <s-advantages />
    <s-popular />
    <s-questionnaire />
    <s-article />
  </main>
</template>
<script>
import SInfo from "./SMain/SInfo.vue";
import SAdvantages from "./SMain/SAdvantages.vue";
import SPopular from "./SMain/SPopular.vue";
import SQuestionnaire from "./SMain/SQuestionnaire.vue";
import SArticle from "./SMain/SArticle.vue";

export default {
  name: "SMain",
  components: {
    SInfo,
    SAdvantages,
    SPopular,
    SQuestionnaire,
    SArticle,
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
<style lang="scss" scoped></style>

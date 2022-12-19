<template>
  <div class="s-arcticle-wrapper">
    <div class="s-article">
      <h2 class="s-article__title">Arcticle</h2>
      <div class="s-article__items">
        <s-article-item
          v-for="itemData in itemsData"
          :key="itemData"
          :item-data="itemData"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SArticleItem from "./SArticleItem.vue";

export default {
  name: "SArticle",
  components: { SArticleItem },
  data() {
    return {
      itemsData: [
        {
          title: "Choose size",
          classModification: "first",
        },
        {
          title: "Take care of a t-shirt",
          classModification: "second",
        },
        {
          title: "Remove stains",
          classModification: "third",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.s-article {
  @include grid();
  padding: 50px 0;
  &__title {
    @include title();
    text-align: center;
  }
  &__items {
    display: flex;
    margin-top: 30px;
  }
}
</style>

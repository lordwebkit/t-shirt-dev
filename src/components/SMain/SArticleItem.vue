<template>
  <div
    class="s-article-item"
    :class="`s-article-item_${itemData.classModification}`"
  >
    <h3 class="s-article-item__title">{{ itemData.title }}</h3>
  </div>
</template>
<script>
export default {
  name: "SArticleItem",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.s-article-item {
  background-color: rgb(120, 150, 100);
  height: 400px;
  margin-right: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color, box-shadow 0.2s ease;
  &:hover {
    cursor: pointer;
  }
  &_first {
    background-image: url("@/assets/images/catalog/2.png");
  }
  &_second {
    background-image: url("@/assets/images/catalog/3.png");
  }
  &_third {
    background-image: url("@/assets/images/catalog/4.png");
  }
  &:last-child {
    margin: 0;
  }
  &__title {
    @include title(26px);
    text-align: center;
    color: $color-w;
  }
}
</style>

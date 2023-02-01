<template>
  <div
    class="s-article-item"
    :class="`s-article-item_${itemData.classModification}`"
    @click="showPopup(itemData)"
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
  emits: ["showPopup"],
  methods: {
    showPopup(itemData) {
      this.$emit("showPopup", itemData);
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
  @media (max-width: 822px) {
    margin-right: 7px;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid $c-dark-green;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px, $c-dark-green 0px 0px 10px;
    height: 398px;
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
    @media (max-width: 370px) {
      font-size: 22px;
    }
  }
}
</style>

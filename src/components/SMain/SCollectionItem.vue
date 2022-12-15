<template>
  <div class="s-collection-item">
    <img
      class="s-collection-item__image"
      :src="getImageUrl(itemData.image, 'collection')"
      alt="Photo collection t-shirt"
    />
    <router-link class="s-text s-collection-item__button-wrapper" :to="{ name: 'catalog' }">
      <button class="s-text s-collection-item__button">
        {{ itemData.name }}
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "SCollectionItem",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const getImageUrl = (name, imgDir) => {
      return new URL(`../../assets/images/${imgDir}/${name}`, import.meta.url)
        .href;
    };
    return { getImageUrl };
  },
};
</script>
<style lang="scss">
.s-collection-item {
  display: block;
  width: calc(25% - 20px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #99aa9c;
  &__image {
    width: 100%;
  }
  &__button {
    width: 100%;
    padding: 15px 30px;
    cursor: pointer;
    &-wrapper {
      width: 100%;
    }
  }
}
</style>

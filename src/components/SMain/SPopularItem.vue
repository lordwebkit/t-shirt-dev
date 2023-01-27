<template>
  <div class="s-popular-item">
    <router-link :to="{ name: 'catalog' }" @click="delayedOpenDetails">
      <img
        class="s-popular-item__image"
        :src="getImageUrl(itemData.prevImage, 'popular')"
        alt="Photo popular t-shirt"
      />
    </router-link>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "SPopularItem",
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
  methods: {
    ...mapActions("products", ["openDetails"]),
    delayedOpenDetails() {
      setTimeout(() => {
        this.openDetails(this.itemData);
      }, 200);
    },
  },
};
</script>
<style lang="scss">
.s-popular-item {
  margin-right: 15px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    border: 1px solid $c-dark-green;
    box-shadow: black 0 0 2px;
  }
  &:last-child {
    margin-right: 0;
  }
  &__image {
    width: 100%;
    display: block;
  }
}
</style>

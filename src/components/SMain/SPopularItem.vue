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
  @media (max-width: 850px) {
    margin-right: 0;
    width: calc(50% - 15px);
    &:first-child {
      margin-right: 15px;
    }
    &:last-child {
      margin-top: 15px;
    }
  }
  @media (max-width: 530px) {
    width: 320px;
    &:first-child {
      margin-right: 0;
      margin-bottom: 15px;
    }
    &:last-child {
      margin-top: 15px;
    }
  }
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

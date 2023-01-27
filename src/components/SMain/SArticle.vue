<template>
  <div class="s-arcticle-wrapper">
    <div class="s-article">
      <h2 class="s-article__title">Arcticle</h2>
      <div class="s-article__items">
        <s-article-item
          v-for="article in articles"
          :key="article"
          :item-data="article"
          @show-popup="showPopup"
        />
      </div>
    </div>
    <s-popup
      :is-visible="isVisible"
      @close-popup="closePopup"
    >
      <template #header>
        <h2 class="s-popup__title">{{ articleData.title }}</h2>
      </template>
      <template #content>
        <div class="s-popup__content">
          <div class="s-popup__text-wrapper">
            <p
              v-for="string in articleData.text"
              :key="string"
              class="s-popup__text"
            >
              {{ string }}
            </p>
          </div>
          <div class="s-popup__img-wrapper">
            <img
              :src="getImageUrl(articleData.img)"
              alt="image sheme t-shirts"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <div></div>
      </template>
    </s-popup>
  </div>
</template>
<script>
import SArticleItem from "./SArticleItem.vue";
import SPopup from "../SPopup.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SArticle",
  components: { SArticleItem, SPopup },
  data() {
    return {
      isVisible: false,
      articleData: {},
    };
  },
  computed: {
    ...mapGetters("articles", ["articles"]),
  },
  mounted() {
    this.getArticlesFromApi();
  },
  methods: {
    ...mapActions("articles", ["getArticlesFromApi"]),
    showPopup(articleData) {
      this.isVisible = true;
      this.articleData = articleData;
    },
    closePopup() {
      this.isVisible = false;
    },
    getImageUrl(name) {
      return new URL(`../../assets/images/article/${name}`, import.meta.url)
        .href;
    },
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
.s-popup {
  &__title {
    @include title(32px);
    text-align: center;
    padding-top: 10px;
  }
  &__content {
    display: flex;
    padding: 40px;
    align-items: center;
  }
  &__text {
    @include text(24px);
    margin-top: 10px;
    &:last-child {
      font-size: 18px;
      font-style: italic;
    }
    &-wrapper {
      flex: 2;
      padding: 0 30px;
    }
  }
  &__img {
    &-wrapper {
      flex: 1;
    }
  }
}
</style>

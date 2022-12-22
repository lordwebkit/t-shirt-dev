<template>
  <div class="s-arcticle-wrapper">
    <div class="s-article">
      <h2 class="s-article__title">Arcticle</h2>
      <div class="s-article__items">
        <s-article-item
          v-for="itemData in itemsData"
          :key="itemData"
          :item-data="itemData"
          @show-popup="showPopup"
        />
      </div>
    </div>
    <s-popup
      :is-visible="isVisible"
      :popup-content="popupContent"
      @close-popup="closePopup"
    >
      <template #header>
        <h2 class="s-popup__title">{{ popupContent.title }}</h2>
      </template>
      <template #content>
        <div class="s-popup__content">
          <div class="s-popup__text-wrapper">
            <p
              v-for="string in popupContent.text"
              :key="string"
              class="s-popup__text"
            >
              {{ string }}
            </p>
          </div>
          <div class="s-popup__img-wrapper">
            <img
              :src="getImageUrl(popupContent.img)"
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

export default {
  name: "SArticle",
  components: { SArticleItem, SPopup },
  data() {
    return {
      itemsData: [
        {
          title: "Choose size",
          classModification: "first",
          text: [
            "Choose your T-shirt and measure with a meter",
            "The width on the dimensional grid is indicated by the letter A,",
            "Measure under the armpits, from seam to seam, as shown by the red line.",
            "The length of the sleeve on the dimensional grid is indicated by the letter C,",
            "Next, compare your measurements with our size table.",
            "Estimating plus / minus a couple of centimeters and choose the size.",
          ],
          img: "1.jpg",
        },
        {
          title: "Take care of a t-shirt",
          classModification: "second",
          text: [
            "Wash inside out, only in a washing machine,",
            "delicate mode, up to 40 degrees, not higher than 600 rpm,",
            "do not use a machine dryer, dry only on a hanger,",
            "without direct sunlight on the fabric.",
            ""
          ],
          img: "2.jpg",
        },
        {
          title: "Remove stains",
          classModification: "third",
          text: [
            "The stain remover must be applied to the outer and wrong side",
            "of the clothing and left for half an hour.",
            "Then rinse with water and machine wash.",
            "For old stains, the treatment time should be doubled.",
          ],
          img: "3.png"
        },
      ],
      isVisible: false,
      popupContent: {},
    };
  },
  methods: {
    showPopup(itemData) {
      this.isVisible = true;
      this.popupContent = itemData;
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

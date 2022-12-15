<template>
  <div class="s-main-wrapper">
    <main class="s-main">
      <div class="s-main-info-wrapper">
        <div class="s-main__info s-main-info">
          <div class="s-main-info__image-wrapper">
            <img
              class="s-main-info__image"
              :src="getImageUrl('robert.jpg', 'founder')"
              alt="Founder T-shirt shop"
            />
          </div>
          <div class="s-main-info__text-wrapper">
            <span
              class="s-main-info-text__decore s-main-info-text__decore-top"
            ></span>
            <p class="s-text s-main-info__text">
              T-shirt - is an American brand of men's <br />T-shirts. The
              founder and ideological inspirer is Robert Polson. Our brand name
              was chosen by Robert's 6 year old daughter as the "best in the
              world"
            </p>
            <span
              class="s-main-info-text__decore s-main-info-text__decore-bottom"
            ></span>
          </div>
        </div>
      </div>
      <div class="s-main__publication">
        <s-carousel
          :item-data="publication"
          :castom-settings="{ width: 1903, imgDir: 'publication' }"
        />
      </div>
      <div class="s-main__catalog s-main-collection">
        <s-collection />
      </div>
      <div class="s-main__questionnare s-main-questionnaire"></div>
    </main>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SCarousel from "./SCarousel.vue";
import SCollection from "./SMain/SCollection.vue";

export default {
  name: "SMain",
  components: {
    SCarousel,
    SCollection,
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
    ...mapGetters("collection", ["collection"]),
  },
  mounted() {
    this.getPublicationFromApi();
    this.getCollectionFromApi();
  },
  methods: {
    ...mapActions("publication", ["getPublicationFromApi"]),
    ...mapActions("collection", ["getCollectionFromApi"]),
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");
.s-main {
  &-info {
    display: flex;
    height: 100%;
    width: 65%;
    margin: 0 auto;
    &-wrapper {
      height: calc(100vh - 65px);
      background: #fff url("@/assets/images/founder/bg.jpg") no-repeat center
        right;
    }
    &__image {
      height: 600px;
      padding: 10px;
      background-color: #fff;
      &-wrapper {
        flex: 3;
        display: flex;
        align-items: center;
      }
    }
    &__text {
      width: 63%;
      background-color: rgba(105, 139, 106, 0.3);
      color: rgb(24, 24, 24);
      padding: 15px;
      font-size: 26px;
      font-weight: 600;
      text-align: center;
      line-height: 1.3;
      font-family: "Raleway", sans-serif;
      &-wrapper {
        flex: 6;
        display: flex;

        justify-content: center;
        flex-direction: column;
      }
    }
    &-text {
      &__decore {
        width: 455px;
        height: 2px;
        display: block;
        background-color: rgb(24, 24, 24);
        margin-left: 40px;
        &-top {
          margin-bottom: 40px;
        }
        &-bottom {
          margin-top: 40px;
        }
      }
    }
  }
  &__publication {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 305px;
    padding-top: 64px;
  }
  &-questionnaire {
    width: 90%;
    margin: 120px auto 0 auto;
    text-align: center;
    &__title {
      font-size: 48px;
      margin-bottom: 30px;
    }
    &__text {
      text-align: center;
    }
    &__btn {
      padding: 15px 30px;
      margin-top: 30px;
      text-align: center;
    }
  }
}
</style>

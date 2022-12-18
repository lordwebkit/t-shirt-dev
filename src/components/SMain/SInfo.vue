<template>
  <div class="s-info-wrapper">
    <div class="s-info">
      <div class="s-info__image-wrapper">
        <img
          class="s-info__image"
          :src="getImageUrl('robert.jpg', 'founder')"
          alt="Founder T-shirt shop"
        />
      </div>
      <div class="s-info__text-wrapper">
        <span class="s-info-text__decore s-info-text__decore-top"></span>
        <p class="s-text s-info__text">
          <span class="s-info__logo"></span> - is an American brand of men's
          T-shirts. The founder and ideological inspirer is Robert Polson. Our
          brand name was chosen by Robert's 6 year old daughter as the "best in
          the world"
        </p>
        <div class="s-info__button-wrapper">
          <router-link :to="{ name: 'catalog' }">
            <button class="s-info__button">Go to catalog</button>
          </router-link>
        </div>
        <span class="s-info-text__decore s-info-text__decore-bottom"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SInfo",
  setup() {
    const getImageUrl = (name, imgDir) => {
      return new URL(`../../assets/images/${imgDir}/${name}`, import.meta.url)
        .href;
    };
    return { getImageUrl };
  },
};
</script>
<style lang="scss" scoped>
.s-info {
  @include grid();
  display: flex;
  align-items: center;
  height: 100%;
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
      display: flex;
      align-items: center;
    }
  }
  &__logo {
    background: url("@/assets/icons/logo.svg") no-repeat 0% 0%;
    background-size: 100%;
    width: 115px;
    height: 30px;
    display: inline-block;
    transform: translate(6px, 6px);
  }
  &__text {
    @include text(25px, 500);
    background-color: rgba(105, 139, 106, 0.3);
    color: rgb(24, 24, 24);
    padding: 15px;
    text-align: center;
    line-height: 1.3;
    &-wrapper {
      flex-basis: 50%;
      height: 600px;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      padding-left: 20px;
    }
  }
  &-text {
    &__decore {
      height: 2px;
      display: block;
      background-color: rgb(24, 24, 24);
      width: 80%;
      margin: 0 auto;
      &-top {
        margin-bottom: 35px;
      }
      &-bottom {
        margin-top: 25px;
      }
    }
  }
  &__button {
    @include btn();
    padding: 15px 40px;
    &-wrapper {
      width: 100%;
      text-align: center;
      margin-top: 25px;
    }
  }
}
</style>

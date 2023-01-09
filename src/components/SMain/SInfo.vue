<template>
  <div class="s-info">
    <div class="s-info__inner">
      <img
        class="s-info__image"
        :src="getImageUrl('robert.jpg', 'founder')"
        alt="Founder T-shirt shop"
      />
      <p class="s-bio s-info__bio">
        <span class="s-bio__headword"></span> - is an American brand of men's
        T-shirts. The founder and ideological inspirer is Robert Polson. Our
        brand name was chosen by Robert's 6 year old daughter as the "best in
        the world"
      </p>
      <router-link class="s-info__button" :to="{ name: 'catalog' }">
        Go to catalog
      </router-link>
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
  height: calc(100vh - 65px);
  background: #fff url("@/assets/images/founder/bg.jpg") no-repeat center right;
  &__inner {
    @include grid(1110px);
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: end;
    padding-top: 60px;
  }
  &__image {
    height: 600px;
    padding: 10px;
    background-color: #fff;
  }
  &__bio {
    margin-left: 30px;
    margin-bottom: 25px;
    max-width: 500px;
  }
  &__button {
    @include btn();
    padding: 15px 80px;
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 0 auto;
    text-align: center;
    margin-top: 65px;
    text-decoration: none;
  }
}
.s-bio {
  @include text(25px, 500);
  text-align: center;
  line-height: 1.3;
  background-color: rgba(105, 139, 106, 0.3);
  color: rgb(24, 24, 24);
  padding: 15px;
  &::before,
  &::after {
    content: "";
    height: 2px;
    display: block;
    background-color: rgb(24, 24, 24);
    width: 100%;
    margin: 0 auto;
  }
  &::before {
    transform: translateY(-40px);
  }
  &::after {
    transform: translateY(40px);
  }
  &__headword {
    background: url("@/assets/icons/logo.svg") no-repeat 0% 0%;
    background-size: 100%;
    width: 115px;
    height: 30px;
    display: inline-block;
    transform: translate(6px, 6px);
  }
}
</style>

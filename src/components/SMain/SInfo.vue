<template>
  <div class="s-info">
    <div class="s-info__inner">
      <img
        class="s-info__image"
        :src="getImageUrl('robert.jpg', 'founder')"
        alt="Founder T-shirt shop"
      />
      <p class="s-bio s-info__bio">
        <span class="s-bio__headword"></span> - is an American menswear brand.
        The founder and ideological inspirer is Robert Paulson.Our brand was
        chosen by Robert's 6-year-old daughter as "the best in the world".
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
  padding-bottom: 60px;
  background: url("@/assets/images/founder/bg.jpg") no-repeat top right;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 31%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    z-index: 1;
    @media (max-width: 1600px) {
      width: 27%;
    }
    @media (max-width: 1350px) {
      width: 24%;
    }
    @media (max-width: 530px) {
      display: none;
    }
  }
  &__inner {
    @include grid(1110px);
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: end;
    padding-top: 72px;
    position: relative;
    z-index: 2;
    @media (max-width: 1230px) {
      max-width: 980px;
    }
    @media (max-width: 530px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      padding-top: 47px;
      justify-items: center;
    }
  }
  &__image {
    height: 600px;
    padding: 10px;
    background-color: #fff;
    @media (max-width: 1024px) {
      height: 560px;
    }
    @media (max-width: 900px) {
      height: 500px;
    }
    @media (max-width: 750px) {
      height: 400px;
    }
    @media (max-width: 530px) {
      grid-row-start: 2;
      margin-top: 40px;
    }
  }
  &__bio {
    margin-left: 30px;
    margin-bottom: 25px;
    max-width: 525px;
    @media (max-width: 1024px) {
      max-width: 420px;
    }
    @media (max-width: 530px) {
      margin-left: 0;
      max-width: 100%;
    }
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
    @media (max-width: 530px) {
      grid-column-end: 2;
      margin-top: 35px;
    }
  }
}
.s-bio {
  @include text(25px);
  text-align: left;
  line-height: 1.3;
  background-color: rgb(199, 209, 199);
  color: rgb(24, 24, 24);
  padding: 15px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 750px) {
    font-size: 18px;
  }
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
    transform: translate(-6px, 6px);
    @media (max-width: 750px) {
      width: 104px;
      transform: translateY(9px);
    }
  }
}
</style>

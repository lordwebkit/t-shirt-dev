<template>
  <div class="s-footer-wrapper">
    <footer class="s-footer">
      <div class="s-footer__section s-footer-help">
        <h3 class="s-footer__title s-footer-help__title">Help</h3>
        <div class="s-footer__links s-footer-help__links">
          <a href="" class="s-footer__link s-footer-help__delivery">
            Delivery terms
          </a>
          <a href="" class="s-footer__link s-footer-help__refound">
            Get a refund
          </a>
          <a href="" class="s-footer__link s-footer-help__offer">
            Public offer
          </a>
        </div>
      </div>
      <div class="s-footer__section s-footer-social">
        <h3 class="s-footer__title s-footer-social__title">About us</h3>
        <div class="s-footer-social__links">
          <a href="" class="s-footer-social__link s-footer-social__vk"> </a>
          <a href="" class="s-footer-social__link s-footer-social__youtube">
          </a>
          <a href="" class="s-footer-social__link s-footer-social__telegram">
          </a>
        </div>
      </div>
      <div class="s-footer__section s-footer-contacts">
        <h3 class="s-footer__title s-footer-contacts__title">Contacts</h3>
        <div class="s-footer__links s-footer-contacts__links">
          <a href="" class="s-footer__link s-footer-contacts__email"
            >tshirts@mail.com</a
          >
          <a href="" class="s-footer__link s-footer-contacts__phone"
            >202-555-0174</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "SFooter",
};
</script>
<style lang="scss">
.s-footer {
  @include grid();
  padding: 50px 0;
  display: flex;
  &-wrapper {
    background-color: $color-ws;
  }
  &__section {
    flex: 1;
  }
  &__title {
    @include title(18px);
  }
  &__links {
    display: flex;
    flex-direction: column;
  }
  &__link {
    @include text(14px);
    color: $c-dark-green;
    text-decoration: none;
    margin-top: 10px;
  }
  &-social {
    &__links {
      display: flex;
      justify-content: space-between;
      width: 100px;
      margin-top: 8px;
    }
    &__link {
      display: inline-block;
      width: 25px;
      height: 25px;
    }
    &__vk {
      background-image: url("@/assets/icons/vk.svg");
      background-size: cover;
      background-position: 0 -4px;
      width: 28px;
      height: 31px;
    }
    &__youtube {
      background-image: url("@/assets/icons/youtube.svg");
    }
    &__telegram {
      background-image: url("@/assets/icons/telegram.svg");
    }
  }
}
</style>

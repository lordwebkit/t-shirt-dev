<template>
  <div class="s-questionnaire-wrapper">
    <div class="s-questionnaire">
      <h2 class="s-title s-questionnaire__title">Color Question</h2>
      <div class="s-questionnaire__content">
        <form
          class="s-questionnaire__form"
          @submit.prevent="alertSubmit(color, email)"
        >
          <div class="s-questionnaire__color-wrapper s-questionnaire-color">
            <p class="s-questionnaire-color__title">
              Select your favorite color:
            </p>
            <input
              v-model="color"
              class="s-questionnaire-color__palette"
              type="color"
              name="color"
              placeholder="Your favorite color is .."
            />
          </div>
          <input
            v-model="email"
            class="s-questionnaire__email"
            name="email"
            placeholder="Email"
            @input="notice = false"
          />
          <transition name="s-notice">
            <span v-show="notice" class="s-questionnaire__notice">
              Your email don't correct !
            </span>
          </transition>
          <input class="s-questionnaire__button" type="submit" value="Submit" />
        </form>
        <div class="s-questionnaire__text-wrapper">
          <p class="s-questionnaire__text">
            Submit your favorite color and receive a promo code for 10% off your
            first order
          </p>
          <span class="s-questionnaire__promo-lable">
            Your promo code:
            <input
              v-model="promo"
              type="text"
              class="s-questionnaire__promo-input"
              readonly
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SQuestionnaire",
  data() {
    return {
      email: "",
      color: "#000000",
      promo: "",
      notice: false,
    };
  },
  methods: {
    alertSubmit(color, email) {
      if (this.validateEmail(email)) {
        alert(
          `Your favorite color is ${color}. We add your ${email} in our contacts)`
        );
        this.promo = "E5A99Q";
      } 
    },
    validateEmail(email) {
      const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      if (EMAIL_REGEXP.test(email)) {
        return true;
      } else {
        this.notice = true;
        return false;
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.s-questionnaire {
  @include grid();
  width: 90%;
  text-align: center;
  &-wrapper {
    margin-top: 50px;
    padding: 40px 0;
    background-color: #f8f8f8;
  }
  &__title {
    @include title(32px);
    margin-bottom: 30px;
  }
  &__content {
    display: flex;
    height: 150px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    position: relative;
  }
  &-color {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    &__title {
      @include text(20px);
      margin-right: 10px;
      color: $c-dark-green;
    }
    &__palette {
      cursor: pointer;
      height: 45px;
      width: 60px;
    }
  }
  &__email {
    @include text(18px);
    padding: 10px 5px;
  }
  &__notice {
    display: block;
    width: 100%;
    @include text(18px);
    border: 1px solid #000;
    background-color: rgb(181, 93, 93);
    color: #fff;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 7px;
    box-sizing: border-box;
    &::after {
      content: "";
      position: absolute;
      top: 35px;
      left: 17px;
      border: 10px solid transparent;
      border-top: 12px solid rgb(181, 93, 93);
    }
    &::before {
      content: "";
      position: absolute;
      top: 36px;
      left: 17px;
      border: 10px solid transparent;
      border-top: 12px solid #000;
    }
  }
  &__button {
    padding: 10px 5px;
  }
  &__text {
    @include text();
    text-align: center;
    &-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  &__button {
    @include btn();
    padding: 10px;
    text-align: center;
  }
  &__promo {
    &-lable {
      @include text(22px);
      color: $c-dark-green;
    }
    &-input {
      padding: 5px;
    }
  }
}
.s-notice-enter-active,
.s-notice-leave-active {
  transition: opacity 0.5s ease;
}
.s-notice-enter-from,
.s-notice-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="s-questionnaire-wrapper">
    <div class="s-questionnaire">
      <h2 class="s-title s-questionnaire__title">Color Question</h2>
      <div class="s-questionnaire__content">
        <form class="s-questionnaire__form" action="submit">
          <input
            class="s-questionnaire__input"
            type="text"
            name="fname"
            placeholder="Your favorite color is .."
          />
          <input
            class="s-questionnaire__input"
            type="email"
            name="lname"
            placeholder="Email"
          />
          <input class="s-questionnaire__button" type="button" value="Submit" />
        </form>
        <div class="s-questionnaire__text-wrapper">
          <p class="s-questionnaire__text">
            Submit your favorite color and receive a promo code for 10% off your
            first order
          </p>
          <span class="s-questionnaire__promo-lable">
            Your promo code:
            <input type="text" class="s-questionnaire__promo-input" readonly />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SQuestionnaire",
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
  }
  &__input {
    @include text(18px);
    padding: 10px 5px;
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
</style>

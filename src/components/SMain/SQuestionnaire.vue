<template>
  <div class="s-questionnaire-wrapper">
    <div class="s-grid-wrapper s-questionnaire">
      <h2 class="s-title s-questionnaire__title">Questionnaire</h2>
      <div class="s-questionnaire__content">
        <form class="s-questionnaire__form" action="submit">
          <input
            class="s-questionnaire__input"
            type="text"
            name="fname"
            placeholder="First Name"
          />
          <input
            class="s-questionnaire__input"
            type="text"
            name="lname"
            placeholder="Last Name"
          />
          <input
            class="s-questionnaire__input"
            type="email"
            name="lname"
            placeholder="Email"
          />
          <input
            class="s-btn s-questionnaire__button"
            type="button"
            value="Submit"
          />
        </form>
        <p class="s-text s-questionnaire__text">
          Submit your details and receive a promo code for 10% off your first
          order
        </p>
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
  width: 90%;
  text-align: center;
  &-wrapper {
    margin-top: 50px;
    padding: 40px 0;
    background-color: #f8f8f8;
  }
  &__title {
    margin-bottom: 30px;
  }
  &__content {
    display: flex;
    height: 200px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
  &__input {
    padding: 10px 10px;
  }
  &__button {
    padding: 10px 5px;
  }
  &__text {
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
  }
  &__btn {
    padding: 15px 30px;
    margin-top: 30px;
    text-align: center;
  }
}
</style>

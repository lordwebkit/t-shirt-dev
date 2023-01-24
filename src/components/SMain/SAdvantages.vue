<template>
  <div class="s-advantages s-main__advantages">
    <div class="s-advantages__inner">
      <h2 class="s-title s-advantages__title">Our advantages</h2>
      <div class="s-advantages__items">
        <s-advantages-item
          v-for="itemData in advantages"
          :key="itemData"
          :item-data="itemData"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SAdvantagesItem from "./SAdvantagesItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SAdvantagesItem,
  },
  computed: {
    ...mapGetters("advantages", ["advantages"]),
  },
};
</script>
<style lang="scss" scoped>
.s-advantages {
  background-color: #f8f8f8;
  &__inner {
    @include grid();
    padding: 40px 0;
  }
  &__title {
    @include title(32px);
    text-align: center;
    margin-bottom: 35px;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    @media (max-width: 960px) {
      display: grid;
      grid-template-columns: 50% 50%;
      padding-left: 60px;
      padding-right: 60px;
    }
    @media (max-width: 660px) {
      padding-left: 30px;
      padding-right: 30px;
    }
    @media (max-width: 530px) {
      grid-template-columns: 100%;
      padding-left: 60px;
      padding-right: 60px;
    }
  }
}
</style>

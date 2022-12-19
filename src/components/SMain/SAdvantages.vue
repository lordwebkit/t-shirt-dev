<template>
  <div class="s-advantages-wrapper">
    <div class="s-advantages">
      <h2 class="s-title s-advantages__title">Our advantages</h2>
      <div class="s-advantages__items">
        <s-advantages-item
          v-for="itemData in advantagesItemData"
          :key="itemData"
          :item-data="itemData"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SAdvantagesItem from "./SAdvantagesItem.vue";

export default {
  components: {
    SAdvantagesItem,
  },
  data() {
    return {
      advantagesItemData: [
        {
          title: "Handmade",
          text: "All works presented are handmade",
          classModification: "handmade",
        },
        {
          title: "Personal pattern",
          text: "All patterns were personally designed",
          classModification: "pattern",
        },
        {
          title: "Natural materials",
          text: "All works are made from natural materials",
          classModification: "material",
        },
        {
          title: "Fast shipping",
          text: " We cooperate with many companies",
          classModification: "shipping",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.s-advantages {
  @include grid();
  &-wrapper {
    padding: 40px 0;
    margin-top: 50px;
    background-color: #f8f8f8;
  }
  &__title {
    @include title(32px);
    text-align: center;
    margin-bottom: 35px;
  }
  &__items {
    display: flex;
    justify-content: space-between;
  }
}
</style>

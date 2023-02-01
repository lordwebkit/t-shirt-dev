<template>
  <div
    class="s-advantages-item"
    :class="`s-advantages-item_${itemData.classModification}`"
  >
    <div class="s-advantages-item__info">
      <strong class="s-advantages-item__title">{{ itemData.title }}</strong>
      <p class="s-advantages-item__text">{{ itemData.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SAdvantagesItem",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.s-advantages-item {
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 232px;
  &::before {
    content: "";
    height: 50px;
    width: 50px;
    display: inline-block;
  }
  &__title {
    @include title(18px, 600);
  }
  &__info {
    width: 70%;
    margin: 0 auto;
  }
  &__text {
    @include text(16px);
  }
  &_handmade {
    &::before {
      background: url("@/assets/icons/sewing-machine.svg");
    }
  }
  &_pattern {
    &::before {
      background: url("@/assets/icons/pattern.svg");
    }
  }
  &_material {
    &::before {
      background: url("@/assets/icons/material.svg") no-repeat center center;
      height: 40px;
    }
  }
  &_shipping {
    &::before {
      background: url("@/assets/icons/shipping.svg");
    }
  }
}
</style>

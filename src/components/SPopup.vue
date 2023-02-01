<template>
  <transition name="s-popup">
    <div v-if="isVisible" class="s-popup-wrapper">
      <div class="s-popup">
        <button class="s-popup__close" @click="closePopup()"></button>
        <div class="s-popup-top">
          <slot name="header"></slot>
        </div>
        <div class="s-popup-center">
          <slot name="content"></slot>
        </div>
        <div class="s-popup-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "SPopup",
  props: {
    isVisible: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ["close-popup"],
  methods: {
    closePopup() {
      this.$emit("close-popup");
    },
  },
};
</script>
<style lang="scss">
.s-popup {
  @include grid();
  width: 100%;
  min-height: 200px;
  background-color: $color-ws;
  position: relative;
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
  &-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1025px) {
      width: calc(100% - 30px);
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  &__close {
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    background-image: url("../assets/icons/plus.svg");
    background-size: cover;
    padding: 0;
    position: absolute;
    top: 5px;
    right: 5px;
    transform: rotate(135deg);
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

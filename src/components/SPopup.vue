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
    popupContent: {
      type: Object,
      default: () => {},
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
  height: 80%;
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
    top: 0px;
    right: 0px;
    transform: rotate(135deg);
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="s-app-wrapper">
    <s-header />
    <router-view />
  </div>
</template>

<script>
import SHeader from "./SHeader.vue";
export default {
  name: "SAppWrapper",
  components: {
    SHeader,
  },
};
</script>

<style></style>

<template>
  <div class="s-main-wrapper">
    <s-header />
    <router-view />
  </div>
</template>

<script>
import SHeader from "./SHeader.vue";
export default {
  name: "SMainWrapper",
  components: {
    SHeader,
  },
};
</script>

<style></style>

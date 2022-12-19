<template>
  <div>
    <s-header />
    <router-view />
    <s-footer />
  </div>
</template>

<script>
import SHeader from "./SHeader.vue";
import SFooter from "./SFooter.vue";
export default {
  name: "SAppWrapper",
  components: {
    SHeader,
    SFooter,
  },
};
</script>

<style></style>

<template>
  <div class="s-main-wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "SMainWrapper",
};
</script>

<style scoped>
.s-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>

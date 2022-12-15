<template>
  <div class="s-collection">
    <h2 class="s-title s-collection__title">Collection</h2>
    <div class="s-collection__catalog">
      <s-collection-item
        v-for="collectionItem in collection"
        :key="collectionItem"
        class="s-collection__item"
        :item-data="collectionItem"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SCollectionItem from "./SCollectionItem.vue";

export default {
  name: "SCollection",
  components: {
    SCollectionItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("collection", ["collection"]),
  },
  mounted() {
    this.getCollectionFromApi();
  },
  methods: {
    ...mapActions("collection", ["getCollectionFromApi"]),
  },
};
</script>
<style lang="scss" scoped>
.s-collection {
  padding-top: 30px;
  width: 90%;
  margin: 0 auto;
  &__title {
    text-align: center;
    font-size: 48px;
  }
  &__catalog {
    margin-top: 30px;
    height: 515px;
  }
  &__catalog {
    display: flex;
    justify-content: space-around;
  }
}
</style>

<template>
  <div class="s-catalog-item" @click="giveParentProductData">
    <img
      id="img"
      :src="getImageUrl(productData.image)"
      class="s-catalog-item__image"
      alt="Photo T-shirt"
    />
    <div class="s-catalog-item__info">
      <p class="s-catalog-item__price">
        {{ productData.price
        }}<span class="s-catalog-item__price--money">$</span>
      </p>
      <p class="s-catalog-item__description">
        {{ productData.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SCatalogItem",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ["openDetails"],
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/images/catalog/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
  methods: {
    giveParentProductData() {
      this.$emit("openDetails", this.productData);
    },
  },
};
</script>
<style lang="scss" scoped>
.s-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 10px;
  padding-top: 15px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  height: 360px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.01);
    border: 1px solid rgba(0, 0, 0, 0.7);
    box-shadow: black 0 0 2px;
    margin-bottom: 18px;
    .s-catalog-item__image {
      width: 283px;
    }
  }
  &__image {
    width: 285px;
    @media (max-width: 340px) {
      width: 270px;
    }
  }
  &__info {
    @include text(18px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  &__price {
    font-weight: 700;
    font-size: 22px;
    &--money {
      font-size: 14px;
      margin-left: 2px;
    }
  }
  &__description {
    margin-top: 7px;
  }
}
</style>

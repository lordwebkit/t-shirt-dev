<template>
  <div class="s-catalog-wrapper">
    <section class="s-catalog">
      <div class="s-catalog__title-wrapper">
        <h2 class="s-title s-catalog__title">
          Catalog differen T-shirt for a base look
        </h2>
      </div>
      <div class="s-catalog__list">
        <s-catalog-item
          v-for="product in products"
          :key="product.article"
          :product-data="product"
          @open-details="openDetails"
        />
      </div>
    </section>
  </div>
  <s-popup :is-visible="detailsVisible" @close-popup="closeDetails">
    <template #header>
      <h2 class="s-popup__title">{{ detailsContent.name }}</h2>
    </template>
    <template #content>
      <div class="s-popup__content">
        <div class="s-popup__image-wrapper">
          <img
            class="s-popup__image"
            :src="getImageUrl(detailsContent.image)"
            alt="T-shirt classic white"
          />
        </div>
        <div class="s-popup__info">
          <p class="s-popup__price">{{ detailsContent.price }}$</p>
          <p
            v-for="description in detailsContent.description"
            :key="description"
            class="s-popup__description"
          >
            {{ description }}
          </p>
          <p class="s-popup__fabric-composition">
            {{ detailsContent.fabricComposition }}
          </p>
          <label
            v-for="size in detailsContent.size"
            :key="size"
            :for="`s-popup__${size}`"
            class="s-popup__size-label"
          >
            <input
              :id="`s-popup__${size}`"
              type="radio"
              name="s-popup__size"
              class="s-popup__size-input"
              :value="size"
              :checked="detailsContent.size[1] == size"
            />
            <p class="s-popup__size-text">
              {{ size }}
            </p>
          </label>
          <div class="s-popup__quantity">
            <span
              class="s-popup__quantity-minus"
              @click="
                detailsContent.count > 1
                  ? detailsContent.count--
                  : detailsContent.count
              "
            ></span>
            <p class="s-popup__quantity-text">{{ detailsContent.count }}</p>
            <span
              class="s-popup__quantity-plus"
              @click="
                detailsContent.count < 5
                  ? detailsContent.count++
                  : detailsContent.count
              "
            ></span>
          </div>
          <button
            class="s-popup__button"
            @click="sendAndClose(detailsContent)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </template>
    <template #footer></template>
  </s-popup>
</template>
<script>
import SCatalogItem from "./SCatalogItem.vue";
import { mapActions, mapGetters } from "vuex";
import SPopup from "./SPopup.vue";
export default {
  name: "SCatalog",
  components: {
    SCatalogItem,
    SPopup,
  },
  data() {
    return {
      detailsVisible: false,
      detailsContent: {},
    };
  },
  computed: {
    ...mapGetters("products", ["products"]),
    ...mapGetters("cart", ["cart"]),
  },
  mounted() {
    this.getProductsFromApi();
  },
  methods: {
    ...mapActions("products", ["getProductsFromApi"]),
    ...mapActions("cart", ["addToCart"]),
    openDetails(product) {
      this.detailsContent = Object.assign({}, product);
      this.detailsContent.description =
        this.detailsContent.description.split(".");
      this.detailsContent.size = this.detailsContent.size
        .split(", ")
        .map((size) => size.toUpperCase());
      this.detailsContent.count = 1;
      this.detailsVisible = true;
    },
    sendAndClose(product) {
      this.addToCart(product);
      this.closeDetails();
    },
    closeDetails() {
      this.detailsVisible = false;
    },
    getImageUrl(name) {
      console.log("convectoring");
      return new URL(`../assets/images/catalog/${name}`, import.meta.url).href;
    },
  },
};
</script>
<style scoped lang="scss">
.s-catalog {
  @include grid();
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link-cart {
    padding: 10px;
    border: solid 1px #aeaeae;
  }
  &__title {
    @include title(32px);
    &-wrapper {
      margin: 20px 0 25px 0;
    }
  }
}
.s-popup {
  &__title {
    @include title(28px);
    text-align: center;
    padding-top: 10px;
    margin-bottom: 15px;
  }
  &__content {
    display: flex;
    padding: 15px;
  }
  &__info {
    @include text(18px);
    flex: 1;
  }
  &__image {
    max-height: 400px;
    &-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
  &__price {
    margin-bottom: 15px;
    font-size: 22px;
    padding: 8px 16px;
    background-color: rgb(199, 209, 199);
    display: inline-block;
  }
  &__description {
    font-size: 22px;
  }
  &__fabric-composition {
    margin-top: 10px;
    font-style: italic;
  }
  &__size {
    &-label {
      display: inline-block;
      margin-top: 10px;
      margin-right: 10px;
      width: 35px;
      height: 34px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      border: 1px solid black;
    }
    &-text {
      padding-top: 7px;
      height: 27px;
    }
    &-input {
      display: none;
      &:checked + .s-popup__size-text {
        background-color: black;
        border: 1px solid #fff;
        padding-top: 5px;
        color: #fff;
      }
    }
  }
  &__quantity {
    margin-top: 10px;
    display: flex;
    height: 26px;
    align-items: center;
    &-text {
      margin: 0 10px;
      display: inline-block;
      line-height: 3px;
      font-size: 28px;
    }
    &-minus,
    &-plus {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-size: 13px;
      background-repeat: no-repeat;
      background-position: center;
      border: 1px solid black;
      padding: 2px;
      cursor: pointer;
    }
    &-minus {
      background-image: url("@/assets/icons/minus.svg");
    }
    &-plus {
      background-image: url("@/assets/icons/plus.svg");
    }
  }
  &__button {
    @include btn();
    padding: 10px 25px;
    margin-top: 20px;
  }
}
</style>

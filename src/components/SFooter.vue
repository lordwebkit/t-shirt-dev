<template>
  <div class="s-footer-wrapper">
    <footer class="s-footer">
      <div class="s-footer__section s-footer-help">
        <h3 class="s-footer__title s-footer-help__title">Help</h3>
        <div class="s-footer__links s-footer-help__links">
          <a
            class="s-footer__link s-footer-help__delivery"
            @click="showPopup(deliveryTerms)"
          >
            Delivery terms
          </a>
          <a
            class="s-footer__link s-footer-help__refound"
            @click="showPopup(getRefound)"
          >
            Get a refund
          </a>
          <a
            class="s-footer__link s-footer-help__offer"
            @click="showPopup(publicOffer)"
          >
            Public offer
          </a>
        </div>
      </div>
      <div class="s-footer__section s-footer-social">
        <h3 class="s-footer__title s-footer-social__title">About us</h3>
        <div class="s-footer-social__links">
          <a
            target="_blank"
            href="https://vk.com/"
            class="s-footer-social__link s-footer-social__vk"
          ></a>
          <a
            target="_blank"
            href="https://youtube.com/"
            class="s-footer-social__link s-footer-social__youtube"
          >
          </a>
          <a
            target="_blank"
            href="https://telegram.org"
            class="s-footer-social__link s-footer-social__telegram"
          >
          </a>
        </div>
      </div>
      <div class="s-footer__section s-footer-contacts">
        <h3 class="s-footer__title s-footer-contacts__title">Contacts</h3>
        <div class="s-footer__links s-footer-contacts__links">
          <p class="s-footer__link s-footer-contacts__email">
            tshirts@mail.com
          </p>
          <p href="" class="s-footer__link s-footer-contacts__phone">
            202-555-0174
          </p>
        </div>
      </div>
    </footer>
    <s-popup
      :is-visible="isVisible"
      :popup-content="popupContent"
      @close-popup="closePopup"
    >
      <template #header>
        <h2 class="s-popup__title">{{ popupContent.title }}</h2>
      </template>
      <template #content>
        <div class="s-popup__content">
          <div class="s-popup__text-wrapper">
            <p
              v-for="string in popupContent.text"
              :key="string"
              class="s-popup__text"
            >
              {{ string }}
            </p>
          </div>
        </div>
      </template>
      <template #footer>
        <div></div>
      </template>
    </s-popup>
  </div>
</template>
<script>
import SPopup from "./SPopup.vue";

export default {
  name: "SFooter",
  components: { SPopup },
  data() {
    return {
      deliveryTerms: {
        title: "Delivery terms",
        classModification: "first",
        text: [
          "1. Delivery is carried out on weekdays from 8 am to 5 pm.",
          "2. Delivery is made to the point of issue chosen by you on the map.",
          "3. We use several aggregators for the transport of goods, you will be offered a faster option. but you can always choose for yourself",
          "4. The shipping price is calculated only from the distance and duties if you are from another country",
        ],
      },
      getRefound: {
        title: "Get a refound",
        classModification: "first",
        text: [
          "1. You can return the goods of proper quality within 14 days, not counting the day of receipt of the order, if the goods did not fit in size, style, dimensions, shape, color or configuration.",
          "2. You can return the product if it has retained its consumer properties and presentation. The product must not show signs of use and wear, while there is an original and undamaged packaging (including undamaged production mica) and labels.",
          "3. Pick-up point - this return method will be offered if there are pick-up points that accept returns in your city/town and you do not return the jewelry. You can choose a convenient point for you from those offered on the map.",
          "4. We will transfer funds to you within 10 calendar days from the date of receipt of the returned goods at the warehouse or at the point of issue of orders. We will notify you by SMS about the receipt of goods at the warehouse and the transfer of funds to your address.",
        ],
      },
      publicOffer: {
        title: "Public offer",
        classModification: "first",
        text: [
          "1. The Seller sells the Goods through the online store at http://tshirts.com",
          "2. When ordering Products through the Online Store, the User agrees to the terms of sale of the Products set forth below (hereinafter referred to as the Terms of Sale of the Products), and in relation to the Products sold not by Tshirts, but by other legal entities and / or individual entrepreneurs, also with the terms of sale and delivery of the Products posted on the pages of the relevant Sellers containing information on the terms of sale and delivery of the Goods by such legal entities / individual entrepreneurs. In case of disagreement with this User",
          "3. The Agreement may be changed by Lamoda unilaterally with notice by posting information on the Site. The new version of the Agreement comes into force the day after its publication on the Site, unless otherwise provided by the terms of the Agreement.",
          "4. By informing Tshirts of his e-mail and phone number, the Site Visitor/User/Buyer agrees to the use of these means of communication by Tshirts, as well as by third parties involved by him for the purpose of fulfilling obligations to Site Visitors/Users/Buyers, in order to send advertising and informational nature, containing information about discounts, upcoming and current promotions and other events of the Seller, about the",
        ],
      },
      isVisible: false,
      popupContent: {},
    };
  },
  methods: {
    showPopup(itemData) {
      this.isVisible = true;
      this.popupContent = itemData;
    },
    closePopup() {
      this.isVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.s-footer {
  @include grid();
  padding: 50px 0;
  display: flex;
  &-wrapper {
    background-color: $color-ws;
  }
  &__section {
    flex: 1;
  }
  &__title {
    @include title(18px);
  }
  &__links {
    display: flex;
    flex-direction: column;
  }
  &__link {
    @include text(14px);
    color: $c-dark-green;
    text-decoration: none;
    margin-top: 10px;
    cursor: pointer;
  }
  &-social {
    &__links {
      display: flex;
      justify-content: space-between;
      width: 100px;
      margin-top: 8px;
    }
    &__link {
      display: inline-block;
      width: 25px;
      height: 25px;
    }
    &__vk {
      background-image: url("@/assets/icons/vk.svg");
      background-size: cover;
      background-position: 0 -4px;
      width: 28px;
      height: 31px;
    }
    &__youtube {
      background-image: url("@/assets/icons/youtube.svg");
    }
    &__telegram {
      background-image: url("@/assets/icons/telegram.svg");
    }
  }
}
.s-popup {
  &__title {
    @include title(28px);
    text-align: center;
    padding-top: 20px;
  }
  &__content {
    display: flex;
    padding: 10px 10px 40px 10px;
    align-items: center;
    margin-top: 20px;
  }
  &__text {
    @include text(16px);
    margin-top: 10px;
    &-wrapper {
      flex: 2;
      padding: 0 30px;
    }
  }
}
</style>

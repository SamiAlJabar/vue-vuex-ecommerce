<template>
  <div>
    <div  class="sticky-header position-fixed">
        <div class="container pt-2 pb-2 d-flex content">
          <div class="menu order">
            Order online or call 119-467-5133
          </div>
          <div class="menu">
            <i class="nut"></i> Sign in to your account
          </div>
          <div class="menu">
            <i class="bulb"></i> Nuts for Business
          </div>
          <div class="menu">
            <i class="question"></i> Need Help?
          </div>
          <div class="menu">
            <i class="delivery-box"></i> Easy Order
          </div>
          <div class="menu" @click="showCart = (cart.length) ? !showCart : showCart">
            <i class="cart"></i><div v-show="cart.length" class="cart-counter">{{ cart.length }}</div> Your Cart
          </div>
        </div>
    </div>
    <div class="sticky-header ">
        <div class="container pt-2 pb-2 d-flex content">
          <div class="menu order">
            Order online or call 119-467-5133
          </div>
          <div class="menu">
            <i class="nut"></i> Sign in to your account
          </div>
          <div class="menu">
            <i class="bulb"></i> Nuts for Business
          </div>
          <div class="menu">
            <i class="question"></i> Need Help?
          </div>
          <div class="menu">
            <i class="delivery-box"></i> Easy Order
          </div>
          <div class="menu" @click="showCart = (cart.length) ? !showCart : showCart">
            <i class="cart"></i><div v-show="cart.length" class="cart-counter">{{ cart.length }}</div> Your Cart
          </div>
        </div>
    </div>
    <div
      v-show="showCart && cart.length"
      class="drawer text-left"
    >
      <button
        class="mb-2 btn btn-secondary s2-button w-100"
        @click="showCart = false"
        type="button"
      >
        CLOSE CART
      </button>
      <button
        class="mb-5 btn btn-secondary s2-button checkout w-100"
        @click="showCart = false"
        type="button"
      >
        CHECKOUT
      </button>
      <div class="row">
        <div class="col-md-6">
          <b>PRODUCT</b>
        </div>
        <div class="col-md-6">
          <b>PRICE</b>
        </div>
      </div>
      <hr>
      <div class="row align-items-center" v-for="(crt, index) in cart" :key="index">
        <div class="col-md-6">
          <div>
            <p>{{ crt.title }}</p>
            <img class="border-radius" :src="require(`../../assets/images/products/${crt.image}.jpg`)" alt="product">
          </div>
        </div>
        <div class="col-md-6">
          <span class="price float-left">${{ currentPrice(crt) }}</span>
          <button
            class="btn btn-secondary s3-button button-border-radius float-right"
            @click="removeFromCart(index); showCart = (cart.length) ? showCart : !showCart"
            type="button"
          >
            X
          </button>
        </div>
        <hr class="mt-4">
      </div>
      <br>
      <button
        v-if="cart.length >= 4"
        class="mb-5 btn btn-secondary s2-button checkout w-100"
        @click="showCart = false"
        type="button"
      >
        CHECKOUT
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'StickyHeader',
  data() {
    return {
      showCart: false
    }
  },
  computed: {
    ...mapGetters({
      cart: 'getCart'
    })
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    currentPrice: function(crt) {
      if(crt.sale) {
        const amountOff = crt.price * (crt.sale / 100);
        return (crt.price - amountOff).toFixed(2);
      } else {
        return crt.price;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.cart-counter {
  position: absolute;
  color: $yellow;
  background-color: $red;
  border: 1px solid $yellow;
  padding: 0px 5px;
  border-radius: 15px;
  top: 0px;
  font-size: $font12;
  margin: 14px;
  font-weight: bold;
}

.drawer {
    position: fixed;
    top: 0%;
    right: 0%;
    height: 100vh;
    width: 20%;
    background-color: rgba(48, 48, 48, 0.825);
    border-left: 2px solid black;
    padding: 80px 50px;
    color: $white;
    font-size: $font16;
    overflow-y: scroll;
    scrollbar-width: none;

    .s3-button {
      background-color: $red;
      font-size: 8px;
      height: auto;
      min-width: 10px !important;
      padding: 5px 10px;
    }

    .s2-button {
      height: auto;
      padding: 5px 10px;
      background-color: $red;
      color: white;
    }

    .checkout {
      background-color: $yellow;
      color: black;
    }

    .price {
      font-weight: bold;
      color: $third;
    }

    img {
      width: 100%;
      height: 80px;
      background-size: contain;
      background-position: center;
      border: 2px solid $primary;
    }

    p {
      font-size: $font12;
    }
}
</style>

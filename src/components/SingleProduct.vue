<template>
  <div class="product">
    <div v-if="singleProduct.isBestSeller" class="best-seller">
      Best Seller
    </div>
    <img class="border-radius" :src="require(`../assets/images/products/${singleProduct.image}.jpg`)" alt="product">
    <button
      class="btn btn-secondary s3-button button-border-radius w-100 mt-3 mb-3"
      @click="addToCart(product)"
      type="button"
    >
      Add to Cart <i class="cart"></i>
    </button>
    <div class="description">
      <div class="title text-bold">
        {{ shorterTitle }}
      </div>
      <div class="body-desc text-bold text-f12">
        <div class="float-left">
          <i :class="'star-gold-'+(singleProduct.rating * 10)"></i>
          <i class="star-gold-default"></i>
        </div>
        ({{ singleProduct.rating }})
      </div>
      <div class="mt-2 text-f24 d-flex align-items-center" :class="singleProduct.sale ? 'text-danger':''">
        <div class="text-bold">
          ${{ currentPrice }}
        </div>
        <div v-if="singleProduct.sale" class="text-f12">
          <span class="sale-text border-radius text-bold">{{ singleProduct.sale }}% Off </span> <span class="text-f14 text-grey text-line-through">${{ singleProduct.price }}</span>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'SingleProduct',
  props: {
    product: Object
  },
  data() {
    return {
      singleProduct: {}
    }
  },
  created() {
    this.singleProduct = this.product;
  },
  computed: {
    shorterTitle: function() {
      return (this.singleProduct?.title?.length > 55)
            ? this.singleProduct.title.slice(0, 50) + ' ...'
            : this.singleProduct.title;
    },
    currentPrice: function() {
      if(this.singleProduct.sale) {
        const amountOff = this.singleProduct.price * (this.singleProduct.sale / 100);
        return (this.singleProduct.price - amountOff).toFixed(2);
      } else {
        return this.singleProduct.price;
      }
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.product {
  height: 400px;

  .best-seller {
    position: absolute;
    background-color: $red;
    color: $white;
    padding: 5px;
    font-size: $font12;
    border-radius: $border-radius 0 $border-radius 0;
    box-shadow: $shadow-1;
  }

  img {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    // border: 1px solid $primary;
  }

  .btn {
    text-align: center;
    padding: 0px 15px;
  }

  .cart {
    float: right;
  }

  .description {
    text-align: left;

    .title {
      min-height: 50px;  
    }
    .sale-text {
      background-color: $red-shade;
      padding: 5px 5px !important;
      margin: 0px 7px 0px 10px;
    }

    .body-desc {

      .star-gold-default {
        margin-right: 15px;
      }
    }
  }

  
}
</style>

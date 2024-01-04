<template>
  <div class="container">

    <div class="row pt-5 pb-5">
      <span class="text-f40 text-left px-0 mx-0">{{ selectedMenu }}</span>
    </div>

    <div class="row px-0">
      <!-- Filter -->
      <div class="col-md-4 px-0">
        <ProductFilters />
      </div>
      <!-- Product -->
      <div class="row col-md-8 mx-0 px-0 pt-4" v-if="!isLoading">
        <div class="col-md-4 pb-5 col-custom-padding" v-for="product, index in products" :key="index">
          <SingleProduct :product="product"/>
        </div>
        <div v-show="!products.length" class="text-f24 text-danger text-bold text-left">
          Product not found!
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct.vue';
import ProductFilters from '@/components/ProductFilters.vue';
import { mapGetters } from "vuex";

export default {
  name: 'HomePage',
  components: {
    SingleProduct,
    ProductFilters
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      selectedMenu: 'getSelectedMenu'
    }),
  },
  watch: {
    products: function() {
      console.log("change filter");
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 200);
    }
  }
}
</script>
<style lang="scss" scoped>
.col-custom-padding {
  padding-right: 0px !important;
}
</style>

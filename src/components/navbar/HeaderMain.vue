<template>
  <div>
    <div class="background-primary">
      <div class="container">
        <div class="row align-items-center pt-2 pb-2">
          <div class="col-md-9">
            <div class="d-flex">
              <NutsLogo />
              <SearchField
                :inputVal="searchText"
                class="left-margin" />
            </div>
            <p class="nut-text mt-0 mb-0">
              Looking for
              <span class="nut-types">Almonds</span>,
              <span class="nut-types">Cashews</span>,
              <span class="nut-types">Walnuts</span> or
              <span class="nut-types">Organic</span>?
            </p>
          </div>
          <div
            class="col-md-3 pt-2 pb-2 background-third text-secondary cursor-pointer free-shipping"
            @click="banner = 2"
            v-on:mouseout="banner = 1"
          >
            <div>
              <img :src="shippingDots" class="free-shipping-dots" alt="free shipping">
              <br>
              <u>FREE shipping on orders over $59!</u>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="floating-div pt-2 pb-2" v-show="banner == 2">
        <div class="container">
          * For destinations within the contiguous U.S., orders totaling $59 or more (before tax) ship free and orders below $59 require payment for shipping. The price of shipping is available in Checkout. Multiple shipping addresses count separately. For other destinations (including international), shipping cost is calculated at checkout. Delivery date will be estimated at checkout.
        </div>
      </div>
    </div>
    <div>
      <SubMenus />
    </div>
    <div class="container banner-content background-fourth text-center">
      <p>Holidays Begin Here</p>
      <button class="btn btn-secondary s2-button button-border-radius" type="button">Shop Holiday</button>
    </div>
  </div>
</template>

<script>
import NutsLogo from '@/basics/NutsLogo.vue';
import SearchField from '@/basics/SearchField.vue';
import SubMenus from '@/basics/SubMenus.vue';

export default {
  name: 'HeaderMain',
  components: {
    NutsLogo,
    SearchField,
    SubMenus
  },
  data() {
    return {
      shippingDots: require("../../assets/images/free-shipping-dots.png"),
      bannerMain: require("../../assets/images/banner-main.png"),
      searchText: null,
      banner: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.free-shipping {
  font-size: $font16;
}
.free-shipping > img {
  width: 20% !important;
  height: auto;
}
.free-shipping:hover {
  color: $white !important;
  background-color: $secondary;
  border-radius: $border-radius $border-radius 0 0;
}

.nut-text {
  position: absolute;
  font-size: $font12;
  font-weight: bold;
  top: 90px;
  float: left;
  margin-left: 204px;
}
.nut-types {
  color: $secondary;
  text-decoration: underline;
  cursor: pointer;
}
.floating-div {
  font-size: $font14;
  background-color: $secondary;
  color: $white;
}

.banner-main {
  width: 100%;
}
.banner-content {
  background-image: url("../../assets/images/banner-main.png");
  background-size: cover;
  background-position: center;
  height: 300px;
  padding-top: 70px;

  p {
    font-size: 40px;
    color: $white;
    font-weight: bold;
  }
}
</style>

<template>
  <div class="product-filters">
    <div class="text-f12 letter-spacing text-bold">FILTER BY</div>

    <!-- <hr class="my-2">

    <div @click="toggleExpandCollapse('RATINGS')" class="text-f16 letter-spacing text-bold d-flex space-between align-items-center cursor-pointer">
      <div>
        RATINGS
      </div>
      <span v-if="sectionExpanded != 'RATINGS'" class="text-f24 py-0 my-0">+</span>
      <span v-else class="text-f24 py-0 my-0">-</span>
    </div>
    <div v-show="sectionExpanded == 'RATINGS'" class="py-2">
      <div class="d-flex mb-2" v-for="item, index in 9" :key="index">
        <input class="form-check-input cursor-pointer" type="checkbox" @click="updateFilter('ratings', getNumber(index)/10)" :value="getNumber(index)/10" :id="'flexCheckDefault-'+index">
        <div class="float-left gold-icon">
          <i :class="'star-gold-'+getNumber(index)"></i>
          <i class="star-gold-default"></i>
        </div>
        <span>{{ (getNumber(index)/10).toFixed(1) }}</span>
      </div>
    </div> -->

    <hr class="my-2">

    <div @click="toggleExpandCollapse('PRICE')" class="text-f16 letter-spacing text-bold d-flex space-between align-items-center cursor-pointer">
      <div>
        PRICE
      </div>
      <span v-if="sectionExpanded != 'PRICE'" class="text-f24 py-0 my-0">+</span>
      <span v-else class="text-f24 py-0 my-0">-</span>
    </div>
    <div v-show="sectionExpanded == 'PRICE'" class="py-2 mb-5">
      <div class="mb-5">
        <input class="form-control float-left s-input mb-2" v-model="minPrice" type="number" placeholder="$ Min Price">
        <input class="form-control float-right s-input" v-model="maxPrice" type="number" placeholder="$ Max Price">
      </div>
    </div>

    <hr class="my-2">

    <div @click="toggleExpandCollapse('SALE');" class="my-3 text-f16 letter-spacing text-bold d-flex space-between align-items-center cursor-pointer">
      <div>
        ON SALE
      </div>
      <input class="form-check-input cursor-pointer" v-model="onSale" type="checkbox" id="sale">
    </div>

    <hr class="my-2">
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'ProductFilters',
  data() {
    return {
      sectionExpanded: 'PRICE',
      minPrice: null,
      maxPrice: null,
      onSale: false,
      isBestSeller: false,
    }
  },
  computed: {
    ...mapGetters({
      selectedFilter: 'getFilter'
    }),
  },
  watch: {
    minPrice: function(val) {
      if(val >= 0) {
        this.selectedFilter.minPrice = val;
        this.setProductFilters(this.selectedFilter);
      } else {
        this.selectedFilter.minPrice = null;
        this.setProductFilters(this.selectedFilter);
      }
    },
    maxPrice: function(val) {
      if(val >= 0) {
        this.selectedFilter.maxPrice = val;
        this.setProductFilters(this.selectedFilter);
      } else {
        this.selectedFilter.maxPrice = null;
        this.setProductFilters(this.selectedFilter);
      }
    },
  },
  methods: {
    getNumber(num) {
      return 50 - (num * 5);
    },
    updateFilter(type, val) {
      const alreadyAvailable = this.selectedFilter.ratings.find(el => el.val == val && el.type == type);

      if(!alreadyAvailable) {
        this.selectedFilter.ratings.push({
          type: type,
          val: val
        });
      } else {
        this.selectedFilter.ratings.forEach((item, index) => {
            if (item.val === val) {
              this.selectedFilter.ratings.splice(index, 1);
            }
        });
      }
      this.setProductFilters(this.selectedFilter);

    },
    ...mapActions(["setProductFilters"]),
    toggleExpandCollapse(section) {
      if(this.sectionExpanded == section) {
        this.sectionExpanded = null;
      } else {
        this.sectionExpanded = section;
      }
      if(section == 'SALE') {
        this.onSale = !this.onSale;
        this.selectedFilter.onSale = !this.selectedFilter.onSale;
        this.setProductFilters(this.selectedFilter);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.product-filters {
  text-align: left;
  width: 80%;

  .gold-icon {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 3px;
  }
}
</style>

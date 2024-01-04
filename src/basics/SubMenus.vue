<template>
  <div class="pt-2 pb-2">
    <div class="container">
      <div class="menu-options">
        <span @click="updateMenu('New')" class="text" :class="selectedMenu == 'New' ? 'text-bold text-underline': ''">New</span> | 
        <span @click="updateMenu('Organic')" class="text" :class="selectedMenu == 'Organic' ? 'text-bold text-underline': ''">Organic</span> | 
        <span @click="updateMenu('Raw')" class="text" :class="selectedMenu == 'Raw' ? 'text-bold text-underline': ''">Raw</span> | 
        <span @click="updateMenu('Gluten-free')" class="text" :class="selectedMenu == 'Gluten-free' ? 'text-bold text-underline': ''">Gluten-free</span> | 
        <span @click="updateMenu('Dark Chocolate')" class="text" :class="selectedMenu == 'Dark Chocolate' ? 'text-bold text-underline': ''">Dark Chocolate</span> | 
        <span @click="updateMenu('Sale')" class="text" :class="selectedMenu == 'Sale' ? 'text-bold text-underline': ''">Sale</span> | 
        <span @click="updateMenu('Single Serves')" class="text" :class="selectedMenu == 'Single Serves' ? 'text-bold text-underline': ''">Single Serves</span> | 
        <span @click="updateMenu('Wholesale')" class="text" :class="selectedMenu == 'Wholesale' ? 'text-bold text-underline': ''">Wholesale</span> | 
        <span @click="updateMenu('Office Snakes')" class="text" :class="selectedMenu == 'Office Snakes' ? 'text-bold text-underline': ''">Office Snakes</span> | 
        <span @click="updateMenu('Corporate Gifts')" class="text" :class="selectedMenu == 'Corporate Gifts' ? 'text-bold text-underline': ''">Corporate Gifts</span> | 
        <span @click="updateMenu('Top Sellers')" class="text" :class="selectedMenu == 'Top Sellers' ? 'text-bold text-underline': ''">Top Sellers</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'SubMenus',
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      selectedMenu: 'getSelectedMenu'
    }),
  },
  methods: {
    ...mapActions(["setSelectedMenu"]),
    updateMenu(menu) {
      this.setSelectedMenu(menu);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.menu-options {
  font-size: $font14;
  color: $grey;
}
.menu-options > .text {
  margin: 0px 10px;
  color: $secondary !important;
}
.menu-options > .text:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>

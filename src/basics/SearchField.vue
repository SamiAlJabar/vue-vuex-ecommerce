<template>
  <div class="input-group">
    <input
      class="form-control s-input"
      type="text"
      placeholder="Search for a product"
      v-model="search">
    <div class="input-group-append">
      <button class="btn btn-secondary s-button" type="button">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  props: {
    inputVal: String
  },
  data() {
    return {
      search: this.inputVal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

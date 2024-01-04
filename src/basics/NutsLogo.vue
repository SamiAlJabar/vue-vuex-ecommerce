<template>
  <img class="nuts-logo" :src="nutsLogo" alt="logo">
</template>

<script>
export default {
  name: 'NutsLogo',
  data() {
    return {
      nutsLogo: require("../assets/images/nuts-logo.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nuts-logo {
  max-width: 100%;
  width: 190px;
  height: auto;
}
</style>

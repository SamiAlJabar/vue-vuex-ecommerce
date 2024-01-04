<template>
  <div id="app">
    <MainLayout>
      <router-view/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
@import 'assets/styles/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';

@import 'assets/styles/basics/input.scss';
@import 'assets/styles/basics/button.scss';

#app {
  // IMPORTANT DEFAULT CONFIGURATION FOR MODERN WEB APPS
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: $font16;
  line-height: 1.5;
  letter-spacing: auto;

  // OTHER CSS CONFIGURATION
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F7F5F3;
  color: #282828;
  min-height: 500vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

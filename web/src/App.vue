<template>
  <div class="app">
    <spinner v-show='false'></spinner>
    <router-view></router-view>
  </div>
</template>
</style>
<script>
  import spinner from './components/spinner/spinner.vue'

  export default {
    components: {
      spinner
    }
  }
</script>
<style lang="scss">
body,li,ul,p,h1,h2,h3,dl,dd,dt{padding: 0; margin: 0;}
body,html{height: 100%}
a{text-decoration: none;}
ul,li{list-style: none;}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>

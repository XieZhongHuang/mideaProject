<template>
  <div id="app">
    <div class="hide"></div>
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
[class^="el-icon-fa"], [class*=" el-icon-fa"] {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome!important;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
};
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
  height: 100%;
  .hide{
    width:100%;
    height:100%;
    background-color: #999;
    position: absolute;
    opacity: 0.5;
    z-index: 1000;
    display:none;
  }
}
</style>

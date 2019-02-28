<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
  import header from './components/all/header'
  import footer from './components/all/footer'
export default {
  name: 'app',
  components:{
    appheader: header,
    appfooter: footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Index/> -->
    <Parent/>
  </div>
</template>

<script>
// import Index from './components/communication/index.vue'
import Parent from '@/components/slot/parent.vue'

export default {
  name: 'App',
  components: {
    // Index
    Parent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

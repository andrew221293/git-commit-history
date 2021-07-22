<template>
  <div id="app">
    <v-toolbar app>
      <v-toolbar-title>Home</v-toolbar-title>
    </v-toolbar>
    <Home/>
  </div>
</template>

<script>
import Home from './views/home/pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home
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

<template>
  <the-header id="nav"> </the-header>
  <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  components: { TheHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background-color: rgb(102, 102, 102);
  color: #ffaa3b;
}
section {
  padding: 1rem;
}
</style>

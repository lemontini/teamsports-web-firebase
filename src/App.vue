<template>
  <the-header id="nav"> </the-header>
  <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/players');
      }
    },
  },
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

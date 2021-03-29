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
  beforeCreate() {
    document.body.style.fontFamily = 'Avenir, Helvetica, Arial, sans-serif;';
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
section {
  padding: 1rem;
}
</style>

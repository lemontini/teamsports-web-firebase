<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },
  // computed: {
  //   didAutoLogout() {
  //     return this.$store.getters.didAutoLogout;
  //   },
  // },
  created() {
    this.$store.dispatch('tryLogin');
  },
  // watch: {
  //   didAutoLogout(curValue, oldValue) {
  //     if (curValue && curValue !== oldValue) {
  //       this.$router.replace('/players');
  //     }
  //   },
  // },
};
</script>

<style>
/* section {
  padding: 1rem;
} */

/* html {
  font-family: 'Roboto', sans-serif;
} */

body {
  margin: 0;
  /* style="background-color: rgb(102, 102, 102);" */
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.1s ease-out;
}

.route-leave-active {
  transition: all 0.1s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

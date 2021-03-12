<template>
  <header id="nav">
    <h1>TeamSports</h1>
    <nav>
      <router-link to="/players">Players</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/events">Events</router-link>
    </nav>
    <router-link v-if="!isPlayer" to="/register">SignUp</router-link>
    <!-- <base-button link to="/register">SignUp</base-button> -->
    <base-button v-else>{{ currentUser }}</base-button>
  </header>
</template>

<script>
export default {
  computed: {
    isPlayer() {
      return this.$store.getters['players/isPlayer'];
    },
    currentUser() {
      return this.$store.getters['players/currentUser'];
    },
  },
};
</script>

<style scoped>
#nav {
  width: 100%;
  margin: auto;
  height: 5rem;
  background-color: #424241;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav h1 {
  margin: 0.5rem;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #ffe5d3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid #a08c7a;
  border-radius: 0.5rem 0rem 0.5rem 0rem;
  margin: 0.5rem;
}

#nav a.router-link-exact-active {
  color: #ffaa3b;
}

/* header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
</style>

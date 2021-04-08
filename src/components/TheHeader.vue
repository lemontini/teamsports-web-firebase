<template>
  <header id="nav">
    <div>
      <img class="logo" src="../assets/logo.png" width="50" />
      <h1 class="app-title">TeamSports</h1>
    </div>
    <nav>
      <router-link to="/players">Players</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/events">Events</router-link>
    </nav>
    <base-button link to="/auth" v-if="!isLoggedIn && !isAuthInProgress"
      >Login</base-button
    >
    <base-button link v-else-if="isLoggedIn && !isPlayer" @click="logout"
      >Log off</base-button
    >
    <base-button @click="logout" v-else-if="isLoggedIn && isPlayer">{{
      currentUser
    }}</base-button>
    <!-- {{ isLoggedIn }}
    {{ isPlayer }} -->
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isPlayer() {
      return this.$store.getters['players/isPlayer'];
    },
    currentUser() {
      return this.$store.getters['players/currentUser'];
    },
    isAuthInProgress() {
      return this.$route.path === '/auth';
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/players');
    },
  },
};
</script>

<style scoped>
.logo {
  float: left;
  padding: 0 1rem;
}

.app-title {
  float: left;
}

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

/* #logo {
  float: left;
  text-align: center;
} */

/* header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
</style>

<template>
  <!-- <header id="nav"> -->
  <header>
    <Toolbar class="p-py-2">
      <template #left>
        <!-- <div> -->
        <img class="logo" src="../assets/icons/logo.png" width="30" />
        <h1 class="app-title">TeamSports</h1>
        <!-- </div> -->
      </template>
      <template #right>
        <Tabmenu :model="items" id="nav">
          <router-link to="/players">Players</router-link>
          <router-link to="/locations">Locations</router-link>
          <router-link to="/events">Events</router-link>
        </Tabmenu>

        <Button
          id="login"
          type="button"
          label="Login"
          icon="pi pi-sign-in"
          v-if="!isLoggedIn"
          :loading="isAuthInProgress"
          :class="{ 'p-disabled': isAuthInProgress }"
          @click="goTo('/auth')"
        >
        </Button>
        <!-- <Button link v-else-if="isLoggedIn && !isPlayer" @click="logout"
          >Log off</Button
        > -->
        <Button
          :label="currentUser"
          icon="pi pi-sign-out"
          @click="logout"
          v-else-if="isLoggedIn && isPlayer"
        ></Button>

        <!-- {{ isLoggedIn }}
      {{ isPlayer }} -->
      </template>
    </Toolbar>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      items: [
        { label: 'Players', icon: 'pi pi-users', to: '/players' },
        { label: 'Locations', icon: 'pi pi-home', to: '/locations' },
        { label: 'Events', icon: 'pi pi-calendar', to: '/events' },
      ],
      prevRoute: null,
    };
  },
  computed: {
    ...mapGetters({ isLoggedIn: 'isAuthenticated' }),
    // isLoggedIn() {
    //   return this.$store.getters.isAuthenticated;
    // },
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

  beforeRouteEnter(_, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },

  methods: {
    goTo(link) {
      this.$router.push(link);
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace(this.prevRoute);
    },
  },
};
</script>

<style scoped>
.logo {
  float: left;
  /* padding: 0 1rem; */
}

.app-title {
  float: left;
  margin: 0 1rem 0 1rem;
}

/* #nav {
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
} */

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

<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <!-- <section>
      <base-filter data="player" @change-filter="updateList"></base-filter>
    </section> -->
    <section>
      <base-card>
        <div class="controls">
          <base-button
            v-if="hasPlayers"
            mode="outline"
            @click="loadPlayers(true)"
            >Refresh</base-button
          >
          <!-- <router-link v-if="isLoggedIn && !isPlayer" to="/register"
          >Become a player</router-link
        > -->
          <base-button
            mode="outline"
            v-if="!isPlayer"
            link
            to="/players/register"
            >Register</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasPlayers">
          <player-item
            v-for="player in filteredPlayers"
            :key="player.id"
            :id="player.id"
            :user-name="player.userName"
            :first-name="player.firstName"
            :last-name="player.lastName"
          ></player-item>
        </ul>
        <h3 v-else>No players found.</h3>
      </base-card>
      <router-view />
    </section>
  </div>
</template>

<script>
import PlayerItem from '../../components/players/PlayerItem.vue';

export default {
  components: { PlayerItem },

  data() {
    return {
      isLoading: false,
      error: null,
      filterCriteria: '',
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },

    isPlayer() {
      return this.$store.getters['players/isPlayer'];
    },

    hasPlayers() {
      return !this.isLoading && this.filteredPlayers.length > 0;
    },

    filteredPlayers() {
      const players = this.$store.getters['players/players'];
      return players.filter(player =>
        player.userName.toLowerCase().includes(this.filterCriteria)
      );
    },
  },

  created() {
    this.loadPlayers();
  },

  mounted() {
    this.emitter.on('change-filter', filterCriteria => {
      this.filterCriteria = filterCriteria;
    });
  },

  methods: {
    async loadPlayers(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('players/loadPlayers', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <player-filter @change-filter="updateList"></player-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadPlayers(true)"
          >Refresh</base-button
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
      <h3>{{ hasPlayers }}</h3>
      <p>{{ filteredPlayers }}</p>
    </base-card>
  </section>
</template>

<script>
import PlayerItem from '../../components/players/PlayerItem.vue';
import PlayerFilter from '../../components/players/PlayerFilter.vue';

export default {
  components: { PlayerItem, PlayerFilter },

  data() {
    return {
      isLoading: false,
      error: null,
      filteredPlayers: this.$store.getters['players/players'],
    };
  },

  computed: {
    hasPlayers() {
      return !this.isLoading && this.filteredPlayers.length > 0;
    },
  },

  created() {
    console.log(this.$store.getters['players/players']);
    this.loadPlayers();
    console.log(this.$store.getters['players/players']);
  },

  methods: {
    updateList(filteredPlayers) {
      this.filteredPlayers = filteredPlayers;
    },

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

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
          :userName="player.userName"
          :firstName="player.firstName"
          :lastName="player.lastName"
        ></player-item>
      </ul>
      <h3 v-else>No players found.</h3>
    </base-card>
  </section>
</template>

<script>
import PlayerItem from '../../components/players/PlayerItem.vue';
import PlayerFilter from '../../components/players/PlayerFilter.vue';
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: 'Players',
  components: { PlayerItem, PlayerFilter },

  data() {
    return {
      isLoading: false,
      error: null,
      // filteredPlayers: this.$store.getters['players/players'],
      filteredPlayers: '',
    };
  },

  computed: {
    hasPlayers() {
      // return this.$store.getters['players/hasPlayers'];
      return !this.isLoading && this.filteredPlayers.length > 0;
    },
    // filteredPlayers() {
    //   return this.$store.getters['players/players'];
    // },
    // filteredPlayers: {
    //   get() {
    //     return this.$store.getters['players/players'];
    //   },
    //   set(value) {},
    // },
  },

  created() {
    this.loadPlayers();
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

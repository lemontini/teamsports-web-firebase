<template>
  <section>
    <player-filter @change-filter="updateList"></player-filter>
  </section>
  <section>
    <base-card>
      <ul v-if="hasPlayers">
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
  name: 'Players',
  components: { PlayerItem, PlayerFilter },
  data() {
    return {
      filteredPlayers: this.$store.getters['players/players'],
    };
  },
  computed: {
    hasPlayers() {
      // return this.$store.getters['players/hasPlayers'];
      return this.filteredPlayers.length > 0;
    },
  },
  created() {
    this.loadPlayers();
  },
  methods: {
    updateList(filteredPlayers) {
      this.filteredPlayers = filteredPlayers;
    },
    loadPlayers() {
      this.$store.dispatch('players/loadPlayers');
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

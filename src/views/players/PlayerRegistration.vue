<template>
  <section>
    <!-- <base-card> -->
    <!-- <h2>Register as a player</h2> -->
    <player-form
      title="Register as a player"
      @save-data="saveData"
    ></player-form>
    <!-- </base-card> -->
  </section>
</template>

<script>
import PlayerForm from '../../components/players/PlayerForm.vue';

export default {
  components: { PlayerForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('players/registerPlayer', data);
      this.$router.replace('/players');
    },
  },
};
</script>

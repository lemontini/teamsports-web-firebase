<template>
  <section>
    <base-card>
      <h2>{{ username }}</h2>
      <h3>({{ fullName }})</h3>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedPlayer: null,
    };
  },
  created() {
    this.selectedPlayer = this.$store.getters['players/players'].find(
      player => player.id === this.id
    );
  },
  computed: {
    username() {
      return this.selectedPlayer.username;
    },
    fullName() {
      return this.selectedPlayer.name + ' ' + this.selectedPlayer.surname;
    },
  },
};
</script>

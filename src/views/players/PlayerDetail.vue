<template>
  <section>
    <base-card>
      <h2>{{ userName }}</h2>
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
    userName() {
      return this.selectedPlayer.userName;
    },
    fullName() {
      return this.selectedPlayer.firstName + ' ' + this.selectedPlayer.lastName;
    },
  },
};
</script>

<template>
  <section>
    <base-dialog show title="Player details" @close="back">
      <h2>{{ userName }}</h2>
      <h3>({{ fullName }})</h3>
    </base-dialog>
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
  methods: {
    back() {
      this.$router.replace('/players');
    },
  },
};
</script>

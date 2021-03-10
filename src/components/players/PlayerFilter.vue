<template>
  <base-card>
    <h2>
      <span class="filter-username">
        Find player
        <input
          type="text"
          id="username"
          placeholder="Search username"
          v-model="search"
        />
      </span>
    </h2>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search() {
      const updatedList = this.$store.getters['players/players'].filter(
        player => {
          return player.username
            .toLowerCase()
            .includes(this.search.toLowerCase());
        }
      );
      this.$emit('change-filter', updatedList);
    },
  },
};
</script>

<style scoped>
input {
  padding: 5px 5px;
  font-size: 1.2rem;
}
</style>

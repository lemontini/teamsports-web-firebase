<template>
  <base-card>
    <h2>
      <span class="filter-username">
        Search
        <input
          type="text"
          id="userName"
          placeholder="player"
          autocomplete="off"
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
      this.$emit('change-filter', this.search);
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

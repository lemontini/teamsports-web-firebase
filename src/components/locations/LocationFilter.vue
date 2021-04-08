<template>
  <base-card>
    <h2>
      <span class="filter-name">
        Search
        <input
          type="text"
          id="name"
          placeholder="location"
          autocomplete="off"
          v-model.trim="search"
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
      this.$emit('change-filter', this.search.toLowerCase());
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

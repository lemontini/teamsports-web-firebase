<template>
  <!-- <base-card>
    <h2> -->
  <div class="p-inputgroup">
    <InputText
      class="p-flex"
      type="text"
      id="name"
      :placeholder="data"
      autocomplete="off"
      v-model.trim="search"
    />
    <Button icon="pi pi-search" class="p-button-secondary" />
  </div>
  <!-- </h2>
  </base-card> -->
</template>

<script>
export default {
  props: ['data'],
  // emits: ['change-filter'],
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search() {
      // this.$emit('change-filter', this.search.toLowerCase());
      this.emitter.emit('change-filter', this.search.toLowerCase());
    },
  },
};
</script>

<style scoped>
input {
  /* padding: 5px 5px;
  font-size: 1.2rem; */
  size: 3;
}
</style>

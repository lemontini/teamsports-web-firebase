<template>
  <!-- <base-card>
    <h2> -->
  <div class="p-inputgroup">
    <InputText
      class="p-flex"
      type="text"
      id="name"
      :placeholder="target"
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
      target: '',
    };
  },
  watch: {
    search() {
      // this.$emit('change-filter', this.search.toLowerCase());
      this.emitter.emit('change-filter', this.search.toLowerCase());
    },
  },
  // mounted() {
  //   // console.dir(this.$route);
  //   this.emitter.on('route-changed', route => {
  //     this.target = route;
  //   });
  //   // const route = this.$route;
  //   // if (route) {
  //   //   this.myRoute = route.name.toLowerCase();
  //   // }
  // },
  // beforeUnmount() {
  //   this.emiter.off('route-changed');
  // },
};
</script>

<style scoped>
input {
  /* padding: 5px 5px;
  font-size: 1.2rem; */
  size: 3;
}
</style>

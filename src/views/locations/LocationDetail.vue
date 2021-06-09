<template>
  <Dialog
    class="p-fluid"
    header="Location details"
    @hide="back"
    modal
    closeOnEscape
    dismissableMask
    v-model:visible="display"
  >
    <h2>{{ selectedLocation.name }}</h2>
    <h3>Address: {{ selectedLocation.address }}</h3>
    <h3>Courts: {{ selectedLocation.maxCourts }}</h3>
  </Dialog>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedLocation: null,
      display: true,
    };
  },
  created() {
    this.selectedLocation = this.$store.getters['locations/locations'].find(
      location => location.id === this.id
    );
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>

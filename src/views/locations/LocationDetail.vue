<template>
  <section>
    <base-dialog show title="Location details" @close="back">
      <h2>{{ selectedLocation.name }}</h2>
      <h3>Address: {{ selectedLocation.address }}</h3>
      <h3>Courts: {{ selectedLocation.maxCourts }}</h3>
    </base-dialog>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedLocation: null,
    };
  },
  created() {
    this.selectedLocation = this.$store.getters['locations/locations'].find(
      location => location.id === this.id
    );
  },
  methods: {
    back() {
      this.$router.replace('/locations');
    },
  },
};
</script>

<style></style>

<template>
  <!-- <teleport to="body"> -->
  <!-- <base-card> -->
  <!-- <h2>Register a new location</h2> -->
  <location-form @save-data="saveData"></location-form>
  <!-- </base-card> -->
  <!-- </teleport> -->
</template>

<script>
import LocationForm from '../../components/locations/LocationForm.vue';

export default {
  components: { LocationForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('locations/registerLocation', data);
      this.$router.replace('/locations');
    },
  },
};
</script>

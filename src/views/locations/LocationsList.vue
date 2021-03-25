<template>
  <section>
    <base-card>
      <ul>
        <location-item
          v-for="location in filteredLocations"
          :key="location.id"
          :id="location.id"
          :name="location.name"
          :address="location.address"
          :last-name="location.maxCourts"
        ></location-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import LocationItem from '../../components/locations/LocationItem.vue';

export default {
  components: { LocationItem },
  data() {
    return {
      filteredLocations: this.$store.getters['locations/locations'],
    };
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

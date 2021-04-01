<template>
  <section>
    <base-card>
      <div class="controls">
        <base-button
          v-if="hasLocations"
          mode="outline"
          @click="loadLocations(true)"
        >
          Refresh
        </base-button>
        <base-button mode="outline" link to="/locations/register"
          >Add new</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasLocations">
        <location-item
          v-for="location in filteredLocations"
          :key="location.id"
          :id="location.id"
          :name="location.name"
          :address="location.address"
          :last-name="location.maxCourts"
        ></location-item>
      </ul>
      <h3 v-else>No locations found.</h3>
    </base-card>
    <router-view />
  </section>
</template>

<script>
import LocationItem from '../../components/locations/LocationItem.vue';

export default {
  components: { LocationItem },

  data() {
    return {
      isLoading: false,
      error: null,
      filterCriteria: '',
    };
  },

  computed: {
    hasLocations() {
      return !this.isLoading && this.filteredLocations.length > 0;
    },

    filteredLocations() {
      const locations = this.$store.getters['locations/locations'];
      return locations.filter(location =>
        location.name.includes(this.filterCriteria)
      );
    },
  },

  created() {
    this.loadLocations();
  },

  methods: {
    updateList(filterCriteria) {
      this.filterCriteria = filterCriteria;
    },

    async loadLocations(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('locations/loadLocations', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
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

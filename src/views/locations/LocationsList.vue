<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <section>
      <base-card>
        <div class="controls">
          <base-button
            v-if="hasLocations"
            class="p-button-outlined"
            @click="loadLocations(true)"
            >Refresh
          </base-button>
          <base-button class="p-button-outlined" link to="/locations/register"
            >Create
          </base-button>
        </div>
        <div>
          <div v-if="isLoading">
            <ProgressSpinner />
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
        </div>
      </base-card>
      <router-view />
    </section>
  </div>
</template>

<script>
import LocationItem from '../../components/locations/LocationItem.vue';
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
  components: { LocationItem, BaseCard },

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
        location.name.toLowerCase().includes(this.filterCriteria)
      );
    },
  },

  created() {
    this.loadLocations();
  },

  mounted() {
    this.emitter.on('change-filter', filterCriteria => {
      this.filterCriteria = filterCriteria;
    });
  },

  methods: {
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

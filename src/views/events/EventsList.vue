<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <!-- <section>
      <location-filter @change-filter="updateList"></location-filter>
    </section> -->
    <section>
      <base-card>
        <div class="controls">
          <base-button
            v-if="hasEvents"
            mode="outline"
            @click="loadEvents(true)"
          >
            Refresh
          </base-button>
          <base-button mode="outline" link to="/events/register"
            >Create</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasEvents">
          <!-- <event-item
            v-for="event in filteredEvents"
            :key="event.id"
            :id="event.id"
            :name="event.name"
            :address="event.address"
            :last-name="event.maxCourts"
          ></event-item> -->
        </ul>
        <h3 v-else>No events found.</h3>
      </base-card>
      <router-view />
    </section>
  </div>
</template>

<script>
// import EventItem from '../../components/events/EventItem.vue';
// import EventFilter from '../../components/events/EventFilter.vue';

export default {
  // components: { LocationItem, LocationFilter },

  data() {
    return {
      isLoading: false,
      error: null,
      filterCriteria: '',
    };
  },

  computed: {
    hasEvents() {
      return !this.isLoading && this.filteredEvents.length > 0;
    },

    filteredEvents() {
      const events = this.$store.getters['events/events'];
      return events.filter(event =>
        event.name.toLowerCase().includes(this.filterCriteria)
      );
    },
  },

  created() {
    this.loadEvents();
  },

  methods: {
    updateList(filterCriteria) {
      this.filterCriteria = filterCriteria;
    },

    async loadEvents(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('events/loadEvents', {
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

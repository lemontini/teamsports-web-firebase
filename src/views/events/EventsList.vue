<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <div class="controls">
          <base-button
            v-if="hasEvents"
            class="p-button-outlined"
            @click="loadEvents(true)"
          >
            Refresh
          </base-button>
          <base-button class="p-button-outlined" link to="/events/register"
            >Create</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasEvents">
          <event-item
            v-for="event in filteredEvents"
            :key="event.id"
            :id="event.id"
            :title="event.title"
            :hostId="event.hostId"
            :locationId="event.locationId"
            :players="event.players"
          ></event-item>
        </ul>
        <h3 v-else>No events found.</h3>
      </base-card>
      <router-view />
    </section>
  </div>
</template>

<script>
import EventItem from '../../components/events/EventItem.vue';

export default {
  components: { EventItem },

  data() {
    return {
      isLoading: false,
      error: null,
      filterCriteria: '',
      route: null,
    };
  },

  computed: {
    hasEvents() {
      return !this.isLoading && this.filteredEvents.length > 0;
    },

    filteredEvents() {
      const events = this.$store.getters['events/events'];
      return events.filter(event =>
        event.title.toLowerCase().includes(this.filterCriteria)
      );
    },
  },

  created() {
    this.loadEvents();
  },

  mounted() {
    this.emitter.on('change-filter', filterCriteria => {
      this.filterCriteria = filterCriteria;
    });
    // this.emitter.emit('route-change', this.$route.name.toLowerCase());
  },

  beforeUnmount() {
    this.emitter.off('change-filter');
  },

  methods: {
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

<template>
  <section>
    <base-dialog show title="Event details" @close="back">
      <!-- <Suspense> -->
      <h2 v-if="selectedEvent">{{ selectedEvent.title }}</h2>
      <h3 v-if="hostedBy">Hosted by: {{ hostedBy }}</h3>
      <base-spinner v-else></base-spinner>
      <h3 v-if="location">Location: {{ location }}</h3>
      <base-spinner v-else></base-spinner>
      <!-- <h3>Players: {{ selectedEvent.players }}</h3> -->
      <!-- </Suspense> -->
    </base-dialog>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  props: ['id'],

  data() {
    return {
      selectedEvent: null,
      hostedBy: null,
      location: null,
      playersIsLoading: false,
      locationsIsLoading: false,
    };
  },

  created() {
    this.selectedEvent = this.$store.getters['events/byId'](this.id);
    if (this.selectedEvent) {
      this.loadPlayers().then(() => {
        this.hostedBy = this.getHost();
        this.loadLocations().then(() => {
          this.location = this.getLocation();
        });
      });
    }
  },

  computed: {
    // ...mapGetters('players', ['hasPlayers', 'shouldUpdate']),
    // ...mapGetters('locations', ['hasLocations', 'shouldUpdate']),
  },
  methods: {
    back() {
      this.$router.replace('/events');
    },

    getLocation() {
      return this.$store.getters['locations/byId'](
        this.selectedEvent.locationId
      ).name;
    },

    getHost() {
      return this.$store.getters['players/byId'](this.selectedEvent.hostId)
        .userName;
    },

    async loadPlayers(refresh = false) {
      this.playersIsLoading = true;
      try {
        await this.$store.dispatch('players/loadPlayers', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.playersIsLoading = false;
    },

    async loadLocations(refresh = false) {
      this.locationsIsLoading = true;
      try {
        await this.$store.dispatch('locations/loadLocations', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.locationsIsLoading = false;
    },
  },
};
</script>

<style></style>

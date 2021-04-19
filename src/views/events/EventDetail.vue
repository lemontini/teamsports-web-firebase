<template>
  <section>
    <base-dialog show title="Event details" @close="back">
      <!-- <Suspense> -->
      <h2 v-if="selectedEvent">{{ selectedEvent.title }}</h2>
      <!-- <h3>Hosted by: {{ hostedBy }}</h3> -->
      <h3 v-if="selectedEvent">Location: {{ location }}</h3>
      <base-spinner v-else></base-spinner>
      <!-- <h3>Players: {{ selectedEvent.players }}</h3> -->
      <!-- </Suspense> -->
    </base-dialog>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['id'],
  data() {
    return {
      selectedEvent: null,
      location: null,
      isLoading: false,
    };
  },
  created() {
    // this.selectedEvent = this.$store.getters['events/events'].find(
    //   event => event.id == this.id
    // );
    console.log('id: ' + this.id);
    this.selectedEvent = this.$store.getters['events/byId'](this.id);
    console.log('locationId: ' + this.selectedEvent.locationId);

    if (this.shouldUpdate) {
      this.loadLocations(true);
    }
    console.log('Should update locations? ' + this.shouldUpdate);
    console.log('did we get the location? ' + this.location);

    this.location = this.$store.getters['locations/byId'](
      this.selectedEvent.locationId
    );
  },
  computed: {
    ...mapGetters('locations', ['hasLocations', 'shouldUpdate']),
    // events() {
    //   return this.$store.getters['events/events'];
    // },
    // title() {
    //   return this.selectedEvent.title;
    // },
    // hostedBy() {
    //   if (this.selectedEvent !== null) {
    //     console.dir(this.selectedEvent);
    //     const host = this.$store.getters['players/getById'](
    //       this.selectedEvent.hostId
    //     );
    //     console.log('host: ' + host);
    //     console.log('this.selectedEvent.hostId: ' + this.selectedEvent.hostId);
    //     return host.userName;
    //   } else return null;
    // },
    // hasLocations() {
    //   return this.$store.getters['locations/hasLocations'];
    // },
    locationId() {
      return this.selectedEvent.locationId;
    },
    // location() {
    //   const spot = this.$store.getters['locations/getById'](
    //     this.selectedEvent.locationId
    //   );
    //   console.dir('location read: ' + spot);
    //   return spot.name;
    // },
  },
  methods: {
    back() {
      this.$router.replace('/events');
    },
    async getLocation() {
      const spot = await this.$store.getters['locations/getById'](
        this.locationId
      );
      return spot.name;
    },
    async loadLocations(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('locations/loadLocations', {
          forceRefresh: refresh,
        });
        console.log('GOT? ' + this.$store.getters['locations/locations']);
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
  },
};
</script>

<style></style>

<template>
  <section>
    <base-dialog show title="Event details" @close="back">
      <!-- <Suspense> -->
      <h2>{{ selectedEvent.title }}</h2>
      <h3>Hosted by: {{ hostedBy }}</h3>
      <h3>Location: {{ location }}</h3>
      <h3>Players: {{ selectedEvent.players }}</h3>
      <!-- </Suspense> -->
    </base-dialog>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedEvent: null,
    };
  },
  created() {
    this.selectedEvent = this.events.find(event => event.id === this.id);
  },
  computed: {
    events() {
      return this.$store.getters['events/events'];
    },
    hostedBy() {
      if (this.selectedEvent) {
        console.dir(this.selectedEvent);
        const host = this.$store.getters['players/getById'](
          this.selectedEvent.hostId
        );
        console.log('host: ' + host);
        console.log('this.selectedEvent.hostId: ' + this.selectedEvent.hostId);
        return host.userName;
      } else return null;
    },
    location() {
      const spot = this.$store.getters['locations/getById'](
        this.selectedEvent.locationId
      );
      return spot.name;
    },
  },
  methods: {
    back() {
      this.$router.replace('/events');
    },
  },
};
</script>

<style></style>

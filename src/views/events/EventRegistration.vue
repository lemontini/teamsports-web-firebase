<template>
  <event-form @save-data="saveData"></event-form>
</template>

<script>
import EventForm from '../../components/events/EventForm';

export default {
  components: { EventForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('events/registerEvent', data);
      this.$router.replace('/events');
    },
  },
};
</script>

<style></style>

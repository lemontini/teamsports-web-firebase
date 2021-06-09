<template>
  <li :id="id">
    <router-link :to="locationDetailsLink">
      <h2>{{ name }}</h2>
    </router-link>
    <div class="actions">
      <Button
        class="p-button-rounded"
        @click="confirmDelete()"
        icon="pi pi-times"
      ></Button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'address', 'maxCourts'],
  computed: {
    locationDetailsLink() {
      return this.$route.path + '/' + this.id; // for accessing the location details
    },
  },
  methods: {
    confirmDelete() {
      this.$confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          this.$store.dispatch('locations/deleteLocation', this.id);
          this.$toast.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'Location deleted',
            life: 3000,
          });
        },
        reject: () => {
          this.$toast.add({
            severity: 'error',
            summary: 'Rejected',
            detail: 'You have rejected',
            life: 3000,
          });
        },
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

li {
  margin: 1rem 0;
  border: 1px solid #ffaa3b9c;
  background-color: #504e49;
  border-radius: 0.8rem 0rem 0.8rem 0rem;
  padding: 1rem;
  text-decoration: none;
}

h2 {
  font-size: 1.5rem;
  float: left;
}

h3 {
  font-size: 1.2rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

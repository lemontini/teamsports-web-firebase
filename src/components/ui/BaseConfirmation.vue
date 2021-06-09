<template>
  <ConfirmDialog></ConfirmDialog>
</template>

<script>
export default {
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        address: this.address,
        maxCourts: this.maxCourts,
      };
      console.log(formData);
      this.$store.dispatch('locations/registerLocation', formData);
      this.display = false;
    },
    close() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>

<template>
  <Dialog
    class="p-fluid"
    @hide="close"
    modal
    closeOnEscape
    dismissableMask
    header="New location"
    v-model:visible="display"
  >
    <div class="card">
      <div class="p-field">
        <span class="p-float-label">
          <InputText id="name" type="text" v-model="name" />
          <label for="name">Name</label>
        </span>
      </div>
      <div class="p-field">
        <span class="p-float-label">
          <InputText id="address" type="text" v-model="address" />
          <label for="address">Address</label>
        </span>
      </div>
      <div class="p-field">
        <span class="p-float-label">
          <InputNumber id="maxCourts" v-model="maxCourts" />
          <label for="maxCourts">Max. courts</label>
        </span>
      </div>
    </div>
    <template #footer>
      <Button label="Save" icon="pi pi-check" @click="submitForm" />
    </template>
  </Dialog>
</template>

<script>
export default {
  data() {
    return {
      display: true,
      name: '',
      address: '',
      maxCourts: undefined,
    };
  },
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

<style>
.p-field {
  margin-top: 2rem;
}
</style>

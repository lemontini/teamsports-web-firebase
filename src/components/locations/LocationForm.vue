<template>
  <!-- <div class="backdrop"></div> -->
  <base-dialog show title="Add new location" @close="closeForm">
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !name.isValid }">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model.trim="name.val"
          @blur="clearValidity('name')"
        />
        <p v-if="!name.isValid">Name shouldn't be empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !address.isValid }">
        <label for="address">Address</label>
        <input
          type="text"
          id="address"
          v-model.trim="address.val"
          @blur="clearValidity('address')"
        />
        <p v-if="!address.isValid">Address shouldn't be empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !maxCourts.isValid }">
        <label for="maxCourts">Courts number</label>
        <input
          type="text"
          id="maxCourts"
          v-model.trim="maxCourts.val"
          @blur="clearValidity('maxCourts')"
        />
        <p v-if="!maxCourts.isValid">Courts number shouldn't be empty.</p>
      </div>
      <p v-if="!formIsValid">Please fix the input errors.</p>
      <base-button>Register</base-button>
    </form>
  </base-dialog>
</template>

<script>
import BaseDialog from '../ui/BaseDialog.vue';
export default {
  components: { BaseDialog },
  emits: ['save-data'],
  data() {
    return {
      name: { val: '', isValid: true },
      address: { val: '', isValid: true },
      maxCourts: { val: '', isValid: true },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.formIsValid = true;
      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.address.val === '') {
        this.address.isValid = false;
        this.formIsValid = false;
      }
      if (this.maxCourts.val === '') {
        this.maxCourts.isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        name: this.name.val,
        address: this.address.val,
        maxCourts: this.maxCourts.val,
      };
      this.$emit('save-data', formData);
    },

    closeForm() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

form {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #534841;
  color: #ffe5d3;
} */

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #fdf5e6;
  outline: none;
  border-color: #ffaa3b;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #ffaa3b solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

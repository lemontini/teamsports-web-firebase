<template>
  <!-- <div class="backdrop"></div> -->
  <base-dialog show fixed title="Create event" @close="closeForm">
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !title.isValid }">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          v-model.trim="title.val"
          @blur="clearValidity('title')"
        />
        <p v-if="!title.isValid">Title shouldn't be empty.</p>
      </div>
      <div class="form-control" :class="{ invalid: !location.isValid }">
        <label for="location">Location</label>
        <select
          id="location"
          v-model="location.val"
          @blur="clearValidity('location')"
        >
          <option
            v-for="location in locations"
            :value="location"
            :key="location.id"
          >
            {{ location.name }}
          </option>
        </select>
      </div>
      <!-- <div class="form-control" :class="{ invalid: !players.isValid }">
        <label for="players">Players</label>
        <input
          type="text"
          id="players"
          v-model.trim="players.val"
          @blur="clearValidity('players')"
        />
        <p v-if="!players.isValid">Players shouldn't be empty. [NOOOT]</p>
      </div> -->
      <p v-if="!formIsValid">Please fix the input errors.</p>
      <base-button>Register</base-button>
    </form>
  </base-dialog>
</template>

<script>
export default {
  emits: ['save-data'],

  data() {
    return {
      title: { val: '', isValid: true },
      location: { val: '', isValid: true },
      players: { val: '', isValid: true },
      formIsValid: true,
    };
  },

  watch: {
    location() {
      console.log('changed: ' + this.location.val);
    },
  },

  computed: {
    locations() {
      const locs = this.$store.getters['locations/locations'];
      // console.log(locs);
      return locs;
    },
  },

  created() {
    this.loadLocations();
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.formIsValid = true;
      if (this.title.val === '') {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      // if (this.address.val === '') {
      //   this.address.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.maxCourts.val === '') {
      //   this.maxCourts.isValid = false;
      //   this.formIsValid = false;
      // }
    },

    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      console.log('submit: [' + this.location.val + ']');
      const formData = {
        title: this.title.val,
        locationId: this.location.val.id,
        // players: this.players.val,
      };
      this.$emit('save-data', formData);
    },

    closeForm() {
      this.$router.go(-1);
    },

    async loadLocations(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('locations/loadLocations', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
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

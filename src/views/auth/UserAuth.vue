<template>
  <div>
    <!-- <Dialog :visible="!!isLoading" title="Authenticating..." fixed> -->
    <!-- <base-spinner></base-spinner> -->
    <!-- <ProgressSpinner /> -->
    <!-- </Dialog> -->
    <Message
      v-if="!!error"
      severity="error"
      :closable="false"
      :sticky="false"
      :life="5000"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </Message>
    <ProgressSpinner class="focused" v-if="isLoading" />
    <!-- <BlockUI :blocked="isLoading" :fullScreen="true"> -->
    <Dialog
      :visible="true"
      header="Authentication"
      closeOnEscape
      @update:visible="close"
    >
      <form @submit.prevent="submitForm" class="p-fluid">
        <div class="p-field">
          <label for="email">E-mail</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText
              type="email"
              id="email"
              placeholder="Email"
              v-model.trim="email"
            />
          </div>
        </div>
        <div class="p-field">
          <label for="password">Password</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-lock"></i>
            </span>
            <InputText
              type="password"
              id="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </div>
        <div class="p-fluid p-grid p-mt-5">
          <Button
            type="submit"
            class="p-button-rounded p-button-raised p-col p-mx-2"
            :label="submitButtonCaption"
          />
          <Button
            type="button"
            class="p-button-secondary p-button-rounded p-button-text p-col p-mx-2"
            :label="switchModeButtonCaption"
            @click="switchAuthMode"
          />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password (must be at least 6 caracters
          long).
        </p>
      </form>
    </Dialog>
    <!-- </BlockUI> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
      show: false,
      prevRoute: null,
    };
  },

  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'SignUp';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return '... or SignUp';
      } else {
        return '... or Login';
      }
    },
  },

  beforeRouteEnter(_, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },

  methods: {
    close() {
      this.goBack();
    },

    goBack() {
      this.$router.replace(this.prevRoute);
    },

    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }
        this.goBack();
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try again later.';
        setTimeout(this.handleError, 5000);
      }

      this.isLoading = false;
    },

    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },

    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
/* form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
} */

.focused {
  height: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

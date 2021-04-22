<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <dialog open v-if="show" :style="{ 'z-index': error }">
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu v-if="!fixed">
        <slot name="actions">
          <!-- <base-button v-if="actions">{{ actions }}</base-button> -->
          <base-button v-if="actions" @click="tryClose">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    actions: { type: Boolean, required: false },
    show: { type: Boolean, required: true },
    title: { type: String, required: false },
    fixed: { type: Boolean, required: false, default: false },
    error: { type: String, required: false, default: '50' },
  },
  emits: ['close'],
  created() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit('close');
    },
    handleKeyDown(event) {
      if (event.key === 'Escape') {
        this.$emit('close'); // Pressing the ESC key closes the modal despite the status of 'fixed' attribute
      }
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 50;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.76);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #534841;
  color: #ffe5d3;
}

header {
  background-color: #ffaa3b31;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>

<template>
  <Button v-if="!link" class="p-button-rounded" :class="mode" @click="goTo">
    <slot></slot>
  </Button>
  <router-link
    v-else
    :to="to"
    class="p-button p-button-rounded"
    :class="mode"
    @click="goTo"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
  methods: {
    goTo() {
      this.$router.push(this.to);
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
}
/* button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #ffaa3b;
  border: 1px solid #ffaa3b;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #ff9b17;
  border-color: #ff9100;
}

.flat {
  background-color: transparent;
  color: #ff9b17;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #ff9b17;
  color: #ff9100;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  color: white;
  background-color: #ff9b17;
  border-color: #ff9100;
} */
</style>

<template>
  <li>
    <h2 :class="{ current: isCurrentUser }">{{ userName }}</h2>
    <div class="actions">
      <base-button link :to="playersDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'userName', 'firstName', 'lastName'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    playersDetailsLink() {
      return this.$route.path + '/' + this.id; // for accessing the player details
    },
    isCurrentUser() {
      return this.id === this.$store.state.userId;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ffaa3b9c;
  background-color: #504e49;
  border-radius: 0.8rem 0rem 0.8rem 0rem;
  padding: 1rem;
}

h2 {
  font-size: 1.5rem;
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

.current {
  color: #ffaa3b;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

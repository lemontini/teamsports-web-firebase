<template>
  <li>
    <h2>{{ username }}</h2>
    <!-- <h3>({{ fullName }})</h3> -->
    <div class="actions">
      <base-button link :to="playersDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'username', 'name', 'surname'],
  computed: {
    fullName() {
      return this.name + ' ' + this.surname;
    },
    playersDetailsLink() {
      return this.$route.path + '/' + this.id; // for accessing the player details
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

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

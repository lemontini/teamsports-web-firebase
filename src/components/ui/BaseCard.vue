<template>
  <div class="card">
    <Card>
      <template #content>
        <slot></slot>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  /* padding: 1rem; */
  margin: 0.5rem auto;
  max-width: 40rem;
  background-color: #ffaa3b31;
  color: #ffe5d3;
}
</style>

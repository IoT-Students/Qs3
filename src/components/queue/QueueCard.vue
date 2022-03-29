<template>
  <div class="queue-card">
    <section class="card-grid">
      <div class="queue-number">Nr. {{ person.position }}</div>
      <div class="name">{{ person.name }}</div>
      <div class="info">{{ person.message }}</div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.queue-card {
  padding: 20px;
  width: 40rem;
  cursor: pointer;
  border: 1px solid #1c658c;
  margin-bottom: 18px;
  border-radius: 5px;
}
.queue-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-grid {
  display: grid;
  grid-template-columns: 10% 40% 50%;
}
.queue-number {
}
</style>

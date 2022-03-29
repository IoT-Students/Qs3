<template>
  <div class="queue-card">
    <span>@{{ person.name }} on {{ person.position }}</span>
    <h4>{{ person.message }}</h4>
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
  width: 250px;
  cursor: pointer;
  border: 1px solid lightgreen;
  margin-bottom: 18px;
}
.queue-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
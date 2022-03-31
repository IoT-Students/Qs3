<template>
  <div class="assignmentCard">
    <section class="card-grid">
      <div class="assignment-number">
        Øvingsnummer: {{ assignment.assignmentNumber }}
      </div>
      <div class="status">Status: {{ assignment.status }}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AssignmentCard",

  props: {
    assignment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.assignmentCard {
  padding: 20px;
  width: 40rem;
  cursor: pointer;
  border: 1px solid #1c658c;
  margin-bottom: 18px;
  border-radius: 5px;
}
.assignmentCard:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-grid {
  display: grid;
  grid-template-columns: 10% 40% 50%;
}
</style>

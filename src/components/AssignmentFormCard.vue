<template>
  <button
    class="assignmentCard"
    :class="{ disabled: isApproved }"
    :disabled="isApproved"
  >
    <section class="card-grid">
      <div class="assignment-number">{{ assignment.assignmentNumber }}</div>
    </section>
  </button>
</template>

<script>
export default {
  name: "AssignmentFormCard",

  props: {
    assignment: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isApproved() {
      return this.assignment.status;
    },
  },
};
</script>

<style scoped>
[data-status="true"] {
  color: green;
}
[data-status="false"] {
  color: red;
}
.assignmentCard {
  padding: 0px;
  width: 3rem;
  align-items: center;
  border: 2px solid #1c658c;
  border-radius: 5px;
  margin: 5px;
  height: 2rem;
}
.assignmentCard:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.disabled {
  border: solid green 1px;
}
.disabled:hover {
  cursor: default;
  box-shadow: 0 0 0 0;
  transform: scale(1);
}
</style>

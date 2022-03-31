<template>
  <div class="assignmentCard" data-status="{{assignment.status}}">
    <section class="card-grid">
      <div class="assignment-number">{{ assignment.assignmentNumber }}</div>
      <div class="assignment-status">{{ assignment.status }}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AssignmentFormCard",

  props: {
    assignment: {
      type: Object,
      required: true,
    },
  }
}
</script>


<style scoped>
[data-status="true"] {
  color: green;
}
[data-status="false"] {
  color: red;
}
.assignmentCard{
  padding: 0px;
  width: 3rem;
  margin: 0 auto;
  align-items: center;
  cursor: pointer;
  border: 1px solid #1c658c;
  border-radius: 5px;
}
.assignmentCard:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}



</style>
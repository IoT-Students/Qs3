<template>
  <div class="assignmentCardContainer">
    <section class="card-grid">
      <div class="assignment-number">
        Øving: {{ assignment.assignmentNumber }}
      </div>
      <div class="statusGodkjent" v-if="assignment.status === true">Status: <span id="godkjentSpan">Godkjent</span></div>
      <div class="statusUnderkjent" v-else>Status: <span id="underkjentSpan"> Underkjent</span> </div>
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
.assignmentCardContainer {
  padding: 20px;
  width: 40rem;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 5px;
  margin: 20px auto;
  background-color: darkgrey;

}
.assignmentCardContainer:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-grid {
  display: grid;
  grid-template-columns: 40% 50%;
  font-weight: bold;
}

#godkjentSpan{
  color: green;
}

#underkjentSpan{
  color: red;
}

</style>

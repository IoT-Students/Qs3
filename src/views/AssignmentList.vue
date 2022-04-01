<template>
  <div class="assignments">
    <h2>Øvinger</h2>
    <AssignmentCard
      v-for="assignment in assignments"
      :key="assignment.assignmentId"
      :assignment="assignment"
    />
  </div>
</template>

<script>
import AssignmentCard from "../components/AssignmentCard";
export default {
  props: {
    subjectId: {
      type: Number,
      required: true,
    },
  },
  name: "AssignmentList",
  components: {
    AssignmentCard,
  },
  computed: {
    assignments() {
      return this.$store.state.assignments;
    },
  },
};
</script>

<style scoped></style>

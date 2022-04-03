<template>
  <div class="assignments">
    <h2 class="assignmentListHeader">Øvinger</h2>
    <h3>I {{ this.subjectName }} kreves {{ this.requiredAssignments }} av {{ this.assignments.length }} øvinger for å få godkjent</h3>
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
    subjectName: {
      type: String,
      default: "",
    },
    requiredAssignments: {
      type: String,
      default: "Kan ikke hente requiredAssignments",
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
    subjectId() {
      return this.$store.state.currentSubjectId;
    },
  },
};
</script>

<style scoped>
.assignmentListHeader {
  text-decoration: underline;
  margin-bottom: 40px;
}
</style>

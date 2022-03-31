<template>
  <SubjectCard
    v-for="subject in subjects"
    :key="subject.subjectId"
    :subject="subject"
    :studass="false"
    @click="goToForm(subject.subjectId)"
    @go-to-queue="goToQueue"
    @go-to-assignments="goToAssignments(subject.subjectId)"
  >
  </SubjectCard>
</template>

<script>
import SubjectCard from "../SubjectCard";
export default {
  name: "StudentView",
  components: {
    SubjectCard,
  },
  computed: {
    subjects() {
      return this.$store.state.subjects;
    },
  },
  methods: {
    goToQueue(subjectId) {
      this.$store.dispatch("addCurrentSubjectQueueId", subjectId);
      console.log("ferdig emitted " + subjectId);
      this.$store.dispatch("getAllSubjectQueues", subjectId);
      this.$store.dispatch("getSubjectQueueUser", subjectId);
      this.$router.push({ name: "Queue", params: { subjectId } });
    },
    goToForm(subjectId) {
      console.log("Er nå i form med subjectId: " + subjectId);
      this.$store.dispatch("getAssignments", subjectId);
      this.$router.push({ name: "SubjectQueueForm", params: { subjectId } });
    },
    goToAssignments(subjectId){
      this.$store.dispatch("getAssignments", subjectId);
      this.$router.push({ name: "AssignmentList", params: { subjectId } });

    }
  },
};
</script>

<style scoped></style>

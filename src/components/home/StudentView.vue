<template>
  <SubjectCard
    v-for="subject in subjects"
    :key="subject.subjectId"
    :subject="subject"
    :studass="false"
    @click="goToForm(subject.subjectId)"
    @go-to-queue="goToQueue"
    @go-to-assignments="goToAssignments(subject)"
    :inQueue="inQueue"
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
    inQueue() {
      console.log();
      return this.$store.state.userInQueue;
    },
  },
  methods: {
    goToQueue(subjectId) {
      this.$store.dispatch("addCurrentSubjectQueueId", subjectId);
      this.$store.dispatch("getAllSubjectQueues");
      this.$store.dispatch("getSubjectQueueUser", subjectId);
      this.$router.push({ name: "QueueList" });
    },
    goToForm(subjectId) {
      if (!this.inQueue) {
        console.log("Er nå i form med subjectId: " + subjectId);
        this.$store.dispatch("addCurrentSubjectQueueId", subjectId);
        this.$store.dispatch("getAssignments", subjectId);
        this.$router.push({ name: "SubjectQueueForm" });
      }
    },
    goToAssignments(subject) {
      this.$store.dispatch("addCurrentSubjectQueueId", subject.subjectId);
      this.$store.dispatch("getAssignments", subject.subjectId);
      this.$router.push({ name: "AssignmentList", params: { subjectName: subject.subjectName, requiredAssignments: String(subject.requiredAssignments)} });
    },
  },
};
</script>

<style scoped></style>

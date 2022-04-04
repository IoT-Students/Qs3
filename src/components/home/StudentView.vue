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
      return this.$store.state.userInQueue;
    },
  },
  methods: {
    async goToQueue(subjectId) {
      await this.$store.dispatch("addCurrentSubjectQueueId", subjectId);
      await this.$store.dispatch("getAllSubjectQueues");
      await this.$store.dispatch("getSubjectQueueUser", subjectId);
      await this.$router.push({ name: "QueueList" });
    },
    async goToForm(subjectId) {
      if (!this.inQueue) {
        await this.$store.dispatch("addCurrentSubjectQueueId", subjectId);
        await this.$store.dispatch("getAssignments", subjectId);
        await this.$router.push({ name: "SubjectQueueForm" });
      }
    },
    async goToAssignments(subject) {
      await this.$store.dispatch("addCurrentSubjectQueueId", subject.subjectId);
      await this.$store.dispatch("getAssignments", subject.subjectId);
      await this.$router.push({ name: "AssignmentList", params: { subjectName: subject.subjectName, requiredAssignments: String(subject.requiredAssignments)} });
    },
  },
};
</script>

<style scoped></style>

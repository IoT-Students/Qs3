<template>
  <SubjectCard
    v-for="subject in subjects"
    :key="subject.subjectId"
    :subject="subject"
    :studass="false"
    @click="goToForm(subject.subjectId)"
    @go-to-queue="goToQueue"
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
      this.$router.push({ name: "Queue", params: { subjectId } });
    },
    goToForm(subjectId) {
      console.log(subjectId);
      this.$router.push({ name: "SubjectQueueForm", params: { subjectId } });
    },
  },
};
</script>

<style scoped></style>

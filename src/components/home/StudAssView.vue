<template>
  <SubjectCard
    v-for="subject in subjects"
    :key="subject.subjectId"
    :subject="subject"
    :studass="true"
    @click="goToQueue(subject.subjectId)"
  ></SubjectCard>
</template>

<script>
import SubjectCard from "@/components/SubjectCard";
export default {
  name: "StudAssView",
  components: {
    SubjectCard,
  },
  data() {
    return {};
  },
  computed: {
    subjects() {
      return this.$store.state.subjects;
    },
  },
  methods: {
    goToQueue(subjectId) {
      this.$store.dispatch("addCurrentSubjectQueueId", subjectId);
      this.$store.dispatch("getAllSubjectQueues");
      this.$router.push({ name: "QueueList" });
    },
  },
};
</script>

<style scoped></style>

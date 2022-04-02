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
      console.log(typeof subjectId);
      this.$store.dispatch("addCurrentSubjectQueueId", subjectId);
      console.log("ferdig emitted " + subjectId);
      //this.$store.dispatch("getAllSubjectQueues", subjectId);
      this.$router.push({ name: "QueueList" });
    },
  },
};
</script>

<style scoped></style>

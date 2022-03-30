<template>
  <SubjectCard
    v-for="subject in subjects"
    :key="subject.subjectId"
    :subject="subject"
    :studass="false"
    @click="goToQueue(subject.subjectId)"
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
      this.$router.push({ name: "SubjectQueueForm", params: { subjectId }});
    },
  },
};
</script>

<style scoped></style>

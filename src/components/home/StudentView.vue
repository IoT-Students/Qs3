<template>
  <SubjectCard
    v-for="subject in subjects"
    :key="subject.id"
    :subject="subject"
    :studass="false"
    @click="goToQueue"
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
    goToQueue() {
      this.$router.push({ name: "SubjectQueueForm" });
    },
  },
};
</script>

<style scoped></style>

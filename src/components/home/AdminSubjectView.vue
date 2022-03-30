<template>
  <AdminSubjectCard
      v-for="subject in subjects"
      :key="subject.subjectId"
      :subject="subject"
      :studass="false"
      @click="goToAddStudent(subject.subjectId)"
  >
  </AdminSubjectCard>
</template>

<script>
import AdminSubjectCard from "../AdminSubjectCard";
export default {
  name: "AdminSubjectView",
  components: {
    AdminSubjectCard,
  },
  created() {
    this.$store.dispatch("getSubjects");
  },
  computed: {
    subjects() {
      return this.$store.state.subjects;
    },
  },
  methods: {
    goToAddStudent(subjectId) {
      console.log(subjectId)
      this.$router.push({ name: "AddStudent", params: { subjectId } });
    },
  },
}
</script>

<style scoped>

</style>
<template>
  <AdminSubjectCard
    v-for="subject in subjects"
    :key="subject.subjectId"
    :subject="subject"
    :studass="false"
    @click="showStudents(subject.subjectId)"
    @add-students="goToAddStudent"
    @add-studass="goToAddStudass"
    data-testid="adminSubjectCard"
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
      this.$router.push({ name: "AddStudent", params: { subjectId } });
    },
    goToAddStudass(subjectId) {
      this.$router.push({ name: "AddStudass", params: { subjectId } });
    },
    showStudents(subjectId) {
      this.$store.dispatch("addSubjectStudents", subjectId);
      this.$router.push({ name: "StudentsView" });
    },
  },
};
</script>

<style scoped></style>

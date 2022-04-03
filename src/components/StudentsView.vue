<template>
  <StudentsCard
    v-for="student in students"
    :key="student.userID"
    :student="student"
  ></StudentsCard>
</template>

<script>
import StudentsCard from "@/components/StudentsCard";
export default {
  name: "StudentsView",
  components: { StudentsCard },
  computed: {
    students() {
      return this.$store.state.subjectStudents;
    },
  },
};
</script>

<style scoped>

</style>

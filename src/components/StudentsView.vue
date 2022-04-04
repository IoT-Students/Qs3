<template>
  <StudentsCard
    v-for="student in students"
    :key="student.userID"
    :student="student"
    @click="seeAssignmentStudent(student.userID)"
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
  methods:{
    async seeAssignmentStudent(userId){
      console.log(this.$store.state.currentSubjectId);
      await this.$store.dispatch("getAssignmentsStudent", userId);
      this.$router.push({ name: "AssignmentStudent" });
    }
  }
};
</script>

<style scoped></style>

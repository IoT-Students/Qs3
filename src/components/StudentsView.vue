<template>
  <StudentsCard
    v-for="student in students"
    :key="student.userID"
    :student="student"
    @click="seeAssignmentStudent(student.userID, student.role)"
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
    async seeAssignmentStudent(userId,role){
      await this.$store.dispatch("getAssignmentsStudent", userId);
      if(role === "Student"){
        this.$router.push({ name: "AssignmentStudent" });
      }
    }
  }
};
</script>

<style scoped></style>

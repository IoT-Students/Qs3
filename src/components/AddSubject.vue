<template>
  <h2>Her kan du legge til et fag</h2>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Please register a subject!</h3>
      <div>
        <BaseInput v-model="subject.code" label="SubjectCode" type="text" />

        <BaseInput v-model="subject.name" label="SubjectName" type="text" />
        <BaseInput
          v-model="subject.assignmentAmount"
          label="AssignmentAmount"
          type="text"
        />
      </div>
      <button class="mybtn" type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddSubject",
  data() {
    return {
      subject: {
        code: "",
        name: "",
        assignmentAmount: "",
      },
    };
  },
  methods: {
    submit() {
      const subject = {
        subjectCode: this.subject.code,
        subjectName: this.subject.name,
        assignmentAmount: this.subject.assignmentAmount,
      };
      const response = axios.post("http://localhost:8085/subject", subject);
      response.then((resolvedResult) => {
        console.log(
          this.$store.state.userInfo.name + ", " + resolvedResult.data
        );
        const subjectUser = {
          name: this.$store.state.userInfo.name,
          subjectId: resolvedResult.data,
        };
        axios.post("http://localhost:8085/subject/students/saveTeacherSubject", subjectUser);
        this.$router.push({
          name: "HomeAdmin",
        });
      });
    },
  },
};
</script>

<style scoped></style>

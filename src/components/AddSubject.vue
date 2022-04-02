<template>
  <h2>Her kan du legge til et fag</h2>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Please register a subject!</h3>
      <div>
        <p>Subject code</p>
        <BaseInput v-model="subject.code" type="text" />
        <p>Subject name</p>
        <BaseInput v-model="subject.name" type="text" />
        <p>Assignment amount</p>
        <BaseInput v-model="subject.assignmentAmount" type="text" />
        <p>Required assignment</p>
        <BaseInput v-model="subject.requiredAssignmentAmount" type="text" />
      </div>
      <button class="mybtn" type="submit">Add subject</button>
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
        requiredAssignmentAmount: "",
      },
    };
  },
  methods: {
    submit() {
      if (
        parseInt(this.requiredAssignmentAmount) >
        parseInt(this.assignmentAmount)
      ) {
        alert("You can not have more required assignments, than assignments");
      } else {
        const subject = {
          subjectCode: this.subject.code,
          subjectName: this.subject.name,
          assignmentAmount: this.subject.assignmentAmount,
          requiredAssignments: this.subject.requiredAssignmentAmount,
        };
        console.log(subject.requiredAssignments);
        const response = axios.post("http://localhost:8085/subject", subject);
        response.then((resolvedResult) => {
          console.log(
            this.$store.state.userInfo.name + ", " + resolvedResult.data
          );
          const subjectUser = {
            name: this.$store.state.userInfo.name,
            subjectId: resolvedResult.data,
          };
          axios.post(
            "http://localhost:8085/subject/students/saveTeacherSubject",
            subjectUser
          );
          this.$router.push({
            name: "HomeAdmin",
          });
        });
      }
    },
  },
};
</script>

<style scoped>
.mybtn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 20px;
  margin: 10px;
  background-color: rgba(30, 144, 255, 0.89);
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.mybtn:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mybtn:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.mybtn:focus {
  outline: 0;
}
.mybtn:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
</style>

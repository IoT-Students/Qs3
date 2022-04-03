<template>
  <h2>Her kan du legge til et fag</h2>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Please register a subject!</h3>
      <div>
        <p>Fagkode</p>
        <BaseInput v-model="subject.code" type="text" />
        <BaseErrorMessage v-if="v$.subject.code.$error">{{
          v$.$errors[0].$message
        }}</BaseErrorMessage>
        <p>Navn</p>
        <BaseInput v-model="subject.name" type="text" />
        <BaseErrorMessage v-if="v$.subject.name.$error">{{
          v$.$errors[0].$message
        }}</BaseErrorMessage>
        <p>Totalt antall øvinger</p>
        <BaseInput v-model="subject.assignmentAmount" type="text" />
        <BaseErrorMessage v-if="v$.subject.assignmentAmount.$error">{{
          v$.$errors[0].$message
        }}</BaseErrorMessage>
        <p>Antall øvinger for godkjent</p>
        <BaseInput v-model="subject.requiredAssignmentAmount" type="text" />
        <BaseErrorMessage v-if="v$.subject.requiredAssignmentAmount.$error">{{
          v$.$errors[0].$message
        }}</BaseErrorMessage>
      </div>
      <button class="mybtn" type="submit">Legg til</button>
    </form>
  </div>
</template>

<script>
import BaseErrorMessage from "@/components/BaseErrorMessage";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  name: "AddSubject",
  components: {
    BaseErrorMessage,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
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
  validations() {
    return {
      subject: {
        code: { required },
        name: { required },
        assignmentAmount: { required },
        requiredAssignmentAmount: { required },
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
        this.v$.$validate();
        if (!this.v$.$error) {
          const subject = {
            subjectCode: this.subject.code,
            subjectName: this.subject.name,
            assignmentAmount: this.subject.assignmentAmount,
            requiredAssignments: this.subject.requiredAssignmentAmount,
          };
          console.log(subject.requiredAssignments);
          const response = axios.post(
            "http://localhost:8085/subject",
            subject,
            {
              headers: {
                Authorization: "Bearer " + this.$store.state.userInfo.jwtoken,
              },
            }
          );
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
              subjectUser,
              {
                headers: {
                  Authorization: "Bearer " + this.$store.state.userInfo.jwtoken,
                },
              }
            );
            this.$router.push({
              name: "HomeAdmin",
            });
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.baseInput {
  color: black;
}
input button {
  color: black;
}
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

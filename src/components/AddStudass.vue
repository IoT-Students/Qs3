<template>
  <h1>Her kan du legge til studass</h1>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Registrer en eller flere studasser, med linjeskift mellom hver</h3>
      <p>Eksempel: Etternavn,Fornavn,email@mail.com</p>
      <div>
        <textarea class="inputStudents" v-model="names" />
      </div>

      <BaseErrorMessage v-if="v$.names.$error">{{
          v$.$errors[0].$message
        }}</BaseErrorMessage>
      <div>
      <button class="mybtn" type="submit">Legg til</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  name: "AddStudent",
  props: {
    subjectId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      names: "",
    };
  },
  validations() {
    return {
      names: { required },
    };
  },
  methods: {
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {

        const myArray = this.names.split("\n").map(function (item) {
          return item.trim();
        });

        let subjectUserArray = [];
        for (let i = 0; i < myArray.length; i++) {
          const subjectUser = {
            subjectId: this.subjectId,
            userDetails: myArray[i],
          };
          subjectUserArray.push(subjectUser);
        }


        const response = axios.post(
            "http://localhost:8085/subject/students/saveStudassSubject",
            subjectUserArray,
            {
              headers: {
                Authorization: "Bearer " + this.$store.state.userInfo.jwtoken,
              },
            }
        );
        response.then(() => {
          this.$router.push({
            name: "AdminSubjectView",
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
#input {
  color: black;
}
</style>

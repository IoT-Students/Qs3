<template>
  <h1>Her kan du legge til studass</h1>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Please register student for subject with id!</h3>
      <div>
        <BaseInput v-model="name" label="Name" type="text" />
      </div>
      <button class="mybtn" type="submit">Add Stud.ass</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddStudent",
  props: {
    subjectId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submit() {
      const subjectUser = {
        subjectId: this.subjectId,
        name: this.name,
      };
      console.log(this.subjectId + ", " + this.name);
      const response = axios.post(
        "http://localhost:8085/subject/students/saveTeacherSubject",
        subjectUser
      );
      response.then((resolvedResult) => {
        console.log(resolvedResult.data);
        this.$router.push({
          name: "HomeAdmin",
        });
      });
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

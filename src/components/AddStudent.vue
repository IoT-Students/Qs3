<template>
  <h1>Her kan du legge til studenter</h1>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Please register student for subject with id!</h3>
      <div>
        <BaseInput v-model="name" label="Name" type="text" />
      </div>
      <button class="mybtn" type="submit">Sign up</button>
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
        "http://localhost:8085/saveTeacherSubject",
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

<style scoped></style>

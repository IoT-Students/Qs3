<template>
  <h1>Her kan du legge til studenter</h1>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Please register student for subject with id!</h3>
      <div>
        <textarea class="inputStudents" v-model="names"/>
      </div>
      <div>
        <button class="mybtn" type="submit">Sign up</button>
      </div>
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
      names: "",
    };
  },
  methods: {
    submit() {
      console.log(this.names);
      const myArray = this.names.split(",").map(function(item){
        return item.trim();
      });
      console.log(myArray);

      let subjectUserArray = [];
      for(let i=0; i < myArray.length; i++){
        const subjectUser = {
          subjectId: this.subjectId,
          name: myArray[i],
        };
        subjectUserArray.push(subjectUser)
      }
      console.log(subjectUserArray);

      const response = axios.post(
        "http://localhost:8085/subject/students/saveStudents",
        subjectUserArray
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
.inputStudents{
  height: 100px;
  width: 400px;
  overflow: auto;
}
</style>

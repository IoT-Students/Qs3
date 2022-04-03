<template>
  <h1>Her kan du legge til studass</h1>
  <div class="form-container">
    <form @submit.prevent="submit">
      <h3>Please register student for subject with id!</h3>
      <div>
        <textarea class="inputStudents" v-model="names" />
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
      names: "",
    };
  },
  methods: {
    submit() {
      console.log(this.names);
      const myArray = this.names.split(",").map(function (item) {
        return item.trim();
      });
      console.log(myArray);

      let subjectUserArray = [];
      for (let i = 0; i < myArray.length; i++) {
        const subjectUser = {
          subjectId: this.subjectId,
          name: myArray[i],
        };
        subjectUserArray.push(subjectUser);
      }
      console.log(subjectUserArray);

      console.log(this.subjectId + ", " + this.name);
      const response = axios.post(
          "http://localhost:8085/subject/students/saveStudass",
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

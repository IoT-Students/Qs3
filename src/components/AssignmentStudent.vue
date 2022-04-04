<template>
  <div class="assignments">
    <AssignmentCard
        v-for="assignment in assignments"
        :key="assignment.assignmentId"
        :assignment="assignment"
    />
  </div>
  <div>
    <button @click="goBack" class="mybtn">Back</button>
  </div>
</template>

<script>
import AssignmentCard from "../components/AssignmentCard";
export default {
  name: "AssignmentStudent",
  components: {
    AssignmentCard,
  },
  computed: {
    assignments() {
      return this.$store.state.assignments;
    },
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
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
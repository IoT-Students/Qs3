<template>
  <div class="student-card" v-bind:class="{ active: isStudass }">
    <section class="card-grid">
      <div class="student-name">i</div>
      <div class="name">{{ student.name }}</div>
      <div class="info">{{ student.role }}</div>
      <div id="email">{{ student.email }}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "StudentsCard",
  data() {
    return {
      isStudAss: false,
    };
  },
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isStudass() {
      return (this.student.role === "Studass");
    },
  },

};
</script>

<style scoped>
.student-card {
  padding: 20px;
  width: 40rem;
  cursor: pointer;
  border: 1px solid #1c658c;
  margin: 0 auto;
  margin-bottom: 18px;
  border-radius: 5px;
}
.active{
  border: 1px solid red;
}
.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.card-grid {
  display: grid;
  grid-template-columns: 10% 30% 30% 30%;
}
.name {
  font-weight: bold;
}
</style>

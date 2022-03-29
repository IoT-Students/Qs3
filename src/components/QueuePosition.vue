<template>
  <h1> {{queueInfo.type}} kø</h1>
  <div class="queueInfoContainer">
    <div>Rom: {{queueInfo.room}}</div>
    <div>Bord: {{ queueInfo.table }}</div>
  </div>
  <div ><router-link to="/SubjectQueueForm">Edit info</router-link></div>

  <div class="position">
    <h3> Your position</h3>
    <h1>{{queueInfo.position}}</h1>
  </div>

  <div class="assignments">
    <h3>Assignments</h3>
    <div> {{queueInfo.assignment}}</div>
  </div>
  <button @click="removeFromQueue()">Delete</button>


</template>

<script>
export default {
  data() {
    return {
      queueInfo: {
        room: this.$store.state.subjectQueue.rom,
        table: this.$store.state.subjectQueue.bord,
        type: this.$store.state.subjectQueue.type,
        assignment: this.$store.state.subjectQueue.øvinger,
        position: "5",
      },
    };
  },
  methods: {
    removeFromQueue(){
      alert("You are now removed from the queue")
    }
  }

}
</script>

<style scoped>
.queueInfoContainer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px 20px;

}

</style>
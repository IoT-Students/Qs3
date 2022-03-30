<template>
  <h1>{{ queueUser.type }} kø</h1>
  <div class="queueInfoContainer">
    <div> Bygning: {{ queueUser.building }}</div>
    <div> Rom: {{ queueUser.room }}</div>
    <div> Type: {{queueUser.type}}</div>
  </div>
  <div class="position">
    <h3>Your position</h3>
    <h1> 5 </h1>
  </div>
  <div class="assignments">
    <h3>Assignments</h3>
    <div>{{ queueUser.assignments }}</div>
  </div>
</template>

<script>
export default {
  props: {
    queueUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.queueInfoContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px 20px;
}
</style>

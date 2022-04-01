<template>
  <div id="container">
    <h1>Du er nå i kø!</h1>
    <div class="queueInfoContainer">
      <div>Bygning: {{ queueUser.building }}</div>
      <div>Rom: {{ queueUser.room }}</div>
      <div v-if="queueUser.type === 1">Type: Hjelp</div>
      <div v-else>Type: Godkjenning</div>
    </div>
    <div class="position">
      <h3>Your position</h3>
      <h1>{{ queueUser.position }}</h1>
    </div>
    <div class="assignments">
      <h3>Øving</h3>
      <h3>{{ queueUser.assignment }}</h3>
    </div>
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
#container {
  border: solid #1c658c;
  border-radius: 5px;
  padding: 10px;
}

.queueInfoContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px 20px;
}
</style>

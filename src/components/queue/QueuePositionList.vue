<template>
  <div class="queues">
    <QueuePosition
      v-for="queueUser in subjectQueue"
      :key="queueUser.id"
      :queueUser="queueUser"
    />
  </div>
  <div v-if="isEmpty" class="notInQueue" id="notInQueuePosition">
    Du er ikke i kø. Gå til hjemmmesiden for å stille deg i kø
  </div>
</template>

<script>
import QueuePosition from "./QueuePosition";
export default {
  name: "QueueList",
  components: {
    QueuePosition,
  },
  computed: {
    subjectQueue() {
      return this.$store.state.subjectQueue;
    },
    isEmpty() {
      return this.$store.state.subjectQueue.length < 1 || this.$store.state.subjectQueue === null;
    },
  },
};
</script>

<style scoped>
.queues {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.notInQueue {
  margin: 20px;
}
</style>

<template>
  <div class="queues">
    <QueuePosition
      v-for="queueUser in subjectQueue"
      :key="queueUser.id"
      :queueUser="queueUser"
    />
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
  },
};
</script>

<style scoped>
.queues {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <div class="queues">
    <QueuePosition
        v-for="queueUser in subjectQueue"
        :key="queueUser.id"
        :user="queueUser"
    />
  </div>
  <div><router-link to="/SubjectQueueForm">Edit info</router-link></div>
  <button @click="removeFromQueue()">Delete</button>
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
  methods: {
    removeFromQueue() {
      alert("You are now removed from the queue");
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

<template>
  <div class="queues">
    <QueueCard
      v-for="user in subjectQueues"
      :key="user.subjectQueueId"
      :user="user"
      @click="goToDetails(user.id)"
    />
  </div>
</template>

<script>
import QueueCard from "./QueueCard";
export default {
  name: "QueueList",
  components: {
    QueueCard,
  },
  methods: {
    goToDetails(personId) {
      console.log("Bygning er: " + this.$store.state.subjectQueue.bygning);
      this.$router.push({ name: "QueueCardDetails", params: { personId } });
    },
  },
  computed: {
    subjectQueues() {
      return this.$store.state.subjectQueues;
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

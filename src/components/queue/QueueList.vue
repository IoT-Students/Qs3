<template>
  <div class="queues" v-show="(this.userRole === 'Student')">
    <QueueCard
      v-for="user in subjectQueues"
      :key="user.subjectQueueId"
      :user="user"
    />
  </div>
  <div class="queues" v-show="(this.userRole === 'Studass')">
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
  data() {
    return {
      userRole: this.$store.state.userInfo.role,
    };
  },
  components: {
    QueueCard,
  },
  methods: {
    goToDetails(personId) {
      console.log(this.userRole)
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

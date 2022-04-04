<template>
  <div class="queues" v-show="this.userRole === 'Student'">
    <QueueCard
      v-for="user in subjectQueues"
      :key="user.subjectQueueId"
      :user="user"
    />
  </div>
  <div class="queues" v-show="this.userRole === 'Studass'">
    <QueueCard
      v-for="user in subjectQueues"
      :key="user.subjectQueueId"
      :user="user"
      @click="goToDetails(user)"
    />
  </div>
  <div v-if="isEmpty" id="emptyQueue">Køen er tom!</div>
</template>

<script>
import QueueCard from "./QueueCard";
export default {
  name: "QueueList",
  data() {
    return {
      userRole: this.$store.state.userInfo.role,
      isActive: false,
    };
  },
  components: {
    QueueCard,
  },
  methods: {
    goToDetails(user) {
      this.$store.dispatch("addSubjectQueueJoin", user);
      this.$router.push({ name: "QueueCardDetails" });
    },
  },
  computed: {
    subjectQueues() {
      return this.$store.state.subjectQueues;
    },
    isEmpty() {
      return this.$store.state.subjectQueues.length === 0;
    },
  },
  async created() {
    await this.$store.dispatch("getAllSubjectQueues");
  },
};
</script>

<style scoped>
.queues {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#emptyQueue {
  margin: 20px;
}
</style>

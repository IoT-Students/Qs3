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
    goToDetails(user) {
      console.log(this.userRole);
      console.log("Navn er " + user.name);
      this.$store.dispatch("addSubjectQueueJoin", user);
      //console.log(this.$store.state.subjectQueueJoin.name);
      this.$router.push({ name: "QueueCardDetails"});
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

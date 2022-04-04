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
      console.log(this.userRole);
      console.log("Navn er " + user.name);
      this.$store.dispatch("addSubjectQueueJoin", user);
      //console.log(this.$store.state.subjectQueueJoin.name);
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
  mounted() {
    //console.log("Mounted getAllSubjectQueues");
    //this.$store.dispatch("getAllSubjectQueues");
  },
};
</script>

<style scoped>
.queues {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.active {
  background-color: lightgreen;
}
#emptyQueue {
  margin: 20px;
}
</style>

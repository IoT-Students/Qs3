<template>
  <div v-show="!isEmpty" id="container">
    <h1>Du er nå i kø!</h1>
    <div class="queueInfoContainer">
      <div id="Building">Bygning: {{ queueUser.building }}</div>
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
    <div class="leavQueueContainer">
      <button @click="leaveQueue" class="leaveQueue">Forlat kø</button>
    </div>
  </div>
</template>

<script>
import {isUserInQueue, leaveQueue} from "@/service/apiservice";

export default {
  props: {
    queueUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async leaveQueue() {
      await leaveQueue(this.queueUser, this.$store.state.userInfo.jwtoken);
      let response = await isUserInQueue(
        this.$store.state.userInfo.userID,
        this.$store.state.userInfo.jwtoken
      );
      await this.$store.dispatch("setUserInQueue", response);
      await this.$store.dispatch("resetSubjectQueue");
      await this.$store.dispatch("getAllSubjectQueues");
      this.$router.push({ name: "QueuePositionList" });
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
}
.leaveQueue {
  border: solid #2e74f3;
  color: #2153ad;
  background: floralwhite;
  width: 200px;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
}
.leaveQueue:hover {
  color: floralwhite;
  background: #2e74f3;
  cursor: pointer;
}

.queueInfoContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px 20px;
}
</style>

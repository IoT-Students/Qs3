<template>
  <div v-if="!($store.state.subjects.length === 0)" class="homeViewContainer">
    <div @click="goToPosition" v-if="inQueue" class="inQueue">
      <h2>I kø</h2>
    </div>
    <h4>Dine emner:</h4>
    <router-view></router-view>
  </div>
  <div v-else>Ingen fag registrert!</div>
</template>

<script>
export default {
  name: "HeaderLayout",
  computed: {
    isEmpty() {
      return this.$store.state.subjects.length === 0;
    },
    inQueue() {
      return this.$store.state.userInQueue;
    },
  },
  methods: {
    goToPosition() {
      this.$router.push({ name: "QueuePositionList" });
    },
  },
};
</script>

<style scoped>
.headerButtonsContainer {
  display: block;
  margin: 2rem auto 2rem auto;
  padding: 0 1rem 0 1rem;
  grid-column-start: 1;
  grid-column-end: 4;
  width: 90%;
  max-width: 800px;
}

.headerButtons {
  display: flex;
  justify-content: center;
}

.default {
  max-width: 0;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  height: 20px;
  font-weight: bold;
  transition: 2s ease;
}
.inQueue {
  max-width: 300px;
  margin: 0 auto;
  border: solid green;
  padding: 20px;
  border-radius: 10px;
  height: 25px;
  font-weight: bold;
  transition: 0.15s ease;
}
.inQueue:hover {
  cursor: pointer;
  background: green;
  color: white;
}
h2 {
  margin: 0;
}
.homeViewContainer {
  border-radius: 10px;
  padding: 1rem;
  margin: 0 auto;
  width: 65%;
  transition: 0.7s ease;
}

.headerButtons a {
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  margin: auto 2rem auto 2rem;
  color: #1c658c;
  border-radius: 5px;
}
.headerButtons a.router-link-exact-active {
  color: white;
  background: #1c658c;
}

.headerButtons a:hover {
  color: white;
  background: #1c658c;
}
</style>

<template>
  <div class="queuePosition">
    <router-link v-show="isStudent" :to="{ name: 'QueuePositionList' }"
      >Posisjon</router-link
    >
    <router-link :to="{ name: 'QueueList' }">Liste</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Queue",
  components: {},
  data() {
    return {};
  },
  computed: {
    isStudent() {
      return this.$store.state.userInfo.role === "Student";
    },
  },
};
</script>
<style scoped>
.queuePosition {
  display: block;
  margin: 2rem auto 2rem auto;
  padding: 0 1rem 0 1rem;
  grid-column-start: 1;
  grid-column-end: 4;
  width: 90%;
  max-width: 800px;
}
.queuePosition a {
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  margin: auto 2rem auto 2rem;
  color: #1c658c;
  border-radius: 5px;
}
.queuePosition a.router-link-exact-active {
  color: white;
  background: #1c658c;
}
.queuePosition a:hover {
  color: white;
  background: #1c658c;
}
</style>

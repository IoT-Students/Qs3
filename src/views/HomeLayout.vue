<template>
  <div v-if="!($store.state.subjects.length === 0)" class="homeViewContainer">
    <h4>Dine emner:</h4>
    <router-view></router-view>
  </div>
  <div v-else>Tomt</div>
</template>

<script>
export default {
  name: "HeaderLayout",
  computed: {
    isEmpty() {
      return this.$store.state.subjects.length === 0;
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
.homeViewContainer {
  border-radius: 10px;
  padding: 1rem;
  margin: 0 auto;
  width: 65%;
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

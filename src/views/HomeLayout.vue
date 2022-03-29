<template>
  <div class="homeViewContainer">
    <div class="headerButtonsContainer">
      <div class="headerButtons">
        <router-link :to="{ name: 'StudentView' }">Student</router-link>
        <router-link :to="{ name: 'StudAssView' }">Stud. Ass</router-link>
        <router-link :to="{ name: 'Archived' }">Arkivert</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
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

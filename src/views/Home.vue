<template>
  <div class="home">
    <h1>Home page</h1>
    <HomeComponent> </HomeComponent>
  </div>
</template>

<script>
import HomeComponent from "../components/HomeComponent";

export default {
  name: "Home",
  components: {
    HomeComponent,
  },
};
</script>


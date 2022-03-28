<template>
  <div class="home">
    <h1>Home page</h1>
    <HomeLayout></HomeLayout>
  </div>
</template>

<script>
import HomeLayout from "@/views/HomeLayout";

export default {
  name: "Home",
  components: {
    HomeLayout,
  },
  data() {
    return {};
  },
};
</script>

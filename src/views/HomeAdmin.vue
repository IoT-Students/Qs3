<template>
  <div class="homeadmin">
    <h1>Home</h1>
    <HomeAdminLayout/>
  </div>
</template>

<script>
import HomeAdminLayout from "@/views/HomeAdminLayout";
export default {
  name: "HomeAdmin",
  components: {
    HomeAdminLayout,
  },
  data() {
    return {};
  },
};

</script>

<style scoped>

</style>

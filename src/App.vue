<template>
  <div id="nav" v-if="!$route.meta.hideNavbar">
    <div id="navContent">
      <p id="nameTitle">{{ $store.state.userInfo.name }}</p>
      <div id="routerButtons">
        <div v-if="isStudent">
          <router-link v-if="isStudent" :to="{ name: 'StudentView' }"
            >Home</router-link
          >
          <router-link :to="{ name: 'SubjectQueueForm' }"
            >Subject Queue Form</router-link
          >
          <router-link :to="{ name: 'Queue' }">Queue</router-link>
        </div>
        <router-link v-if="isStudass" :to="{ name: 'StudAssView' }"
          >Home</router-link
        >
        <router-link v-if="isAdmin" :to="{ name: 'HomeAdmin' }"
          >Home</router-link
        >
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  computed: {
    isStudent() {
      return this.$store.state.userInfo.role === "Student";
    },
    isStudass() {
      return this.$store.state.userInfo.role === "Studass";
    },
    isAdmin() {
      return this.$store.state.userInfo.role === "Admin";
    },
  },
};
</script>
<style>
html {
  background: #eceff4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#routerButtons {
  top: -10px;
  width: 50rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: white;
  background: #1c658c;
  font-weight: bolder;
}

#footer {
  position: relative;
  bottom: 0;
}
#routerButtons {
  justify-content: center;
}

#navContent {
  width: 50rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15% 85%;
  border-bottom: solid #333232;
}

.logOutButton {
  color: white;
  font-weight: bold;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
  background: crimson;
  border-radius: 5px;
}
</style>

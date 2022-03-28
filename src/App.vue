<template>
  <div id="nav" v-if="!$route.meta.hideNavbar">
    <router-link to="/">Login</router-link> |
    <router-link to="/SubjectQueueForm">subjectQueueForm</router-link> |
    <router-link to="/home">Home</router-link>
  </div>
  <router-view />
</template>

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

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

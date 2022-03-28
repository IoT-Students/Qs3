<template>
  <div id="nav" v-if="!$route.meta.hideNavbar">
    <router-link to="/home">Home</router-link>
    <router-link to="/SubjectQueueForm">subjectQueueForm</router-link>
    <router-link to="/queue">Queue</router-link>
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
  padding: 10px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: white;
  background: #42b983;
  font-weight: bolder;
}

#footer {
  position: relative;
  bottom: 0;
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

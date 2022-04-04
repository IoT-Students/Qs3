<template>
  <div id="nav" v-if="!$route.meta.hideNavbar">
    <div id="navContent">
      <p id="nameTitle">{{ $store.state.userInfo.name }}</p>
      <div></div>
      <div id="routerButtons">
        <div v-if="isStudent">
          <router-link
            @click="loadSubjects"
            v-if="isStudent"
            :to="{ name: 'StudentView' }"
            data-testid="studentHome"
            >Hjem</router-link
          >
          <router-link data-testid="studentLogout" :to="{ name: 'Login' }" @click="clearState"
            >Logout</router-link
          >
        </div>
        <div v-if="isStudass">
          <router-link
            @click="loadSubjects"
            :to="{ name: 'StudAssView' }"
            data-testid="studassHome"
            >Hjem</router-link
          >
          <router-link :to="{ name: 'Login' }" @click="clearState"
            >Logout</router-link
          >
        </div>
        <div v-if="isAdmin">
          <router-link
            @click="loadSubjects"
            :to="{ name: 'AdminSubjectView' }"
            data-testid="adminHome"
            >Hjem</router-link
          >
          <router-link :to="{ name: 'Login' }" @click="clearState"
            >Logout</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
import { isUserInQueue } from "@/service/apiservice";

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
  methods: {
    clearState() {
      this.$store.dispatch("resetState");
    },
    loadSubjects() {
      this.$store.dispatch("getSubjects");
      this.userInQueue();
    },
    async userInQueue() {
      let response = await isUserInQueue(
        this.$store.state.userInfo.userID,
        this.$store.state.userInfo.jwtoken
      );
      this.$store.dispatch("setUserInQueue", response);
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
@media (max-width: 480px){
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #1c658c;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    width: 5px;
    height: 5px;
  }

  #nav a.router-link-exact-active {
    color: white;
    background: #1c658c;
    font-weight: bolder;
    width: 5px;
    height: 5px;
  }

  #footer {
    position: relative;
    bottom: 0;
  }
  #routerButtons {
    top: 5px;
    width: 1px;
    padding: 10px;
    align-items: center;
    text-align: right;
    justify-content: right;
    font-size: 0.5rem;

  }

  #navContent {
    width: 22rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 15% 66% 19%;
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


}
@media(min-width: 481px) {
  #nav {
    padding: 30px;
  }
  #routerButtons {
    top: -10px;
    width: 50rem;
  }

  #nav a {
    font-weight: bold;
    color: #1c658c;
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
    padding: 15px;
    width: min-content;
    align-items: center;
    text-align: right;
    justify-content: right;
  }

  #navContent {
    width: 50rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 15% 66% 19%;
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

}



</style>

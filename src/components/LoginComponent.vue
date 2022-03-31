<template>
  <div class="loginContainer border ">

    <div class="header">
      <div>QS<span>3</span></div>
    </div>

    <div class="loginFunction">
      <h1 id="loginTitle">Login to QS3</h1>
      <form class="login" @submit.prevent="SignIn">
        <fieldset>
          <p id="username">Username</p>
          <BaseInput
              id="username"
              class="baseInput"
              v-model="userInfo.username"
              type="text"
          />
        </fieldset>
        <fieldset>
          <p id="password">Password</p>
          <BaseInput
              id="password"
              class="baseInput"
              v-model="userInfo.password"
              type="text"
          />
        </fieldset>
        <BaseButton type="submit" class="mybtn" something="else">
          Sign in
        </BaseButton>
      </form>
    </div>

  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseButton from "./BaseButton";
import { doLogin } from "@/service/apiservice";

export default {
  name: "LoginComponent",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      userInfo: {
        userID: "",
        username: "",
        password: "",
        loginStatus: "",
        role: "",
        name: "",
        email: "",
      },
    };
  },
  methods: {
    async SignIn() {
      let loginResponse = await doLogin(this.userInfo);

      if (loginResponse.loginStatus === "Success") {
        this.$store.dispatch("storeUser", loginResponse);

        switch (loginResponse.role) {
          case "Admin":
            this.$store.dispatch("getSubjects");
            this.$router.push({ name: "HomeAdmin" });
            break;

          case "Student":
            this.$store.dispatch("getSubjects");
            this.$router.push({ name: "StudentView" });
            break;

          case "Studass":
            this.$store.dispatch("getSubjects");
            this.$router.push({ name: "StudAssView" });
            break;

          default:
            alert("Something went wrong with the authentication!");
        }
      }
    },
  },
};
</script>

<style scoped>
.loginContainer{
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 15%;
  width: 300px;
  background-color: darkgray;


}
.border {
  border:1px solid;
  border-color:black;
  border-radius: 25px;
}

.header div{
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-size: 60px;
  font-weight: 500;
}
#username{
  color: black;
}
#password{
  color: black;

}

.header div span{
  color: #5379fa !important;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
mybtn,
label,
input,
optgroup,
select,

input,
[type="text"] {
  height: 100px;
  width: 25%;
  padding: 0 5px;
  font-size: 18px;
}
[type="text"]:focus,
[type="password"]:focus {
  border-color: #39b982;
}

[hidden] {
  display: none;
}
.error {
  border: 1px solid red;
}

.mybtn {
  align-items: center;
  justify-content: space-between;
  width: 170px;
  height: 15px;
  padding: 20px;
  background-color: cornflowerblue;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  transition: all 0.2s linear;
  margin: 0 auto;
}
.mybtn:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mybtn:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.mybtn:focus {
  outline: 0;
}
.mybtn:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}

</style>

<template>
  <div class="loginContainer border">
    <div class="titleInfo">
      <div class="header">
        <div class="logo"><span id="titleSpan">QS</span><span>3</span></div>
      </div>
      <h1 id="loginTitle">Velkommen!</h1>
    </div>

    <div>
      <h5 id="LoginError" v-if="this.$store.state.userInfo.loginStatus === 'Fail'">
        Wrong password or username!
      </h5>
    </div>

    <div class="loginFunction">
      <form class="login" @submit.prevent="SignIn">
        <div class="infoContainer">
          <fieldset>
            <div class="passwordContainer">
              <div class="password">
                <p id="username">Brukernavn</p>
              </div>
              <input
                id="usernameInput"
                class="baseInput"
                v-model="userInfo.username"
                type="text"
              />
            </div>
          </fieldset>
          <fieldset>
            <div class="passwordContainer">
              <div class="password">
                <p id="password">Passord</p>
              </div>
              <input
                id="passwordInput"
                class="baseInput"
                v-model="userInfo.password"
                type="text"
              />
            </div>
          </fieldset>
          <button type="submit" class="mybtn" id="loginButton" something="else">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { doLoginWithToken, isUserInQueue } from "@/service/apiservice";

export default {
  name: "LoginComponent",
  components: {},
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
      let loginResponse = await doLoginWithToken(this.userInfo);

      if (loginResponse.loginStatus === "Success") {
        this.$store.dispatch("storeUser", loginResponse);

        switch (loginResponse.role) {
          case "Admin":
            this.$store.dispatch("getSubjects");
            this.$router.push({ name: "AdminSubjectView" });
            break;

          case "Student":
            this.$store.dispatch("getSubjects");
            // eslint-disable-next-line no-case-declarations
            let userInQueue = await isUserInQueue(loginResponse.userID, this.$store.state.userInfo.jwtoken);
            this.$store.dispatch("setUserInQueue", userInQueue);
            this.$router.push({
              name: "StudentView",
            });
            break;

          case "Studass":
            this.$store.dispatch("getSubjects");
            this.$router.push({ name: "StudAssView" });
            break;

          default:
            alert("Something went wrong with the authentication!");
        }
      }else{
        this.$store.dispatch("storeUser", loginResponse);
      }
    },
  },
};
</script>

<style scoped>
.loginContainer {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  justify-content: center;
  margin: 50px auto;
  margin-top: 15%;
  width: 300px;
}
.logo {
  color: black;
}
.baseInput {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  color: black;
  line-height: 1.5;
  height: 20px;
  margin: 0;
  border-radius: 7px;
  background-color: rgba(23, 28, 37, 0.4);
}
#usernameInput {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  color: white;
  line-height: 1.5;
  height: 30px;
  width: 170px;
  margin: 0;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.11);
}
#passwordInput {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  color: white;
  line-height: 1.5;
  height: 30px;
  width: 170px;
  margin: 0;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.11);
}
#titleSpan {
  color: black;
}
#LoginError{
  color: black;
  font-size: 15px;
  font-weight: 300;
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 5px;
  border-radius: 5px;
  border: solid 1px red;
  background-color: rgba(255, 0, 0, 0.27);
}

#loginTitle {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-weight: 100;
  font-size: 28px;
  color: black;
}
.header {
  width: 100px;
  margin: 0 auto;
  margin-top: 20px;
}

.header div {
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 40px;
  font-weight: 500;
}
#username {
  color: #c9d1d9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  margin: 0 auto;
}
#password {
  color: #c9d1d9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  margin: 0 auto;
}
.infoContainer {
  border: 1px solid rgba(0, 0, 0, 0.96);
  border-radius: 10px;
  background-color: #161b22;
}

.header div span {
  color: #5379fa;
}
.passwordContainer {
  max-width: 180px;
  margin: 0 auto;
}
.password {
  text-align: left;
}

fieldset {
  border: 0;
  margin: 20px;
  padding: 0;
}

#loginButton {
  margin-bottom: 10px;
  width: 100px;
}
mybtn,
label,
input,
optgroup,
select,
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
  padding: 10px;
  width: 180px;
  color: white;
  background-color: #5379fa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  border-radius: 6px;
  font-weight: 700;
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

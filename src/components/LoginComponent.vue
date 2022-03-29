<template>
  <div id="loginContainer">
    <h1 id="loginTitle">Please login!</h1>
    <form class="login" @submit.prevent="SignIn">
      <fieldset>
        <BaseInput
          id="username"
          class="baseInput"
          v-model="userInfo.username"
          label="Username"
          type="text"
        />
      </fieldset>
      <fieldset>
        <BaseInput
          id="password"
          class="baseInput"
          v-model="userInfo.password"
          label="Password"
          type="text"
        />
      </fieldset>
      <BaseButton type="submit" class="mybtn" something="else">
        Sign in
      </BaseButton>
    </form>
    <label id="loginstatusLabel"></label>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseButton from "./BaseButton";

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
      },
    };
  },
  methods: {
    async SignIn() {
      this.$store.dispatch("storeUser", this.userInfo).then(async () => {
        if (this.userInfo.loginStatus === "Success") {
          await this.$router.push({
            name: "Home",
          });
          alert("Welcome");
        }
      });
    },
  },
};
</script>

<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
mybtn,
label,
input,
textarea {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
mybtn,
input {
  overflow: visible;
}
mybtn,
select {
  text-transform: none;
}
mybtn,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
}
mybtn::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
mybtn:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
input.error,
select.error {
  margin-bottom: 0;
}
input + p.errorMessage {
  margin-bottom: 24px;
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  margin-right: 0.5rem;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type="text"],
[type="number"],
[type="search"],
[type="password"] {
  height: 52px;
  width: 40%;
  padding: 0 10px;
  font-size: 20px;
}
[type="text"]:focus,
[type="number"]:focus,
[type="search"]:focus,
[type="password"]:focus {
  border-color: #39b982;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
.error {
  border: 1px solid red;
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}
.field {
  margin-bottom: 24px;
}
.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
}
.mybtn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 20px;
  margin: 10px;
  background-color: lightgreen;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
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

#header {
  color: #39b982;
}
</style>

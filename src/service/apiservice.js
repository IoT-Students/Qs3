import axios from "axios";

export function doLogin(userInfo) {

    const loginRequest = {
        username: userInfo.username,
        password: userInfo.password,
    };
  return axios
    .post("http://localhost:8085/login", loginRequest)
    .then((response) => {
        userInfo.loginStatus = response.data.loginStatus;
        userInfo.userID = response.data.userID;
        userInfo.name = response.data.name;
        userInfo.email = response.data.email;
        userInfo.role = response.data.role;
      return response.data;
    });
}

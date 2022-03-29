import axios from "axios";

export function doLogin(userInfo) {
  const loginRequest = {
    username: userInfo.username,
    password: userInfo.password,
  };
  return axios
    .post("http://localhost:8085/login", loginRequest)
    .then((response) => {
      return response.data;
    });
}

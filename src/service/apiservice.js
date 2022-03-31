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

export function addSubjectQueue(subjectQueue) {
  return axios
    .post("http://localhost:8085/subjectQueue", subjectQueue)
    .then((response) => {
      return response.data;
    });
}
export function getSubjects(userId) {
  return axios
    .get("http://localhost:8085/subject/" + userId)
    .then((response) => {
      return response.data;
    });
}
export function getSubjectQueues(subjectId) {
  return axios
    .get("http://localhost:8085/subjectQueue/" + subjectId)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function getSubjectQueueUser(subjectId, userId) {
  return axios
    .get("http://localhost:8085/subjectQueue/" + subjectId + "/" + userId) //Må legge inn subjectId i getSubjectQueues metoden i state
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export function getStudentsInSubject(subjectId) {
  return axios.get("http://localhost:8085/" + subjectId).then((response) => {
    console.log(
      "Alle studenter fra subjectId " + subjectId + " er " + response.data
    );
    return response.data;
  });
}

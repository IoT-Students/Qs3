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
      console.log(typeof subjectQueue.assignment);
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
      return response.data;
    });
}

export function getSubjectQueueUser(subjectId, userId) {
  return axios
    .get("http://localhost:8085/subjectQueue/" + subjectId + "/" + userId)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    });
}

export function getStudentsInSubject(subjectId) {
  return axios
    .get("http://localhost:8085/subject/students/" + subjectId)
    .then((response) => {
      console.log(
        "Alle studenter fra subjectId " + subjectId + " er " + response.data
      );
      return response.data;
    });
}

export function approveAssignment(approvedAssignment) {
  return axios
    .post("http://localhost:8085/assignment", approvedAssignment)
    .then((response) => {
      return response.data;
    });
}

export function getAssignments(userId, subjectId) {
  return axios
    .get("http://localhost:8085/assignment/" + userId + "/" + subjectId)
    .then((response) => {
      console.log(
        "Alle øvinger til en student i et gitt fag er " +
          subjectId +
          " er " +
          response.data
      );
      return response.data;
    });
}

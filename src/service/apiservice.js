import axios from "axios";


export async function doLoginWithToken(userInfo) {

    const loginRequest = {
        username: userInfo.username,
        password: userInfo.password,
    };

  return axios
    .post(`http://localhost:8085/token`, loginRequest)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addSubjectQueue(subjectQueue, token) {
  return axios
    .post("http://localhost:8085/subjectQueue", subjectQueue, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(typeof subjectQueue.assignment);
      return response.data;
    });
}
export function getSubjects(userId, token) {
  return axios
    .get("http://localhost:8085/subject/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getSubjectQueues(subjectId, token) {
  return axios
    .get("http://localhost:8085/subjectQueue/" + subjectId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getSubjectQueueUser(subjectId, userId, token) {
  return axios
    .get("http://localhost:8085/subjectQueue/" + subjectId + "/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    });
}

export function getUserInQueue(userId, token) {
  return axios
    .get("http://localhost:8085/subjectQueue/queue/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    });
}

export function getStudentsInSubject(subjectId, token) {
  return axios
    .get("http://localhost:8085/subject/students/" + subjectId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(
        "Alle studenter fra subjectId " + subjectId + " er " + response.data
      );
      return response.data;
    });
}

export function approveAssignment(approvedAssignment, token) {
  return axios
    .post("http://localhost:8085/assignment", approvedAssignment, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getAssignments(userId, subjectId, token) {
    console.log(userId);
  return axios
    .get("http://localhost:8085/assignment/" + userId + "/" + subjectId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
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

export function isUserInQueue(userId, token) {
  return axios
    .get("http://localhost:8085/subjectQueue/in-queue/" + userId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function leaveQueue(disapproveAssignment, token) {
  return axios
    .post(
      "http://localhost:8085/assignment/leave-queue",
      disapproveAssignment,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
}

export function updateQueue(userId, subjectId, token) {
  return axios
    .get(
      "http://localhost:8085/subjectQueue/update/" + subjectId + "/" + userId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
}

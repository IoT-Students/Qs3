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

export function addSubjectQueue(subjectQueue){

    const subjectQueueRequest = {
        campus: subjectQueue.campus,
        building: subjectQueue.building,
        room: subjectQueue.room,
        table: subjectQueue.table,
        assignments: subjectQueue.assignments,
        type: subjectQueue.type
    }

    return axios
        .post("http://localhost:8085/subjectQueue", subjectQueueRequest)
        .then((response) => {
            return response.data;
        });
}
export function getSubjects(userId){
    return axios
        .get("http://localhost:8085/subject/" + userId)
        .then((response) => {
            return response.data;
        });
}



import { createStore } from "vuex";
import {
  getAssignments,
  getSubjectQueues,
  getSubjectQueueUser,
  getSubjects,
} from "../service/apiservice";
import { addSubjectQueue, getStudentsInSubject } from "../service/apiservice";

export default createStore({
  state: {
    subjectQueueJoin: {},
    subjectQueue: {},
    currentSubjectId: null,
    userInfo: {},
    subjects: [],
    subjectQueues: [],
    subjectStudents: [],
    assignments: [],
  },
  mutations: {
    SET_SUBJECT_QUEUE_JOIN(state, subjectQueueJoin) {
      state.subjectQueueJoin = subjectQueueJoin;
    },
    ADD_SUBJECT_QUEUE(state, subjectQueue) {
      state.subjectQueue = subjectQueue;
    },
    SET_SUBJECT_QUEUE_ID(state, subjectId) {
      state.currentSubjectId = subjectId;
    },
    SET_SUBJECT_QUEUES(state, subjectQueues) {
      state.subjectQueues = subjectQueues;
    },
    SET_SUBJECT_QUEUE_USER(state, subjectQueue) {
      state.subjectQueue = subjectQueue;
    },
    ADD_USER(state, userInfo) {
      state.userInfo = userInfo;
    },
    ADD_SUBJECT(state, subject) {
      state.subjects.push(subject);
    },
    SET_SUBJECTS(state, subjects) {
      state.subjects = subjects;
    },
    SET_STUDENTS(state, students) {
      state.subjectStudents = students;
    },
    SET_ASSIGNMENTS(state, assignments) {
      state.assignments = assignments;
    },
  },
  actions: {
    addSubjectQueueJoin({ commit }, subjectQueueJoin) {
      commit("SET_SUBJECT_QUEUE_JOIN", subjectQueueJoin);
    },
    async addSubjectStudents({ commit }, subjectId) {
      let students = await getStudentsInSubject(subjectId);
      commit("SET_STUDENTS", students);
    },
    addCurrentSubjectQueueId({ commit }, subjectId) {
      commit("SET_SUBJECT_QUEUE_ID", subjectId);
    },
    createSubjectQueue({ commit }, subjectQueue) {
      commit("ADD_SUBJECT_QUEUE", subjectQueue);
      addSubjectQueue(subjectQueue).then((response) => {
        return response;
      });
    },
    getAllSubjectQueues({ commit }) {
      getSubjectQueues(this.state.currentSubjectId)
        .then((response) => {
          commit("SET_SUBJECT_QUEUES", response);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSubjectQueueUser({ commit }, subjectId) {
      getSubjectQueueUser(subjectId, this.state.userInfo.userID)
        .then((response) => {
          commit("SET_SUBJECT_QUEUE_USER", response);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
      console.log(this.state.userInfo.userID);
    },
    getSubjects({ commit }) {
      console.log(this.state.userInfo.userID);
      getSubjects(this.state.userInfo.userID)
        .then((response) => {
          commit("SET_SUBJECTS", response);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAssignments({ commit }) {
      getAssignments(this.state.userInfo.userID, this.state.currentSubjectId)
        .then((response) => {
          commit("SET_ASSIGNMENTS", response);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  modules: {},
});

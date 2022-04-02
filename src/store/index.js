import { createStore } from "vuex";
import {
  addSubjectQueue,
  getAssignments,
  getStudentsInSubject,
  getSubjectQueues,
  getSubjectQueueUser,
  getSubjects,
} from "../service/apiservice";

const getDefaultState = () => {
  return {
    subjectQueueJoin: {},
    subjectQueue: {},
    currentSubjectId: null,
    userInfo: {},
    subjects: [],
    subjectQueues: [],
    subjectStudents: [],
    userInQueue: false,
  };
};
const state = getDefaultState();

export default createStore({
  state,
  mutations: {
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    SET_USER_IN_QUEUE(state, inQueue) {
      state.userInQueue = inQueue;
    },
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
    resetState({ commit }) {
      console.log("Reset state!");
      commit("RESET_STATE");
    },
    setUserInQueue({ commit }, inQueue) {
      commit("SET_USER_IN_QUEUE", inQueue);
    },
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
    async createSubjectQueue({ commit }, subjectQueue) {
      console.log(subjectQueue);
      commit("ADD_SUBJECT_QUEUE", subjectQueue);
      return await addSubjectQueue(subjectQueue);
    },
    getAllSubjectQueues({ commit }) {
      getSubjectQueues(this.state.currentSubjectId)
        .then((response) => {
          commit("SET_SUBJECT_QUEUES", response);
          console.log("DETTE ER RESPONSEN FRA QUEUES");
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
          console.log("DETTE ER RESPONSEN FRA QUEUE");
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

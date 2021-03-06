import { createStore } from "vuex";
import {
  addSubjectQueue,
  getAssignments,
  getStudentsInSubject,
  getSubjectQueues,
  getSubjectQueueUser,
  getSubjects,
  getUserInQueue,
} from "../service/apiservice";

const getDefaultState = () => {
  return {
    subjectQueueJoin: {},
    subjectQueue: null,
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
    SET_CURRENT_SUBJECTID(state,subjectId){
      state.currentSubjectId = subjectId;
    }
  },
  actions: {
    resetState({ commit }) {
      commit("RESET_STATE");
    },
    setUserInQueue({ commit }, inQueue) {
      commit("SET_USER_IN_QUEUE", inQueue);
    },
    addSubjectQueueJoin({ commit }, subjectQueueJoin) {
      commit("SET_SUBJECT_QUEUE_JOIN", subjectQueueJoin);
    },
    async addSubjectStudents({ commit }, subjectId) {
      let students = await getStudentsInSubject(
        subjectId,
        this.state.userInfo.jwtoken
      );
      commit("SET_STUDENTS", students);
      commit("SET_CURRENT_SUBJECTID", subjectId)
    },
    addCurrentSubjectQueueId({ commit }, subjectId) {
      commit("SET_SUBJECT_QUEUE_ID", subjectId);
    },
    async createSubjectQueue({ commit }, subjectQueue) {
      commit("ADD_SUBJECT_QUEUE", subjectQueue);
      return await addSubjectQueue(subjectQueue, this.state.userInfo.jwtoken);
    },
    getAllSubjectQueues({ commit }) {
      getSubjectQueues(this.state.currentSubjectId, this.state.userInfo.jwtoken)
        .then((response) => {
          commit("SET_SUBJECT_QUEUES", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getUserInQueue({ commit, dispatch }) {
      let response = await getUserInQueue(
        this.state.userInfo.userID,
        this.state.userInfo.jwtoken
      );
      commit("SET_SUBJECT_QUEUE_USER", response);
      commit("SET_SUBJECT_QUEUE_ID", response[0].subjectId);
      dispatch("getAllSubjectQueues");
    },

    getSubjectQueueUser({ commit }, subjectId) {
      getSubjectQueueUser(
        subjectId,
        this.state.userInfo.userID,
        this.state.userInfo.jwtoken
      )
        .then((response) => {
          commit("SET_SUBJECT_QUEUE_USER", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
    },

    getSubjects({ commit }) {
      getSubjects(this.state.userInfo.userID, this.state.userInfo.jwtoken)
        .then((response) => {
          commit("SET_SUBJECTS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAssignments({ commit }) {
      getAssignments(
        this.state.userInfo.userID,
        this.state.currentSubjectId,
        this.state.userInfo.jwtoken
      )
        .then((response) => {
          commit("SET_ASSIGNMENTS", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAssignmentsStudent({ commit }, userId) {
      getAssignments(
          userId,
          this.state.currentSubjectId,
          this.state.userInfo.jwtoken
      )
          .then((response) => {
            commit("SET_ASSIGNMENTS", response);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    resetSubjectQueue({ commit }) {
      commit("ADD_SUBJECT_QUEUE", []);
    },
  },

  modules: {},
});

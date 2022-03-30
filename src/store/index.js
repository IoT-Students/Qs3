import { createStore } from "vuex";
import { getSubjectQueues, getSubjects} from "../service/apiservice";
import { addSubjectQueue } from "../service/apiservice";

export default createStore({
  state: {
    subjectQueue: {},
    userInfo: {},
    subjects: [],
    subjectQueues: [],

  },
  mutations: {
    ADD_SUBJECT_QUEUE(state, subjectQueue) {
      state.subjectQueue = subjectQueue;
    },
    SET_SUBJECT_QUEUES(state, subjectQueues) {
      state.subjectQueues = subjectQueues
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
  },
  actions: {
    createSubjectQueue({ commit }, subjectQueue) {
      commit("ADD_SUBJECT_QUEUE", subjectQueue);
      addSubjectQueue(subjectQueue).then((response) => {
        return response
      })
    },
    getAllSubjectQueues({ commit }){
      getSubjectQueues() ////Legg til subjectId som man er i som parameter
          .then((response) => {
            commit("SET_SUBJECT_QUEUES", response);
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
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
  },

  modules: {},
});

import { createStore } from "vuex";

export default createStore({
  state: {
    subjectQueue: {},
    userInfo: {},
  },
  mutations: {
    ADD_SUBJECT_QUEUE(state, subjectQueue) {
      state.subjectQueue = subjectQueue;
    },
    ADD_USER(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    createSubjectQueue({ commit }, subjectQueue) {
      commit("ADD_SUBJECT_QUEUE", subjectQueue);
      console.log("SubjectQueue er nå lagt inn i state");
      console.log(this.state.subjectQueue);
    },
    storeUser({ commit }, userInfo) {
      commit("ADD_USER", userInfo);
    },
  },
  modules: {},
});

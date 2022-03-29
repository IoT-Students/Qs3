import { createStore } from "vuex";

export default createStore({
  state: {
    subjectQueue: {},
  },
  mutations: {
    ADD_SUBJECT_QUEUE(state, subjectQueue) {
      state.subjectQueue = subjectQueue;
    },
  },
  actions: {
    createSubjectQueue({ commit }, subjectQueue) {
      commit("ADD_SUBJECT_QUEUE", subjectQueue);
      console.log("SubjectQueue er nå lagt inn i state");
      console.log(this.state.subjectQueue);
    },
  },
  modules: {},
});

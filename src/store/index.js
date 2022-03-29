import { createStore } from "vuex";
import { doLogin, getSubjects } from "../service/apiservice";
import { addSubjectQueue } from "../service/apiservice";

export default createStore({
  state: {
    subjectQueue: {},
    userInfo: {},
    subjects: [],
  },
  mutations: {
    ADD_SUBJECT_QUEUE(state, subjectQueue) {
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
  },
  actions: {
    createSubjectQueue({ commit }, subjectQueue) {
      addSubjectQueue(subjectQueue).then(() => {
        commit("ADD_SUBJECT_QUEUE", subjectQueue);
      });
      console.log("SubjectQueue er nå lagt inn i state");
      console.log(this.state.subjectQueue);
    },
    storeUser({ commit }, userInfo) {
      doLogin(userInfo)
        .then(() => {
          if (userInfo.loginStatus === "Success") {
            commit("ADD_USER", userInfo);
          }
          console.log("Nå er jeg i state");
          console.log(this.state.userInfo.userID);
          console.log(this.state.userInfo.loginStatus);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSubjects({ commit }) {
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

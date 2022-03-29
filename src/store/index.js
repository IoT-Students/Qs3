import { createStore } from "vuex";
import { doLogin } from "@/service/apiservice";

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
    createSubjectQueue({commit}, subjectQueue) {
      commit("ADD_SUBJECT_QUEUE", subjectQueue);
      console.log("SubjectQueue er nå lagt inn i state")
      console.log(this.state.subjectQueue)
    },
    storeUser({ commit }, userInfo) {
        doLogin(userInfo)
          .then(() => {
            if (userInfo.loginStatus === "Success") {
              commit("ADD_USER", userInfo);
            }
            console.log("Nå er jeg i state")
            console.log(this.state.userInfo.userID)
            console.log(this.state.userInfo.loginStatus)
          })
          .catch((error) => {
            console.log(error);
          });
    },

  },
  modules: {
    },
})



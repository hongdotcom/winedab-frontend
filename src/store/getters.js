export default {
  subscription(state) {
    console.log("getter subs");
    console.log(state.subs);
    return state.subs;
  },
  profile(state) {
    console.log("getter prof");
    return state.profile;
  },
  wines(state) {
    console.log("getter wine");
    return state.wines;
  },
  quiz(state) {
    console.log("get quiz");
    return state.quiz;
  },
};

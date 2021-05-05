export default {
  SET_SUBSCRIPTION: (state, subs) => {
    state.subs = subs;
    console.log("am i die");
  },
  SET_WINES: (state, wines) => {
    state.wines = wines;
  },
  SET_QUIZ: (state, quiz) => {
    state.quiz = quiz;
  },
  SET_PROFILE: (state, profile) => {
    state.profile = profile;
  },
  SET_UPDATE_SUBS: () => {},
};

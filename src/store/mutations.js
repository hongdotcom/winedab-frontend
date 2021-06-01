export default {
  SET_SUBSCRIPTION: (state, subs) => {
    state.subs = subs;
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
  SET_UPDATE_ORDERS: () => {},
  SET_UPDATE_WINES: () => {},
};

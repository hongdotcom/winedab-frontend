import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      profile: [],
      subs: [],
      wines: [],
    };
  },
  actions: {
    async loadSubscription({ commit }) {
      const response = await axios.get(
        `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
        {}
      );
      commit("SET_SUBSCRIPTION", response.data);
    },
    async loadWines({ commit }) {
      const response2 = await axios.get(
        `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/customers/13?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
        {}
      );
      commit("SET_WINES", response2.data);
    },
    async loadProfile({ commit }) {
      const response3 = await axios.get(
        `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/customers/13?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
        {}
      );
      commit("SET_PROFILE", response3.data);
      console.log(response3.data);
    },
  },
  mutations: {
    SET_SUBSCRIPTION: (state, subs) => {
      state.subs = subs;
      // console.log("this is mutation subs");
      // console.log(subs);
      // console.log("this is state sub mutation");
      // console.log(state.subs);
    },
    SET_WINES: (state, wines) => {
      state.wines = wines;
    },
    SET_PROFILE: (state, profile) => {
      state.profile = profile;
    },
  },
  getters: {
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
  },
});

export default store;

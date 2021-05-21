import axios from "axios";
// Wayne's test ids
// const wineCustId = "745"; //Wayne
const proCustId = "24"; //Wayne
const subCustId = "24"; //Wayne
// const custUUID = "2f2c1e2a-6ca6-4693-b4f9-1c13cc06b72b"; //Wayne

// Junico's test ids
 const wineCustId = "744";
// const subCustId = "24";
 const custUUID = "d7001590-8c1e-11ea-bcbf-07132ae12abf";
export default {
  async loadSubscription({ commit }) {
    console.log("loading subs");
    const response = await axios.get(
      // `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}&customer=24`,
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v1/subscriptions?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}&customer=${subCustId}`,
      {}
    );
    console.log(response.data);
    commit("SET_SUBSCRIPTION", response.data);
  },
  async loadWines({ commit }) {
    // console.log("loading wine");
    const response2 = await axios.get(
      `${process.env.VUE_APP_LARAVEL_ENDPOINT}/api/previouslySelected/${wineCustId}`,
      {}
    );
    console.log(response2.data);
    commit("SET_WINES", response2.data);
  },
  async loadProfile({ commit }) {
    // console.log("loading profile");
    const response3 = await axios.get(
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/customers/${proCustId}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
      {}
    );
    commit("SET_PROFILE", response3.data);
    console.log(response3.data);
  },
  async loadQuiz({ commit }) {
    // console.log("loading quix");
    const response4 = await axios.get(
      `${process.env.VUE_APP_LARAVEL_ENDPOINT}/api/questionnaireAnswers/${custUUID}`,
      {}
    );
    console.log(response4.data);
    commit("SET_QUIZ", response4.data);
  },
  async onholdSubscription({ commit }, payload) {
    // console.log("i m in action onhold" + payload.id + payload.status);
    await axios.put(
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v1/subscriptions/${payload.id}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}&status=${payload.status}`,
      {}
    );
    commit("SET_UPDATE_SUBS");
  },
  async postponeSubscription({ commit }, payload) {
    // console.log("action postpone" + payload.id + payload.nextPaymentDate);
    await axios.put(
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v1/subscriptions/${payload.id}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}&next_payment_date=${payload.nextPaymentDate}`,
      {}
    );
    commit("SET_UPDATE_SUBS");
  },
  async buyMoreOrder({ commit }, payload) {
    console.log("action buy more");
    const response5 = await axios.post(
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
      { payload }
    );
    commit("SET_UPDATE_SUBS");
    console.log(response5.data);
  },
};

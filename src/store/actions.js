import axios from "axios";

// Wayne's test ids
const wineCustId = "745"; //Wayne
const proCustId = "24"; //Wayne
const subCustId = "24"; //Wayne
const custUUID = "2f2c1e2a-6ca6-4693-b4f9-1c13cc06b72b"; //Wayne

// Junico's test ids

// const wineCustId = "181";
// const wineCustId = "744";
// const proCustId = "24";
// const subCustId = "24";
// const custUUID = "d7001590-8c1e-11ea-bcbf-07132ae12abf";
export default {
  async loadSubscription({ commit }) {
    console.log("loading subs");
    const response = await axios.get(
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v1/subscriptions?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}&customer=${subCustId}`,
      {}
    );
    console.log(response.data);
    commit("SET_SUBSCRIPTION", response.data);
  },
  async loadWines({ commit }) {
    // console.log("loading wine");
    const response2 = await axios
      .get(
        `${process.env.VUE_APP_LARAVEL_ENDPOINT}/api/previouslySelected/${wineCustId}`,
        {}
      )
      .catch((err) => {
        console.log(err);
      });
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
    await axios
      .put(
        `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v1/subscriptions/${payload.id}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}&status=${payload.status}`,
        {}
      )
      .catch((err) => {
        console.log(err);
      });
    commit("SET_UPDATE_SUBS");
  },
  async postponeSubscription({ commit }, payload) {
    await axios
      .put(
        `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v1/subscriptions/${payload.id}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}&next_payment_date=${payload.nextPaymentDate}`,
        {}
      )
      .catch((err) => {
        console.log(err);
      });
    commit("SET_UPDATE_SUBS");
  },
  async buyMoreOrder({ commit }, payload) {
    console.log("action buy more");
    const response5 = await axios
      .post(
        `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
        { payload },
        { headers: { "content-type": "application/json" } }
      )
      .catch((err) => {
        console.log(err);
      });
    commit("SET_UPDATE_ORDERS");
    console.log(response5.data);
  },
  async updateSubs({ commit }, payload) {
    console.log("action update subs");
    var data1 = JSON.stringify({
      id: 15807,
      customer_note: "This is a test from app please ignore ",
      line_items: [
        {
          id: 6819,
          product_id: 9193,
          subtotal: "499.00",
          quantity: 1,
          variation_id: 9197,
        },
      ],
    });
    const response6 = await axios
      .put(
        `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders/${payload.id}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
        { data: data1 },
        { headers: { "Content-Type": "application/json" } }
      )
      .catch((err) => {
        console.log(err);
      });
    commit("SET_UPDATE_ORDERS");
    console.log(response6.data);
  },
  async test({ commit }) {
    // console.log("loading quix");
    const response4 = await axios.get(
      `${process.env.VUE_APP_LARAVEL_ENDPOINT}/api/wine-data`,
      {}
    );
    console.log(response4.data);
    commit("SET_QUIZ", response4.data);
  },
};

import axios from "axios";

// Wayne's test ids
// const wineCustId = "745"; //Wayne
// const proCustId = "24"; //Wayne
// const subCustId = "24"; //Wayne
const custUUID = "2f2c1e2a-6ca6-4693-b4f9-1c13cc06b72b"; //Wayne
const klaviyo_id = "01EHBED86VPWD066SGBF173J5G";
console.log(klaviyo_id);
// Junico's test ids

//const wineCustId = "764";
const wineCustId = "194";
 const proCustId = "24";
 const subCustId = "24";
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
    console.log("submit rate & comment");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_id: payload.customer_id,
        payment_method: payload.payment_method,
        payment_method_title: payload.payment_method_title,
        set_paid: payload.set_paid,
        customer_note: payload.customer_note,
        billing: {
          first_name: payload.billing.first_name,
          last_name: payload.billing.last_name,
          address_1: payload.billing.address_1,
          address_2: payload.billing.address_2,
          city: payload.billing.city,
          state: payload.billing.state,
          postcode: payload.billing.postcode,
          country: payload.billing.country,
          email: payload.billing.email,
          phone: payload.billing.phone,
        },
        shipping: {
          first_name: payload.shipping.first_name,
          last_name: payload.shipping.last_name,
          address_1: payload.shipping.address_1,
          address_2: payload.shipping.address_2,
          city: payload.shipping.city,
          state: payload.shipping.state,
          postcode: payload.shipping.postcode,
          country: payload.shipping.country,
        },
        line_items: [
          {
            product_id: payload.line_items[0].product_id,
            quantity: payload.line_items[0].quantity,
          },
        ],
        shipping_lines: [
          {
            method_id: payload.shipping_lines[0].method_id,
            method_title: payload.shipping_lines[0].method_title,
            total: "",
          },
        ],
        coupon_lines: [
          {
            code: "testcheckout!",
          },
        ],
      }),
    };

    const response5 = await fetch(
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
      requestOptions
    );
    console.log("action buy more");
    commit("SET_UPDATE_ORDERS");
    console.log(response5.data);
  },
  async updateSubs({ commit }, payload) {
    console.log("action update subs");
    console.log(payload.product_id);
    console.log(payload.variation_id);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: payload.id,
        customer_note: "This is a test from app please ignore ",
        line_items: [
          {
            id: payload.item_id,
            product_id: payload.product_id,
            subtotal: payload.subtotal,
            quantity: 1,
            variation_id: payload.variation_id,
          },
        ],
      }),
    };
    const response6 = await fetch(
      `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders/${payload.id}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
      requestOptions
    );
    // const response6 = await axios
    //   .put(
    //     `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders/${payload.id}?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
    //     { data: data1 },
    //     { headers: { "Content-Type": "application/json" } }
    //   )
    //   .catch((err) => {
    //     console.log(err);
    //   });
    commit("SET_UPDATE_ORDERS");
    console.log(response6.data);
  },
  async getWines({ commit }) {
    const response7 = await axios.get(
      `${process.env.VUE_APP_LARAVEL_ENDPOINT}/api/wine-data`,
      {}
    );
    console.log(response7.data);
    commit("SET_WINES", response7.data);
  },
  async submitRating({ commit }, payload) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order_delivery_id: payload.order_delivery_id,
        order_id: payload.order_id,
        klaviyoId: klaviyo_id,
        code: payload.code,
        rating: payload.rating,
        comment: payload.comment,
      }),
    };
    console.log("submit rate & comment");
    const response8 = await fetch(
      `${process.env.VUE_APP_LARAVEL_ENDPOINT}/api/rating/${klaviyo_id}`,
      requestOptions
    );

    console.log(response8);
    commit("SET_WINES", response8.data);
  },
};

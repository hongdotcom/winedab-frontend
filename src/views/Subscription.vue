<template>
  <basic-layout page-title="Subscription" page-default-back-link="/profile">
    <ion-page>
      <ion-content> {{ responseData }}</ion-content></ion-page
    >
  </basic-layout></template
>
<script>
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import BasicLayout from "../components/BasicLayout.vue";
import axios from "axios";

export default defineComponent({
  name: "Subscription",
  components: {
    IonContent,
    IonPage,
    BasicLayout,
  },
  data() {
    return { responseData: {} };
  },
  setup() {},
  methods: {
    async fetchOrder() {
      await axios
        .get(
          `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders/10532?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
          {}
        )
        .then((res) => {
          this.responseData = res.data;
          console.log(this.responseData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchProduct() {
      await axios
        .get(
          `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/orders/10532?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
          {}
        )
        .then((res) => {
          this.responseData = res.data;
          console.log(this.responseData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchOrder();
    this.fetchProduct();
  },
});
</script>

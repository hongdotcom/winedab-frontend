<template>
  <basic-layout page-title="Profile" page-default-back-link="/subscription">
    <ion-content class="content">
      <ion-card>
        <h3>Hi {{ responseData.data }}, Good to see you again</h3>
      </ion-card>
    </ion-content>
  </basic-layout></template
>

<script>
import { defineComponent } from "vue";
import { IonContent, IonCard } from "@ionic/vue";
import BasicLayout from "../components/BasicLayout.vue";
import axios from "axios";

export default defineComponent({
  name: "Profile",
  components: {
    IonContent,
    IonCard,
    BasicLayout,
  },
  data() {
    return { responseData: {} };
  },
  setup() {},
  methods: {
    async fetchApi() {
      await axios
        .get(
          `${process.env.VUE_APP_WC_ENDPOINT}/wp-json/wc/v3/customers/13?consumer_key=${process.env.VUE_APP_CONSUMER_KEY}&consumer_secret=${process.env.VUE_APP_CONSUMER_SECRET}`,
          {}
        )
        .then((res) => {
          this.responseData = res;
          console.log(this.responseData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchApi();
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
});
</script>

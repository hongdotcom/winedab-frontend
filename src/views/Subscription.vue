<template>
  <basic-layout page-title="Subscription" page-default-back-link="/profile">
    <ion-content class="content">
      <ion-list>
        <ion-item v-for="subItem in subs" :key="subItem.id">
          <ion-card>
            <ion-card-title>
              <h3>{{ subItem.line_items[0].name }}</h3>

              <ion-card-content>
                {{ subItem.id }}
                <p>
                  {{ subItem.shipping.first_name }}&nbsp;
                  {{ subItem.shipping.last_name }}
                </p>
                <p>Order Date: {{ subItem.date_paid }}</p>
              </ion-card-content>
            </ion-card-title>
          </ion-card>
        </ion-item>
      </ion-list></ion-content
    >
  </basic-layout></template
>
<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
} from "@ionic/vue";
import BasicLayout from "../components/BasicLayout.vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Subscription",
  components: {
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    BasicLayout,
  },
  methods: {
    ...mapActions(["loadSubscription"]),
  },

  computed: {
    ...mapGetters({
      subs: "subscription",
      wines: "wines",
      profile: "profile",
    }),
  },
  created() {
    console.log("i m in created");
    this.loadSubscription();
  },
});
</script>

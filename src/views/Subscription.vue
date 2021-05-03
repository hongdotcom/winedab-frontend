<template>
  <basic-layout page-title="Subscription" page-default-back-link="/profile">
    <ion-content class="content">
      <div v-if="subs.length == 0" class="ion-padding">
        <h3>Sorry! We can't find your valid subscription yet!</h3>
      </div>

      <ion-list v-else>
        <ion-item v-for="subItem in subs" :key="subItem.id">
          <ion-card>
            <ion-row responsive-sm>
              <ion-col>
                <ion-card-title class="ion-padding">
                  <h3>{{ subItem.line_items[0].name }}</h3>
                  <ion-card-content>
                    <p>
                      {{ subItem.shipping.first_name }}&nbsp;
                      {{ subItem.shipping.last_name }}
                    </p>
                    <p>Order Date: {{ subItem.date_paid }}</p>
                    <p>Order Status: {{ subItem.status }}</p>
                  </ion-card-content>
                </ion-card-title>
              </ion-col>
              <ion-col>
                <ion-row>
                  <ion-col>
                    <ion-button
                      class="normalButton"
                      @click="showAlert(`Stop 1 Month`)"
                      expand="block"
                      >Stop 1 Mth</ion-button
                    >
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col>
                    <ion-button
                      fill="outline"
                      @click="showAlert(`On-Hold`)"
                      expand="block"
                      >On-Hold</ion-button
                    >
                  </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-card>
        </ion-item>
      </ion-list></ion-content
    >
  </basic-layout></template
>
<script>
import { defineComponent } from "vue";
import { alertController } from "@ionic/core";
import {
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonRow,
  IonCol,
  IonButton,
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
    IonRow,
    IonCol,
    IonButton,
  },
  methods: {
    ...mapActions(["loadSubscription"]),
    onhold() {
      console.log("on-hold");
    },
    stop1() {
      console.log("Stop 1 month");
    },
    async showAlert(clickedAction) {
      const alert = await alertController.create({
        header: "Alert",
        subheader: "Subtitle",
        message: `Are you sure you want to put your subscription ${clickedAction}?`,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Cancel");
            },
          },
          {
            text: "Ok",
            handler: () => {
              console.log("Confirm Ok");
            },
          },
        ],
      });
      alert.present();
    },
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

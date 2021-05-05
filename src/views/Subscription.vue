<template>
  <basic-layout page-title="Subscription" page-default-back-link="/profile">
    <ion-content class="content">
      <div v-if="subs.length == 0" class="ion-padding">
        <h3>Sorry! We can't find your valid subscription yet!</h3>
      </div>

      <ion-list v-else>
        <ion-item v-for="subItem in subs" :key="subItem.id">
          <ion-card>
            <ion-row>
              <ion-col>
                <ion-card-title class="ion-padding">
                  <h3>{{ subItem.line_items[0].name }}</h3>
                  <ion-card-content>
                    <ion-row>
                      <ion-col>
                        <p>
                          {{ subItem.shipping.first_name }}&nbsp;
                          {{ subItem.shipping.last_name }}
                        </p>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col>
                        <p>Next Payment Date:</p>
                      </ion-col>
                      <ion-col>
                        <p>
                          {{ subItem.next_payment_date }}
                        </p>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col>
                        <p>Order Status:</p>
                      </ion-col>
                      <ion-col>
                        {{ subItem.status }}
                      </ion-col>
                    </ion-row>
                  </ion-card-content>
                </ion-card-title>
              </ion-col>
            </ion-row>
            <ion-col>
              <ion-row>
                <ion-col>
                  <ion-button
                    class="normalButton"
                    @click="showOnHoldAlert(subItem.id, subItem.status)"
                    expand="block"
                    >Stop 1 Mth</ion-button
                  >
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <ion-button
                    fill="outline"
                    @click="showOnHoldAlert(subItem.id, subItem.status)"
                    expand="block"
                    >{{ this.reverseStatus(subItem.status) }}</ion-button
                  >
                </ion-col>
              </ion-row>
            </ion-col>
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
    ...mapActions(["loadSubscription", "onholdSubscription"]),
    async showOnHoldAlert(id, status) {
      const alert = await alertController.create({
        header: "Alert",
        subheader: "Subtitle",
        message: `Are you sure you want to put your subscription ${this.reverseStatus(
          status
        )}?`,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {},
          },
          {
            text: "Ok",
            handler: () => {
              console.log("this is" + +id + status);
              const payload = [];
              payload.id = id;
              payload.status = this.reverseStatus(status);
              this.onholdSubscription(payload);
              this.loadSubscription();
            },
          },
        ],
      });
      alert.present();
    },
    reverseStatus(status) {
      const newStatus = status != "on-hold" ? "on-hold" : "active";
      console.log(newStatus);
      return newStatus;
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

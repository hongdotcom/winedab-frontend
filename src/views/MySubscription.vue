<template>
  <main-layout pageTitle="Username">
    <ion-page>
      <!--  Main Menu here  -->

      <ion-content>
        <div class="ion-padding">
          <h2>Manage Subscription</h2>
        </div>

        <div v-if="subs.length == 0" class="ion-padding">
          <h3>Sorry! We can't find your valid subscription yet!</h3>
        </div>

        <div class="subs-margin" v-else>
            <ion-card v-for="subItem in subs" :key="subItem.id">
              
              <ion-row>
                <ion-col>
                  <ion-card-title class="ion-padding">
                    <h3>{{ subItem.line_items[0].name }}</h3>

                    <ion-card-content>
                      <ion-row>
                        <ion-col>
                          <p>
                            {{ subItem.shipping.first_name }} &nbsp;
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

              <ion-row>
                <ion-col>
                  <ion-button
                    @click="
                      showPostponeAlert(
                        subItem.id,
                        subItem.status,
                        subItem.next_payment_date
                      )
                    "
                    expand="block"
                    >Postpone</ion-button
                  >
                </ion-col>

                <ion-col>
                  <ion-button
                    color="medium"
                    @click="showOnHoldAlert(subItem.id, subItem.status)"
                    expand="block"
                    >{{ this.reverseStatus(subItem.status) }}</ion-button
                  >
                </ion-col>

                <ion-col>
                  <ion-button
                    color="danger"
                    @click="showOnHoldAlert(subItem.id, subItem.status)"
                    expand="block"
                    >Edit</ion-button
                  >
                </ion-col>
                
              </ion-row>

            </ion-card>
        </div>
      </ion-content>

    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { alertController } from "@ionic/core";
import {
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardContent,
  // IonList,
  // IonItem,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "Subscription",
  components: {
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardContent,
    // IonList,
    // IonItem,
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
    async showPostponeAlert(id, status, nextPaymentDate) {
      const alert = await alertController.create({
        header: "Alert",
        subheader: "Subtitle",
        message: `How many months do you want to postpone??`,
        inputs: [
          {
            value: "1",
            name: "month",
            type: "number",
            min: 1,
            max: 3,
          },
        ],
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
              console.log("this is" + +id + status + nextPaymentDate);
              const payload = [];
              payload.id = id;
              payload.status = this.reverseStatus(status);
              payload.nextPaymentDate = this.newPaymentDate(nextPaymentDate);
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
    newPaymentDate(nextPaymentDate) {
      console.log(!nextPaymentDate ? "yes" : "no");
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

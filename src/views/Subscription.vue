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
                <ion-card-title>
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
                <ion-col v-if="subItem.status == `active`">
                  <ion-button
                    class="normalButton"
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
              </ion-row>
              <ion-row>
                <ion-col>
                  <ion-button
                    fill="outline"
                    @click="
                      showOnHoldAlert(
                        subItem.id,
                        subItem.status,
                        subItem.next_payment_date
                      )
                    "
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
    ...mapActions([
      "loadSubscription",
      "onholdSubscription",
      "postponeSubscription",
    ]),
    statusAction(id, status, nextPaymentDate) {
      if (status == "active") {
        this.showOnHoldAlert(id, status);
      } else {
        this.showActiveAlert(id, status, nextPaymentDate);
      }
    },
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
              this.onholdSubscription(payload).then(() => {
                console.log("done onhold load again");
                this.loadSubscription();
              });
            },
          },
        ],
      });
      alert.present();
    },
    async showActiveAlert(id, status, nextPaymentDate) {
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
              payload.nextPaymentDate = this.newPaymentDate(nextPaymentDate, 0);
              this.onholdSubscription(payload).then(() => {
                this.loadSubscription();
              });
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
            handler: (data) => {
              console.log(
                "postpone" + +id + status + nextPaymentDate + data.month
              );
              const payload = [];
              payload.id = id;
              payload.nextPaymentDate = this.newPaymentDate(
                nextPaymentDate,
                data.month
              );
              this.postponeSubscription(payload).then(() => {
                this.loadSubscription();
              });
            },
          },
        ],
      });
      alert.present();
    },
    //This function reverse the current status
    reverseStatus(status) {
      const newStatus = status != "on-hold" ? "on-hold" : "active";
      return newStatus;
    },
    //This function calculate the new next_payment_date. Used in Postpone and Active function.
    newPaymentDate(nextPaymentDate, month) {
      if (nextPaymentDate == "") {
        //enter this when active or anything without a nextpaymentdate.
        //No business logic so just add 1 month
        const newDate = new Date();
        newDate.setMonth(parseInt(newDate.getMonth()) + parseInt(1));
        return this.changeDateFormat(newDate);
      } else {
        const newDate = new Date(nextPaymentDate);
        newDate.setMonth(parseInt(newDate.getMonth()) + parseInt(month));
        return this.changeDateFormat(newDate);
      }
    },
    //This function change date format to a param required format
    changeDateFormat(newDate) {
      return (
        newDate.getFullYear() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getDate() +
        "%2000:00:00"
      );
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

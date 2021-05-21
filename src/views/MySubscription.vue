<template>
  <main-layout :pageTitle="profile.first_name">
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
                        <p>Subscription Status:</p>
                      </ion-col>
                      <ion-col>
                        {{ subItem.status }}
                      </ion-col>
                      <ion-col v-if="subItem.status == `active`">
                        <ion-button
                          class="normalButton"
                          @click="showOnholdAlert(subItem.id, subItem.status)"
                          expand="block"
                          >Pause Indefinitely</ion-button
                        >
                      </ion-col>
                    </ion-row>
                  </ion-card-content>
                </ion-card-title>
              </ion-col>
            </ion-row>

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
                  >Pause</ion-button
                >
              </ion-col>

              <ion-col v-if="subItem.status == `on-hold`">
                <ion-button
                  @click="
                    showActiveAlert(
                      subItem.id,
                      subItem.status,
                      subItem.next_payment_date
                    )
                  "
                  expand="block"
                  >Un-Pause</ion-button
                >
              </ion-col>

              <ion-col>
                <ion-button
                  color="danger"
                  @click="() => router.push('/testpage')"
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
  IonRow,
  IonCol,
  IonButton,
  IonPage,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "Subscription",
  components: {
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardContent,

    IonRow,
    IonCol,
    IonButton,
    IonPage,
  },
  methods: {
    ...mapActions(["loadSubscription", "onholdSubscription", "loadProfile"]),

    async showPostponeAlert(id, status, nextPaymentDate) {
      const alert = await alertController.create({
        header: "Pause Your Subscription",
        cssClass: "my-custom-class",
        subheader: "Subtitle",
        message: `How many months do you want to postpone?? Or tick the indefinitely checkbox.`,
        inputs: [
          {
            value: "1",
            name: "month",
            placeholder: "How many months?",
            type: "number",
            min: 1,
            max: 12,
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
    async showOnholdAlert(id, status) {
      const alert = await alertController.create({
        header: "On-hold",
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
        header: "Activate Your Subscription",
        subheader: "Subtitle",
        message: `Are you sure you want to Activate your subscription ?`,
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
    reverseStatus(status) {
      const newStatus = status != "on-hold" ? "on-hold" : "active";

      return newStatus;
    },
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
    this.loadProfile();
  },
});
</script>

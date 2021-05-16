<template>
  <main-layout pageTitle="Username">
    <ion-page>
      <!--  Main Menu here  -->
      <ion-toolbar color="secondary">
        <ion-tabs>
          <!-- Tab bar -->
          <ion-tab-bar>
            <ion-tab-button              
              tab="rate-wine"
              @click="() => $router.push('/rate-wine')"
            >
              <!-- <ion-icon :icon="wineOutline"></ion-icon> -->
              <h5>Rate&nbsp;Wine</h5>
            </ion-tab-button>

            <ion-tab-button            
              tab="my-cellar"
              @click="() => $router.push('/my-cellar')"
            >
              <!-- <ion-icon :icon="personOutline"> </ion-icon> -->
              <h5>My&nbsp;Cellar</h5>
            </ion-tab-button>

            <ion-tab-button            
              tab="share-wine"
              @click="() => $router.push('/share-wine')"
            >
              <!-- <ion-icon :icon="bagCheckOutline"></ion-icon> -->
              <h5>Share&nbsp;Wine</h5>
            </ion-tab-button>

            <ion-tab-button
            class="active-button"
              tab="my-subscription"
              @click="() => $router.push('/my-subscription')"
            >
              <!-- <ion-icon :icon="bagCheckOutline"></ion-icon> -->
              <h1><ion-icon :icon="settings"></ion-icon></h1>
              
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </ion-toolbar>

      <ion-content>
        <div class="ion-padding">
          <h2>Manage Subscription</h2>        
        </div>
        
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
                          {{ subItem.shipping.first_name }} &nbsp;  {{ subItem.shipping.last_name }}
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
                  <ion-button color="medium"
                    @click="showOnHoldAlert(subItem.id, subItem.status)"
                    expand="block"
                    >{{ this.reverseStatus(subItem.status) }}</ion-button
                  >
                </ion-col>
              </ion-row>
            </ion-col>
          </ion-card>
        </ion-item>
      </ion-list>
      </ion-content>
    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { alertController } from "@ionic/core";
import { settings } from 'ionicons/icons';
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
  IonIcon
} from "@ionic/vue";
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
    IonRow,
    IonCol,
    IonButton,
    IonIcon
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
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    return {
      //   calendar,
      settings,
      beforeTabChange,
      afterTabChange,
    };
  },
});
</script>

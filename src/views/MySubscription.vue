<template>
  <main-layout :pageTitle="profile.first_name">
    <ion-page>
      <ion-content>
        <div class="ion-padding">
          <h2>Manage Subscription</h2>
        </div>

        <div v-if="subs.length == 0" class="ion-padding">
          <h3>Sorry! We can't find your valid subscription yet!</h3>
        </div>

        <div class="subs-margin" v-else>
          <ion-card>
            <div class="border-grey ion-padding">
              <h4>Subscription name</h4>
              <ion-grid class="ion-no-padding">
                <ion-row v-if="this.runtime == 0">
                  <ion-col>
                    <ion-button
                      :class="
                        subs[0].line_items[0].name.includes('Bargain Bottles')
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedPlan('Bargain Bottles')"
                    >
                      am i here
                    </ion-button>
                  </ion-col>

                  <ion-col>
                    <ion-button
                      :class="
                        subs[0].line_items[0].name.includes(
                          'Everyday Exceptional'
                        )
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedPlan('Everyday Exceptional')"
                    >
                      Everyday Exceptional
                    </ion-button>
                  </ion-col>

                  <ion-col>
                    <ion-button
                      :class="
                        subs[0].line_items[0].name.includes(
                          'Exquisite Entertaining'
                        )
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedPlan('Exquisite Entertaining')"
                    >
                      Exquisite Entertaining
                    </ion-button>
                  </ion-col>

                  <ion-col>
                    <ion-button
                      :class="
                        subs[0].line_items[0].name.includes('Stellar Selection')
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedPlan('Stellar Selection')"
                    >
                      Stellar Selection
                    </ion-button>
                  </ion-col>
                </ion-row>

                <!-- after selection -->

                <ion-row v-if="this.runtime != 0">
                  <ion-col>
                    <ion-button
                      v-if="this.currentProduct.includes('Bargain Bottles')"
                      class="planButtonSelect"
                      @click="this.selectedPlan('Bargain Bottles')"
                    >
                      Bargain Bottles
                    </ion-button>
                    <ion-button
                      v-if="!this.currentProduct.includes('Bargain Bottles')"
                      class="planButton"
                      @click="this.selectedPlan('Bargain Bottles')"
                    >
                      Bargain Bottles
                    </ion-button>
                  </ion-col>

                  <ion-col>
                    <ion-button
                      v-if="
                        this.currentProduct.includes('Everyday Exceptional')
                      "
                      class="planButtonSelect"
                      @click="this.selectedPlan('Everyday Exceptional')"
                    >
                      Everyday Exceptional
                    </ion-button>
                    <ion-button
                      v-if="
                        !this.currentProduct.includes('Everyday Exceptional')
                      "
                      class="planButton"
                      @click="this.selectedPlan('Everyday Exceptional')"
                    >
                      Everyday Exceptional
                    </ion-button>
                  </ion-col>

                  <ion-col>
                    <ion-button
                      v-if="
                        this.currentProduct.includes('Exquisite Entertaining')
                      "
                      class="planButtonSelect"
                      @click="this.selectedPlan('Exquisite Entertaining')"
                    >
                      Exquisite Entertaining
                    </ion-button>
                    <ion-button
                      v-if="
                        !this.currentProduct.includes('Exquisite Entertaining')
                      "
                      class="planButton"
                      @click="this.selectedPlan('Exquisite Entertaining')"
                    >
                      Exquisite Entertaining
                    </ion-button>
                  </ion-col>

                  <ion-col>
                    <ion-button
                      v-if="this.currentProduct.includes('Stellar Selection')"
                      class="planButtonSelect"
                      @click="this.selectedPlan('Stellar Selection')"
                    >
                      Stellar Selection
                    </ion-button>
                    <ion-button
                      v-if="!this.currentProduct.includes('Stellar Selection')"
                      class="planButton"
                      @click="this.selectedPlan('Stellar Selection')"
                    >
                      Stellar Selection
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>

              <!-- quantity selection -->
              <h5>Bottle(s) per Month:</h5>

              <ion-grid class="ion-no-padding">
                <ion-row v-if="this.runtimeQt == 0">
                  <ion-col expand="full">
                    <ion-button
                      :class="
                        subs[0].line_items[0].sku.includes('01')
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedQuantity(1)"
                    >
                      1
                    </ion-button>
                  </ion-col>

                  <ion-col expand="full">
                    <ion-button
                      :class="
                        subs[0].line_items[0].sku.includes('03')
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedQuantity(3)"
                    >
                      3
                    </ion-button>
                  </ion-col>

                  <ion-col expand="full">
                    <ion-button
                      :class="
                        subs[0].line_items[0].sku.includes('06')
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedQuantity(6)"
                    >
                      6
                    </ion-button>
                  </ion-col>

                  <ion-col expand="full">
                    <ion-button
                      :class="
                        subs[0].line_items[0].sku.includes('12')
                          ? 'planButtonSelect'
                          : 'planButton'
                      "
                      @click="this.selectedQuantity(12)"
                    >
                      12
                    </ion-button>
                  </ion-col>
                </ion-row>

                <ion-row v-if="this.runtimeQt != 0">
                  <ion-col expand="full">
                    <ion-button
                      v-if="this.currentQuantity == 1"
                      class="planButtonSelect"
                      @click="this.selectedQuantity(1)"
                    >
                      1
                    </ion-button>
                    <ion-button
                      v-if="this.currentQuantity != 1"
                      class="planButton"
                      @click="this.selectedQuantity(1)"
                    >
                      1
                    </ion-button>
                  </ion-col>

                  <ion-col expand="full">
                    <ion-button
                      v-if="this.currentQuantity == 3"
                      class="planButtonSelect"
                      @click="this.selectedQuantity(3)"
                    >
                      3
                    </ion-button>
                    <ion-button
                      v-if="this.currentQuantity != 3"
                      class="planButton"
                      @click="this.selectedQuantity(3)"
                    >
                      3
                    </ion-button>
                  </ion-col>

                  <ion-col expand="full">
                    <ion-button
                      v-if="this.currentQuantity == 6"
                      class="planButtonSelect"
                      @click="this.selectedQuantity(6)"
                    >
                      6
                    </ion-button>
                    <ion-button
                      v-if="this.currentQuantity != 6"
                      class="planButton"
                      @click="this.selectedQuantity(6)"
                    >
                      6
                    </ion-button>
                  </ion-col>

                  <ion-col expand="full">
                    <ion-button
                      v-if="this.currentQuantity == 12"
                      class="planButtonSelect"
                      @click="this.selectedQuantity(12)"
                    >
                      12
                    </ion-button>
                    <ion-button
                      v-if="this.currentQuantity != 12"
                      class="planButton"
                      @click="this.selectedQuantity(12)"
                    >
                      12
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>

            <ion-card-content class="border">
              <ion-row>
                <ion-col>
                  <p>
                    {{ subs[0].shipping.first_name }} &nbsp;
                    {{ subs[0].shipping.last_name }}
                  </p>
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col>
                  <p><b>Next Payment</b>: {{ subs[0].next_payment_date }}</p>
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col>
                  <p><b>Status</b>: {{ subs[0].status }}</p>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col v-if="subs[0].status == `active`">
                  <ion-button
                    @click="showOnholdAlert(subs[0].id, subs[0].status)"
                    expand="block"
                    >Pause Indefinitely</ion-button
                  >
                </ion-col>
              </ion-row>

              <!-- /* moved pause and update subscription here */ -->
              <ion-row>
                <ion-col v-if="subs[0].status == `active`">
                  <ion-button
                    class="normalButton"
                    @click="
                      showPostponeAlert(
                        subs[0].id,
                        subs[0].status,
                        subs[0].next_payment_date
                      )
                    "
                    expand="block"
                    >Pause</ion-button
                  >
                </ion-col>

                <ion-col v-if="subs[0].status == `on-hold`">
                  <ion-button
                    @click="
                      showActiveAlert(
                        subs[0].id,
                        subs[0].status,
                        subs[0].next_payment_date
                      )
                    "
                    expand="block"
                    >Un-Pause</ion-button
                  >
                </ion-col>

                <ion-col>
                  <ion-button
                    color="danger"
                    @click="updateSubsAlert(subs[0])"
                    expand="block"
                    >Update Subscription</ion-button
                  >
                </ion-col>
              </ion-row>
            </ion-card-content>
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
  IonCardContent,
  IonRow,
  IonCol,
  IonButton,
  // IonSearchBar,
  // IonButtons,
  IonGrid,
  IonPage,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "Subscription",
  components: {
    IonContent,
    IonCard,
    IonCardContent,
    IonRow,
    IonCol,
    IonButton,
    IonGrid,
    // IonButtons,
    // IonSearchBar,
    IonPage,
  },
  methods: {
    ...mapActions([
      "loadSubscription",
      "onholdSubscription",
      "loadProfile",
      "updateSubs",
      "getWines",
    ]),

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
              const payload = [];
              payload.id = id;
              payload.status = this.reverseStatus(status);
              this.onholdSubscription(payload).then(() => {
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
    async updateSubsAlert(sub) {
      if (!this.currentProduct) {
        console.log("set product");
        let planName = this.getProduct(sub.line_items[0].name);
        this.selectedPlan(planName);
        console.log("after set" + this.currentProduct);
      }
      if (!this.currentQuantity) {
        console.log("set quantity");
        let planName = this.getQuantity(sub.line_items[0].name);
        this.selectedQuantity(planName);
        console.log("after set" + this.currentQuantity);
      }

      const alert = await alertController.create({
        header: "Update",
        subheader: "Subtitle",
        message: `Do you confirm that you want to change your subscriptions to
        ${this.currentProduct} of ${this.currentQuantity} bottles per month?`,
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
              console.log(this.currentQuantity + this.currentProduct);

              const payload = [];
              payload.id = sub.id;
              payload.product_id = this.getProductId(this.currentProduct);
              payload.variation_id = this.getVariationId(
                this.currentProduct,
                this.currentQuantity
              );
              payload.subtotal = this.getSubtotal(
                this.currentProduct,
                this.currentQuantity
              );
              payload.item_id = sub.line_items[0].id;
              this.updateSubs(payload).then(() => {
                this.loadSubscription();
              });
            },
          },
        ],
      });
      alert.present();
    },
    getProduct(planName) {
      console.log("getProduct");
      console.log(planName);
      if (planName.includes("Everyday Exceptional")) {
        return "Everyday Exceptional";
      }
      if (planName.includes("Bargain Bottles")) {
        return "Bargain Bottles";
      }
      if (planName.includes("Exquisite Entertaining")) {
        return "Exquisite Entertaining";
      }
      if (planName.includes("Stellar Selection")) {
        return "Stellar Selection";
      }
    },
    selectedPlan(planName) {
      console.log(planName);
      this.runtime = 1;
      if (planName) {
        this.currentProduct = this.getProduct(planName);
        return this.currentProduct;
      }
      return this.currentProduct;
    },
    selectedQuantity(quan) {
      console.log(quan);
      this.runtimeQt = 1;
      if (quan) {
        this.currentQuantity = quan;
        return this.currentQuantity;
      }
      return this.currentQuantity;
    },
    getProductId(planName) {
      console.log("getProductID");
      console.log(planName);
      if (planName.includes("Everyday Exceptional")) {
        return 9177;
      }
      if (planName.includes("Bargain Bottles")) {
        return 15021;
      }
      if (planName.includes("Exquisite Entertaining")) {
        return 9188;
      }
      if (planName.includes("Stellar Selection")) {
        return 9193;
      }
    },
    getVariationId(planName, quan) {
      console.log("getVariationId");
      console.log(planName + quan);
      if (planName.includes("Bargain Bottles")) {
        switch (quan) {
          case 1:
            console.log("I am good boy yat ming");
            return 15022;
          case 3:
            return 15023;
          case 6:
            return 15024;
          case 12:
            return 15025;
        }
      }
      if (planName.includes("Everyday Exceptional")) {
        switch (quan) {
          case 1:
            return 9179;
          case 3:
            return 9180;
          case 6:
            return 9181;
          case 12:
            return 9182;
        }
      }

      if (planName.includes("Exquisite Entertaining")) {
        switch (quan) {
          case 1:
            return 9189;
          case 3:
            return 9190;
          case 6:
            return 9191;
          case 12:
            return 9192;
        }
      }
      if (planName.includes("Stellar Selection")) {
        switch (quan) {
          case 1:
            return 9194;
          case 3:
            return 9195;
          case 6:
            return 9196;
          case 12:
            return 9197;
        }
      }
    },
    getSubtotal(planName, quan) {
      console.log("get subtotal");
      console.log(planName + quan);
      if (planName.includes("Bargain Bottles")) {
        switch (quan) {
          case 1:
            console.log("I am good boy yat ming");
            return "14.99";
          case 3:
            return "44.97";
          case 6:
            return "89.94";
          case 12:
            return "179.88";
        }
      }
      if (planName.includes("Everyday Exceptional")) {
        switch (quan) {
          case 1:
            return "19.99";
          case 3:
            return "57.00";
          case 6:
            return "113.00";
          case 12:
            return "215.00";
        }
      }

      if (planName.includes("Exquisite Entertaining")) {
        switch (quan) {
          case 1:
            return "29.99";
          case 3:
            return "87.00";
          case 6:
            return "164.00";
          case 12:
            return "309.00";
        }
      }
      if (planName.includes("Stellar Selection")) {
        switch (quan) {
          case 1:
            return "46.99";
          case 3:
            return "137.00";
          case 6:
            return "259.00";
          case 12:
            return "499.00";
        }
      }
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
    displayDateFormat(newDate) {
      return (
        newDate.getFullYear() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getDate()
      );
    },
  },
  data() {
    return {
      runtime: 0,
      runtimeQt: 0,
      currentProduct: "",
      currentQuantity: "",
    };
  },
  updated() {},
  computed: {
    ...mapGetters({
      subs: "subscription",
      wines: "wines",
      profile: "profile",
    }),
  },
  created() {
    this.loadSubscription();
    this.loadProfile();
  },
});
</script>

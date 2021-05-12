<template>
  <basic-layout page-title="Wine List" page-default-back-link="/subscription">
    <ion-content>
      <div v-if="wines.length == 0" class="ion-padding">
        <h3>Sorry! We don't have wines delivered to you yet!</h3>
      </div>
      <ion-card v-else v-for="wine in wines" :key="wine.id">
        <ion-card-header>
          <ion-card-title>{{ wine.name }} {{ wine.year }}</ion-card-title>
        </ion-card-header>
        <ion-row>
          <ion-col center text-center>
            <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />
          </ion-col>
          <ion-col center text-center>
            <ion-card-content>
              {{ wine.wine_info }} {{ wine.price }}
            </ion-card-content>
          </ion-col>
          <ion-item class="buttonGroup">
            <ion-button fill="outline" slot="end" @click="editRatingPrompt()"
              >Rate</ion-button
            >
            <ion-button fill="outline" slot="end" @click="editCommentPrompt()"
              >Comment</ion-button
            >
            <ion-button
              fill="outline"
              slot="end"
              @click="orderMorePrompt(wine.name, wine.year)"
              >Order More</ion-button
            >
          </ion-item>
        </ion-row>
      </ion-card>
    </ion-content>
  </basic-layout>
</template>

<script>
import {
  IonButton,
  IonItem,
  IonRow,
  IonCol,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { alertController } from "@ionic/core";
import { keypad } from "ionicons/icons";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "WineList",
  components: {
    IonContent,
    IonButton,
    IonItem,
    IonRow,
    IonCol,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
  },
  data() {
    return { keypad, responseData: {} };
  },
  methods: {
    ...mapActions(["loadWines"]),
    async editCommentPrompt() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Enter Your Comment!",
        inputs: [
          {
            name: "Wine Comment",
            id: "wine_comment",
            value: "",
            placeholder: "Your Comment",
            type: "textarea",
          },
        ],
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
      return alert.present();
    },
    async orderMorePrompt(name, year) {
      const alert = await alertController.create({
        header: "Alert",
        subheader: "Subtitle",
        message: `How many ${name} ${year ? year : ""} do you want more?`,
        inputs: [
          {
            value: "1",
            name: "bottle",
            type: "number",
            min: 1,
            max: 24,
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
              console.log("buymore");
            },
          },
        ],
      });
      alert.present();
    },
    async editRatingPrompt() {
      const alert = await alertController.create({
        cssClass: "alertstar",
        header: "Radio",
        inputs: [
          {
            type: "radio",
            label: "Radio 1",
            value: "value1",
            handler: () => {
              console.log("Radio 1 selected");
            },
            checked: true,
          },
          {
            type: "radio",
            label: "Radio 2",
            value: "value2",
            handler: () => {
              console.log("Radio 2 selected");
            },
          },
          {
            type: "radio",
            label: "Radio 3",
            value: "value3",
            handler: () => {
              console.log("Radio 3 selected");
            },
          },
          {
            type: "radio",
            label: "Radio 4",
            value: "value4",
            handler: () => {
              console.log("Radio 4 selected");
            },
          },
          {
            type: "radio",
            label: "Radio 5",
            value: "value5",
            handler: () => {
              console.log("Radio 5 selected");
            },
          },
          {
            type: "radio",
            label: "Radio 6",
            value: "value6",
            handler: () => {
              console.log("Radio 6 selected");
            },
          },
        ],
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
      return alert.present();
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
    this.loadWines();
  },
});
</script>

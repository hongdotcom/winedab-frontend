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
              Full body with Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </ion-card-content>
          </ion-col>
          <ion-item class="buttonGroup">
            <ion-button fill="outline" slot="end" @click="editRatingPrompt()"
              >Rate</ion-button
            >
            <ion-button fill="outline" slot="end" @click="editCommentPrompt()"
              >Comment</ion-button
            >
            <ion-button fill="outline" slot="end" @click="orderMorePrompt()"
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
        header: "Prompt!",
        inputs: [
          {
            placeholder: "Placeholder 1",
          },
          {
            name: "name2",
            id: "name2-id",
            value: "hello",
            placeholder: "Placeholder 2",
          },
          {
            name: "name3",
            value: "http://ionicframework.com",
            type: "url",
            placeholder: "Favorite site ever",
          },
          // input date with min & max
          {
            name: "name4",
            type: "date",
            min: "2017-03-01",
            max: "2018-01-12",
          },
          // input date without min nor max
          {
            name: "name5",
            type: "date",
          },
          {
            name: "name6",
            type: "number",
            min: -5,
            max: 10,
          },
          {
            name: "name7",
            type: "number",
          },
          {
            name: "name8",
            type: "password",
            placeholder: "Advanced Attributes",
            cssClass: "specialClass",
            attributes: {
              maxlength: 4,
              inputmode: "decimal",
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
    orderMorePrompt() {},
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
    console.log("i m in created loading wines");
    this.loadWines();
  },
});
</script>

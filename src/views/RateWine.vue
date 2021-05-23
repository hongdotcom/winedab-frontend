<template>
  <main-layout :pageTitle="profile.first_name">
    <ion-page>
      <!--  Main Menu here  -->
      <ion-content class="ion-padding">
        <div class="ion-padding">
          <h2>My Orders</h2>
        </div>

        <div class="tab-holder">
          <button
            @click="selectTab(1)"
            :class="{ 'active-tab': currentTab == 1 }"
          >
            Current
          </button>

          <button
            @click="selectTab(2)"
            :class="{ 'active-tab': currentTab == 2 }"
          >
            Last Month
          </button>

          <button
            @click="selectTab(3)"
            :class="{ 'active-tab': currentTab == 3 }"
          >
            Previous Month
          </button>
        </div>

        <div v-if="wines.length == 0" class="ion-padding">
          <h3>Sorry! We don't have wines delivered to you yet!</h3>
        </div>

        <div v-if="currentTab == 1">
          <h2>Current Order</h2>
          <ion-card v-for="wine in wines" :key="wine.id">
            <ion-card-header>
              <ion-card-title
                >{{ wine.wine_name }} {{ wine.year }} - {{ wine.colour }}
              </ion-card-title>
              <ion-icon color="primary" name="star"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <img
                v-if="wine.wine_photo"
                src="/assets/icon/wine1.jpg"
                alt="wine1"
                class="wine"
              />

              <div>{{ wine.description }}</div>
              <div>
                <ion-button @click="onRate(1)">
                  <ion-icon color="white" name="settings"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(2)">
                  <ion-icon name="star-outline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(3)">
                  <ion-icon name="star-outline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(4)">
                  <ion-icon name="star-outline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(5)">
                  <ion-icon name="star-outline"></ion-icon
                ></ion-button>
              </div>
              <ion-grid>
                <ion-row>
                  <!-- <ion-col>
                    <ion-button expand="block" @click="editRatingPrompt()">
                      Rate
                    </ion-button>
                  </ion-col> -->
                  <ion-col>
                    <ion-button expand="block" @click="editCommentPrompt()">
                      Comment
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" @click="orderMorePrompt()">
                      Order More
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>

        <div v-if="currentTab == 2">
          <h2>Last Month Order</h2>
          <ion-card v-for="wine in wines" :key="wine.id">
            <ion-card-header>
              <ion-card-title
                >{{ wine.wine_name }} {{ wine.year }}</ion-card-title
              >
            </ion-card-header>

            <ion-card-content>
              <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />

              <div>{{ wine.wine_info }}</div>

              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-button expand="block" @click="editRatingPrompt()">
                      Rate
                    </ion-button>
                  </ion-col>
                  <!-- <ion-col>
                  <ion-button expand="block" @click="editCommentPrompt()">
                    Comment
                  </ion-button>
                </ion-col> -->
                  <ion-col>
                    <ion-button expand="block" @click="orderMorePrompt()">
                      Order More
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>

        <div v-if="currentTab == 3">
          <h2>Previous Order</h2>
          <ion-card v-for="wine in wines" :key="wine.id">
            <ion-card-header>
              <ion-card-title
                >{{ wine.wine_name }} {{ wine.year }}</ion-card-title
              >
            </ion-card-header>

            <ion-card-content>
              <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />

              <div>{{ wine.wine_info }}</div>

              <ion-grid>
                <ion-row>
                  <!-- <ion-col>
                    <ion-button expand="block" @click="editRatingPrompt()">
                      Rate
                    </ion-button>
                  </ion-col> -->
                  <ion-col>
                    <ion-button expand="block" @click="editCommentPrompt()">
                      Comment
                    </ion-button>
                  </ion-col>
                  <ion-col>
                    <ion-button expand="block" @click="orderMorePrompt()">
                      Order More
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
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
import { settings, keypad, star } from "ionicons/icons";
import {
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonContent,
  IonPage,
  IonGrid,
  IonIcon,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "WineList",
  components: {
    IonContent,
    IonButton,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  },
  data() {
    return { star, keypad, responseData: {}, currentTab: 1 };
  },
  methods: {
    ...mapActions(["loadWines", "loadProfile"]),
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
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
    onRate(rating) {
      console.log(rating);
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
    this.loadProfile();
  },
  setup() {
    return {
      settings,
    };
  },
});
</script>

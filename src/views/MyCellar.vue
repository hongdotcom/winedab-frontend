<template>
  <main-layout pageTitle="Username">
    <ion-page>
      <!--  Main Menu here  -->

      <ion-content class="ion-padding">
        <div class="ion-padding">
          <h2>My Favourites</h2>
        </div>
        <div v-if="wines.length == 0" class="ion-padding">
          <h3>Sorry! We don't have wines delivered to you yet!</h3>
        </div>
        <ion-card v-else v-for="wine in wines" :key="wine.id">
          <ion-card-header>
            <ion-card-title>{{ wine.name }} {{ wine.year }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />

            <div>
              {{ wine.wine_info }}
            </div>

            
                  <div class="comment-wrapper">
                    <ion-grid>
                      <ion-row>
                        <ion-col size="8">
                          <div>
                            <input
                              @keyup.enter="saveComment"
                              type="text"
                              v-model="newComment"
                              placeholder="Your personal notes here."
                            />
                          </div>
                        </ion-col>
                        <ion-col>
                          <div>
                            <button @click="saveComment">
                              Add
                            </button>
                          </div>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                    <p v-for="comment in reversedComments" :key="comment.id">
                    {{ comment.comment }}
                  </p>
                  </div>
                  
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { alertController } from "@ionic/core";
import { settings, keypad } from "ionicons/icons";
import {
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonContent,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
export default defineComponent({
  name: "WineList",
  components: {
    IonContent,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
  },
  data() {
    return {
      keypad,
      responseData: {},
      editing: false,
      newComment: "",
      comments: [{ id: 1, comment: "" }],
    };
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
    saveComment() {
      this.comments.push({
        id: this.comments.length + 1,
        comment: this.newComment,
      });
      this.newComment = "";
    },
    doEdit(editing) {
      this.editing = editing;
      this.newComment = "";
    },
  },
  computed: {
    ...mapGetters({
      subs: "subscription",
      wines: "wines",
      profile: "profile",
    }),
    reversedComments() {
      return [...this.comments].reverse();
    },
  },
  created() {
    console.log("i m in created loading wines");
    this.loadWines();
  },
  setup() {
    return {
      settings,
    };
  },
});
</script>

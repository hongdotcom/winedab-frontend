<template>
  <main-layout pageTitle="Username">
    <ion-page>
      <!--  Main Menu here  -->
      <ion-toolbar color="secondary">
        <ion-tabs>
          <!-- Tab bar -->
          <ion-tab-bar>
            <ion-tab-button
              class="active-button"
              tab="rate-wine"
              @click="() => $router.push('/rate-wine')"
            >
              <!-- <ion-icon :icon="wineOutline"></ion-icon> -->
              <h5>Rate Wine</h5>
            </ion-tab-button>

            <ion-tab-button
              tab="my-cellar"
              @click="() => $router.push('/my-cellar')"
            >
              <!-- <ion-icon :icon="personOutline"> </ion-icon> -->
              <h5>My Cellar</h5>
            </ion-tab-button>

            <ion-tab-button
              tab="share-wine"
              @click="() => $router.push('/share-wine')"
            >
              <!-- <ion-icon :icon="bagCheckOutline"></ion-icon> -->
              <h5>Share Wine</h5>
            </ion-tab-button>

            <ion-tab-button
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
          <h2> My Orders </h2>        
        </div>
        <ion-card class="ion-padding">
        <ion-item>
          <ion-avatar slot="start">
            <img :src="profile.avatar_url" />
          </ion-avatar>
          <ion-label>
            <h3>{{ profile.first_name }}</h3>
            <p>{{ profile.email }}</p>
          </ion-label>
        </ion-item>
        <h3 class="ion-padding">
          Hi {{ profile.first_name }}, Good to see you again
        </h3>
        <ion-button>Edit</ion-button>
      </ion-card>
        <ion-card> <h3>Rate Your Wine</h3> </ion-card>
      </ion-content>
    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonAvatar, IonItem, IonLabel, IonIcon } from "@ionic/vue";
import { settings } from 'ionicons/icons';

import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  components: {
    IonPage,
    IonAvatar,
    IonItem,
    IonLabel,
    IonIcon
  },
  methods: {
    ...mapActions(["loadProfile", "loadQuiz"]),
  },
  computed: {
    ...mapGetters({
      subs: "subscription",
      wines: "wines",
      profile: "profile",
      quiz: "quiz",
    }),
  },
  created() {    
    console.log("i m in created");
    this.loadProfile();
    this.loadQuiz();
  },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    return {
      settings,
      beforeTabChange,
      afterTabChange,
    };
  },
});
</script>

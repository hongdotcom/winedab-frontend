<template>
  <main-layout pageTitle="Username">
    <ion-page>
      <!--  Main Menu here  -->
      <ion-toolbar color="secondary">
        <ion-tabs>
          <ion-tab tab="music">
            <ion-header translucent>
              <ion-toolbar>
                <ion-title>Music Header </ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content fullscreen class="ion-padding">
              <h1>Music Body</h1>
            </ion-content>
          </ion-tab>

          <ion-tab tab="movies">
            <ion-header translucent>
              <ion-toolbar>
                <ion-title>Movies Header</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content fullscreen class="ion-padding">
              <h1>Movies Body</h1>
            </ion-content>
          </ion-tab>

          <ion-tab tab="games">
            <ion-header translucent>
              <ion-toolbar>
                <ion-title>Games Header</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content fullscreen class="ion-padding">
              <h1>Games Body</h1>
            </ion-content>
          </ion-tab>

          <ion-tab-bar slot="top">
            <ion-tab-button tab="music">
              <ion-label>Music</ion-label>
              <ion-icon name="musical-note"></ion-icon>
            </ion-tab-button>
            <ion-tab-button tab="movies">
              <ion-label>Movies</ion-label>
              <ion-icon name="videocam"></ion-icon>
            </ion-tab-button>
            <ion-tab-button tab="games">
              <ion-label>Games</ion-label>
              <ion-icon name="game-controller"></ion-icon>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </ion-toolbar>

      <ion-content>
        <ion-card>
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
        </ion-card>
        <ion-card> <h3>This is a test page</h3> </ion-card>
      </ion-content>
    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonAvatar, IonItem, IonLabel, IonIcon } from "@ionic/vue";
import { settings } from "ionicons/icons";

import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  components: {
    /*IonTabBar, IonTabButton, IonTabs, IonLabel,*/

    IonPage,
    IonAvatar,
    IonItem,
    IonLabel,
    IonIcon,
  },
  methods: {
    ...mapActions(["loadProfile"]),
  },
  computed: {
    ...mapGetters({
      subs: "subscription",
      wines: "wines",
      profile: "profile",
    }),
  },
  created() {
    this.loadProfile();
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

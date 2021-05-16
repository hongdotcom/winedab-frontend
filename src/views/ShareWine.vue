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
            class="active-button"
              tab="share-wine"
              @click="() => $router.push('/share-wine')"
            >
              <!-- <ion-icon :icon="bagCheckOutline"></ion-icon> -->
              <h5>Share&nbsp;Wine</h5>
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

      <ion-content class="ion-padding">
        <div class="ion-padding">
          <h2> Give the best gift to a friend, wine. </h2> 
          <p>Name of recipient receving gift:</p>       
        </div>


        <!-- <ion-card>
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
        </ion-card> -->

        <ion-card> 
          <ion-item>
            <ion-label position="floating">First name</ion-label>
              <ion-input></ion-input>
              </ion-item>

              <ion-item>
            <ion-label position="floating">Surname</ion-label>
              <ion-input></ion-input>
          </ion-item>
          <div class="ion-padding">
            <p>Number of Wines</p>
            <p>Price per bottle</p>
            <p>Number of Months</p>
          </div>
          <ion-item>
            <ion-label position="floating">
            Recpients Email Address </ion-label>
              <ion-input></ion-input>
          </ion-item>
  
        </ion-card>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
          <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button expand="full" color="light"> Total Price is:  </ion-button>
            </ion-col>
            <ion-col>
              <ion-button expand="full" color="tertiary"> Confirm </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonItem, IonLabel, IonIcon } from "@ionic/vue";
import { settings } from 'ionicons/icons';

import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  components: {
    /*IonTabBar, IonTabButton, IonTabs, IonLabel,*/ IonPage,
    // IonAvatar,
    IonItem,
    IonLabel,
    IonIcon
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

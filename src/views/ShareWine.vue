<template>
  <main-layout pageTitle="Username">
    <ion-page>
      <!--  Main Menu here  -->
      
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
import { IonPage, IonItem, IonLabel } from "@ionic/vue";

import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  components: {
    /*IonTabBar, IonTabButton, IonTabs, IonLabel,*/ IonPage,
    // IonAvatar,
    IonItem,
    IonLabel
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
});
</script>

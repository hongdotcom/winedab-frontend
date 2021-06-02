<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">
          <img src="assets/icon/logo-white.png" alt="logo" class="logo"
        /></ion-title>

        <ion-title slot="end"> Hi, {{ pageTitle }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- <div class="custom-bar">
      <div class="nav-button">
        <router-link to="/rate-wine"> Rate&nbsp;Wine </router-link>
      </div>

      <div class="nav-button">
        <router-link to="/my-cellar"> My&nbsp;Cellar </router-link>
      </div>

      <div class="nav-button-last">
        <router-link to="/my-subscription">Subscription </router-link>
      </div>
    </div> -->

    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  //IonIcon
} from "@ionic/vue";
import { useRouter } from "vue-router"; // from original code
import { settings } from "ionicons/icons";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    //IonIcon
  },

  props: ["pageTitle"],

  // from original code
  setup() {
    const router = useRouter();
    return { router, settings };
  },
};
</script>

<template>
  <ion-page>
    <!-- <ion-header> -->
      <ion-toolbar>
        <ion-title>
          <img src="assets/icon/logo-white.png" alt="logo" class="login-logo"
        /></ion-title>
      </ion-toolbar>
    <!-- </ion-header> -->

    <ion-content  class="login-page" color="primary">         
      <slot></slot>
    </ion-content>
    
  </ion-page>
</template>

<script>
import {
  IonPage,
//   IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    // IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },

  // props: ["pageTitle"],
};
</script>

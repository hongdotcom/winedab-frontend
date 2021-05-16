<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>        
        <ion-title>
          <img src="assets/icon/logo-white.png" alt="logo" class="logo"
        /></ion-title>

        <ion-title slot="end"> {{ pageTitle }} </ion-title>
      </ion-toolbar>
    </ion-header>

    

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
import { settings } from 'ionicons/icons';
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

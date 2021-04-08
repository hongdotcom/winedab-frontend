<template>
  <ion-page>
    <ion-header>
      <ion-toolbar hideBackButton>
        <ion-buttons slot="start" hideBackButton>
          <ion-back-button hideBackButton></ion-back-button>
        </ion-buttons>
        <ion-title>
          <img src="assets/icon/logo-white.png" alt="logo" class="logo"
        /></ion-title>
        <ion-button slot="end">
          <ion-icon :icon="keypad"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <slot />
  </ion-page>
</template>

<script lang="ts">
import {
  IonTitle,
  IonButton,
  IonPage,
  IonToolbar,
  IonIcon,
  IonHeader,
  // IonButtons,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { keypad, chevronBack } from "ionicons/icons";

export default defineComponent({
  name: "Home",
  components: {
    IonButton,
    IonToolbar,
    IonPage,
    IonIcon,
    IonHeader,
    // IonButtons,

    IonTitle,
  },
  data() {
    return { keypad, chevronBack };
  },
});
</script>

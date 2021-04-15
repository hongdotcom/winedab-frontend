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
    <ion-tabs>
      <ion-tab-bar class="tabbar" slot="bottom">
        <ion-tab-button tab="profile" @click="() => router.push('/profile')">
          <ion-icon :icon="personOutline"></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          tab="subscription"
          @click="() => router.push('/subscription')"
        >
          <ion-icon :icon="bagCheckOutline"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="wine" @click="() => router.push('/wines')">
          <ion-icon :icon="wineOutline"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
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
import { bagCheckOutline, personOutline, wineOutline } from "ionicons/icons";
import { useRouter } from "vue-router";

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
    return { keypad, chevronBack, bagCheckOutline, personOutline, wineOutline };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons> -->
        <ion-title>
          <img src="assets/icon/logo-white.png" alt="logo" class="logo"
        /></ion-title>
        <ion-title slot="end" class="pageTitle">{{ pageTitle }} </ion-title>
        <!-- <ion-button slot="end">
          <ion-icon :icon="keypad"></ion-icon>
        </ion-button> -->
      </ion-toolbar>
    </ion-header>
    <slot />
    <ion-tabs>
      <ion-tab-bar class="tabbar" slot="bottom">
        <ion-tab-button
          tab="profile"
          @click="() => router.push('/profile')"
          class="tabButton"
        >
          <ion-icon :icon="personOutline"></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          tab="subscription"
          @click="() => router.push('/subscription')"
          class="tabButton"
        >
          <ion-icon :icon="bagCheckOutline"></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          tab="wine"
          @click="() => router.push('/wines')"
          class="tabButton"
        >
          <ion-icon :icon="wineOutline"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTitle,
  IonTabs,
  IonPage,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonHeader,
  IonIcon,
  // IonButtons,
  // IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { chevronBack } from "ionicons/icons";
import { bagCheckOutline, personOutline, wineOutline } from "ionicons/icons";
import { useRouter } from "vue-router";

export default defineComponent({
  props: ["pageTitle", "pageDefaultBackLink"],
  name: "Home",
  components: {
    IonTitle,
    IonTabs,
    IonPage,
    IonToolbar,
    IonTabBar,
    IonTabButton,
    IonHeader,
    IonIcon,
    // IonButtons,
    // IonBackButton,
  },
  data() {
    return { chevronBack, bagCheckOutline, personOutline, wineOutline };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

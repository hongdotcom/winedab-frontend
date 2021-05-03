<template>
  <basic-layout page-title="Profile" page-default-back-link="/subscription">
    <ion-content class="content">
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
        <ion-button>Edit</ion-button>
      </ion-card>
    </ion-content>
  </basic-layout></template
>

<script>
import { defineComponent } from "vue";
import {
  IonContent,
  IonCard,
  IonAvatar,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/vue";
import BasicLayout from "../components/BasicLayout.vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  components: {
    IonContent,
    IonCard,
    IonAvatar,
    IonItem,
    IonLabel,
    IonButton,
    BasicLayout,
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
});
</script>

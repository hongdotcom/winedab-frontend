<template>
  <main-layout :pageTitle="profile.first_name">
    <ion-page>
      <ion-content class="ion-padding">
        <h1>this is buy more {{ wine_name }}</h1>
      </ion-content>
    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "BuyMore",
  components: {
    IonContent,
    IonPage,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      subs: "subscription",
      wines: "wines",
      profile: "profile",
    }),
  },
  created() {
    console.log("i m in created loading wines");
    this.loadSubscription();
    this.loadProfile();
  },
  methods: {
    ...mapActions(["loadSubscription", "loadProfile"]),
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>

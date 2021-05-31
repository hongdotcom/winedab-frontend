<template>
  <login-layout>
    <ion-page>
      <ion-toolbar color="primary-contrast"> </ion-toolbar>

      <ion-toolbar color="light">
        <h1>Login</h1>
        <form novalidate class="ion-padding">
          <ion-item color="light">
            <ion-label position="floating">Enter Username</ion-label>
            <ion-input
              name="username"
              type="text"
              spellcheck="false"
              autocapitalize="off"
              required
            ></ion-input>
          </ion-item>

          <ion-item color="light">
            <ion-label position="floating">Enter Password</ion-label>
            <ion-input name="password" type="password" required></ion-input>
          </ion-item>

          <ion-button
            color="tertiary"
            expand="full"
            @click="$router.push('/rate-wine')"
          >
            LOGIN
          </ion-button>
        </form>
      </ion-toolbar>

      <ion-toolbar color="primary-contrast"> </ion-toolbar>
    </ion-page>
  </login-layout>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonInput, IonLabel } from "@ionic/vue";
// import { calendar, personCircle } from 'ionicons/icons';
import { useRouter } from "vue-router";
import { logoGoogle } from "ionicons/icons";
export default defineComponent({
  name: "Login",
  components: {
    IonInput,
    IonLabel,
    IonPage,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return { logoGoogle };
  },
});
</script>

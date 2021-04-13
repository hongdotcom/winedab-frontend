<template>
  <ion-page class="login"
    ><ion-content
      ><div class="login"><div class="overlay"></div></div>
      <div class="base">
        <ion-title>
          <img src="assets/icon/logo-white.png" alt="logo" class="login-logo"
        /></ion-title>
        <form novalidate>
          <ion-list class="login-input">
            <ion-item>
              <ion-label position="stacked" color="primary">Username</ion-label>
              <ion-input
                v-model="username"
                name="username"
                type="text"
                spellcheck="false"
                autocapitalize="off"
                required
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked" color="primary">Password</ion-label>
              <ion-input
                v-model="password"
                name="password"
                type="password"
                required
              ></ion-input>
            </ion-item>
          </ion-list>

          <ion-row responsive-sm>
            <ion-col>
              <ion-button
                @click="onLogin(loginForm)"
                type="submit"
                expand="block"
                >Login</ion-button
              >
            </ion-col>
            <ion-col>
              <ion-button @click="onSignup()" color="light" expand="block"
                >Signup</ion-button
              >
            </ion-col>
          </ion-row>
        </form>
      </div>
    </ion-content></ion-page
  >
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
export default defineComponent({
  name: "Login",
  components: {
    IonContent,
    IonPage,
  },
});
</script>

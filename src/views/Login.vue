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
              <ion-label position="floating" color="primary"
                >Username</ion-label
              >
              <ion-input
                name="username"
                type="text"
                spellcheck="false"
                autocapitalize="off"
                required
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating" color="primary"
                >Password</ion-label
              >
              <ion-input name="password" type="password" required></ion-input>
            </ion-item>
          </ion-list>

          <ion-row responsive-sm>
            <ion-col>
              <ion-button @click="() => router.push('/wines')" expand="block"
                >Login</ion-button
              >
            </ion-col>
            <ion-col router-link="/home">
              <ion-button
                @click="() => router.push('/wines')"
                color="light"
                expand="block"
                >Signup</ion-button
              >
            </ion-col>
          </ion-row>
          <ion-col class="separator">
            <p class="separatorText">or</p>
          </ion-col>
          <div class="googleContainer" @click="() => router.push('/wines')">
            <ion-icon :icon="logoGoogle"></ion-icon>
            <p>&nbsp;Login With Google</p>
          </div>
          <div
            class="twitterContainer"
            @click="() => router.push('/wines')"
            onClick="{twitterLogin}"
          >
            <img
              src="assets/icon/twitterImage.png"
              alt="Twitter Icon"
              class="ImgSocial"
            />
            <p>Login With Twitter</p>
          </div>
        </form>
      </div>
    </ion-content></ion-page
  >
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useRouter } from "vue-router";
import { logoGoogle } from "ionicons/icons";
export default defineComponent({
  name: "Login",
  components: {
    IonContent,
    IonPage,
    // IonThumbnail,
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

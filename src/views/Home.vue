<template>
  <basic-layout>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Chateau Mouton</ion-card-title>
        </ion-card-header>
        <ion-row>
          <ion-col center text-center>
            <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />
          </ion-col>
          <ion-col center text-center>
            <ion-card-content>
              Full body with Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </ion-card-content>
          </ion-col>
          <ion-item class="buttonGroup">
            <ion-button fill="outline" slot="end">Rate</ion-button>
            <ion-button fill="outline" slot="end">Comment</ion-button>
            <ion-button fill="outline" slot="end">Order More</ion-button>
          </ion-item>
        </ion-row>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Chateau Mouton</ion-card-title>
        </ion-card-header>
        <ion-row>
          <ion-col center text-center>
            <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />
          </ion-col>
          <ion-col center text-center>
            <ion-card-content>
              Full body with Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </ion-card-content>
          </ion-col>
          <ion-item class="buttonGroup">
            <ion-button fill="outline" slot="end">Rate</ion-button>
            <ion-button fill="outline" slot="end">Comment</ion-button>
            <ion-button fill="outline" slot="end">Order More</ion-button>
          </ion-item>
        </ion-row>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Chateau Mouton</ion-card-title>
        </ion-card-header>
        <ion-row>
          <ion-col center text-center>
            <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />
          </ion-col>
          <ion-col center text-center>
            <ion-card-content>
              Full body with Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </ion-card-content>
          </ion-col>
          <ion-item class="buttonGroup">
            <ion-button fill="outline" slot="end">Rate</ion-button>
            <ion-button fill="outline" slot="end">Comment</ion-button>
            <ion-button fill="outline" slot="end">Order More</ion-button>
          </ion-item>
        </ion-row>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Chateau Mouton</ion-card-title>
        </ion-card-header>
        <ion-row>
          <ion-col center text-center>
            <img src="/assets/icon/wine1.jpg" alt="wine1" class="wine" />
          </ion-col>
          <ion-col center text-center>
            <ion-card-content>
              Full body with Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </ion-card-content>
          </ion-col>
          <ion-item class="buttonGroup">
            <ion-button fill="outline" slot="end">Rate</ion-button>
            <ion-button fill="outline" slot="end">Comment</ion-button>
            <ion-button fill="outline" slot="end">Order More</ion-button>
          </ion-item>
        </ion-row>
      </ion-card>
    </ion-content>
  </basic-layout>
</template>

<script>
import { IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
import { keypad } from "ionicons/icons";

export default defineComponent({
  name: "Home",
  components: {
    IonButton,
  },
  data() {
    return { keypad };
  },
});
</script>

<template>
  <ion-page>
    <ion-icon :icon="star"></ion-icon>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonIcon, IonPage
} from '@ionic/vue';
import { star } from 'ionicons/icons';

export default defineComponent({
  components: { IonIcon, IonPage},
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      star,
      beforeTabChange,
      afterTabChange
    }
  }
});
</script>
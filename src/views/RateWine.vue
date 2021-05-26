<template>
  <main-layout :pageTitle="profile.first_name">
    <ion-page>
      <!--  Main Menu here  -->
      <ion-content class="ion-padding">
        <div class="ion-padding">
          <h2>My Orders</h2>
        </div>

        <div class="tab-holder">
          <button
            @click="selectTab(1)"
            :class="{ 'active-tab': currentTab == 1 }"
          >
            Current
          </button>

          <button
            @click="selectTab(2)"
            :class="{ 'active-tab': currentTab == 2 }"
          >
            Last Month
          </button>

          <button
            @click="selectTab(3)"
            :class="{ 'active-tab': currentTab == 3 }"
          >
            Previous Month
          </button>
        </div>

        <div v-if="wines.length == 0" class="ion-padding">
          <h3>Sorry! We don't have wines delivered to you yet!</h3>
        </div>

        <div v-if="currentTab == 1">
            <!-- <ion-searchbar placeholder="Search wines"></ion-searchbar> -->
          <ion-card v-for="wine in wines" :key="wine.id">
            <ion-card-header>
              <ion-card-title
                >{{ wine.wine_name }} {{ wine.year }} - {{ wine.colour }}
              </ion-card-title>
              <ion-icon color="primary" :icon="heartCircleOutline"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <img
                v-if="wine.wine_photo"
                src="/assets/icon/wine1.jpg"
                alt="wine1"
                class="wine"
              />

              <div>{{ wine.description }}</div>
              <div>
                <ion-button @click="onRate(1)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(2)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(3)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(4)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(5)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
              </div>

              <!-- <div>
                {{ wine.wine_info }}
              </div> -->
              
              <ion-button
                expand="block"
                @click="
                  orderMorePrompt(
                    wine.wine_name,
                    wine.year,
                    wine.winedab_sku,
                    subs[0],
                    profile
                  )
                "
              >
                Buy Again
              </ion-button>

              <div class="comment-wrapper">
                <ion-grid>
                  <ion-row>
                    <ion-col size="8">
                      <div>
                        <input
                          @keyup.enter="saveComment"
                          type="text"
                          v-model="newComment"
                          placeholder="Your personal notes here"
                        />
                      </div>
                    </ion-col>
                    <ion-col>
                      <div>
                        <button @click="saveComment">
                          Add Note
                        </button>
                      </div>
                    </ion-col>
                  </ion-row>
                </ion-grid>
                <p v-for="comment in reversedComments" :key="comment.id">
                  {{ comment.comment }}
                </p>
              </div>
            </ion-card-content>
          </ion-card>
        </div>

        <div v-if="currentTab == 2">
            <!-- <ion-searchbar placeholder="Search wines"></ion-searchbar> -->
          <ion-card v-for="wine in wines" :key="wine.id">
            <ion-card-header>
              <ion-card-title
                >{{ wine.wine_name }} {{ wine.year }} - {{ wine.colour }}
              </ion-card-title>
              <ion-icon color="primary" :icon="heartCircleOutline"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <img
                v-if="wine.wine_photo"
                src="/assets/icon/wine1.jpg"
                alt="wine1"
                class="wine"
              />

              <div>{{ wine.description }}</div>
              <div>
                <ion-button @click="onRate(1)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(2)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(3)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(4)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(5)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
              </div>

              <!-- <div>
                {{ wine.wine_info }}
              </div> -->
              
              <ion-button
                expand="block"
                @click="
                  orderMorePrompt(
                    wine.wine_name,
                    wine.year,
                    wine.winedab_sku,
                    subs[0],
                    profile
                  )
                "
              >
                Order More
              </ion-button>

              <div class="comment-wrapper">
                <ion-grid>
                  <ion-row>
                    <ion-col size="8">
                      <div>
                        <input
                          @keyup.enter="saveComment"
                          type="text"
                          v-model="newComment"
                          placeholder="Your personal notes here"
                        />
                      </div>
                    </ion-col>
                    <ion-col>
                      <div>
                        <button @click="saveComment">
                          Add Note
                        </button>
                      </div>
                    </ion-col>
                  </ion-row>
                </ion-grid>
                <p v-for="comment in reversedComments" :key="comment.id">
                  {{ comment.comment }}
                </p>
              </div>
            </ion-card-content>
          </ion-card>
        </div>

        <div v-if="currentTab == 3">
            <!-- <ion-searchbar placeholder="Search wines"></ion-searchbar> -->
          <ion-card v-for="wine in wines" :key="wine.id">
            <ion-card-header>
              <ion-card-title
                >{{ wine.wine_name }} {{ wine.year }} - {{ wine.colour }}
              </ion-card-title>
              <ion-icon color="primary" :icon="heartCircleOutline"></ion-icon>
            </ion-card-header>

            <ion-card-content>
              <img
                v-if="wine.wine_photo"
                src="/assets/icon/wine1.jpg"
                alt="wine1"
                class="wine"
              />

              <div>{{ wine.description }}</div>
              <div>
                <ion-button @click="onRate(1)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(2)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(3)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(4)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(5)">
                  <ion-icon :icon="starOutline"></ion-icon
                ></ion-button>
              </div>

              <!-- <div>
                {{ wine.wine_info }}
              </div> -->
              
              <ion-button
                expand="block"
                @click="
                  orderMorePrompt(
                    wine.wine_name,
                    wine.year,
                    wine.winedab_sku,
                    subs[0],
                    profile
                  )
                "
              >
                Order More
              </ion-button>

              <div class="comment-wrapper">
                <ion-grid>
                  <ion-row>
                    <ion-col size="8">
                      <div>
                        <input
                          @keyup.enter="saveComment"
                          type="text"
                          v-model="newComment"
                          placeholder="Your personal notes here"
                        />
                      </div>
                    </ion-col>
                    <ion-col>
                      <div>
                        <button @click="saveComment">
                          Add Note
                        </button>
                      </div>
                    </ion-col>
                  </ion-row>
                </ion-grid>
                <p v-for="comment in reversedComments" :key="comment.id">
                  {{ comment.comment }}
                </p>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { alertController } from "@ionic/core";
import { settings, keypad, star, starOutline, heartCircleOutline } from "ionicons/icons";
import {
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonContent,
  IonPage,
  IonGrid,
  IonIcon,
  IonRow,
  IonCol,
  //IonSearchbar,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
import { useRouter } from "vue-router";
import { product } from "../constants/Product";
export default defineComponent({
  name: "WineList",
  components: {
    IonContent,
    IonButton,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    //IonSearchbar,
  },
  data() {
    return { star, starOutline, heartCircleOutline, keypad, responseData: {}, currentTab: 1 };
  },
  methods: {
    ...mapActions([
      "loadWines",
      "loadProfile",
      "loadSubscription",
      "buyMoreOrder",
    ]),
    async editCommentPrompt() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Enter Your Comment!",
        inputs: [
          {
            name: "Wine Comment",
            id: "wine_comment",
            value: "",
            placeholder: "Your Comment",
            type: "textarea",
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Cancel");
            },
          },
          {
            text: "Ok",
            handler: () => {
              console.log("Confirm Ok");
            },
          },
        ],
      });
      return alert.present();
    },
    async orderMorePrompt(name, year, sku, sub, profile) {
      console.log(sub);
      const alert = await alertController.create({
        header: "Buy More",
        subheader: "Subtitle",
        message: `By clicking "Submit Order", you will place an order of a box of 6 bottles of ${name} ${
          year ? year : ""
        }. The total order amount is $ ${this.getPrice(
          sub
        )} including standard shipping cost.
        The order will be processed by our staff soon. Enjoy! Thank you!`,

        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {},
          },
          {
            text: "Submit Order",
            handler: () => {
              const payload = {
                customer_id: profile.id,
                payment_method: "bacs",
                payment_method_title: "Direct Bank Transfer",
                set_paid: false,
                customer_note: `This is a test from app buymore function please ignore
                 a box of six bottles of ${name} ${
                  year ? year : ""
                } with Total amount of ${this.getPrice(
                  sub
                )} including shipping cost `,
                billing: {
                  first_name: profile.billing.first_name,
                  last_name: profile.billing.last_name,
                  address_1: profile.billing.address_1,
                  address_2: profile.billing.address_2,
                  city: profile.billing.city,
                  state: profile.billing.state,
                  postcode: profile.billing.postcode,
                  country: profile.billing.country,
                  email: profile.billing.email,
                  phone: profile.billing.phone,
                },
                shipping: {
                  first_name: profile.shipping.first_name,
                  last_name: profile.shipping.last_name,
                  address_1: profile.shipping.address_1,
                  address_2: profile.shipping.address_2,
                  city: profile.shipping.city,
                  state: profile.shipping.state,
                  postcode: profile.shipping.postcode,
                  country: profile.shipping.country,
                },
                line_items: [
                  {
                    product_id: this.getProduct(sub),
                    quantity: 1,
                  },
                ],
                shipping_lines: [
                  {
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: "",
                  },
                ],
                coupon_lines: [
                  {
                    code: "testcheckout!",
                  },
                ],
              };
              console.log(payload);
              this.buyMoreOrder(payload).then(() => {
                console.log("complete buy more");
              });
            },
          },
        ],
      });
      alert.present();
    },
    getPrice(planName) {
      return product.getPrice(planName);
    },
    getProduct(planName) {
      return product.getProduct(planName);
    },
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
    onRate(rating) {
      console.log(rating);
    },
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
    this.loadWines();
    this.loadProfile();
    this.loadSubscription();
  },
  setup() {
    const router = useRouter();
    return {
      settings,
      router,
    };
  },
});
</script>

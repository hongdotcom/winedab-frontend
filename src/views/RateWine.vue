<template>
  <main-layout :pageTitle="profile.first_name">
    <ion-page>
      <!--  Main Menu here  -->
      <!-- <div class="custom-bar">
        <ion-buttons>
          <ion-button class="nav-button active" @click="$router.push('/rate-wine')"> Rate Wine </ion-button>
          <ion-button class="nav-button" @click="$router.push('/my-cellar')"> My Cellar </ion-button>
          <ion-button class="nav-button-last" @click="$router.push('/my-subscription')"> Subscription </ion-button>
        </ion-buttons>
      </div> -->

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
          <ion-searchbar placeholder="Search wines"></ion-searchbar>
          <ion-card v-for="wine in wines" :key="wine.id">
            <ion-card-header>
              <ion-card-title class="title-header"
                >{{ wine.wine_name }} {{ wine.year }} - {{ wine.colour }}

                <ion-icon color="danger" :icon="heartCircleOutline"></ion-icon>
              </ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <img
                v-if="wine.wine_photo"
                src="/assets/icon/wine1.jpg"
                alt="wine1"
                class="wine"
              />

              <div
                v-if="wine.rating == 0 || !wine.rating"
                class="rating-wrapper"
              >
                <ion-button @click="onRate(wine, 1)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 2)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 3)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 4)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 5)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
              </div>

              <div v-if="wine.rating == 1" class="rating-wrapper">
                <ion-button @click="onRate(wine, 1)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 2)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 3)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 4)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 5)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
              </div>
              <div v-if="wine.rating == 2" class="rating-wrapper">
                <ion-button @click="onRate(wine, 1)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 2)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 3)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 4)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 5)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
              </div>
              <div v-if="wine.rating == 3" class="rating-wrapper">
                <ion-button @click="onRate(wine, 1)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 2)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 3)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 4)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 5)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
              </div>
              <div v-if="wine.rating == 4" class="rating-wrapper">
                <ion-button @click="onRate(wine, 1)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 2)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 3)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 4)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 5)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
              </div>
              <div v-if="wine.rating == 5" class="rating-wrapper">
                <ion-button @click="onRate(wine, 1)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 2)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 3)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 4)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(wine, 5)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
              </div>

              <div>{{ wine.description }}</div>

              <ion-grid>
                <ion-row>
                  <ion-col size="9"> </ion-col>
                  <ion-col>
                    <ion-button
                      color="danger"
                      class="float-right"
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
                      Buy More
                    </ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>

              <div class="comment-wrapper">
                <ion-grid>
                  <ion-row>
                    <ion-col size="9">
                      <div>
                        <input
                          @keyup.enter="saveComment(wine, wine.winedab_sku)"
                          type="text"
                          :key="wine.winedab_sku"
                          v-model="newComment"
                          v-bind:placeholder="
                            wine.comment
                              ? wine.comment
                              : 'Your personal notes here.'
                          "
                        />
                      </div>
                    </ion-col>
                    <ion-col>
                      <div>
                        <button @click="saveComment(wine, wine.winedab_sku)">
                          Add
                        </button>
                      </div>
                    </ion-col>
                  </ion-row>
                </ion-grid>
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
                <ion-icon color="primary" :icon="heartCircleOutline"></ion-icon>
              </ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <img
                v-if="wine.wine_photo"
                src="/assets/icon/wine1.jpg"
                alt="wine1"
                class="wine"
              />

              <div class="rating-wrapper">
                <ion-button @click="onRate(1)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(2)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(3)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(4)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(5)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
              </div>

              <div>{{ wine.description }}</div>
              <ion-grid>
                <ion-row>
                  <ion-col size="9"> </ion-col>
                  <ion-col>
                    <ion-button
                      color="danger"
                      class="float-right"
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
                  </ion-col>
                </ion-row>
              </ion-grid>

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
                          Add
                        </button>
                      </div>
                    </ion-col>
                  </ion-row>
                </ion-grid>
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
                <ion-icon color="primary" :icon="heartCircleOutline"></ion-icon>
              </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <img
                v-if="wine.wine_photo"
                src="/assets/icon/wine1.jpg"
                alt="wine1"
                class="wine"
              />

              <div class="rating-wrapper">
                <ion-button @click="onRate(1)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(2)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(3)">
                  <ion-icon color="warning" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(4)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
                <ion-button @click="onRate(5)">
                  <ion-icon color="dark" :icon="star"></ion-icon
                ></ion-button>
              </div>

              <div>{{ wine.description }}</div>
              <ion-grid>
                <ion-row>
                  <ion-col size="9"> </ion-col>
                  <ion-col>
                    <ion-button
                      color="danger"
                      class="float-right"
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
                  </ion-col>
                </ion-row>
              </ion-grid>

              <div class="comment-wrapper">
                <ion-grid>
                  <ion-row>
                    <ion-col size="8">
                      <div>
                        <input
                          @keyup.enter="saveComment"
                          type="text"
                          v-model="newComment"
                          placeholder="add comment"
                        />
                      </div>
                    </ion-col>
                    <ion-col>
                      <div>
                        <button @click="saveComment">
                          Add
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
import {
  settings,
  keypad,
  star,
  starOutline,
  heartCircleOutline,
} from "ionicons/icons";
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
  IonSearchbar,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
import { useRouter } from "vue-router";
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
    IonSearchbar,
  },
  data() {
    return {
      star,
      starOutline,
      heartCircleOutline,
      keypad,
      responseData: {},
      currentTab: 1,
      editing: false,
      newComment: "",
      comments: [{ id: 1, comment: "" }],
    };
  },
  methods: {
    ...mapActions([
      "loadWines",
      "loadProfile",
      "loadSubscription",
      "buyMoreOrder",
      "submitRating",
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
      console.log(this.getProduct(sub));
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
              this.buyMoreOrder(payload).then(() => {});
            },
          },
        ],
      });
      alert.present();
    },
    getPrice(planName) {
      if (planName.line_items[0].name.includes("Everyday Exceptional")) {
        return "119.98";
      }
      if (planName.line_items[0].name.includes("Bargain Bottles")) {
        return "96.44";
      }
      if (planName.line_items[0].name.includes("Exquisite Entertaining")) {
        return "156.44";
      }
      if (planName.line_items[0].name.includes("Stellar Selection")) {
        return "288.44";
      }
    },
    getProduct(planName) {
      if (planName.line_items[0].name.includes("Everyday Exceptional")) {
        return "15836";
      }
      if (planName.line_items[0].name.includes("Bargain Bottles")) {
        return "15868";
      }
      if (planName.line_items[0].name.includes("Exquisite Entertaining")) {
        return "15869";
      }
      if (planName.line_items[0].name.includes("Stellar Selection")) {
        return "15870";
      }
    },
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
    async onRate(wine, rating) {
      const payload = {
        order_delivery_id: wine.order_delivery_id,
        order_id: wine.order_id,
        code: wine.winedab_sku,
        rating: rating,
        comment: wine.comment,
      };
      await this.submitRating(payload).then(() => {});
      this.loadWines();
    },

    async saveComment(wine) {
      const payload = {
        order_delivery_id: wine.order_delivery_id,
        order_id: wine.order_id,
        code: wine.winedab_sku,
        rating: wine.rating,
        comment: this.newComment,
      };
      await this.submitRating(payload).then(() => {});
      this.loadWines();
      this.newComment = "";
    },
    doEdit(editing) {
      this.editing = editing;
      this.newComment = "";
    },
  },
  computed: {
    ...mapGetters({
      subs: "subscription",
      wines: "wines",
      profile: "profile",
    }),
    reversedComments() {
      return [...this.comments].reverse();
    },
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

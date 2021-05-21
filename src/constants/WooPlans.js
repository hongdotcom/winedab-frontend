/**
 * @TODO: refactor this to be returned from the back-end
 */
import { each } from "lodash";

export const SHIPPING_COST = 6.5;
export const FIRST_BOX_DISCOUNT = 0.2;
export const CHECKOUT_URL = window.Winedab.woocommerce_url;

export const PLAN_EXQUISITE_ENTERTAINING = "exquisite_entertaining";
export const PLAN_BARGAIN_BOTTLES = "bargain_bottles";

export const CONSUMER_PLANS = {
  everyday_exceptional: {
    title: "Everyday Exceptional",
    description:
      "Perfect for a glass with your evening meal or with friends, or anytime really.",
    startingPricePerBottle: 19.99,
    sku: "everyday-exceptional",
    product_id: 9177,
    variations: {
      bottles_1: {
        price: 19.99,
        units: 1,
        variation_id: 9179,
        sku: "everyday-exceptional-1-bottle",
      },
      bottles_3: {
        price: 57,
        units: 3,
        variation_id: 9180,
        sku: "everyday-exceptional-3-bottles",
      },
      bottles_6: {
        price: 113,
        units: 6,
        variation_id: 9181,
        sku: "everyday-exceptional-6-bottles",
      },
      bottles_12: {
        price: 215,
        units: 12,
        variation_id: 9182,
        sku: "everyday-exceptional-12-bottles",
      },
    },
  },
  [PLAN_EXQUISITE_ENTERTAINING]: {
    title: "Exquisite Entertaining",
    description:
      "Undiscovered gems and perfect companions to meals and entertaining with a wow factor.",
    startingPricePerBottle: 29.99,
    product_id: 9188,
    sku: "exquisite-entertaining",
    variations: {
      bottles_1: {
        price: 29.99,
        units: 1,
        variation_id: 9189,
        sku: "exquisite-entertaining-1-bottle",
      },
      bottles_3: {
        price: 87,
        units: 3,
        variation_id: 9190,
        sku: "exquisite-entertaining-3-bottles",
      },
      bottles_6: {
        price: 164,
        units: 6,
        variation_id: 9191,
        sku: "exquisite-entertaining-6-bottles",
      },
      bottles_12: {
        price: 309,
        units: 12,
        variation_id: 9192,
        sku: "exquisite-entertaining-12-bottles",
      },
    },
  },
  stellar_selection: {
    title: "Stellar Selection",
    description:
      "You won’t want to share these wines from top winemakers around the world.",
    startingPricePerBottle: 46.99,
    product_id: 9193,
    sku: "stellar-selection",
    variations: {
      bottles_1: {
        price: 46.99,
        units: 1,
        variation_id: 9194,
        sku: "stellar-selection-1-bottle",
      },
      bottles_3: {
        price: 137,
        units: 3,
        variation_id: 9195,
        sku: "stellar-selection-3-bottles",
      },
      bottles_6: {
        price: 259,
        units: 6,
        variation_id: 9196,
        sku: "stellar-selection-6-bottles",
      },
      bottles_12: {
        price: 499,
        units: 12,
        variation_id: 9197,
        sku: "stellar-selection-12-bottles",
      },
    },
  },
  [PLAN_BARGAIN_BOTTLES]: {
    title: "Bargain Bottles",
    description:
      "Perfect for a glass with your evening meal or with friends, or anytime really.",
    startingPricePerBottle: 14.99,
    sku: "bargain-bottles",
    product_id: 15021,
    variations: {
      bottles_1: {
        price: 14.99,
        units: 1,
        variation_id: 15022,
        sku: "L01-1",
      },
      bottles_3: {
        price: 44.97,
        units: 3,
        variation_id: 15023,
        sku: "L03-1",
      },
      bottles_6: {
        price: 89.94,
        units: 6,
        variation_id: 15024,
        sku: "L06-1",
      },
      bottles_12: {
        price: 179.88,
        units: 12,
        variation_id: 15025,
        sku: "L12-1",
      },
    },
  },
};

let giftCards = JSON.parse(JSON.stringify(CONSUMER_PLANS));

/**
 * All gift cards are inside the same product, they're just variations.
 */
each(
  ["everyday_exceptional", "exquisite_entertaining", "stellar_selection"],
  (plan) => {
    giftCards[plan].product_id = 9696;
    giftCards[plan].sku = "gift-box";
  }
);

/**
 * EVERYDAY EXCEPTIONAL
 */
giftCards.everyday_exceptional.variations.bottles_1.variation_id = 9702;
giftCards.everyday_exceptional.variations.bottles_1.sku =
  "everyday-exceptional-gift-card-1-bottle";

giftCards.everyday_exceptional.variations.bottles_3.variation_id = 9705;
giftCards.everyday_exceptional.variations.bottles_3.sku =
  "everyday-exceptional-gift-card-3-bottles";

giftCards.everyday_exceptional.variations.bottles_6.variation_id = 9707;
giftCards.everyday_exceptional.variations.bottles_6.sku =
  "everyday-exceptional-gift-card-6-bottles";

giftCards.everyday_exceptional.variations.bottles_12.variation_id = 9710;
giftCards.everyday_exceptional.variations.bottles_12.sku =
  "everyday-exceptional-gift-card-12-bottles";

/**
 * EXQUISITE ENTERTAINING
 */
giftCards.exquisite_entertaining.variations.bottles_1.variation_id = 9703;
giftCards.exquisite_entertaining.variations.bottles_1.sku =
  "exquisite-entertaining-gift-card-1-bottle";

giftCards.exquisite_entertaining.variations.bottles_3.variation_id = 9706;
giftCards.exquisite_entertaining.variations.bottles_3.sku =
  "exquisite-entertaining-gift-card-3-bottles";

giftCards.exquisite_entertaining.variations.bottles_6.variation_id = 9709;
giftCards.exquisite_entertaining.variations.bottles_6.sku =
  "exquisite-entertaining-gift-card-6-bottles";

giftCards.exquisite_entertaining.variations.bottles_12.variation_id = 9712;
giftCards.exquisite_entertaining.variations.bottles_12.sku =
  "exquisite-entertaining-gift-card-12-bottles";

/**
 * STELLAR SELECTION
 */
giftCards.stellar_selection.variations.bottles_1.variation_id = 9704;
giftCards.stellar_selection.variations.bottles_1.sku =
  "stellar-selection-gift-card-1-bottle";

giftCards.stellar_selection.variations.bottles_3.variation_id = 9708;
giftCards.stellar_selection.variations.bottles_3.sku =
  "stellar-selection-gift-card-3-bottles";

giftCards.stellar_selection.variations.bottles_6.variation_id = 9711;
giftCards.stellar_selection.variations.bottles_6.sku =
  "stellar-selection-gift-card-6-bottles";

giftCards.stellar_selection.variations.bottles_12.variation_id = 9713;
giftCards.stellar_selection.variations.bottles_12.sku =
  "stellar-selection-gift-card-12-bottles";

export const GIFT_CARDS = giftCards;

let giftingPlans = JSON.parse(JSON.stringify(CONSUMER_PLANS));

/**
 * EVERYDAY EXCEPTIONAL
 */
giftingPlans.everyday_exceptional.sku = "everyday-exceptional-gift";
giftingPlans.everyday_exceptional.product_id = 9271;

giftingPlans.everyday_exceptional.variations.bottles_1.variation_id = 9272;
giftingPlans.everyday_exceptional.variations.bottles_1.sku =
  "everyday-exceptional-gift-1-bottle";

giftingPlans.everyday_exceptional.variations.bottles_3.variation_id = 9273;
giftingPlans.everyday_exceptional.variations.bottles_3.sku =
  "everyday-exceptional-gift-3-bottles";

giftingPlans.everyday_exceptional.variations.bottles_6.variation_id = 9274;
giftingPlans.everyday_exceptional.variations.bottles_6.sku =
  "everyday-exceptional-gift-6-bottles";

giftingPlans.everyday_exceptional.variations.bottles_12.variation_id = 9275;
giftingPlans.everyday_exceptional.variations.bottles_12.sku =
  "everyday-exceptional-gift-12-bottles";

/**
 * EXQUISITE ENTERTAINING
 */

giftingPlans.exquisite_entertaining.sku = "exquisite-entertaining-gift";
giftingPlans.exquisite_entertaining.product_id = 9276;

giftingPlans.exquisite_entertaining.variations.bottles_1.variation_id = 9277;
giftingPlans.exquisite_entertaining.variations.bottles_1.sku =
  "exquisite-entertaining-gift-1-bottle";

giftingPlans.exquisite_entertaining.variations.bottles_3.variation_id = 9278;
giftingPlans.exquisite_entertaining.variations.bottles_3.sku =
  "exquisite-entertaining-gift-3-bottles";

giftingPlans.exquisite_entertaining.variations.bottles_6.variation_id = 9279;
giftingPlans.exquisite_entertaining.variations.bottles_6.sku =
  "exquisite-entertaining-gift-6-bottles";

giftingPlans.exquisite_entertaining.variations.bottles_12.variation_id = 9280;
giftingPlans.exquisite_entertaining.variations.bottles_12.sku =
  "exquisite-entertaining-gift-12-bottles";

/**
 * STELLAR SELECTION
 */

giftingPlans.stellar_selection.sku = "stellar-selection-gift";
giftingPlans.stellar_selection.product_id = 9281;

giftingPlans.stellar_selection.variations.bottles_1.variation_id = 9282;
giftingPlans.stellar_selection.variations.bottles_1.sku =
  "stellar-selection-gift-1-bottle";

giftingPlans.stellar_selection.variations.bottles_3.variation_id = 9283;
giftingPlans.stellar_selection.variations.bottles_3.sku =
  "stellar-selection-gift-3-bottles";

giftingPlans.stellar_selection.variations.bottles_6.variation_id = 9284;
giftingPlans.stellar_selection.variations.bottles_6.sku =
  "stellar-selection-gift-6-bottles";

giftingPlans.stellar_selection.variations.bottles_12.variation_id = 9285;
giftingPlans.stellar_selection.variations.bottles_12.sku =
  "stellar-selection-gift-12-bottles";

export const GIFTING_PLANS = giftingPlans;

export const GIFT_CARDS_PLAN_MAPPING = {
  9702: 9272,
  9705: 9273,
  9707: 9274,
  9710: 9275,
  9703: 9277,
  9706: 9278,
  9709: 9279,
  9712: 9280,
  9704: 9282,
  9708: 9283,
  9711: 9284,
  9713: 9285,
};

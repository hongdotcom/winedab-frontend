/**
 * @TODO: refactor this to be returned from the back-end
 */

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

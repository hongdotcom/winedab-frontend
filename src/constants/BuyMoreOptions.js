export const SHIPPING_COST = 6.5;

const payload = {
  customer_id: profile.id,
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
  set_paid: false,
  customer_note: `This is a test from app buymore function please ignore
                 a box of six bottles of ${name} ${
    year ? year : ""
  } with Total amount of ${this.getPrice(sub)} including shipping cost `,
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
      total: "0.00",
    },
  ],
  // coupon_lines: [
  //   {
  //     code: "testcheckout!",
  //   },
  // ],
};

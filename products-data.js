// ====== PHOENIXBORNE OATH - PRODUCT DATA ======

const PRODUCTS = [
  {
    id: 1,
    name: "BROKEN GATE TEE",
    slug: "phoenix-borne-tee",
    category: "season1",
    price: 199000,
    originalPrice: null,
    badge: "First article",
    isNew: false,
    discount: "New Arrival",
    stockStatus: "Low Stock",

    sizes: {
      S: true,
      S: false,
      M: false,
      L: false,
      XL: true,
      XXL: true,
    },

    images: [
  "images/phoenixborne-oath-broken-gate-tee-front.jpg",
  "images/phoenixborne-oath-broken-gate-tee-back.jpg",
  "images/phoenixborne-oath-broken-gate-size-chart1.jpg"
],
cover: "images/phoenixborne-oath-broken-gate-cover.jpg"
 },

  {
    id: 2,
    name: "COMING SOON TEE",
    slug: "coming-soon-tee",
    category: "soldout",
    price: 0,
    originalPrice: null,
    badge: "Sold Out",
    isNew: false,
    discount: "",
    stockStatus: "Sold Out",

    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false
    },

    images: [
      "images/cooming.jpg",
      "images/petir.jpg",
      "images/size.jpg"
    ],

    cover: "images/cooming.jpg"
    },

  {
    id: 3,
    name: "PHOENIXBORNE TEE",
    slug: "phoenix-borne-tee2",
    category: "season1",
    price: 289000,
    originalPrice: null,
    badge: "new article",
    isNew: false,
    discount: "New Arrival",
    stockStatus: "Ready Stock",

    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: false
    },

    images: [
      "images/petir.jpg",
      "images/petir.jpg",
      "images/size.jpg"
    ],

    cover: "images/petir.jpg"
  }
];

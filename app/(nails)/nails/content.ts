// All business details for the nail salon site. Swap these for a real client's.
// Name, phone, email and address are invented demo values.

export const business = {
  name: "Lune Nail Bar",
  wordmark: "lune",
  city: "Los Angeles",
  phone: "(323) 555-0182",
  phoneHref: "tel:+13235550182",
  email: "hello@lunenailbar.example",
  address: { street: "100 Example Ave", cityLine: "Los Angeles, CA 90046" },
  hours: [{ days: "Every day", time: "10:00 AM – 8:00 PM" }],
};

export const seo = {
  description:
    "Lune Nail Bar is a Los Angeles nail studio for manicures, pedicures, Gel-X extensions and nail art, with a 4-week wear guarantee on gel.",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export const bookCta = { label: "Book now", href: "/contact" };

export const hero = {
  title: ["Nails for every hand.", "Care for every day."],
  offer: { tag: "new clients −15%", title: "Gel-X full set", href: "/services#extensions", image: "/nails/offer.jpg" },
  review: {
    quote: "I came in for a quick gel fill and left feeling like I'd had a whole day off. Four weeks later, not a single chip.",
    image: "/nails/review.jpg",
  },
};

export const mission = {
  label: "Our approach",
  text: "A proper manicure should feel calm, look clean and still be intact a month later. We take our time on prep, use gentle products, and never rush you out of the chair.",
  link: { label: "See the menu", href: "/services" },
};

export const categories = [
  { label: "manicure", href: "/services#manicure", image: "/nails/tile-manicure.jpg", tone: "lilac" },
  { label: "extensions", href: "/services#extensions", image: "/nails/tile-extensions.jpg", tone: "stone" },
  { label: "nail art", href: "/services#art", image: "/nails/tile-art.jpg", tone: "blue" },
  { label: "care", href: "/services#pedicure", image: "/nails/tile-care.jpg", tone: "sand" },
] as const;

export const feature = {
  chip: "Most booked",
  tags: ["Clean", "Calm", "Lasting"],
  eyebrow: "( for hands )",
  title: "Signature gel manicure",
  price: "$95",
  image: "/nails/feature.jpg",
};

export const promises = [
  { value: "4 weeks", label: "Gel wear guarantee. If it chips, we fix it for free." },
  { value: "3 levels", label: "Book a Stylist, Senior or Master technician to suit your budget." },
  { value: "7 days", label: "Open every day, 10 AM to 8 PM." },
];

export const reviews = [
  {
    quote: "Best Gel-X set I've had in LA. The shape is perfect and they actually listened when I said short.",
    name: "Maya R.",
    service: "Gel-X full set",
  },
  {
    quote: "Quiet, spotless and unhurried. My Master technician fixed nails another salon had wrecked.",
    name: "Jordan P.",
    service: "Signature manicure",
  },
  {
    quote: "Brought my daughter for her first manicure. They were so patient and she hasn't stopped talking about it.",
    name: "Alana K.",
    service: "Kids manicure",
  },
];

export const tiers = ["Stylist", "Senior", "Master"];

type PricedItem = { name: string; desc: string; prices: string[] };

export const menu: { id: string; label: string; title: string; note?: string; tiered: boolean; items: PricedItem[] }[] = [
  {
    id: "manicure",
    label: "( manicure )",
    title: "Manicures",
    note: "Every manicure includes shaping, cuticle care and a hand massage.",
    tiered: true,
    items: [
      { name: "Classic manicure", desc: "Regular polish, 30 minutes.", prices: ["$60", "$75", "$90"] },
      { name: "Gel manicure", desc: "Gel polish with our 4-week wear guarantee.", prices: ["$75", "$95", "$120"] },
      {
        name: "Signature gel manicure",
        desc: "Dry manicure, IBX strengthening and a structured gel overlay.",
        prices: ["$95", "$115", "$140"],
      },
    ],
  },
  {
    id: "pedicure",
    label: "( pedicure )",
    title: "Pedicures",
    note: "Includes a soak, exfoliation and a longer foot and calf massage.",
    tiered: true,
    items: [
      { name: "Classic pedicure", desc: "Regular polish.", prices: ["$80", "$90", "$100"] },
      { name: "Gel pedicure", desc: "Gel polish that lasts through sandal season.", prices: ["$95", "$105", "$120"] },
    ],
  },
  {
    id: "extensions",
    label: "( extensions )",
    title: "Extensions",
    note: "New clients get 15% off their first Gel-X full set.",
    tiered: false,
    items: [
      { name: "Gel-X full set", desc: "Soft gel tips in your choice of shape and length.", prices: ["$180"] },
      { name: "Sculpted full set", desc: "Hand-built hard gel extensions.", prices: ["$200"] },
      { name: "Fill", desc: "Rebalance and refresh up to three weeks after your set.", prices: ["$110"] },
      { name: "Removal", desc: "Gentle soak-off with no drilling into the natural nail.", prices: ["$25"] },
    ],
  },
  {
    id: "art",
    label: "( nail art )",
    title: "Nail art & add-ons",
    tiered: false,
    items: [
      { name: "French or micro-French", desc: "Clean classic tips.", prices: ["$20"] },
      { name: "Chrome or cat-eye", desc: "Any color, full set.", prices: ["$20"] },
      { name: "Hand-painted art", desc: "Accents to full designs. Bring a reference.", prices: ["from $40"] },
      { name: "IBX treatment", desc: "Strengthens thin or peeling nails.", prices: ["$45"] },
      { name: "Callus treatment", desc: "Add to any pedicure.", prices: ["$30"] },
    ],
  },
  {
    id: "kids",
    label: "( kids )",
    title: "For kids under 12",
    tiered: false,
    items: [
      { name: "Kids manicure", desc: "Shape, tidy cuticles and a fun color.", prices: ["$40"] },
      { name: "Kids manicure with art", desc: "Add stickers, dots or a simple design.", prices: ["$60"] },
    ],
  },
];

export const servicesPage = {
  title: "The menu",
  sub: "Manicures, pedicures and gel prices depend on your technician's level. Extensions, art and add-ons are one price.",
  guarantee: {
    title: "The 4-week gel guarantee",
    text: "If your gel manicure or pedicure chips or lifts within four weeks, come back and we'll fix it for free. Just book a repair and mention your original appointment.",
  },
};

export const contactPage = {
  title: "Book an appointment",
  sub: "Send us a request and we'll confirm your time by text. Need something sooner? Call and we'll check today's chairs.",
  services: [
    "Classic manicure",
    "Gel manicure",
    "Signature gel manicure",
    "Classic pedicure",
    "Gel pedicure",
    "Gel-X full set",
    "Sculpted full set",
    "Fill",
    "Kids manicure",
    "Not sure yet",
  ],
  tiers: ["No preference", "Stylist", "Senior", "Master"],
  times: ["Morning (10–12)", "Midday (12–3)", "Afternoon (3–6)", "Evening (6–8)"],
};

export const closing = {
  title: "Your next appointment, sorted.",
  text: "Most days we have chairs open within 48 hours.",
};

export const footer = {
  about: "A calm nail studio in Los Angeles for manicures, pedicures, extensions and nail art.",
  demoNote: "Demo site. Business name, reviews and contact details are placeholders.",
};

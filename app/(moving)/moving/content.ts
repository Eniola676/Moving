// All business details for the moving site. Swap these for a real client's.
// Name, phone, email, address and license numbers are invented demo values.

export const business = {
  name: "Swift Haul Movers",
  logoMark: "SH",
  logoText: "SWIFT HAUL MOVERS",
  city: "San Antonio",
  phone: "(210) 555-0147",
  phoneHref: "tel:+12105550147",
  email: "hello@swifthaul.example",
  address: { street: "100 Example Blvd", cityLine: "San Antonio, TX 78205" },
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { days: "Saturday – Sunday", time: "8:00 AM – 5:00 PM" },
  ],
  licenses: ["USDOT #0000000", "TXDMV #000000000X"],
  rating: { stars: "★★★★★", score: "4.8", count: "3,200+", source: "Google reviews" },
  yearsInBusiness: "20+",
  hourlySpecial: "$120",
};

export const seo = {
  description:
    "Licensed San Antonio movers with low hourly rates, an on-time guarantee, free blanket wrapping and no stair fees.",
};

export const nav = [
  { label: "How it works", href: "/#how" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/services#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  title: "San Antonio movers with honest rates, careful hands and on-time crews.",
  sub: `${business.name} is a licensed local moving company. We send trained crews with a stocked 26-foot truck, wrap your furniture in blankets for free and never charge stair fees. Tell us where you're going and we'll send you a price you can hold us to.`,
  homeSizes: ["Studio / 1 bed", "2 bedroom", "3 bedroom", "4+ bedroom", "Office"],
};

export const steps = [
  {
    title: "1. Arrival",
    text: "Your movers arrive in a 26-foot truck stocked with straps, moving blankets and dollies, inside the window we promised.",
  },
  {
    title: "2. Stack and strap",
    text: "Everything is wrapped, stacked and strapped down so nothing shifts or gets damaged on the road.",
  },
  {
    title: "3. Drop off",
    text: "We carry each item to the room you choose, then set up the beds and connect the washer and dryer.",
  },
];

export const features = [
  {
    title: "Free Blanket Wrapping",
    text: "Furniture is wrapped in moving blankets before it leaves the room. There's no charge for this.",
  },
  {
    title: "No Stair Fees",
    text: "Third-floor walk-up or a single-story ranch, the hourly rate is the same. We don't add a fee per flight of stairs.",
  },
  {
    title: "Professional Movers Only",
    text: "We don't hire day laborers. Every crew member is experienced, trained and employed by us.",
  },
  {
    title: "Packing & Unpacking",
    text: "Let us pack the whole house or just the kitchen. We can also unpack at the new place so you're settled on day one.",
  },
  {
    title: "Liftgate Service",
    text: "Pianos, safes, gym equipment and pallets ride up on a liftgate, not someone's back.",
  },
  {
    title: "Last-Minute Moves",
    text: "Lease fell through or closing moved up? We take expedited and same-day moves whenever a crew is free, seven days a week.",
  },
];

export const statement = {
  lead: "We don't do gimmicks or over-promise.",
  rest: "You get a licensed crew, a stocked truck, and an hourly rate we'll put in writing before anyone lifts a box.",
};

export const stats = [
  { value: `${business.yearsInBusiness}`, label: "years moving San Antonio families" },
  { value: "38%", label: "of our business is repeat customers" },
  { value: `${business.rating.score}★`, label: `across ${business.rating.count} ${business.rating.source}` },
];

export const audiences = [
  {
    eyebrow: "Residential",
    title: "Homes and apartments.",
    text: "Full-service or partial help: we'll load, haul and unload everything, or just move the heavy pieces you can't manage.",
    points: ["Apartment and single-family moves", "Beds reassembled, washer and dryer reconnected", "Packing available by the room"],
  },
  {
    eyebrow: "Commercial",
    title: "Offices and businesses.",
    text: "Corporate and office moves planned around your hours so the team loses as little work time as possible.",
    points: ["Desks, files and equipment", "Liftgate for heavy or palletized items", "Evening and weekend scheduling"],
  },
  {
    eyebrow: "Statewide",
    title: "Long distance across Texas.",
    text: "Guaranteed one-day service to Dallas, Houston, Austin and Corpus Christi, with the same crew from pickup to drop-off.",
    points: ["One-day delivery to major Texas cities", "No hand-off between trucks", "Licensed by the State of Texas"],
  },
];

export const pricing = {
  title: "Moving pricing. Hourly, and in writing.",
  lede: "Our hourly rates are some of the lowest of any licensed mover in San Antonio, often less than half of what other companies charge. You pay only for the time we work.",
  featured: {
    local: { price: business.hourlySpecial, unit: "/ hour", note: "Our moving special for local San Antonio moves." },
    texas: { price: "Quote", unit: "per trip", note: "Guaranteed 1-day service to Dallas, Houston, Austin and Corpus Christi." },
  },
  plans: [
    {
      name: "Labor Only",
      price: "Quote",
      unit: "/ hour",
      note: "You bring the truck. We bring the muscle.",
      desc: "For rental trucks, PODS and storage units.",
      points: ["Professional movers, not day laborers", "Loading and unloading", "Blankets, straps and dollies", "No stair fees"],
      cta: { label: "Get a quote", href: "/contact" },
    },
    {
      name: "Movers + Truck",
      tag: "Most booked",
      featured: true,
      desc: "The full move from door to door, handled by one crew.",
      points: [
        "26 ft truck, fully stocked",
        "Free blanket wrapping",
        "Beds set up, washer and dryer connected",
        "On-time arrival guarantee",
        "Pay by Zelle with no fees",
      ],
      cta: { label: "Book this move", href: "/contact" },
    },
    {
      name: "Full Service",
      price: "Custom",
      unit: "quote",
      note: "We pack, move and unpack.",
      desc: "For busy families and office relocations.",
      points: ["Everything in Movers + Truck", "Packing and unpacking", "Liftgate service", "Expedited and last-minute dates"],
      cta: { label: `Call ${business.phone}`, href: business.phoneHref },
    },
  ],
  routesHead: ["Guaranteed 1-day service from San Antonio", "Same crew from pickup to drop-off"],
  routes: [
    { city: "Austin", note: "1 day" },
    { city: "Houston", note: "1 day" },
    { city: "Dallas", note: "1 day" },
    { city: "Corpus Christi", note: "1 day" },
    { city: "New Braunfels", note: "Local rate" },
    { city: "Anywhere in Texas", note: "Call for quote" },
  ],
};

export const guarantees = [
  {
    num: "01",
    title: "Low Price Guarantee",
    text: "We guarantee the lowest hourly rates of any licensed moving company in San Antonio. If a licensed competitor advertises a lower rate, we'll match it.",
    big: business.hourlySpecial,
    bigNote: "/ hour special",
    fine: [
      "To price match, show us the competitor's current advertisement or website listing their rate.",
      "The competitor must have a valid TXDMV registration number.",
    ],
  },
  {
    num: "02",
    title: "On-Time Guarantee",
    text: "For local San Antonio moves starting before 1 PM, your crew will arrive inside the scheduled window. If they're late, we'll take $20 off your trip fee.",
    big: "$20",
    bigNote: "back if we're late",
    fine: [
      "Applies to local moves with a start time before 1:00 PM.",
      "Excludes severe weather delays, same-day bookings and late starts requested by the customer.",
    ],
  },
];

export const faqs = [
  {
    q: `How much does a move with ${business.name} cost?`,
    a: `Local moves are billed by the hour. Our moving special is ${business.hourlySpecial} per hour for movers and a fully stocked 26-foot truck. Your total depends on how much you own and how far you're going, so ask for a quote and we'll give you an estimate before moving day.`,
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes. We're licensed and insured by the State of Texas under ${business.licenses.join(" and ")}.`,
  },
  { q: "Do you charge extra for stairs?", a: "No. We don't charge stair fees. A third-floor apartment costs the same hourly rate as a single-story home." },
  {
    q: "Will my furniture be protected?",
    a: "Every piece of furniture is wrapped in moving blankets at no charge. The load is then stacked and strapped so nothing shifts during the drive.",
  },
  {
    q: "How does the price match work?",
    a: "Show us a licensed competitor's current ad or website with a lower hourly rate, along with their TXDMV registration number, and we'll match it.",
  },
  {
    q: "What happens if the crew is late?",
    a: "For local moves starting before 1 PM, if your crew misses the scheduled arrival window, you get $20 off your trip fee. Weather delays, same-day moves and customer-requested late starts are excluded.",
  },
  { q: "Do you move outside San Antonio?", a: "Yes. We move statewide and guarantee one-day service to Dallas, Houston, Austin and Corpus Christi." },
  {
    q: "Can you move me on short notice?",
    a: "Often, yes. We handle expedited and last-minute moves, including same-day when a crew is available. Call us to check today's schedule.",
  },
  { q: "Will you set things up at the new place?", a: "We place every item in the room you choose, set up beds, and connect your washer and dryer." },
  { q: "How can I pay?", a: "We accept Zelle with no added fees. Call us to ask about other payment options." },
];

export const cta = {
  title: "Book your San Antonio move and get a price you can count on.",
  text: "Tell us where you're moving from and to, and we'll call back with your quote. Licensed, insured and open seven days a week.",
};

export const servicesPage = {
  title: "Moving services, priced by the hour.",
  sub: "Local, statewide and office moves with the same stocked truck, the same trained crews and the same written guarantees.",
};

export const contactPage = {
  title: "Get your moving quote.",
  sub: "Tell us where you're moving from and to. We'll call back with a price, usually the same day.",
  formHeading: "Request a quote",
};

export const footer = {
  about: `A licensed, insured ${"San Antonio"} moving company that has served local families and businesses for more than 20 years.`,
  tagline: "Residential · Commercial · Long Distance · Packing",
  demoNote: "Demo site. Business name, contact details and license numbers are placeholders.",
};

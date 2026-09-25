// All business details for the CPA site. Swap these for a real client's.
// Firm name, people, phone, email, address and reviews are invented demo values.
// Oregon tax figures reflect the 2025 tax year; confirm before relying on them.

export const business = {
  name: "Basalt & Pine CPA",
  shortName: "Basalt & Pine",
  city: "Portland",
  state: "Oregon",
  phone: "(503) 555-0164",
  phoneHref: "tel:+15035550164",
  email: "hello@basaltpinecpa.example",
  address: { street: "100 Example St, Suite 400", cityLine: "Portland, OR 97204" },
  hours: [
    { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
    { days: "Saturdays, Feb – Apr", time: "9:00 AM – 1:00 PM" },
  ],
  rating: { score: "4.9", count: "180+", source: "Google reviews" },
  founder: { name: "Dana Whitaker, CPA", role: "Founding partner", image: "/cpa/founder.jpg" },
};

export const seo = {
  description:
    "Basalt & Pine CPA is a Portland accounting firm for Oregon individuals and small businesses: tax preparation, bookkeeping, payroll and Oregon CAT, Metro and Multnomah County tax filings.",
};

export const topbar = {
  left: "Portland CPAs for Oregon families and small businesses",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Oregon taxes", href: "/#oregon" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const bookCta = { label: "Book a consultation", href: "/contact" };

export const hero = {
  titleLead: "Oregon taxes, handled by",
  titleHighlight: "local CPAs",
  sub: "From Portland's Metro and Multnomah County taxes to the Corporate Activity Tax, we keep Oregon individuals and small businesses filed, current and a step ahead.",
};

export const approach = {
  eyebrow: "Our approach",
  title: "Year-round accounting for Oregon businesses and families",
  text: "We don't disappear after April. You get one team that knows your books, your payroll and every Oregon filing that comes with them.",
  cards: [
    {
      icon: "file",
      title: "Tax planning & preparation",
      text: "Federal, Oregon and local returns filed together, with a plan for next year before this one closes.",
      href: "/services#tax",
      tone: "white",
    },
    {
      icon: "chart",
      title: "Bookkeeping & payroll",
      text: "Clean monthly books and payroll that handles Oregon transit tax and Paid Leave Oregon for you.",
      href: "/services#bookkeeping",
      tone: "lime",
    },
    {
      icon: "shield",
      title: "Oregon tax compliance",
      text: "CAT, Metro SHS, Preschool for All and Portland business taxes, tracked and filed on time.",
      href: "/services#oregon-compliance",
      tone: "dark",
    },
  ],
} as const;

export const about = {
  eyebrow: "Who we are",
  title: "A Portland CPA firm that picks up the phone",
  text: "We started Basalt & Pine for the clients bigger firms overlook: freelancers, family businesses and growing Oregon companies. You work with the same CPA every year, and you get answers in plain English.",
  stat: { value: "1,200+", label: "Returns filed each season" },
  skillsTitle: "What we handle",
  skills: ["Individual tax", "S-corps", "Bookkeeping", "Payroll", "Oregon CAT", "IRS notices"],
};

export type Service = {
  id: string;
  icon: "file" | "briefcase" | "chart" | "users" | "shield" | "mail" | "building" | "compass";
  title: string;
  short: string;
  long: string;
  points: string[];
  price: string;
};

export const services: Service[] = [
  {
    id: "tax",
    icon: "file",
    title: "Individual tax returns",
    short: "Federal, Oregon and local returns filed together.",
    long: "We prepare your federal and Oregon returns plus any Portland Metro, Multnomah County and Arts Tax filings, and review last year's return for anything missed.",
    points: ["Federal and Oregon Form OR-40", "Metro SHS and Preschool for All", "Portland Arts Tax", "Rental property and investments"],
    price: "From $450",
  },
  {
    id: "business-tax",
    icon: "briefcase",
    title: "Small business tax",
    short: "S-corp, partnership and LLC returns.",
    long: "Business returns for Oregon S-corps, partnerships and single-member LLCs, including the Portland and Multnomah County combined business tax return.",
    points: ["Forms 1120-S and 1065", "Oregon OR-20-S and OR-65", "Portland/Multnomah combined return", "Owner compensation review"],
    price: "From $1,400",
  },
  {
    id: "bookkeeping",
    icon: "chart",
    title: "Bookkeeping",
    short: "Monthly books, reconciled and ready.",
    long: "We reconcile your accounts every month and send you a short profit-and-loss summary, so tax season starts with clean numbers.",
    points: ["QuickBooks Online or Xero", "Monthly reconciliations", "Plain-English P&L summary", "Year-end clean-up"],
    price: "From $400 / month",
  },
  {
    id: "payroll",
    icon: "users",
    title: "Payroll",
    short: "Oregon withholding, done right.",
    long: "Full-service payroll with the Oregon pieces handled: state withholding, statewide transit tax, TriMet transit tax and Paid Leave Oregon contributions.",
    points: ["Direct deposit and pay stubs", "Oregon statewide transit tax", "Paid Leave Oregon", "Quarterly OQ and W-2 filings"],
    price: "From $95 / month",
  },
  {
    id: "oregon-compliance",
    icon: "shield",
    title: "Oregon CAT & local taxes",
    short: "Corporate Activity Tax and local filings.",
    long: "We track your Oregon commercial activity, register you for the CAT when you need it, make quarterly payments and file the annual return.",
    points: ["CAT registration and quarterly payments", "Annual CAT return", "Metro and Multnomah business taxes", "Estimated payment schedules"],
    price: "From $600",
  },
  {
    id: "notices",
    icon: "mail",
    title: "IRS & Oregon DOR notices",
    short: "We answer the letter so you don't have to.",
    long: "Got a letter from the IRS or the Oregon Department of Revenue? We read it, tell you what it means, and respond on your behalf.",
    points: ["Notice review within two business days", "Payment plans and penalty relief", "Power of attorney representation", "Amended returns"],
    price: "From $250",
  },
  {
    id: "entity",
    icon: "building",
    title: "Business setup",
    short: "Start your Oregon business on the right entity.",
    long: "LLC or S-corp? We run the numbers, handle Oregon Secretary of State and IRS elections, and set up your books and payroll from day one.",
    points: ["Entity comparison", "S-corp election", "Oregon business registration", "Chart of accounts setup"],
    price: "From $750",
  },
  {
    id: "planning",
    icon: "compass",
    title: "Tax planning",
    short: "Fewer surprises in April.",
    long: "A mid-year review of your income, estimates and retirement contributions, so you know what you'll owe before the deadline.",
    points: ["Quarterly estimate calculations", "Retirement and HSA strategy", "Kicker and credit planning", "Moving to or from Oregon"],
    price: "From $500",
  },
];

export const oregonTaxes = {
  eyebrow: "Oregon taxes",
  title: "The Oregon filings we handle every week",
  text: "Oregon has no sales tax, but it makes up for it. Here's what most of our Portland clients deal with.",
  note: "Rates and thresholds as of the 2025 tax year. They change, so ask us for your situation.",
  rows: [
    { name: "Oregon personal income tax", detail: "Four brackets, from 4.75% to 9.9%" },
    { name: "Corporate Activity Tax (CAT)", detail: "$250 plus 0.57% of Oregon commercial activity over $1 million" },
    { name: "Metro Supportive Housing Services", detail: "1% of taxable income over $125,000 single or $200,000 joint" },
    { name: "Multnomah County Preschool for All", detail: "1.5% over $125,000 / $200,000, plus 1.5% over $250,000 / $400,000" },
    { name: "Portland & Multnomah business taxes", detail: "2.6% city and 2.0% county on net business income" },
    { name: "Statewide transit tax", detail: "0.1% withheld from every Oregon employee's wages" },
  ],
};

export const testimonials = [
  {
    quote: "They caught two years of Metro SHS I'd been overpaying and got it back. I wish I'd switched sooner.",
    name: "Priya N.",
    role: "Software engineer, Southeast Portland",
  },
  {
    quote: "Our CAT registration, payroll and books all live with one team now. Tax season is actually calm.",
    name: "Marcus L.",
    role: "Owner, Pearl District coffee roaster",
  },
  {
    quote: "Dana explained the S-corp election in fifteen minutes and saved us more than her fee in the first year.",
    name: "Hannah & Theo B.",
    role: "Founders, Bend design studio",
  },
];

export const faqs = [
  {
    q: "Does Oregon have a sales tax?",
    a: "No. Oregon is one of a handful of states with no general sales tax. Most of the state's revenue comes from personal income tax, which is why Oregon's rates are among the highest in the country.",
  },
  {
    q: "Do I owe the Metro and Preschool for All taxes?",
    a: "If you live or work in the Portland Metro area and your taxable income is above $125,000 single or $200,000 joint, you probably do. Multnomah County residents may owe Preschool for All as well. We check both on every return.",
  },
  {
    q: "When does my business need to register for the Oregon CAT?",
    a: "You must register once your Oregon commercial activity passes $750,000 in a year, and you owe the tax once it passes $1 million. We track your revenue so you register on time.",
  },
  {
    q: "When are Oregon returns due?",
    a: "Oregon personal returns are due on the federal deadline, usually April 15. If you file a federal extension, Oregon accepts it, but any tax owed is still due in April.",
  },
  {
    q: "Do you work with clients outside Portland?",
    a: "Yes. We work with clients across Oregon, from Salem and Eugene to Bend and the coast. Most meetings happen by video, and documents go through a secure portal.",
  },
  {
    q: "How much will it cost?",
    a: "Individual returns start at $450 and business returns at $1,400. We quote a fixed fee after a free 20-minute consultation, so you know the price before we start.",
  },
];

export const closing = {
  title: "Tax season goes smoother with a CPA in your corner",
  text: "Book a free 20-minute consultation. We'll look at your situation and give you a fixed quote.",
};

export const servicesPage = {
  title: "Services",
  sub: "Tax, bookkeeping, payroll and Oregon compliance for individuals and small businesses. Every engagement starts with a free consultation and a fixed quote.",
};

export const contactPage = {
  title: "Book a consultation",
  sub: "Tell us a little about what you need. We'll reply within one business day to set up a free 20-minute call.",
  helpWith: [
    "Individual tax return",
    "Small business tax",
    "Bookkeeping",
    "Payroll",
    "Oregon CAT or local taxes",
    "IRS or Oregon DOR notice",
    "Business setup",
    "Something else",
  ],
  clientTypes: ["Individual or family", "Small business", "Both"],
};

export const footer = {
  about: "A Portland CPA firm for Oregon individuals and small businesses. Tax, bookkeeping, payroll and local compliance, year-round.",
  demoNote: "Demo site. Firm name, people, reviews and contact details are placeholders.",
};

// All business details for the executive coaching landing page. Swap these for a real client's.
// Institute name, founder, stats, prices, reviews and contact details are invented demo values.
// ICF requirements summarize the ICF credentialing rules; confirm current details at coachingfederation.org.

export const business = {
  name: "Halden Institute",
  wordmark: "halden",
  tagline: "Executive coach training",
  city: "Chicago",
  phone: "(312) 555-0139",
  phoneHref: "tel:+13125550139",
  email: "admissions@haldeninstitute.example",
  address: { street: "100 Example Plaza, Suite 1800", cityLine: "Chicago, IL 60601" },
  founder: { name: "Maya Okafor, MCC", role: "Founder & lead faculty", image: "/coaching/founder.jpg" },
};

export const seo = {
  description:
    "Halden Institute's Path to ICF Certification trains executive coaches for the ACC or PCC credential, with mentor coaching included. Take the 2-minute quiz to find your path.",
};

export const nav = [
  { label: "The paths", href: "/#paths" },
  { label: "Method", href: "/#method" },
  { label: "Compare", href: "/programs" },
  { label: "FAQ", href: "/#faq" },
];

export const quizCta = { label: "Find my ICF path", short: "Take the quiz", href: "/quiz" };

export const hero = {
  eyebrow: "Path to ICF Certification",
  line1: "Your Path To",
  line2a: "ICF",
  line2b: "Certification",
  line3: "Starts Here",
  sub: "Become a credentialed executive coach with ICF-accredited training, mentor coaching and live practice built in. Answer six quick questions to see whether the ACC or PCC path fits you.",
  micro: "2 minutes · 6 questions · instant result",
};

export const intro = {
  eyebrow: "Why Halden",
  title: ["Coach first.", "Credential next."],
  text: "We train leaders to coach leaders. Every hour counts toward your ICF credential, and every session is spent practicing real conversations, not memorizing models.",
  story: {
    image: "/coaching/session.jpg",
    title: "From VP of Sales to PCC coach in 11 months",
    href: "/programs#stories",
  },
  stats: [
    { value: "3,800", unit: "+", label: "Coaches trained in 48 countries", foot: "Since 2011" },
    { value: "96", unit: "%", label: "ICF exam pass rate", foot: "2025 cohorts" },
  ],
};

export const badges = [
  "ICF Level 1 Accredited",
  "ICF Level 2 Accredited",
  "Mentor coaching included",
  "CCE units for renewals",
  "Live virtual cohorts",
  "Chicago intensives",
];

export const method = {
  eyebrow: "Our method",
  title: ["Practice-Led.", "Built On ICF Competencies."],
  sub: "You learn coaching by coaching. Each week mixes short lessons with observed practice and direct feedback on the eight ICF core competencies.",
  cards: [
    {
      icon: "practice",
      title: "Live practice labs",
      text: "Coach and be coached in small groups every week, with faculty observing and scoring against ICF markers.",
    },
    {
      icon: "mentor",
      title: "Mentor coaching included",
      text: "All 10 required ICF mentor coaching hours are built into both paths, with an MCC or PCC mentor.",
    },
    {
      icon: "growth",
      title: "Hours that count",
      text: "Log coaching hours with our client network and track everything you need for your ICF application in one place.",
    },
  ],
} as const;

export type PathId = "acc" | "pcc";

export const paths: Record<PathId, {
  id: PathId;
  name: string;
  credential: string;
  level: string;
  bestFor: string;
  trainingHours: string;
  mentorHours: string;
  experience: string;
  timeline: string;
  price: string;
  plan: string;
  includes: string[];
}> = {
  acc: {
    id: "acc",
    name: "The ACC Path",
    credential: "Associate Certified Coach (ACC)",
    level: "ICF Level 1",
    bestFor: "New coaches, HR and L&D leaders, and managers adding coaching to their role.",
    trainingHours: "60+ hours of ICF Level 1 training",
    mentorHours: "10 hours of mentor coaching, included",
    experience: "100 coaching hours to apply (75 paid)",
    timeline: "4 to 6 months",
    price: "$4,950",
    plan: "or 6 payments of $875",
    includes: [
      "12-week live virtual cohort",
      "Weekly practice labs",
      "10 hours of mentor coaching",
      "Recorded session review for your ICF performance evaluation",
      "ICF exam prep",
    ],
  },
  pcc: {
    id: "pcc",
    name: "The PCC Path",
    credential: "Professional Certified Coach (PCC)",
    level: "ICF Level 2",
    bestFor: "Experienced coaches, consultants and senior leaders who want to coach executives at a premium.",
    trainingHours: "125+ hours of ICF Level 2 training",
    mentorHours: "10 hours of mentor coaching, included",
    experience: "500 coaching hours to apply (450 paid)",
    timeline: "9 to 12 months",
    price: "$8,900",
    plan: "or 12 payments of $795",
    includes: [
      "Everything in the ACC Path",
      "Advanced executive coaching modules",
      "Team and systems coaching",
      "Building a coaching practice",
      "Two in-person Chicago intensives (optional)",
    ],
  },
};

export const steps = [
  { num: "01", label: "Quiz", title: "Find your path", text: "Six questions tell you whether to start with ACC or go straight to PCC." },
  { num: "02", label: "Call", title: "Map your plan", text: "A 20-minute call with an advisor to set your timeline and cohort." },
  { num: "03", label: "Train", title: "Learn & practice", text: "Live cohort, practice labs and mentor coaching, all counted toward ICF." },
  { num: "04", label: "Credential", title: "Apply to ICF", text: "We validate your hours and prepare you for the ICF exam." },
];

export const testimonials = [
  {
    quote: "I went from running a sales org to coaching VPs full-time. The practice labs made it feel real long before I had paying clients.",
    name: "Daniel R.",
    role: "PCC, former VP of Sales",
    image: "/coaching/avatar-1.jpg",
  },
  {
    quote: "As an HR director I needed a credential my leadership team would respect. The ACC Path fit around a full-time job.",
    name: "Sofia M.",
    role: "ACC, HR Director",
    image: "/coaching/avatar-2.jpg",
  },
  {
    quote: "My mentor coach caught habits I didn't know I had. I passed my performance evaluation on the first try.",
    name: "James T.",
    role: "PCC, leadership consultant",
    image: "/coaching/avatar-3.jpg",
  },
];

export const faqs = [
  {
    q: "What is the difference between ACC and PCC?",
    a: "Both are International Coaching Federation (ICF) credentials. ACC needs 60+ training hours and 100 coaching hours. PCC needs 125+ training hours and 500 coaching hours, and is the credential most corporate buyers look for when hiring executive coaches.",
  },
  {
    q: "Do I need coaching experience to start?",
    a: "No. Many people start the ACC Path with no formal coaching experience and build their hours during the program. If you already have 100+ hours or an ACC, the quiz will likely point you to the PCC Path.",
  },
  {
    q: "Is mentor coaching really included?",
    a: "Yes. ICF requires 10 hours of mentor coaching for both ACC and PCC. Both paths include all 10 hours with an MCC or PCC mentor at no extra cost.",
  },
  {
    q: "How much time does it take each week?",
    a: "Plan on 3 to 4 hours a week for the ACC Path and 5 to 6 hours for the PCC Path, including one live session and one practice lab. Sessions are recorded if you miss one.",
  },
  {
    q: "Is the training online?",
    a: "Yes. Cohorts meet live online, with optional in-person intensives in Chicago for PCC students.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. The ACC Path is $4,950 or 6 payments of $875. The PCC Path is $8,900 or 12 payments of $795.",
  },
];

export const finalCta = {
  title: ["Two minutes now.", "A credential for life."],
  text: "Take the quiz, get your recommended path and book a free call with an admissions advisor.",
};

/* ---------------------------- Quiz ---------------------------- */

export type QuizOption = { label: string; acc: number; pcc: number; reason?: string; forcePcc?: boolean };
export type QuizQuestion = { id: string; question: string; help?: string; options: QuizOption[] };

export const quiz: { intro: { title: string; text: string; meta: string }; questions: QuizQuestion[] } = {
  intro: {
    title: "Which ICF path is right for you?",
    text: "Answer six quick questions and we'll recommend the ACC or PCC path based on your experience, goals and schedule.",
    meta: "Takes about 2 minutes",
  },
  questions: [
    {
      id: "experience",
      question: "How much coaching have you done so far?",
      help: "Count any one-to-one coaching, paid or unpaid.",
      options: [
        { label: "None yet, I'm just starting", acc: 3, pcc: 0, reason: "You're starting fresh, and ACC lets you build hours as you train." },
        { label: "Some informal coaching, under 100 hours", acc: 2, pcc: 0, reason: "You have some experience but not yet the 100 hours ACC needs." },
        { label: "Between 100 and 500 hours", acc: 1, pcc: 2, reason: "You already have meaningful coaching hours behind you." },
        { label: "More than 500 hours", acc: 0, pcc: 4, reason: "You already meet the PCC coaching-hours requirement." },
      ],
    },
    {
      id: "training",
      question: "Have you completed any ICF-accredited coach training?",
      options: [
        { label: "No, none", acc: 2, pcc: 0 },
        { label: "Some, but less than 60 hours", acc: 1, pcc: 1 },
        { label: "Yes, I already hold an ACC or completed Level 1", acc: 0, pcc: 5, forcePcc: true, reason: "You've already completed Level 1, so PCC is your next step." },
      ],
    },
    {
      id: "goal",
      question: "What do you want coaching to do for you in the next year?",
      options: [
        { label: "Add coaching skills to my current role", acc: 2, pcc: 0, reason: "You want to coach inside your current role, which ACC covers well." },
        { label: "Launch a coaching practice on the side", acc: 2, pcc: 1 },
        { label: "Coach senior executives at a premium rate", acc: 0, pcc: 3, reason: "Executive buyers usually look for PCC." },
        { label: "Lead coaching inside my organization", acc: 1, pcc: 2 },
      ],
    },
    {
      id: "role",
      question: "Which best describes your current role?",
      options: [
        { label: "HR, L&D or talent leader", acc: 1, pcc: 1 },
        { label: "Senior leader or executive", acc: 0, pcc: 2 },
        { label: "Consultant or independent coach", acc: 0, pcc: 2 },
        { label: "Changing careers into coaching", acc: 2, pcc: 0 },
      ],
    },
    {
      id: "time",
      question: "How much time can you give it each week?",
      options: [
        { label: "3 to 4 hours", acc: 2, pcc: 0, reason: "ACC fits a 3 to 4 hour week." },
        { label: "5 to 6 hours", acc: 1, pcc: 2 },
        { label: "7 hours or more", acc: 0, pcc: 2 },
      ],
    },
    {
      id: "timeline",
      question: "When would you like to hold your credential?",
      options: [
        { label: "Within 6 months", acc: 2, pcc: 0, reason: "You want a credential within six months, and ACC takes 4 to 6." },
        { label: "Within a year", acc: 1, pcc: 2 },
        { label: "No rush, I want the deepest training", acc: 0, pcc: 2, reason: "You'd rather go deep than fast." },
      ],
    },
  ],
};

export const quizResult = {
  eyebrow: "Your recommended path",
  formTitle: "Book your free path call",
  formText: "A 20-minute call with an admissions advisor to confirm your path, pick a cohort and answer questions about ICF.",
  consent: "By booking you agree to be contacted about Halden Institute programs. No spam, unsubscribe any time.",
};

export const footer = {
  about: "ICF-accredited executive coach training, online and in Chicago.",
  demoNote: "Demo site. Institute name, people, statistics, prices and reviews are placeholders.",
};

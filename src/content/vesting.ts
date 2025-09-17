export interface NavItem { name: string; link: string }
export interface Feature { title: string; bullets: string[] }
export interface FAQItem { q: string; a: string }

export const vestingContent = {
  brand: {
    name: "Fender",
    tagline: "Token Vesting & Streaming on Algorand",
  },
  nav: [
    { name: "Home", link: "/" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Allocations", link: "/allocations" },
    { name: "My Tokens", link: "/my-tokens" },
    { name: "My Companies", link: "/my-companies" },
  ] as NavItem[],
  hero: {
    eyebrow: "Built on Algorand",
    title: "Trustless Token Vesting & Real‑Time Streaming",
    subtitle:
      "A decentralized platform for projects, DAOs, and startups to securely manage token distribution with transparency and flexibility.",
    description:
      "Automate vesting with Algorand smart contracts, enable continuous streaming like a salary drip, and give every stakeholder on‑chain visibility.",
    ctaPrimary: { label: "Join the Waitlist", href: "#waitlist" },
    ctaSecondary: { label: "View Dashboard", href: "/dashboard" },
  },
  overview: {
    title: "Overview",
    body:
      "A decentralized Token Vesting & Streaming Platform built on Algorand, enabling secure distribution for team members, investors, and advisors—without centralized control.",
  },
  problems: {
    title: "The Problem We Solve",
    items: [
      "Lack of trust when founders manually manage vesting",
      "Centralized control lets a single party alter schedules",
      "Inefficiency from manual unlock tracking and reconciliation",
      "Opacity for investors on locked vs circulating supply",
    ],
  },
  solution: {
    title: "Our Solution",
    items: [
      "Trustless execution via Algorand smart contracts",
      "Continuous streaming—tokens vest in real‑time",
      "DAO governance for proposals and schedule changes",
      "Analytics and alerts for complete transparency",
    ],
  },
  features: {
    title: "Key Features",
    sections: [
      {
        title: "Flexible Vesting Schedules",
        bullets: [
          "Linear, Cliff + Linear, Milestone, Performance‑based",
          "Configurable cliffs, durations, and allocations",
          "Per‑beneficiary custom schedules",
        ],
      },
      {
        title: "Multi‑Beneficiary Dashboard",
        bullets: [
          "Single contract with multiple beneficiaries",
          "Add/remove via DAO approval",
          "Personal views and statements for each member",
        ],
      },
      {
        title: "Token Streaming",
        bullets: [
          "Continuous drip instead of monthly unlocks",
          "Withdraw any time, pro‑rata to time elapsed",
          "Smoother treasury and runway management",
        ],
      },
      {
        title: "DAO/Governance Integration",
        bullets: [
          "On‑chain proposals and token‑holder voting",
          "Guardrails to prevent founder abuse",
          "Auditable governance history",
        ],
      },
      {
        title: "Analytics & Notifications",
        bullets: [
          "Unlock timelines, % vested, circulating vs locked",
          "Email/Telegram/Discord alerts",
          "Exportable reports and proofs",
        ],
      },
      {
        title: "Investor‑Friendly Protections",
        bullets: [
          "Clawback for unvested tokens",
          "Immutable audit logs on‑chain",
          "Compliance‑ready exports",
        ],
      },
      {
        title: "Gamified Experience",
        bullets: [
          "Progress bars and milestones",
          "Achievements and reputation scoring",
          "Engaging UX to drive participation",
        ],
      },
    ] as Feature[],
  },
  principles: {
    title: "Core Principles",
    items: [
      "Transparency: all unlocks visible on‑chain",
      "Decentralization: no single point of control",
      "Security: tamper‑proof smart contracts",
      "Fairness: uniform enforcement across schedules",
    ],
  },
  techStack: {
    title: "Tech Stack",
    items: [
      "Blockchain: Algorand",
      "Wallet: Pera Wallet",
      "Smart Contracts: TEAL / PyTeal",
      "Frontend: React + TailwindCSS",
      "Notifications: Telegram / Email APIs",
      "Governance: DAO‑powered decisions",
    ],
  },
  workflow: {
    title: "How It Works",
    steps: [
      "Create Schedule – Admin/DAO defines vesting terms",
      "Deploy Smart Contract – Immutable, trustless schedule goes live",
      "Track Progress – Beneficiaries and investors view real‑time analytics",
      "Continuous Vesting – Tokens drip or unlock per milestone",
      "Withdraw Anytime – Users claim vested tokens instantly",
    ],
  },
  cta: {
    title: "Ready to build trust and automate vesting?",
    primary: { label: "Join the Waitlist", href: "#waitlist" },
    secondary: { label: "Explore Dashboard", href: "/dashboard" },
  },
  faq: {
    title: "FAQs",
    items: [
      {
        q: "How is vesting enforced?",
        a: "Through Algorand smart contracts (TEAL/PyTeal) that execute schedules trustlessly and immutably.",
      },
      {
        q: "Can beneficiaries withdraw at any time?",
        a: "Yes—streamed tokens are withdrawable pro‑rata to time elapsed; unvested tokens remain locked.",
      },
      {
        q: "How are changes approved?",
        a: "Via DAO governance—token holders vote on proposed adjustments to schedules and beneficiaries.",
      },
      {
        q: "What integrations are supported?",
        a: "Pera Wallet for secure login and signing; notifications via Email/Telegram/Discord.",
      },
      {
        q: "Do you provide auditability?",
        a: "Yes—on‑chain audit logs and exportable proofs for compliance and investor reporting.",
      },
    ] as FAQItem[],
  },
  footer: {
    smallPrint: "© "+new Date().getFullYear()+" Fender. Built on Algorand.",
  },
} as const;

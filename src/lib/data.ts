import type { LucideIcon } from "lucide-react";
import { Network, MonitorSmartphone, RadioTower, FlaskConical } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  intro: string;
  longDescription: string[];
  bullets: string[];
  deliverables: string[];
  gradient: string;
};

export const services: Service[] = [
  {
    slug: "network-testing",
    icon: Network,
    title: "Network Testing",
    short:
      "Innovate with AI, IoT, Blockchain and transformative tech — validated end to end across your network stack.",
    intro:
      "From 5G/6G rollouts to data centres, we validate every layer of your network so customers stay connected and satisfied.",
    longDescription: [
      "Networks are the backbone of modern business. As operators add devices, implement new networks like 5G/6G, and run data centres alongside total IT solutions, the pressure to stay ahead of customer demands never stops.",
      "TechnoShrine has proudly supported mobile networks, ISPs, networking providers and technology vendors with testing requirements across this almost unparalleled digital environment.",
    ],
    bullets: [
      "End-to-end test strategy for network rollouts",
      "Interoperability and conformance validation",
      "Performance, load and resilience testing",
      "Automation frameworks that scale with your release cycle",
    ],
    deliverables: [
      "Network test strategy & coverage matrix",
      "Automated regression suites",
      "Performance benchmark reports",
      "Rollout readiness sign-off",
    ],
    gradient: "from-brand-500/30 to-royal-600/30",
  },
  {
    slug: "ue-system-testing",
    icon: MonitorSmartphone,
    title: "UE & System Testing",
    short:
      "Innovative IT solutions, from AI to Blockchain, transforming businesses seamlessly across devices and systems.",
    intro:
      "Devices, firmware and full system stacks — we make sure every user experience works exactly as promised.",
    longDescription: [
      "Ever-increasing ranges of new devices put pressure on every engineering team. Each launch must behave identically across chipsets, OS versions and carriers.",
      "Our UE and system testing labs cover the full journey: from early bring-up to carrier acceptance, ensuring your product ships on time and on quality.",
    ],
    bullets: [
      "Device & user-equipment certification support",
      "Protocol and field-trial testing",
      "Cross-platform compatibility matrices",
      "Firmware upgrade and rollback validation",
    ],
    deliverables: [
      "Device validation reports",
      "Compatibility matrices",
      "Field-trial analysis",
      "Release gate recommendations",
    ],
    gradient: "from-royal-500/30 to-brand-600/30",
  },
  {
    slug: "telecom-testing",
    icon: RadioTower,
    title: "Telecom Testing",
    short:
      "Deep telecom domain expertise — from 5G/6G rollouts to data centres and total IT solutions for corporate customers.",
    intro:
      "Telecom testing is our crown jewel — the sector is at the cutting edge of technology and so are we.",
    longDescription: [
      "The telecoms sector is frequently at the cutting edge of technology, driving advances in communications, networks, data and more — while operating and developing some of the most important technology in use today.",
      "We are best in Telecom Testing Services. Our QA specialists have the knowledge, experience and skills to support even the most demanding telecom firms with their testing.",
    ],
    bullets: [
      "Core, RAN and transport layer validation",
      "5G/6G feature and interoperability testing",
      "Operational support systems (OSS/BSS) testing",
      "Quality management aligned to ISO & CMMI standards",
    ],
    deliverables: [
      "Telecom domain test plans",
      "Interoperability test reports",
      "Automation pipelines",
      "Consulting & QA process optimization",
    ],
    gradient: "from-brand-600/30 to-royal-500/30",
  },
  {
    slug: "software-testing",
    icon: FlaskConical,
    title: "Software Testing",
    short:
      "Thorough, reliable QA grounded in deep testing methodologies, technologies and business-process best practices.",
    intro:
      "Quality makes a base for your business — our thorough, reliable software testing gives you that foundation.",
    longDescription: [
      "Our testing experts bring deep understanding of testing methodologies, technologies and business-process best practices — making them leaders in the QA services industry.",
      "From web and mobile applications to enterprise platforms, we design QA engagements that fit your delivery model: embedded, managed service or fully outsourced.",
    ],
    bullets: [
      "Manual, automated & exploratory testing",
      "API, integration and E2E automation",
      "Performance and security baseline testing",
      "CI/CD integrated quality gates",
    ],
    deliverables: [
      "Test automation framework",
      "Regression & smoke suites",
      "Quality dashboards",
      "Release certification",
    ],
    gradient: "from-royal-600/30 to-brand-500/30",
  },
];

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  gradient: string;
  readTime: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: "unlock-your-potential",
    category: "Business",
    title: "Unlock Your Potential",
    excerpt:
      "A career with TechnoShrine Infosolutions — are you ready to take the next step in your journey?",
    body: [
      "Are you ready to take the next step in your journey? At TechnoShrine Infosolutions, a career here means working at the cutting edge of telecom and software testing, alongside experts who have spent 12+ years pushing quality forward.",
      "We believe people grow fastest when given real responsibility early. Our engineers own test strategies, automation frameworks and client relationships from day one — supported by mentors, structured learning paths and the best certification support in the industry.",
      "If you want your work to matter — keeping nations connected, helping enterprises ship reliable software, and building a career on quality — TechnoShrine is the place to unlock your potential.",
    ],
    gradient: "from-brand-500/30 to-royal-600/30",
    readTime: "4 min read",
    date: "Oct 12, 2026",
  },
  {
    slug: "unleashing-the-future",
    category: "Development",
    title: "Unleashing the Future",
    excerpt:
      "TechnoShrine and emerging AI technology — the future is now, and it is transforming everything.",
    body: [
      "The future is now. Emerging AI technology is transforming how enterprises test, secure and deliver software — and TechnoShrine is embracing it head-on.",
      "From AI-assisted test generation to self-healing automation suites, we are integrating intelligent tooling across our QA practice. The result: faster cycles, wider coverage and defect detection that keeps improving with every run.",
      "Innovation is a mindset, not a project. Our teams continuously evaluate AI, IoT, and blockchain capabilities so our clients always get future-proof, transformative solutions.",
    ],
    gradient: "from-royal-500/30 to-brand-600/30",
    readTime: "5 min read",
    date: "Oct 5, 2026",
  },
  {
    slug: "embracing-the-future",
    category: "Blog",
    title: "Embracing the Future",
    excerpt:
      "TechnoShrine and emerging advanced technologies in the ever-evolving landscape of IT.",
    body: [
      "In the ever-evolving landscape of IT, standing still is the fastest way to fall behind. That is why TechnoShrine invests continuously in emerging advanced technologies — from blockchain-verified test records to IoT-scale device farms.",
      "Our innovation lab prototypes new approaches before they become industry standards, so when you adopt them, you do it with a partner who has already done the homework.",
      "Embracing the future is not about chasing trends. It is about choosing the technologies that genuinely transform businesses — and mastering them deeply.",
    ],
    gradient: "from-brand-600/30 to-royal-500/30",
    readTime: "4 min read",
    date: "Sep 28, 2026",
  },
];

export type Project = {
  slug: string;
  tag: "Advisory" | "Solution" | "Optimized";
  title: string;
  subtitle: string;
  abstract: string;
  highlight: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "telecom-5g-network-validation",
    tag: "Optimized",
    featured: true,
    title: "Telecom 5G Network Validation",
    subtitle: "End-to-end testing for 5G core, RAN and edge",
    abstract: "The telecoms sector is frequently at the cutting edge of technology, driving advances in communications, networks, data and more — while operating some of the most important technology in use today.",
    highlight: "5G / 6G • Core • RAN",
    image: "bg-gradient-to-br from-brand-600/40 via-royal-600/30 to-brand-500/40",
  },
  {
    slug: "erp-go-live-readiness",
    tag: "Solution",
    featured: true,
    title: "ERP Go-Live Readiness Program",
    subtitle: "Cutover validation, data integrity and hyper-care",
    abstract: "We have the knowledge, experiences, and skills to support even the most demanding enterprise firms with their testing needs.",
    highlight: "Data Integrity • Cutover",
    image: "bg-gradient-to-br from-brand-500/40 via-sky-600/30 to-cyan-500/40",
  },
  {
    slug: "digital-banking-platform",
    tag: "Advisory",
    featured: true,
    title: "Digital Banking Platform Advisory",
    subtitle: "Security, compliance and cloud-native migration",
    abstract: "For improving customer retention, companies are incessantly evolving their offerings to enhance customer experience — our experts make that possible.",
    highlight: "Open Banking • Cloud",
    image: "bg-gradient-to-br from-royal-600/40 via-indigo-600/30 to-brand-500/40",
  },
  {
    slug: "iot-device-farm-automation",
    tag: "Optimized",
    featured: true,
    title: "IoT Device Farm Automation",
    subtitle: "Scaled device testing and firmware regression suites",
    abstract: "Ever-increasing ranges of new devices put pressure on every engineering team — our labs cover the full machinery of a release.",
    highlight: "Firmware • IoT • Edge",
    image: "bg-gradient-to-br from-amber-600/40 via-orange-600/30 to-brand-500/40",
  },
  {
    slug: "telecom-oss-bss-integration",
    tag: "Solution",
    featured: true,
    title: "OSS/BSS Integration Testing",
    subtitle: "Billing, CRM and network function testing at scale",
    abstract: "TechnoShrine has proudly supported mobile networks, ISPs, networking providers and technology vendors with testing requirements.",
    highlight: "Billing • OSS/BSS • 5G",
    image: "bg-gradient-to-br from-sky-600/40 via-cyan-600/30 to-brand-500/40",
  },
  {
    slug: "enterprise-qa-maturity",
    tag: "Advisory",
    featured: true,
    title: "Enterprise QA Maturity Assessment",
    subtitle: "ISO, CMMI and ISO/IEC 27001 aligned process audit",
    abstract: "Assessment and consulting that turns your QA practice into a measurable, continuously improving asset.",
    highlight: "ISO 9001 • CMMI • 27001",
    image: "bg-gradient-to-br from-violet-600/40 via-purple-600/30 to-indigo-500/40",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

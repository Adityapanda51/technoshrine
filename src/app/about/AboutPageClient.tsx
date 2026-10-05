"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Gem,
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
  Award,
} from "lucide-react";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const stats = [
  { to: 12, suffix: "+", label: "Years Experience" },
  { to: 450, suffix: "+", label: "Projects Completed" },
  { to: 320, suffix: "+", label: "Happy Clients" },
  { to: 40, suffix: "+", label: "Best Awards" },
];

const values = [
  {
    icon: Gem,
    title: "Quality First",
    desc: "Quality makes a base for your business — we never compromise on it.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    desc: "We incessantly evolve our offerings to enhance your customer experience.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "ISO 9001:2015, ISO/IEC 27001:2022 and CMMI Level 5 certified processes.",
  },
  {
    icon: Users,
    title: "Customer Centricity",
    desc: "We care for everything as per your requirements — no templates, no shortcuts.",
  },
];

const timeline = [
  {
    year: "2011",
    title: "Founded in Bhubaneswar",
    desc: "TechnoShrine Infosolutions begins its journey on Infosys Road, Patia.",
  },
  {
    year: "2015",
    title: "ISO 9001:2015 Certified",
    desc: "Quality Management System certification for all delivery processes.",
  },
  {
    year: "2019",
    title: "Telecom Testing Leadership",
    desc: "Become a trusted QA partner for mobile networks, ISPs and vendors.",
  },
  {
    year: "2022",
    title: "ISO/IEC 27001:2022",
    desc: "Information Security Management System certification achieved.",
  },
  {
    year: "2024",
    title: "CMMI Level 5",
    desc: "Optimizing processes — the highest maturity level for delivery.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Story + stats */}
      <section className="relative py-20 lg:py-24">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-royal-600/10 blur-[130px]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                12 Years of Experience in This{" "}
                <span className="text-gradient">Infosolution Services.</span>
              </h2>
              <p className="mt-5 leading-relaxed text-ink-400">
                Since 2011, TechnoShrine Infosolutions has grown from a boutique
                consultancy into a leading IT services company — trusted for
                innovative solutions, software development, consultancy and web
                design services.
              </p>
              <p className="mt-4 leading-relaxed text-ink-400">
                We've worked with mobile networks, networking providers, ISPs,
                technology vendors and more. We hold the quality management,
                process and security accreditations you need, with a range of
                delivery methods to match your requirements and budgets.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-brand-400/15 bg-gradient-to-r from-brand-500/10 to-royal-600/10 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-royal-600">
                  <Award className="h-5 w-5 text-white" />
                </span>
                <p className="text-sm text-ink-300">
                  ISO 9001:2015 · ISO/IEC 27001:2022 · CMMI Level 5 certified
                  company
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass card-hover rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-4xl font-bold text-gradient">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-ink-400">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver innovative, reliable and secure IT solutions that help technology companies move faster — with quality baked into every release.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be the most trusted QA and consulting partner in the telecom and software industry, recognized globally for excellence and innovation.",
              },
            ].map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="glass card-hover relative overflow-hidden rounded-3xl p-8 lg:p-10"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-royal-600/20">
                  <m.icon className="h-7 w-7 text-brand-300" />
                </span>
                <h3 className="font-display text-xl font-bold text-white">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-400">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              The Values That <span className="text-gradient">Drive Us</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="glass card-hover group rounded-2xl p-7"
              >
                <motion.span
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-royal-600/20 p-3.5"
                >
                  <v.icon className="h-6 w-6 text-brand-300" />
                </motion.span>
                <h3 className="font-display text-base font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden py-20">
        <div className="grid-bg absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="mb-14 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="mt-3 text-ink-400">
              From a boutique consultancy to a CMMI Level 5 powerhouse.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-brand-400/50 via-royal-500/30 to-transparent md:left-1/2" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative mb-10 flex flex-col gap-4 pl-14 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute top-1 left-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-brand-400/40 bg-night-800 font-display text-[11px] font-bold text-brand-300 shadow-lg shadow-brand-500/20 ${
                    i % 2 === 0 ? "md:left-full" : "md:left-0"
                  }`}
                >
                  {t.year.slice(2)}
                </span>
                <div className="glass card-hover rounded-2xl p-6">
                  <div className="font-display text-sm font-bold tracking-widest text-brand-300">
                    {t.year}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-5 py-2.5 text-sm text-brand-300">
              <Rocket className="h-4 w-4" />
              And the journey continues...
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

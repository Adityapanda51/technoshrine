"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimatedHeading from "../AnimatedHeading";
import MagneticButton from "../MagneticButton";
import { services } from "@/lib/data";


export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedHeading
          kicker="What We Do For You"
          title="We Can Inspire & Offer"
          highlight="Different Services"
          description="From network rollouts to enterprise QA — we've proudly supported mobile networks, ISPs, technology vendors and more with their testing requirements."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="glass card-hover group relative block overflow-hidden rounded-2xl p-7"
              >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-royal-600/20"
              >
                <s.icon className="h-7 w-7 text-brand-300" />
              </motion.div>
              <h3 className="mb-3 font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-400">{s.short}</p>
              <div className="mt-6">
                <span className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-400">
                  Learn more
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-brand-400/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <MagneticButton href="/services" variant="outline">
            See All Services
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

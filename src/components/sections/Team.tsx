"use client";

import { motion } from "framer-motion";
import { Globe, AtSign, Mail } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";

const members = [
  { name: "Lonny Macauley Dukes", role: "Finance Advisor", initials: "LD" },
  { name: "Lorie Luella Stevens", role: "Business Eng.", initials: "LS" },
  { name: "Grayson Legend Thompsett", role: "Marketing", initials: "GT" },
  { name: "Miriam Estelle Gregory", role: "Developer", initials: "MG" },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32">
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand-500/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedHeading
          kicker="Expert People"
          title="Our Dedicated Team"
          highlight="Members"
          description="We've worked with mobile networks, networking providers, ISPs and technology vendors — holding the quality, process and security accreditations you need."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="glass card-hover group relative overflow-hidden rounded-2xl p-8 text-center"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-royal-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative mx-auto mb-6 h-24 w-24">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-500/25 to-royal-600/25 font-display text-2xl font-bold text-brand-300 ring-2 ring-brand-400/20"
                >
                  {m.initials}
                </motion.div>
                <span className="absolute inset-0 rounded-full border border-brand-400/20 animate-pulse-ring opacity-0 group-hover:opacity-100" />
              </div>
              <h3 className="font-display text-base font-bold text-white">{m.name}</h3>
              <p className="mt-1 text-sm text-brand-300">{m.role}</p>
              <div className="mt-5 flex justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                {[Globe, AtSign, Mail].map((Icon, j) => (
                  <motion.span
                    key={j}
                    initial={{ y: 10 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-brand-400/20 text-ink-300 hover:border-brand-400/50 hover:text-brand-300"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

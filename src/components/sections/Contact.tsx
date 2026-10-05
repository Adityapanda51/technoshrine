"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, PhoneCall, Send } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";

const inputClass =
  "w-full rounded-xl border border-brand-400/15 bg-night-800/60 px-4 py-3.5 text-sm text-white placeholder:text-ink-500 outline-none transition-all duration-300 focus:border-brand-400/60 focus:bg-night-800 focus:ring-2 focus:ring-brand-500/20";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <AnimatedHeading
              align="left"
              kicker="Request a Call Back"
              title="See Why Businesses Around The World Believe In"
              highlight="TechnoShrine"
              description="Please phone or send us your request using the form, and we will contact you as soon as possible. Let us know your purpose and we will find the right person to call you back."
            />

            <div className="space-y-4">
              {[
                { icon: PhoneCall, label: "Toll Free", value: "1800 891 0810", href: "tel:18008910810" },
                { icon: Send, label: "Email", value: "info@technoshrine.com", href: "mailto:info@technoshrine.com" },
              ].map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="glass flex items-center gap-4 rounded-2xl px-6 py-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-royal-600/20">
                    <c.icon className="h-5 w-5 text-brand-300" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wider text-ink-500 uppercase">{c.label}</span>
                    <span className="block font-display font-semibold text-white">{c.value}</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-8 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[380px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-emerald-400" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    Request Received!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-ink-400">
                    Thank you — our team will call you back as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-brand-300 hover:text-brand-400"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -16 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <motion.input
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      required
                      placeholder="Your Name"
                      className={inputClass}
                    />
                    <motion.input
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      required
                      type="email"
                      placeholder="Email Address"
                      className={inputClass}
                    />
                  </div>
                  <motion.input
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className={inputClass}
                  />
                  <motion.select
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none ${"bg-night-800/60"}`}
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    <option>Network Testing</option>
                    <option>UE & System Testing</option>
                    <option>Telecom Testing</option>
                    <option>Software Testing</option>
                    <option>Software Consultancy</option>
                    <option>Other</option>
                  </motion.select>
                  <motion.textarea
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className={`${inputClass} resize-none`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-royal-600 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-shadow hover:shadow-brand-500/50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Request Call Back
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

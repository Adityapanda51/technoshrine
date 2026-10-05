import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us - TechnoShrine Infosolutions Pvt Ltd",
  description:
    "Contact TechnoShrine Infosolutions Pvt Ltd for consulting, testing, software development and web design services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        highlight="Let's Request a Schedule"
        description="See why more businesses around the world believe TechnoShrine. Please phone or send us your request, and we will contact you as soon as possible."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold leading-tight text-white">
              Get in touch
            </h2>
            <p className="text-ink-300 leading-relaxed">
              We have the knowledge, experiences and skills to support even the most
              demanding firms with their testing and IT needs. Tell us about your
              purpose and we will find the right person to call you back.
            </p>

            <div className="rounded-2xl border border-brand-400/10 bg-night-900/40 p-6">
              <h3 className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
                Contact Details
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-ink-300">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>Infosys Road, Patia, Bhubaneswar, IN</span>
                </li>
                <li>
                  <a
                    href="tel:18008910810"
                    className="flex items-center gap-3 transition-colors hover:text-brand-300"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                    TF: 1800 891 0810
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@technoshrine.com"
                    className="flex items-center gap-3 transition-colors hover:text-brand-300"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                    info@technoshrine.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-400/10 bg-night-900/40 p-6">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Request a call back
            </h3>
            <form className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-sm text-ink-400">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-brand-400/20 bg-night-950/60 px-3 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-ink-400">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-brand-400/20 bg-night-950/60 px-3 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm text-ink-400">Phone</label>
                <input
                  type="tel"
                  placeholder="TF: 1800 891 0810"
                  className="w-full rounded-lg border border-brand-400/20 bg-night-950/60 px-3 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm text-ink-400">Purpose</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-lg border border-brand-400/20 bg-night-950/60 px-3 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-brand-500 to-royal-600 px-5 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Request Call Back
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

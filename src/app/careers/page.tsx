import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers - TechnoShrine Infosolutions Pvt Ltd",
  description:
    "Join TechnoShrine Infosolutions Pvt Ltd. Explore open roles and training opportunities. Innovation Paradise Begins Here.",
};

const roles = [
  {
    title: "Software Development Engineer",
    location: "Bhubaneswar, IN",
    type: "Full-time",
  },
  {
    title: "Telecom Testing Engineer",
    location: "Bhubaneswar, IN",
    type: "Full-time",
  },
  {
    title: "QA Automation Engineer",
    location: "Bhubaneswar, IN",
    type: "Full-time",
  },
  {
    title: "Business Engineer",
    location: "Bhubaneswar, IN",
    type: "Full-time",
  },
  {
    title: "Marketing Executive",
    location: "Bhubaneswar, IN",
    type: "Full-time",
  },
  {
    title: "Finance Advisor",
    location: "Bhubaneswar, IN",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        highlight="Join Our Growing Team"
        description="We are always looking for talented individuals who share our passion for innovation, quality, and customer success."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold leading-tight text-white">
            Open Positions
          </h2>
          <p className="mt-3 max-w-2xl text-ink-300 leading-relaxed">
            From an ever-increasing range of new devices to implementing new networks
            such as 5G/6G — and from data centres to total IT solutions for corporate
            customers — telecoms companies must keep moving forward to stay in front of
            customer demands. Be part of the team that helps them do it.
          </p>
        </div>

        {roles.length === 0 ? (
          <div className="rounded-2xl border border-brand-400/10 bg-night-900/40 p-10 text-center">
            <p className="text-ink-300">No open positions at this time.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group flex flex-col gap-3 rounded-xl border border-brand-400/10 bg-night-900/40 p-5 transition-colors hover:border-brand-400/30 hover:bg-night-900/60"
              >
                <h3 className="font-display text-base font-semibold text-white">
                  {role.title}
                </h3>
                <ul className="space-y-1.5 text-sm text-ink-400">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-400">●</span>
                    {role.location}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-400">●</span>
                    {role.type}
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-royal-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-brand-400/10 bg-night-900/40 p-6">
          <h3 className="font-display text-lg font-semibold text-white">
            Training & Development
          </h3>
          <p className="mt-3 text-sm text-ink-300 leading-relaxed">
            We invest in continuous learning. Our team training programs help every
            member grow — from structured learning paths to the best certification
            support in the industry.
          </p>
          <Link
            href="/team-training"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
          >
            View team training
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

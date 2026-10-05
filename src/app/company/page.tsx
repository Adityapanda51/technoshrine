import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Company - TechnoShrine Infosolutions Pvt Ltd",
  description:
    "TechnoShrine Infosolutions Pvt Ltd — Innovation Paradise Begins Here. Learn about our company, leadership, values and accreditations.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="Our Company"
        highlight="TechnoShrine Infosolutions Pvt Ltd"
        description="Leading IT company since 2011 — trusted for innovative solutions, software development, consultancy and web design services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Company" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold leading-tight text-white">
              Who we are
            </h2>
            <p className="text-ink-300 leading-relaxed">
              TechnoShrine Infosolutions Pvt Ltd has been delivering innovative IT
              solutions since 2011. From telecom testing to software development,
              consultancy and web design, we help businesses and telecom operators stay
              ahead in a rapidly evolving digital landscape.
            </p>
            <p className="text-ink-300 leading-relaxed">
              We have worked with mobile networks, networking providers, ISPs,
              technology vendors, and corporate customers — bringing the quality
              management, process and security accreditations you need, with delivery
              methods that match your requirements and budgets.
            </p>
          </div>

          <div className="grid gap-4 rounded-2xl border border-brand-400/10 bg-night-900/40 p-6">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Accreditations
            </h3>
            <ul className="space-y-3 text-sm text-ink-300">
              <li className="flex flex-wrap items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-medium text-white">ISO 9001:2015</span>
                  Quality Management System
                </span>
              </li>
              <li className="flex flex-wrap items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-medium text-white">ISO/IEC 27001:2022</span>
                  Information Security Management System
                </span>
              </li>
              <li className="flex flex-wrap items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-medium text-white">CMMI Level 5</span>
                  Optimizing — our highest maturity level
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "12+",
              label: "Years of experience",
            },
            {
              value: "450+",
              label: "Projects delivered",
            },
            {
              value: "320+",
              label: "Happy clients",
            },
            {
              value: "40+",
              label: "Best awards",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-brand-400/10 bg-night-900/40 p-6 text-center"
            >
              <div className="font-display text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-ink-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
          >
            Explore our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales and Partnerships - TechnoShrine Infosolutions Pvt Ltd",
  description:
    "Sales and partnerships at TechnoShrine Infosolutions Pvt Ltd. Connect with us for collaborations, reseller partnerships and enterprise sales.",
};

export default function SalesPartnershipsPage() {
  return (
    <>
      <PageHero
        title="Sales and Partnerships"
        highlight="Let's Grow Together"
        description="We partner with technology vendors, ISPs, networking providers and enterprises to deliver testing, consulting and IT solutions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sales and Partnerships" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold leading-tight text-white">
              Partnership opportunities
            </h2>
            <p className="text-ink-300 leading-relaxed">
              From telecom testing to software development, consultancy and web design,
              we work with partners who share our commitment to quality and innovation.
            </p>
            <p className="text-ink-300 leading-relaxed">
              Telecoms companies operate in a digital environment that is almost
              unparalleled. We have proudly supported many with their testing
              requirements — and we are always open to new collaborations.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-400/10 bg-night-900/40 p-6">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li className="flex flex-wrap items-start gap-3">
                <span className="shrink-0 text-brand-400">●</span>
                <span>
                  <span className="block font-medium text-white">Sales & Partnerships</span>
                  TF: 1800 891 0810
                </span>
              </li>
              <li className="flex flex-wrap items-start gap-3">
                <span className="shrink-0 text-brand-400">●</span>
                <span>
                  <span className="block font-medium text-white">Email</span>
                  info@technoshrine.com
                </span>
              </li>
              <li className="flex flex-wrap items-start gap-3">
                <span className="shrink-0 text-brand-400">●</span>
                <span>
                  <span className="block font-medium text-white">Address</span>
                  Infosys Road, Patia, Bhubaneswar, IN
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
            >
              Request a call back
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

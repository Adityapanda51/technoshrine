import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Support - TechnoShrine Infosolutions Pvt Ltd",
  description:
    "Customer support at TechnoShrine Infosolutions Pvt Ltd. Get help with your testing, consultancy or development engagement.",
};

export default function CustomerSupportPage() {
  return (
    <>
      <PageHero
        title="Customer Support"
        highlight="We're Here to Help"
        description="Our support team is ready to assist with your queries, ongoing engagements and service requests."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Customer Support" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold leading-tight text-white">
            How to reach us
          </h2>
          <p className="mt-3 max-w-2xl text-ink-300 leading-relaxed">
            Our testing experts have a deep understanding of testing methodologies,
            technologies and business-process best practices — making them leaders in
            the QA services industry. Reach out and we will help you find the right
            person.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-brand-400/10 bg-night-900/40 p-6">
            <h3 className="font-display text-base font-semibold text-white">
              General Support
            </h3>
            <p className="mt-3 text-sm text-ink-300 leading-relaxed">
              For general inquiries about our services, engagements and delivery
              methods.
            </p>
            <a
              href="mailto:info@technoshrine.com"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
            >
              info@technoshrine.com
            </a>
          </div>

          <div className="rounded-xl border border-brand-400/10 bg-night-900/40 p-6">
            <h3 className="font-display text-base font-semibold text-white">
              Phone Support
            </h3>
            <p className="mt-3 text-sm text-ink-300 leading-relaxed">
              Speak with our team directly during business hours.
            </p>
            <a
              href="tel:18008910810"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
            >
              TF: 1800 891 0810
            </a>
          </div>

          <div className="rounded-xl border border-brand-400/10 bg-night-900/40 p-6">
            <h3 className="font-display text-base font-semibold text-white">
              Office Location
            </h3>
            <p className="mt-3 text-sm text-ink-300 leading-relaxed">
              Visit us or send correspondence to our headquarters.
            </p>
            <p className="mt-2 text-sm text-ink-300">
              Infosys Road, Patia, Bhubaneswar, IN
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
          >
            Submit a support request
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

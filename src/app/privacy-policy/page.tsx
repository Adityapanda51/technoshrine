import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy - TechnoShrine Infosolutions Pvt Ltd",
  description:
    "Privacy Policy of TechnoShrine Infosolutions Pvt Ltd. Learn how we collect, use and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        highlight="Your Privacy Matters"
        description="Read how TechnoShrine Infosolutions Pvt Ltd collects, uses and protects your personal information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <div className="space-y-6 rounded-2xl border border-brand-400/10 bg-night-900/40 p-8">
          <h2 className="font-display text-2xl font-bold text-white">
            Privacy Policy
          </h2>
          <p className="text-ink-300 leading-relaxed">
            This Privacy Policy describes how TechnoShrine Infosolutions Pvt Ltd
            ("we", "us" or "our") collects, uses and shares information about you when
            you visit our website, contact us or engage with our services.
          </p>

          {[
            {
              heading: "Information we collect",
              body: [
                "Information you provide to us directly, such as when you submit a contact form, request a call back or subscribe to updates.",
                "Usage information, such as the pages you visit and the time and date of your visit, to help us improve our website and services.",
              ],
            },
            {
              heading: "How we use your information",
              body: [
                "To respond to your inquiries, provide support and deliver the services you request.",
                "To improve our website, products and services.",
                "To communicate with you about updates, offers and events that may be of interest.",
              ],
            },
            {
              heading: "Information sharing",
              body: [
                "We do not sell your personal information.",
                "We may share information with trusted service providers who help us operate our business, subject to appropriate confidentiality obligations.",
              ],
            },
            {
              heading: "Your rights",
              body: [
                "You can ask us to access, correct or delete your personal information by contacting us using the details on our Contact Us page.",
              ],
            },
          ].map((section) => (
            <div key={section.heading} className="space-y-3">
              <h3 className="font-display text-base font-semibold text-white">
                {section.heading}
              </h3>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-ink-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <p className="text-ink-400 text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>
    </>
  );
}

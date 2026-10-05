import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import ServicesGrid from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Services — TechnoShrine",
  description:
    "Network Testing, UE & System Testing, Telecom Testing, Software Testing and IT consultancy services by TechnoShrine Infosolutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="What We Do For You"
          title="We Can Inspire & Offer"
          highlight="Different Services"
          description="From network rollouts to enterprise QA — we've proudly supported mobile networks, ISPs, technology vendors and more with their testing requirements."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
        <ServicesGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us — TechnoShrine",
  description:
    "TechnoShrine Infosolutions Pvt Ltd: leading IT company since 2011. ISO certified, CMMI Level 5, specialists in telecom and software testing.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          kicker="Get To Know Us"
          title="Innovative Solutions for Your"
          highlight="Company."
          description="Continuous innovation and the ability to introduce new services in a shorter span of time is the key to success for technology service operators."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <AboutPageClient />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

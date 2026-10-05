import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Team />
        <Testimonials />
        <Faq />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

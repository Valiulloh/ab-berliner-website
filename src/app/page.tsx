import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ServicesGrid />
        <About />
        <WhyChooseUs />
        <Process />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
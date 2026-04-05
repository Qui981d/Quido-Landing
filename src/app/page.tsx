import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import BentoShowcase from "@/components/BentoShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import LocalExpertise from "@/components/LocalExpertise";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ProofAndBooking from "@/components/ProofAndBooking";
import AppShowcase from "@/components/AppShowcase";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofTicker />
        <BentoShowcase />
        <ProcessTimeline />
        <LocalExpertise />
        <AppShowcase />
        <TestimonialsSection />
        <ProofAndBooking />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import BentoShowcase from "@/components/BentoShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import LocalExpertise from "@/components/LocalExpertise";
import AppShowcase from "@/components/AppShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ProofAndBooking from "@/components/ProofAndBooking";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

// FAQSection is the only client component left on homepage (uses useState for accordion)
const FAQSection = dynamic(() => import("@/components/FAQSection"));

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
        <PricingSection />
        <ProofAndBooking />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

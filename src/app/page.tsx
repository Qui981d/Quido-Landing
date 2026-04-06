import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import BentoShowcase from "@/components/BentoShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import LocalExpertise from "@/components/LocalExpertise";
import AppShowcase from "@/components/AppShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProofAndBooking from "@/components/ProofAndBooking";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

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
        <ProofAndBooking />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

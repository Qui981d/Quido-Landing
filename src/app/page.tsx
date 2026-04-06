import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import BentoShowcase from "@/components/BentoShowcase";
import dynamic from "next/dynamic";

const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"));
const LocalExpertise = dynamic(() => import("@/components/LocalExpertise"));
const AppShowcase = dynamic(() => import("@/components/AppShowcase"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const ProofAndBooking = dynamic(() => import("@/components/ProofAndBooking"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Footer = dynamic(() => import("@/components/Footer"));

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

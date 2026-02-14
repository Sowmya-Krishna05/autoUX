import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    // Simulated decision logic
    const variant = Math.random() > 0.5 ? "A" : "B";
    console.log(`Variant ${variant} selected`);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ArchitectureSection />
      <ComparisonSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

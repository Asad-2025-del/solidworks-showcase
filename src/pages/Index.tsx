import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ProjectsSection from "@/components/ProjectsSection";
import PortfolioDownloads from "@/components/PortfolioDownloads";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CMA group of companies",
  description:
    "Multi-disciplinary engineering consultancy offering civil design, structural engineering, and mechanical CAD/FEA/CFD services.",
  url: "https://mech-gallery-plus.lovable.app",
  telephone: "+923378284111",
  email: "ApexEngGrp@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  areaServed: "Worldwide",
  serviceType: [
    "Civil Engineering",
    "Architectural Design",
    "3D & 5D Architectural Visualization",
    "Structural Engineering",
    "Structural FEA",
    "Mechanical Engineering",
    "CAD Modeling",
    "ANSYS FEA",
    "CFD Analysis",
  ],
};

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProjectsSection />
        <PortfolioDownloads />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

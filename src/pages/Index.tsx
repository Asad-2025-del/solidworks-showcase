import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ProjectsSection from "@/components/ProjectsSection";

import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SITE = "https://cmagroup.lovable.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: "CMA group of companies",
  description:
    "Multi-disciplinary engineering consultancy offering engineering design services — CAD, CFD, FEA, mechanical design, BIM modeling, architectural design, structural engineering, and product development.",
  url: SITE,
  telephone: "+92-337-8284111",
  email: "cmagroup.pk@gmail.com",
  priceRange: "$$",
  image: `${SITE}/placeholder.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "M-18, ZAIN MOBILE MALL, MAIN TARIQ ROAD",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Engineering Design Services",
    "CAD Design",
    "CFD Analysis",
    "FEA Analysis",
    "Mechanical Design",
    "BIM Modeling",
    "Architectural Design",
    "Product Development",
    "Structural Engineering",
    "3D & 5D Architectural Visualization",
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

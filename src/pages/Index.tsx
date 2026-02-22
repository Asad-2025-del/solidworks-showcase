import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DesignnCFD",
  description:
    "CAD modeling, SolidWorks design, ANSYS structural & CFD analysis, and product optimization services.",
  url: "https://mech-gallery-plus.lovable.app",
  telephone: "+923378284111",
  email: "Designncfd@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  areaServed: "Worldwide",
  serviceType: [
    "CAD Modeling",
    "SolidWorks Design",
    "ANSYS FEA",
    "CFD Analysis",
    "Product Design",
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
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

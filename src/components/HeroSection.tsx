import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Engineering workspace with CAD models and simulation analysis"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="mb-4 text-sm font-mono uppercase tracking-[0.3em] text-primary animate-fade-in">
          Engineering · Design · Simulation
        </p>
        <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up">
          Precision{" "}
          <span className="text-gradient">Engineering</span>
          <br />
          Solutions
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          SolidWorks design, FEA stress analysis, and CFD simulation — 
          turning complex engineering challenges into validated, production-ready solutions.
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors glow-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-8 py-3 font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;

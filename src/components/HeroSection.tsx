import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Shield, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Shield, label: "Industry-Grade Accuracy" },
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Target, label: "Production-Ready Output" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Engineering workspace with CAD models and simulation analysis"
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          className="mb-4 text-sm font-mono uppercase tracking-[0.3em] text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A Multi-Disciplinary Engineering Group
        </motion.p>

        <motion.h1
          className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-gradient">Civil. Structural.</span>
          <span className="text-foreground"> Mechanical.</span>
          <span className="sr-only"> — CMA group of companies</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          End-to-end engineering for the built environment and industry — from{" "}
          <strong className="text-foreground">architectural floor plans</strong>,{" "}
          <strong className="text-foreground">3D &amp; 5D walkthroughs</strong>, and{" "}
          <strong className="text-foreground">structural design</strong> to{" "}
          <strong className="text-foreground">FEA, CFD, and production-ready CAD</strong>.
        </motion.p>

        {/* Industry trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {badges.map((b) => (
            <span
              key={b.label}
              className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-mono text-primary"
            >
              <b.icon size={14} />
              {b.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
            Get a Quote
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;

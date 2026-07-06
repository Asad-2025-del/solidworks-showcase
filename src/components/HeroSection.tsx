import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "3", label: "Engineering Divisions" },
  { value: "24h", label: "Avg. Response Time" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 border-b border-border">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Engineering workspace with CAD models and simulation analysis"
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-primary">
              CMA Group of Companies · Karachi, PK
            </span>
          </motion.div>

          <motion.h1
            className="mb-8 text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Precision engineering
            <br />
            for the <span className="text-gradient">built environment</span>
            <br />
            and industry.
          </motion.h1>

          <motion.p
            className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A multi-disciplinary consultancy delivering{" "}
            <span className="text-foreground">civil, structural, and mechanical</span>{" "}
            solutions — from architectural design and FEA to production-ready CAD
            and CFD.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-none bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-none border border-border px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-colors"
            >
              View Capabilities
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-3 gap-px bg-border max-w-2xl border border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-5 py-5">
                <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 right-6 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;

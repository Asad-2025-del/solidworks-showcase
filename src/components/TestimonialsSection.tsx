import { motion } from "framer-motion";
import { Quote, TrendingUp, Clock, Rocket } from "lucide-react";

const testimonials = [
  {
    name: "Hamza T.",
    role: "Founder — EV Battery Startup",
    quote:
      "We were a 3-person team trying to validate a Li-ion pack design before our seed round. CMA group ran CFD on both straight and Z-type airflow layouts and gave us a clear recommendation backed by Nusselt/Reynolds correlations. We walked into our investor meeting with real thermal data — and closed the round.",
  },
  {
    name: "Ayesha M.",
    role: "Co-founder — Boutique Real Estate Studio",
    quote:
      "As a brand-new studio we couldn't afford an in-house BIM team. Asadullah's team delivered the Revit floor plans, exterior renders, and a 5D walkthrough in under two weeks. Our first client signed the same day they saw the walkthrough.",
  },
  {
    name: "Daniyal R.",
    role: "Mechanical Lead — HVAC Startup",
    quote:
      "Our finned-tube heat exchanger was failing on uniformity. CMA group rebuilt the CAD, ran ANSYS Fluent across the coil, and pinpointed exactly where the fin pitch was wrong. Second prototype passed validation — saved us six weeks and a prototype cycle.",
  },
];

const caseStudies = [
  { icon: Rocket, metric: "15+", label: "Projects Delivered", detail: "Across civil, structural, and mechanical disciplines" },
  { icon: TrendingUp, metric: "+9.4%", label: "Lift Improvement", detail: "F1 front wing CFD vs baseline — real client deliverable" },
  { icon: Clock, metric: "2 wks", label: "Avg. Turnaround", detail: "From kickoff to first deliverable for startup clients" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-card/40 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              — 04 / Client Outcomes
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Measured results.<br />
              <span className="text-gradient">Real founders.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground border-l border-primary/50 pl-6">
            Fifteen-plus projects shipped for founders, studios, and engineering
            teams — here's what they say.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid gap-px sm:grid-cols-3 mb-px bg-border border border-border">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background p-8"
            >
              <cs.icon size={24} strokeWidth={1.5} className="text-primary mb-6" />
              <div className="text-4xl font-bold text-foreground mb-2 tracking-tight">{cs.metric}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{cs.label}</div>
              <div className="text-xs text-muted-foreground">{cs.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-px md:grid-cols-3 bg-border border border-border border-t-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-10 flex flex-col"
            >
              <Quote size={28} className="text-primary/40 mb-6" strokeWidth={1.25} />
              <p className="text-base text-foreground/90 leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </p>
              <div className="pt-6 border-t border-border">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

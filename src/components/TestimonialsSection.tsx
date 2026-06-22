import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, Clock, DollarSign } from "lucide-react";

const testimonials = [
  {
    name: "Bilal H.",
    role: "Developer — Residential Project",
    quote:
      "The 3D renderings and 5D walkthrough CMA group of companies produced helped us pre-sell units before breaking ground. The floor plans were clean, code-compliant, and contractor-ready.",
    stars: 5,
  },
  {
    name: "Sara K.",
    role: "Structural Lead — Commercial Build",
    quote:
      "Their seismic analysis and RCC detailing came back fully verified against local building codes. Drawings were exactly what our site team needed — zero ambiguity.",
    stars: 5,
  },
  {
    name: "Ahmed R.",
    role: "Plant Manager — Manufacturing",
    quote:
      "CMA group of companies redesigned our heat exchanger assembly and validated it with CFD. We cut prototype iterations from 5 to 2 and saved three weeks of development time.",
    stars: 5,
  },
];

const caseStudies = [
  {
    icon: TrendingUp,
    metric: "38%",
    label: "Drag Reduction",
    detail: "CFD-optimized airfoil for an industrial ventilation unit",
  },
  {
    icon: Clock,
    metric: "60%",
    label: "Faster Delivery",
    detail: "Parametric CAD & BIM templates removed manual rework",
  },
  {
    icon: DollarSign,
    metric: "$12K",
    label: "Cost Saved",
    detail: "Topology-optimized bracket reduced material by 45%",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Proven Results
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Real impact backed by engineering data — hear from the teams we've partnered with.
          </p>
        </motion.div>

        {/* Case Study Metrics */}
        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
              className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:glow-sm transition-all duration-300"
            >
              <div className="mx-auto mb-3 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                <cs.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{cs.metric}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{cs.label}</div>
              <div className="text-xs text-muted-foreground">{cs.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
              className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:glow-sm flex flex-col"
            >
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

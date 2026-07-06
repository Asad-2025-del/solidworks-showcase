import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Essentials",
    price: "$99",
    unit: "per project",
    description: "For single-discipline jobs — a floor plan, a CAD part, or a quick structural check.",
    features: [
      "Single discipline",
      "2D drawings or single CAD assembly",
      "One revision round",
      "PDF / DWG / STEP delivery",
      "5–7 day turnaround",
      "Email support",
    ],
    cta: "Enquire",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$399",
    unit: "per project",
    description: "Coordinated design + analysis package for developers, startups, and product teams.",
    features: [
      "Up to two disciplines (civil + structural)",
      "3D rendering or FEA / CFD included",
      "Two revision rounds",
      "Construction- or manufacturing-ready drawings",
      "7–14 day turnaround",
      "Priority WhatsApp support",
    ],
    cta: "Select Tier",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "quote",
    description: "Full multi-disciplinary engagements for large builds, plants, and ongoing programs.",
    features: [
      "All three divisions, fully coordinated",
      "Advanced FEA + CFD + 5D walkthroughs",
      "Unlimited revisions",
      "NDA & IP protection",
      "Dedicated project manager",
      "24 hr priority response",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  const whatsappUrl = `https://wa.me/923378284111?text=${encodeURIComponent("Hi CMA group of companies, I'd like to discuss pricing.")}`;

  return (
    <section id="pricing" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
            — 07 / Engagement Models
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-6">
            Transparent pricing.<br />
            <span className="text-gradient">Fixed-fee delivery.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Tailored engagement structures for projects of varying scale and complexity — no hidden fees, no scope creep.
          </p>
        </motion.div>

        <div className="grid gap-px md:grid-cols-3 bg-border border border-border">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-10 transition-colors ${
                tier.highlighted ? "bg-primary/5" : "bg-background hover:bg-card"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute top-0 right-0 bg-primary px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary-foreground">
                  Recommended
                </span>
              )}

              <p className="mb-8 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
                Tier 0{i + 1}
              </p>

              <h3 className="text-2xl font-semibold text-foreground tracking-tight">{tier.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tier.description}</p>

              <div className="mt-8 mb-8 pb-8 border-b border-border">
                <span className="text-5xl font-bold text-foreground tracking-tight">{tier.price}</span>
                <span className="ml-2 text-sm text-muted-foreground">/ {tier.unit}</span>
              </div>

              <ul className="mb-10 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={14} className="mt-1 shrink-0 text-primary" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center justify-center gap-3 w-full py-4 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40"
                }`}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

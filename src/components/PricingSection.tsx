import { GraduationCap, Rocket, Building2, Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    icon: GraduationCap,
    name: "Student",
    price: "$49",
    unit: "per project",
    description: "Ideal for thesis work, coursework, and academic assignments.",
    features: [
      "Single part or assembly CAD",
      "Basic 2D & 3D drawings",
      "One revision round",
      "STEP / IGES export",
      "5–7 day turnaround",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    icon: Rocket,
    name: "Startup",
    price: "$199",
    unit: "per project",
    description: "For product teams that need production-ready design & validation.",
    features: [
      "Multi-part assemblies & BOMs",
      "FEA or CFD analysis included",
      "Two revision rounds",
      "Manufacturing-ready drawings",
      "3–5 day turnaround",
      "Priority WhatsApp support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    icon: Building2,
    name: "Industrial",
    price: "Custom",
    unit: "quote",
    description: "Enterprise-grade engineering for ongoing or large-scale projects.",
    features: [
      "Unlimited parts & assemblies",
      "Advanced FEA + CFD coupling",
      "Unlimited revisions",
      "NDA & IP protection",
      "Dedicated project manager",
      "24 hr priority response",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const PricingSection = () => {
  const whatsappUrl = `https://wa.me/923378284111?text=${encodeURIComponent("Hi DesignnCFD, I'd like to discuss pricing.")}`;

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Flexible <span className="text-gradient">Plans</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Transparent pricing for every stage — from student projects to full-scale industrial engagements.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`relative flex flex-col rounded-lg border p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary bg-card glow-sm scale-[1.02]"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <div className="mb-5 inline-flex self-start rounded-md bg-primary/10 p-3 text-primary">
                <tier.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                <span className="ml-1 text-sm text-muted-foreground">/ {tier.unit}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block w-full rounded-md py-3 text-center text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

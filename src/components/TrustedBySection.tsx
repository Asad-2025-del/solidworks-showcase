import { motion } from "framer-motion";
import { Building2, Hammer, Cog, Factory, Plane, Droplets } from "lucide-react";

const sectors = [
  { icon: Building2, label: "Real Estate & Construction" },
  { icon: Hammer, label: "Infrastructure" },
  { icon: Cog, label: "Manufacturing & R&D" },
  { icon: Factory, label: "Process & Industrial" },
  { icon: Plane, label: "Aerospace & Automotive" },
  { icon: Droplets, label: "Oil, Gas & HVAC" },
];

const TrustedBySection = () => {
  return (
    <section className="border-y border-border bg-card/40 py-10">
      <div className="container mx-auto px-6">
        <motion.p
          className="mb-6 text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Serving Industries Across the Built &amp; Industrial Environment
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {sectors.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 text-muted-foreground/70 hover:text-primary/90 transition-colors"
            >
              <c.icon size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-wide">{c.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;

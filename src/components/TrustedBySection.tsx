import { motion } from "framer-motion";
import { Plane, Car, Flame, Droplets, Cpu, Factory } from "lucide-react";

const clients = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Plane, label: "Aerospace" },
  { icon: Car, label: "Automotive" },
  { icon: Flame, label: "HVAC" },
  { icon: Droplets, label: "Oil & Gas" },
  { icon: Cpu, label: "Electronics" },
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
          Trusted Across Industries
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {clients.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-primary/80 transition-colors"
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

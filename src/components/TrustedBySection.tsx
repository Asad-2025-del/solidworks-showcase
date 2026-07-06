import { motion } from "framer-motion";

const sectors = [
  "Real Estate & Construction",
  "Infrastructure",
  "Manufacturing & R&D",
  "Process & Industrial",
  "Aerospace & Automotive",
  "Oil, Gas & HVAC",
];

const TrustedBySection = () => {
  return (
    <section className="border-b border-border py-8 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <motion.p
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground shrink-0 md:border-r md:border-border md:pr-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Serving Sectors —
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-x-8 gap-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sectors.map((c) => (
              <span
                key={c}
                className="text-xs font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {c}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

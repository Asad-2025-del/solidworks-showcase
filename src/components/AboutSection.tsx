import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Engineering Divisions" },
  { value: "15+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
];

const industries = [
  "Real Estate & Construction",
  "Infrastructure & Public Works",
  "Manufacturing & Fabrication",
  "Oil, Gas & Process Plants",
  "HVAC & Thermal Systems",
  "Automotive & Aerospace",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-card/40 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              — 05 / The Group
            </p>
            <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              An integrated<br />
              <span className="text-gradient">engineering group.</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">CMA group of companies</span> is a
              multi-disciplinary consultancy bringing together civil, structural,
              and mechanical engineering under one team. Led by{" "}
              <span className="text-foreground font-medium">Asadullah Anis</span>, we collaborate
              with architects, contractors, manufacturers, and product teams to
              deliver coordinated, code-compliant solutions.
            </p>
            <p className="mb-10 text-muted-foreground leading-relaxed">
              From architectural floor plans and 5D walkthroughs to structural
              FEA and production CAD — every deliverable is rigorously validated,
              professionally documented, and ready for construction or
              manufacturing.
            </p>

            <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
              Industries Served
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1.5 text-xs font-mono text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-px bg-border border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background p-8">
                <div className="text-5xl font-bold text-foreground mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

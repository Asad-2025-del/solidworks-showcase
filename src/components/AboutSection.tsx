import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Engineering Divisions" },
  { value: "50+", label: "Projects Delivered" },
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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
              About Us
            </p>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">
              An Integrated <span className="text-gradient">Engineering Group</span>
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Apex Engineering Group</strong> is a
              multi-disciplinary consultancy bringing together{" "}
              <strong className="text-foreground">civil</strong>,{" "}
              <strong className="text-foreground">structural</strong>, and{" "}
              <strong className="text-foreground">mechanical</strong> engineering under
              one team. Led by <strong className="text-foreground">Asadullah Anis</strong>,
              we collaborate with architects, contractors, manufacturers, and product
              teams to deliver coordinated, code-compliant solutions.
            </p>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              From <strong className="text-foreground">architectural floor plans</strong>{" "}
              and <strong className="text-foreground">5D walkthroughs</strong> to{" "}
              <strong className="text-foreground">structural FEA</strong> and{" "}
              <strong className="text-foreground">production CAD</strong> — every
              deliverable is rigorously validated, professionally documented, and ready
              for construction or manufacturing.
            </p>

            <p className="mb-4 text-xs font-mono uppercase tracking-wider text-primary">
              Industries We Serve
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-mono text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:glow-sm transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

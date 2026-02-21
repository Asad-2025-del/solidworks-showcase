import { Cpu, Box, Wind, Wrench, PenTool, Cog } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Box,
    title: "CAD Modeling (2D & 3D)",
    description: "Parametric part and assembly design with full documentation, BOM generation, and manufacturing-ready drawings.",
  },
  {
    icon: PenTool,
    title: "SolidWorks Design & Simulation",
    description: "Complete product design lifecycle — motion studies, interference checks, stress analysis, and thermal simulation.",
  },
  {
    icon: Cpu,
    title: "ANSYS Structural & CFD",
    description: "Static, dynamic, and thermal FEA coupled with computational fluid dynamics for real-world validation.",
  },
  {
    icon: Wind,
    title: "CFD Analysis",
    description: "Fluid flow, heat transfer, drag reduction, and system-level optimization for industrial and automotive applications.",
  },
  {
    icon: Wrench,
    title: "Product Design & Optimization",
    description: "Topology optimization, design-of-experiments, and weight/cost reduction while meeting performance targets.",
  },
  {
    icon: Cog,
    title: "Mechanical System Design",
    description: "Complete mechanical systems — gear trains, enclosures, fixtures — with prototyping support and DFM review.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            What We Deliver
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Engineering <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            From concept sketches to production-validated designs — we cover every stage of the engineering workflow.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:glow-sm"
            >
              <div className="mb-5 inline-flex rounded-md bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                <svc.icon size={28} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

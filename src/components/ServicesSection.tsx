import { Building2, Hammer, Cog, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const divisions = [
  {
    icon: Building2,
    number: "01",
    tag: "Civil Division",
    title: "Civil & Architectural Design",
    description:
      "Concept-to-construction support for residential, commercial, and industrial projects — visualized in immersive 3D and 5D.",
    services: [
      "2D & 3D architectural floor plans",
      "Photorealistic 3D rendering & visualization",
      "5D walkthroughs & virtual site tours",
      "Site planning & land development",
      "Interior & exterior design drafting",
      "BOQ, quantity take-off & cost estimation",
    ],
  },
  {
    icon: Hammer,
    number: "02",
    tag: "Structural Division",
    title: "Structural Engineering & Analysis",
    description:
      "Safe, optimized structures backed by code-compliant calculations and finite element validation.",
    services: [
      "RCC & steel structure design",
      "Foundation & footing design",
      "Structural FEA (ETABS, SAP2000, ANSYS)",
      "Seismic & wind load analysis",
      "Retrofitting & rehabilitation studies",
      "Structural drawings & detailing",
    ],
  },
  {
    icon: Cog,
    number: "03",
    tag: "Mechanical Division",
    title: "Mechanical Engineering & Simulation",
    description:
      "Production-ready mechanical design coupled with advanced simulation for manufacturing, HVAC, and R&D.",
    services: [
      "CAD modeling — SolidWorks, Fusion 360, Inventor",
      "Product design & DFM/DFA optimization",
      "ANSYS structural & thermal FEA",
      "CFD — fluid flow, heat transfer, HVAC",
      "Mechanical system & assembly design",
      "Manufacturing drawings (PDF / DXF / STEP)",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              — 01 / Capabilities
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Three disciplines.<br />
              <span className="text-gradient">One integrated group.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground border-l border-primary/50 pl-6">
            Civil, structural, and mechanical expertise under one roof — so your
            project moves seamlessly from concept through analysis to
            construction and manufacturing.
          </p>
        </motion.div>

        <div className="grid gap-px lg:grid-cols-3 bg-border border border-border">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col bg-background p-10 hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="text-primary">
                  <div.icon size={36} strokeWidth={1.25} />
                </div>
                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                  {div.number} //
                </span>
              </div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
                {div.tag}
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-foreground tracking-tight">
                {div.title}
              </h3>
              <p className="mb-8 text-sm text-muted-foreground leading-relaxed">
                {div.description}
              </p>
              <ul className="space-y-3 mt-auto pt-6 border-t border-border">
                {div.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <ArrowUpRight size={14} className="mt-1 shrink-0 text-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

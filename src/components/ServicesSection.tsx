import { Building2, Hammer, Cog, Check } from "lucide-react";
import { motion } from "framer-motion";

const divisions = [
  {
    icon: Building2,
    tag: "Civil Division",
    title: "Civil & Architectural Design",
    description:
      "Concept-to-construction support for residential, commercial, and industrial projects — visualized in immersive 3D and 5D.",
    services: [
      "2D & 3D architectural floor plans",
      "Photorealistic 3D rendering & visualization",
      "5D walkthroughs & virtual site tours",
      "Site planning & land development layouts",
      "Interior & exterior design drafting",
      "BOQ, quantity take-off & cost estimation",
    ],
  },
  {
    icon: Hammer,
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
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
            Our Divisions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Three Disciplines.{" "}
            <span className="text-gradient">One Group.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Apex Engineering Group brings civil, structural, and mechanical
            expertise under one roof — so your project moves seamlessly from
            concept through analysis to construction and manufacturing.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/60 hover:glow-sm"
            >
              <div className="mb-5 inline-flex self-start rounded-md bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                <div.icon size={28} />
              </div>
              <p className="mb-2 text-xs font-mono uppercase tracking-[0.18em] text-primary">
                {div.tag}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {div.title}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                {div.description}
              </p>
              <ul className="space-y-2.5">
                {div.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
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

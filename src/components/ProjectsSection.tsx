import { Link } from "react-router-dom";
import { Cog, BarChart3, Building2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    to: "/architecture-projects",
    icon: Building2,
    tag: "Discipline · Civil",
    title: "Architecture & Interior",
    desc: "Revit BIM, 2D/3D plans, photo-realistic exterior and interior renderings.",
  },
  {
    to: "/cad-projects",
    icon: Cog,
    tag: "Discipline · Mechanical",
    title: "CAD Projects",
    desc: "SolidWorks modelling, assembly design, and industrial product design.",
  },
  {
    to: "/analysis-projects",
    icon: BarChart3,
    tag: "Discipline · Analysis",
    title: "CFD & FEA Studies",
    desc: "ANSYS Fluent CFD, FEA stress, thermal and aerodynamic studies.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 border-b border-border">
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
              — 03 / Selected Works
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              A cross-section of
              <br />
              <span className="text-gradient">engineered outcomes.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground border-l border-primary/50 pl-6">
            Explore case studies across architecture, mechanical CAD, and
            computational engineering simulation.
          </p>
        </motion.div>

        <div className="grid gap-px md:grid-cols-3 bg-border border border-border">
          {projects.map((card, i) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={card.to}
                className="group relative block h-full bg-background p-10 hover:bg-card transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-16">
                  <card.icon size={36} strokeWidth={1.25} className="text-primary" />
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
                  {card.tag}
                </p>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

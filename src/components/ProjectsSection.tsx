import { Link } from "react-router-dom";
import { Cog, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Explore our work across CAD design and simulation analysis.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {[
            {
              to: "/cad-projects",
              icon: Cog,
              title: "CAD Projects",
              desc: "SolidWorks modelling, assembly design, manufacturing drawings & industrial design.",
            },
            {
              to: "/analysis-projects",
              icon: BarChart3,
              title: "Analysis Projects",
              desc: "FEA stress analysis, CFD flow simulation, thermal studies & aerodynamic optimisation.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.to}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                to={card.to}
                className="group relative block overflow-hidden rounded-xl border border-border bg-card p-10 text-center transition-all duration-300 hover:border-primary/50 hover:glow-sm"
              >
                <motion.div
                  className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <card.icon size={32} className="text-primary" />
                </motion.div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

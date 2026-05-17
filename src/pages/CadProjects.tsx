import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { cadProjects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0, 0, 0.2, 1] as const },
  }),
};

const CadProjects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CAD Projects — SolidWorks Modeling & Drawings | DesignnCFD</title>
        <meta name="description" content="SolidWorks CAD modeling, assembly design, and manufacturing drawings — gearboxes, lifts, ergonomic products, and industrial concepts." />
        <link rel="canonical" href="https://mech-gallery-plus.lovable.app/cad-projects" />
        <meta property="og:title" content="CAD Projects — SolidWorks Modeling & Drawings | DesignnCFD" />
        <meta property="og:description" content="SolidWorks CAD modeling, assembly design, and manufacturing drawings — gearboxes, lifts, ergonomic products, and industrial concepts." />
        <meta property="og:url" content="https://mech-gallery-plus.lovable.app/cad-projects" />
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
              CAD & Design
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              CAD <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
              SolidWorks modelling, assembly design, manufacturing drawings, and industrial design concepts.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cadProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="group block overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:glow-sm"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-mono text-primary backdrop-blur-sm border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CadProjects;

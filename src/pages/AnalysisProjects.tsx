import { Link } from "react-router-dom";
import { analysisProjects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AnalysisProjects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
              Simulation & CFD
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Analysis <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
              FEA stress analysis, CFD flow simulation, thermal studies, and aerodynamic optimisation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {analysisProjects.map((project) => (
              <Link
                to={`/project/${project.slug}`}
                key={project.slug}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:glow-sm"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-mono text-primary backdrop-blur-sm border border-primary/30">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalysisProjects;

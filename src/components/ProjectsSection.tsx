import { Link } from "react-router-dom";
import { Cog, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Explore our work across CAD design and simulation analysis.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          <Link
            to="/cad-projects"
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-10 text-center transition-all duration-300 hover:border-primary/50 hover:glow-sm"
          >
            <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
              <Cog size={32} className="text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">CAD Projects</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SolidWorks modelling, assembly design, manufacturing drawings & industrial design.
            </p>
          </Link>

          <Link
            to="/analysis-projects"
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-10 text-center transition-all duration-300 hover:border-primary/50 hover:glow-sm"
          >
            <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
              <BarChart3 size={32} className="text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">Analysis Projects</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              FEA stress analysis, CFD flow simulation, thermal studies & aerodynamic optimisation.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

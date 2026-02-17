import { Link } from "react-router-dom";
import projects from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.slug}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:glow-sm"
              style={{ animationDelay: `${i * 0.15}s` }}
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
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

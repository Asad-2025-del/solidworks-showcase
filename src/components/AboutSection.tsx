const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
              About Us
            </p>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">
              Engineering <span className="text-gradient">Excellence</span>
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">DesignnCFD</strong> is founded by{" "}
              <strong className="text-foreground">Asadullah Anis</strong>, a Mechanical Engineer
              specializing in CAD modeling, SolidWorks design & simulation, ANSYS structural & CFD
              analysis, and product design optimization.
            </p>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We serve engineering students, startups, manufacturing industries, industrial plants,
              and R&D teams — delivering production-ready solutions backed by rigorous
              engineering validation.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Fluid Flow & Thermal Analysis",
                "Structural Analysis",
                "Industrial Component Design",
                "Product Development",
                "Performance Optimization",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-mono text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "6+", label: "Core Services" },
              { value: "24h", label: "Response Time" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

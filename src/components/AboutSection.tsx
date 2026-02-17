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
            <p className="mb-6 text-muted-foreground leading-relaxed">
              We specialize in mechanical design and simulation analysis, 
              delivering production-ready solutions backed by rigorous engineering validation. 
              From concept to manufacturing, every design is optimized for performance, 
              cost, and manufacturability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in SolidWorks, ANSYS, and SolidWorks Simulation, 
              we provide comprehensive engineering services including 3D modeling, 
              finite element analysis, computational fluid dynamics, and design optimization.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "10+", label: "Years Experience" },
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

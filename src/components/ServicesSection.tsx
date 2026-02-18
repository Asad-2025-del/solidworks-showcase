import { Cpu, Box, Wind, Wrench, PenTool, Cog } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "CAD Modeling (2D & 3D)",
    description: "Parametric part and assembly design with full documentation and manufacturing drawings.",
  },
  {
    icon: PenTool,
    title: "SolidWorks Design & Simulation",
    description: "Complete product design with motion study, stress analysis, and thermal simulation.",
  },
  {
    icon: Cpu,
    title: "ANSYS Structural & CFD",
    description: "Static, dynamic, thermal FEA and computational fluid dynamics using ANSYS solvers.",
  },
  {
    icon: Wind,
    title: "CFD Analysis",
    description: "Fluid flow, thermal management, drag reduction, and system optimization studies.",
  },
  {
    icon: Wrench,
    title: "Product Design & Optimization",
    description: "Topology optimization and design studies to reduce weight, cost, and improve performance.",
  },
  {
    icon: Cog,
    title: "Mechanical System Design",
    description: "Complete mechanical system design with engineering prototyping support and validation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:glow-sm"
            >
              <div className="mb-5 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                <svc.icon size={28} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

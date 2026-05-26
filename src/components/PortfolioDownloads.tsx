import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const portfolios = [
  {
    title: "Architecture & Interior",
    desc: "Revit BIM plans, exterior & interior photo-realistic renderings.",
    href: "/portfolios/Apex-Architecture-Portfolio.pdf",
  },
  {
    title: "CAD / Design Portfolio",
    desc: "SolidWorks 3D modelling, assemblies & industrial design projects.",
    href: "/portfolios/Apex-CAD-Portfolio.pdf",
  },
  {
    title: "CFD / Simulation Portfolio",
    desc: "ANSYS Fluent thermal, flow & aerodynamic simulation case studies.",
    href: "/portfolios/Apex-CFD-Portfolio.pdf",
  },
];

const PortfolioDownloads = () => {
  return (
    <section id="portfolio-downloads" className="py-24 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Downloads
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Portfolio <span className="text-gradient">PDFs</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Download our full portfolio documents — share with your team or review offline.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {portfolios.map((p, i) => (
            <motion.a
              key={p.href}
              href={p.href}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                <Download size={16} /> Download PDF
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioDownloads;

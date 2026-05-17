import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projects, { industries } from "@/data/projects";

const ALL = "All";

const Portfolio = () => {
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.industry === active)),
    [active],
  );

  const filters = [ALL, ...industries];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio — Engineering Projects by Industry | DesignnCFD</title>
        <meta name="description" content="Browse CAD and simulation projects across Aerospace, Oil & Gas, HVAC, and Manufacturing. Filter by industry to find relevant engineering work." />
        <link rel="canonical" href="https://mech-gallery-plus.lovable.app/portfolio" />
        <meta property="og:title" content="Portfolio — Engineering Projects by Industry | DesignnCFD" />
        <meta property="og:description" content="Browse CAD and simulation projects across Aerospace, Oil & Gas, HVAC, and Manufacturing." />
        <meta property="og:url" content="https://mech-gallery-plus.lovable.app/portfolio" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "DesignnCFD Portfolio",
          description: "Engineering portfolio of CAD modeling, FEA, and CFD projects across multiple industries.",
          url: "https://mech-gallery-plus.lovable.app/portfolio",
        })}</script>
      </Helmet>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="max-w-xl text-muted-foreground">
              Browse our complete portfolio — filter by industry to find engineering work relevant to your sector.
            </p>
          </motion.div>

          {/* Filter Chips */}
          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Filter size={16} className="text-muted-foreground mr-1 mt-2" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all duration-200 ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    to={`/project/${project.slug}`}
                    className="group block rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {project.industry}
                        </span>
                        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              No projects found for this industry. Try a different filter.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;

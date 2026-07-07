import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import projects from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://cmagroup.lovable.app";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const prevImg = () => setActiveImg((i) => (i === 0 ? project.images.length - 1 : i - 1));
  const nextImg = () => setActiveImg((i) => (i === project.images.length - 1 ? 0 : i + 1));

  const url = `${SITE}/project/${project.slug}`;
  const ogImage = project.thumbnail?.startsWith("http") ? project.thumbnail : `${SITE}${project.thumbnail}`;
  const desc = (project.overview || project.description).slice(0, 158);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${project.title} — ${project.category} | CMA group of companies`}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.title} — ${project.category}`} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.overview,
          url,
          image: ogImage,
          about: project.category,
          keywords: [project.industry, project.category, ...project.software].join(", "),
          author: { "@type": "Person", name: "Asadullah Anis" },
        })}</script>
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-mono text-primary border border-primary/30">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{project.overview}</p>
          </div>

          {/* Image gallery */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={project.images[activeImg].src}
                alt={project.images[activeImg].caption}
                className="w-full max-h-[600px] object-contain bg-muted/30"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border border-border p-2 hover:bg-primary/20 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} className="text-foreground" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border border-border p-2 hover:bg-primary/20 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} className="text-foreground" />
                  </button>
                </>
              )}
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground font-mono">
              {project.images[activeImg].caption} — {activeImg + 1}/{project.images.length}
            </p>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="mt-4 flex gap-3 justify-center flex-wrap">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-24 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      i === activeImg ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* Specs + Software */}
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Technical Specifications */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Technical <span className="text-gradient">Specifications</span>
              </h2>
              <div className="rounded-lg border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {project.specs.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                      >
                        <td className="px-5 py-3 font-mono text-muted-foreground whitespace-nowrap">
                          {spec.label}
                        </td>
                        <td className="px-5 py-3 text-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Software Used */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Software <span className="text-gradient">Used</span>
              </h2>
              <div className="space-y-3">
                {project.software.map((sw) => (
                  <div
                    key={sw}
                    className="rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground font-mono"
                  >
                    {sw}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Helmet>
        <title>404 — Page Not Found | CMA group of companies</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="The page you are looking for does not exist. Return to CMA group of companies homepage." />
      </Helmet>
      <div className="text-center px-6">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-primary">Error 404</p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight">Page not found</h1>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The page you requested could not be found. It may have been moved or removed.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="inline-flex items-center bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
          <Link to="/cad-projects" className="inline-flex items-center border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

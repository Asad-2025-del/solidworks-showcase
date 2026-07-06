import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Architecture", href: "/architecture-projects" },
    { label: "CAD", href: "/cad-projects" },
    { label: "Analysis", href: "/analysis-projects" },
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Portfolio", href: "/portfolios/CMA-Group-Corporate-Portfolio.pdf", download: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="hidden md:block text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
            EST · Karachi
          </span>
          <span className="hidden md:block h-4 w-px bg-border" />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-gradient">CMA</span>
            <span className="text-foreground"> group</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.download ? { download: "", target: "_blank", rel: "noopener" } : {})}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-none bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start Project
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.download ? { download: "", target: "_blank", rel: "noopener" } : {})}
                className="py-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

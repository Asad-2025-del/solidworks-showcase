const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-gradient">CMA group</span>
                <span className="text-foreground"> of companies</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A multi-disciplinary consultancy delivering civil, structural, and
              mechanical engineering under one roof.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">Divisions</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#services" className="hover:text-primary transition-colors">Civil & Architectural</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Structural Engineering</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Mechanical & Simulation</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">Contact</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+923378284111" className="hover:text-primary transition-colors">+92 337 8284111</a></li>
              <li><a href="mailto:cmagroup.pk@gmail.com" className="hover:text-primary transition-colors">cmagroup.pk@gmail.com</a></li>
              <li className="text-xs">M-18, Zain Mobile Mall, Main Tariq Road, Karachi</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
            © {year} CMA Group · All rights reserved
          </p>
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
            Civil · Structural · Mechanical
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

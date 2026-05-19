const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gradient">Apex Engineering</span>
              <span className="text-foreground"> Group</span>
            </span>
          </a>
          <p className="text-xs text-muted-foreground text-center">
            Precision engineering for manufacturing, R&D, and industrial applications.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Apex Engineering Group
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

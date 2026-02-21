import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="DesignnCFD logo" className="h-8 w-8 object-contain" />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gradient">Designn</span>
              <span className="text-foreground">CFD</span>
            </span>
          </a>
          <p className="text-xs text-muted-foreground text-center">
            Precision engineering for manufacturing, R&D, and industrial applications.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DesignnCFD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

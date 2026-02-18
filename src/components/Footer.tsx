import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="DesignnCFD logo" className="h-8 w-8 object-contain" />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-gradient">Designn</span>
            <span className="text-foreground">CFD</span>
          </span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DesignnCFD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

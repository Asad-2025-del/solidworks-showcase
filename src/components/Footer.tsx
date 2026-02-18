const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="text-gradient">Design</span>
          <span className="text-foreground">NCFD</span>
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DesignNCFD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Start Your <span className="text-gradient">Project</span>
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-primary py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors glow-sm"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>Designncfd@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+92 337 8284111</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

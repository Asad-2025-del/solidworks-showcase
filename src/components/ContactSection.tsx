import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:Designncfd@gmail.com?subject=${subject}&body=${body}`;

    toast({ title: "Opening your email client…", description: "Your message details have been pre-filled." });
  };

  const whatsappNumber = "923378284111";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi DesignnCFD, I'd like to discuss a project.")}`;

  const inputClass =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Start Your <span className="text-gradient">Project</span>
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <input type="text" name="name" placeholder="Name *" value={form.name} onChange={handleChange} className={inputClass} required />
              <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} className={inputClass} required />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className={inputClass} />
            <textarea name="message" rows={5} placeholder="Tell us about your project… *" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} required />
            
            <div className="grid gap-4 sm:grid-cols-2">
              <button
                type="submit"
                className="w-full rounded-md bg-primary py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors glow-sm"
              >
                Send Message
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-md bg-[hsl(142,70%,45%)] py-3 font-medium text-[hsl(0,0%,100%)] hover:bg-[hsl(142,70%,40%)] transition-colors"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="mailto:Designncfd@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} className="text-primary" />
              <span>Designncfd@gmail.com</span>
            </a>
            <a href="tel:+923378284111" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} className="text-primary" />
              <span>+92 337 8284111</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Pakistan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

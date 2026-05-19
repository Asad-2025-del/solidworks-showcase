import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const whatsappNumber = "923378284111";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Apex Engineering Group, I'd like to discuss a project.")}`;

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
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Ready to bring your engineering project to life? Reach out on WhatsApp for the fastest response.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full rounded-md bg-[hsl(142,70%,45%)] py-4 px-8 text-lg font-semibold text-[hsl(0,0%,100%)] hover:bg-[hsl(142,70%,40%)] transition-colors shadow-lg"
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
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

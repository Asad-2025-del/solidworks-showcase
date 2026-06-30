import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const whatsappNumber = "923378284111";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi CMA group of companies, I'd like to discuss a project.")}`;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col justify-center gap-8 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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

            <div className="grid gap-5 text-sm text-muted-foreground">
              <a href="tel:+923378284111" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+92 337 8284111</span>
              </a>
              <a href="mailto:cmagroup.pk@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail size={18} className="text-primary shrink-0" />
                <span>cmagroup.pk@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>M-18, ZAIN MOBILE MALL, MAIN TARIQ ROAD, KARACHI</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-border overflow-hidden shadow-sm h-80 lg:h-auto min-h-[320px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              title="CMA group of companies office location"
              src="https://www.google.com/maps?q=M-18+Zain+Mobile+Mall+Main+Tariq+Road+Karachi&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

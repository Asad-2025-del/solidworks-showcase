import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const whatsappNumber = "923378284111";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi CMA group of companies, I'd like to discuss a project.")}`;

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
            — 08 / Start a Partnership
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
            Let's engineer<br />
            <span className="text-gradient">something exceptional.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-border">
          <motion.div
            className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-border flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mb-8 text-[10px] font-mono uppercase tracking-[0.22em] text-primary">
              Direct Channels
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-[hsl(142,70%,45%)] py-5 px-8 text-sm font-semibold uppercase tracking-widest text-white hover:bg-[hsl(142,70%,40%)] transition-colors mb-10"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <div className="space-y-6 text-sm">
              <a href="tel:+923378284111" className="flex items-start gap-4 hover:text-primary transition-colors group">
                <Phone size={18} className="text-primary shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-1">Phone</div>
                  <div className="text-foreground group-hover:text-primary">+92 337 8284111</div>
                </div>
              </a>
              <a href="mailto:cmagroup.pk@gmail.com" className="flex items-start gap-4 hover:text-primary transition-colors group">
                <Mail size={18} className="text-primary shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-1">Email</div>
                  <div className="text-foreground group-hover:text-primary">cmagroup.pk@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-1">Office</div>
                  <div className="text-foreground">M-18, Zain Mobile Mall<br />Main Tariq Road, Karachi</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="min-h-[400px] lg:min-h-0 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              title="CMA group of companies office location"
              src="https://www.google.com/maps?q=M-18+Zain+Mobile+Mall+Main+Tariq+Road+Karachi&output=embed"
              className="w-full h-full border-0 grayscale contrast-125"
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

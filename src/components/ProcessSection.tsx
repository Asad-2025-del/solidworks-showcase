import { motion } from "framer-motion";

const steps = [
  {
    title: "Inquiry & Consultation",
    description:
      "Reach out via WhatsApp or email. We discuss requirements, timeline, and deliverables to define scope.",
  },
  {
    title: "Proposal & Quotation",
    description:
      "A detailed proposal with scope breakdown, timeline, and a transparent fixed-price quote — no hidden fees.",
  },
  {
    title: "Design & Engineering",
    description:
      "Our civil, structural, or mechanical team executes design, drawings, and analysis with regular milestone reviews.",
  },
  {
    title: "Review & Revisions",
    description:
      "You receive draft results for review. Feedback is incorporated with up to two revision rounds included.",
  },
  {
    title: "Delivery & Handover",
    description:
      "Final drawings, BOQs, reports, and native CAD/BIM files are handed off with documentation and follow-up support.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 bg-card/40 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              — 02 / Methodology
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              A methodical
              <br />
              <span className="text-gradient">delivery workflow.</span>
            </h2>
          </motion.div>
          <motion.p
            className="lg:col-span-6 lg:col-start-7 text-muted-foreground leading-relaxed self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A streamlined five-step process from first contact to final delivery
            — built for clarity, technical integrity, and accountability at every
            milestone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-background p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-light text-primary tracking-tight">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  Phase
                </span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

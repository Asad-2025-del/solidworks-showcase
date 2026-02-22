import { MessageCircle, FileSearch, Cog, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    title: "Inquiry & Consultation",
    description:
      "Reach out via WhatsApp or email. We discuss your requirements, timeline, and deliverables to understand your project scope.",
  },
  {
    icon: FileSearch,
    title: "Proposal & Quotation",
    description:
      "We provide a detailed proposal with scope breakdown, timeline, and a transparent fixed-price quote — no hidden fees.",
  },
  {
    icon: Cog,
    title: "Design & Analysis",
    description:
      "Our engineers execute the CAD modeling, simulation, or CFD analysis with regular progress updates at every milestone.",
  },
  {
    icon: Send,
    title: "Review & Revisions",
    description:
      "You receive draft results for review. We incorporate your feedback with up to two revision rounds included in every project.",
  },
  {
    icon: CheckCircle,
    title: "Delivery & Support",
    description:
      "Final deliverables — native CAD files, reports, and drawings — are handed off. We remain available for follow-up questions.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            A streamlined five-step workflow from first contact to final delivery — built for clarity and efficiency.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                className={`relative mb-12 last:mb-0 flex items-start gap-6 md:gap-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Icon dot */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-primary md:absolute md:left-1/2 md:-translate-x-1/2">
                  <step.icon size={20} />
                </div>

                {/* Content card */}
                <div
                  className={`rounded-lg border border-border bg-card p-6 md:w-[calc(50%-2.5rem)] ${
                    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <span className="mb-1 block text-xs font-mono text-primary">
                    Step {i + 1}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

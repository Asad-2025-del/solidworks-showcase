import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer:
      "Most CAD modeling and drafting projects are delivered within 3–7 business days depending on complexity. CFD and thermal simulations typically take 5–10 business days. Rush delivery is available — contact us to discuss timelines for your specific project.",
  },
  {
    question: "How do you handle pricing and quotes?",
    answer:
      "We provide fixed-price quotes after reviewing your project scope — no hidden fees. Pricing depends on geometry complexity, simulation type, and deliverables required. Share your requirements via our contact form or WhatsApp, and you'll receive a detailed quote within 24 hours.",
  },
  {
    question: "What is your revision policy?",
    answer:
      "Every project includes two rounds of revisions at no additional cost. We walk you through results before finalizing, so revisions are usually minor. Additional iterations beyond the included rounds are billed at a transparent hourly rate agreed upon upfront.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "CAD deliverables include STEP, IGES, Parasolid, and native formats (SolidWorks, Fusion 360). Drawings are provided as PDF and DXF. Simulation reports come as detailed PDFs with annotated contour plots, and raw data files (CSV/Excel) are available on request.",
  },
  {
    question: "Do you sign NDAs or confidentiality agreements?",
    answer:
      "Absolutely. We routinely sign NDAs before project kick-off and treat every client's IP with strict confidentiality. All project files are stored securely and can be permanently deleted after delivery upon request.",
  },
  {
    question: "Can you work with our existing CAD models or data?",
    answer:
      "Yes. We regularly work with client-supplied CAD files, legacy drawings, scanned sketches, and even napkin concepts. If your geometry needs cleanup or conversion before simulation, we handle that as part of the project scope.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-mono uppercase tracking-[0.2em] text-primary">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently <span className="text-gradient">Asked Questions</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Answers to the questions we hear most from engineering teams and procurement managers.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-lg border border-border bg-card px-6 transition-colors hover:border-primary/40"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

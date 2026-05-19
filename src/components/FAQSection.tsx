import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which engineering disciplines do you cover?",
    answer:
      "We operate three integrated divisions — Civil (architectural floor plans, 3D & 5D rendering, site planning, BOQs), Structural (RCC and steel design, foundations, FEA, seismic and wind analysis), and Mechanical (CAD, SolidWorks, ANSYS FEA, CFD, product design). One project manager, one coordinated deliverable.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Civil floor plans and renders typically take 5–10 business days. Structural design and FEA packages are 7–14 days depending on complexity. Mechanical CAD is 3–7 days; CFD studies are 5–10 days. Rush delivery is available — share your deadline up front and we'll commit to a date.",
  },
  {
    question: "How do you handle pricing and quotes?",
    answer:
      "We provide fixed-price quotes after reviewing your scope — no hidden fees. Pricing depends on project size, drawing count, simulation depth, and deliverables. Share your requirements via WhatsApp or email and you'll receive a detailed quote within 24 hours.",
  },
  {
    question: "What is your revision policy?",
    answer:
      "Every engagement includes two rounds of revisions at no additional cost. We walk you through interim results so revisions are usually minor. Additional iterations are billed at a transparent hourly rate agreed upfront.",
  },
  {
    question: "What software and standards do you work with?",
    answer:
      "Civil: AutoCAD, Revit, SketchUp, Lumion, Twinmotion. Structural: ETABS, SAP2000, STAAD.Pro, ANSYS — with ACI, BS, Eurocode, and UBC code compliance. Mechanical: SolidWorks, Fusion 360, Inventor, ANSYS Mechanical, ANSYS Fluent.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "Civil & structural: DWG, RVT, PDF drawings, IFC/BIM exports, rendered MP4 walkthroughs. Mechanical: STEP, IGES, Parasolid, native SolidWorks/Fusion files, PDF/DXF drawings. Simulation reports come as annotated PDFs with raw CSV data on request.",
  },
  {
    question: "Do you sign NDAs or confidentiality agreements?",
    answer:
      "Absolutely. We routinely sign NDAs before kick-off and treat every client's IP with strict confidentiality. Project files are stored securely and can be permanently deleted after delivery upon request.",
  },
  {
    question: "Can you work with our existing drawings, models, or BIM data?",
    answer:
      "Yes. We regularly work with client-supplied CAD, BIM, legacy blueprints, scanned sketches, and concept markups. If your data needs cleanup, conversion, or cross-discipline coordination, we handle that as part of the project scope.",
  },
];

const FAQSection = () => {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <section className="py-24 bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
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

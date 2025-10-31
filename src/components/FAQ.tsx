import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does GeminiForge provide?",
    answer:
      "GeminiForge offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "How can GeminiForge help my business?",
    answer:
      "We can help your business by creating innovative digital solutions that enhance your online presence, improve user experiences, streamline operations, and drive business growth through cutting-edge technology.",
  },
  {
    question: "What industries does GeminiForge work with?",
    answer:
      "We work with a diverse range of industries including e-commerce, healthcare, finance, education, real estate, entertainment, and more. Our team has the expertise to understand and address the unique challenges of various sectors.",
  },
  {
    question: "How long does it take to complete a project with GeminiForge?",
    answer:
      "Project timelines vary depending on the scope and complexity. We work closely with you to establish realistic timelines and milestones, ensuring transparent communication throughout the development process.",
  },
  {
    question: "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes, we provide ongoing support, maintenance, and updates to ensure your digital products continue to perform optimally and stay current with evolving technologies and user needs.",
  },
  {
    question: "Can you work with existing design or development frameworks?",
    answer:
      "Absolutely! We're experienced in working with various existing frameworks and can seamlessly integrate with your current systems or adapt to your preferred technologies.",
  },
  {
    question: "How involved will I be in the project development process?",
    answer:
      "We believe in collaborative partnership. You'll be involved throughout the process with regular updates, milestone reviews, and feedback sessions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we offer comprehensive maintenance and update services to keep your digital products secure, up-to-date, and performing at their best.",
  },
];

const FAQ = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Still you have any questions? Contact our Team via hello@geminiforge.com
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex gap-4 items-start">
                    <span className="text-accent font-bold text-xl flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-14 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

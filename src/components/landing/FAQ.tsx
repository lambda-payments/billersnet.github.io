
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "What types of billers can BillersNet integrate with?",
      answer: "From subscriptions like Netflix to utilities and telecommunications, we cover a wide range of services."
    },
    {
      question: "Is the platform customizable for specific business needs?",
      answer: "Yes, our solutions are tailored to meet your unique requirements."
    },
    {
      question: "How secure is the platform?",
      answer: "BillersNet employs industry-leading security protocols, including data encryption and role-based access control."
    },
    {
      question: "Can I access transaction report?",
      answer: "Absolutely! Our platform provides real-time transaction reports to provide better support."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions? We've Got Answers
          </h2>
          <p className="text-xl text-saas-500">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-saas-200">
                <AccordionTrigger className="text-left text-lg font-medium py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-saas-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-saas-500">
            Still have questions? <a href="/contact" className="text-saas-accent hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the SaveMom 1000-Day Care Program?",
    answer: "The SaveMom 1000-Day Care Program is a comprehensive maternal and child health initiative that covers the critical 1000-day period from conception through a child's second birthday. This program focuses on providing continuous monitoring, AI-powered insights, and coordinated care to ensure optimal health outcomes for both mother and child during this crucial developmental window."
  },
  {
    question: "How does the AI-based baby cry analysis work?",
    answer: "SaveMom AI analyzes different cry patterns to detect signs of hunger, discomfort, illness, or distress. The system alerts caregivers and healthcare providers for timely intervention, improving infant care."
  },
  {
    question: "How does SaveMom reduce infant mortality?",
    answer: "SaveMom reduces infant mortality through early risk detection, continuous monitoring of vital signs, AI-powered predictive analytics, and immediate alerts to healthcare providers. The platform enables timely interventions and ensures expectant mothers receive appropriate care when needed, significantly improving outcomes for both mothers and babies."
  },
  {
    question: "What measures have been taken to ensure the wearable device is safe from radiation exposure?",
    answer: "Our wearable devices are designed with the highest safety standards, using low-power Bluetooth and other safe wireless technologies that emit radiation levels well below international safety limits. All devices undergo rigorous testing and comply with FDA and international health safety regulations to ensure they are completely safe for pregnant women and their babies."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through these FAQs to find answers to commonly asked questions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl soft-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 smooth-transition rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
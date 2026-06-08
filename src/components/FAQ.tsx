import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Como acesso o material?",
      answer: "Após a compra, você recebe o acesso digital para baixar e usar os vídeos."
    },
    {
      question: "Funciona para qualquer açaiteria?",
      answer: "Sim. Os vídeos foram feitos para açaiterias, delivery de açaí, lojas de açaí, lanchonetes e negócios que vendem açaí no copo, tigela, barca ou delivery."
    },
    {
      question: "Posso usar em qualquer rede social?",
      answer: "Sim. Você pode postar no Instagram, Stories, Reels, WhatsApp, Facebook e outras redes sociais."
    },
    {
      question: "Preciso editar os vídeos?",
      answer: "Não. Os vídeos já vêm prontos para postar. Você pode usar como estão ou adaptar se quiser."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias para testar o material. Se não gostar, pode pedir reembolso dentro do prazo de garantia."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-acai-beige/30 pt-8 pb-16 md:pt-12 md:pb-24 px-4 border-b border-purple-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-acai-charcoal tracking-tight">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1.5 bg-acai-purple mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-purple-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5.5 h-5.5 text-acai-purple flex-shrink-0" />
                    <span className="font-display font-bold text-gray-900 text-base md:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                     className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-60 opacity-100 border-t border-purple-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 bg-purple-50/30 text-gray-700 font-sans leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

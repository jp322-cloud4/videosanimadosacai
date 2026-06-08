import { ShieldCheck, ArrowRight, HeartHandshake } from "lucide-react";

interface GuaranteeProps {
  onScrollToPlans: () => void;
}

export default function Guarantee({ onScrollToPlans }: GuaranteeProps) {
  return (
    <section id="guarantee" className="bg-white pt-6 pb-8 md:pt-10 md:pb-12 px-4 border-b border-purple-100">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-acai-beige to-purple-50 border border-purple-200/60 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm flex flex-col md:flex-row gap-8 items-center">
        
        {/* Background decorative badge */}
        <div className="absolute right-0 bottom-0 opacity-5 -mr-10 -mb-10 pointer-events-none">
          <ShieldCheck className="w-96 h-96 text-acai-purple" />
        </div>

        {/* Big bold badge */}
        <div className="flex-shrink-0 text-center space-y-2 relative">
          <img 
            src="https://i.ibb.co/7hGXjRH/Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-Photoroom.webp" 
            alt="Garantia de 7 dias" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-banana-yellow/10 rounded-full blur-xl scale-120 src-guarantee-seal" />
        </div>

        {/* Information block verbatim */}
        <div className="space-y-6 text-center md:text-left relative z-10 flex-grow">
          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-acai-charcoal">
              Garantia de 7 Dias
            </h2>
            <div className="w-16 h-1 bg-banana-yellow mx-auto md:mx-0 rounded" />
          </div>

          <p className="font-sans text-gray-700 leading-relaxed text-base md:text-lg">
            Teste os vídeos por 7 dias completos. Se não gostar, devolvemos 100% do seu dinheiro.
          </p>

          <div className="pt-2">
            <button
              onClick={onScrollToPlans}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-base px-8 py-4.5 rounded-full shadow-lg hover:shadow-xl shadow-emerald-500/10 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>COMPRAR COM SEGURANÇA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500 font-medium">
            <HeartHandshake className="w-4 h-4 text-green-600" />
            <span>Risco zero para sua açaiteria • Reembolso garantido por lei</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import UpsellPopup from "./UpsellPopup";

interface PricingPlansProps {
  onSelectPlan: (planName: "Básico" | "Premium", price: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(1 * 3600 + 30 * 60 + 9); // 01:30:09 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 1 * 3600 + 30 * 60 + 9)); // Loops back when finished to retain dynamic pressure
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getHours = () => Math.floor(totalSeconds / 3600);
  const getMinutes = () => Math.floor((totalSeconds % 3600) / 60);
  const getSeconds = () => totalSeconds % 60;

  const padZero = (num: number) => num.toString().padStart(2, "0");

  return (
    <section id="pricing" className="bg-acai-beige pt-4 md:pt-6 pb-16 md:pb-24 px-4 border-b border-purple-200 scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Highlight Alert and Live Timer above title */}
        <div className="bg-purple-50 border-2 border-purple-100 rounded-3xl p-6 md:p-8 max-w-md mx-auto text-center space-y-5 shadow-sm mb-5">
          <p className="font-display font-black text-xs md:text-sm text-acai-purple tracking-wider uppercase flex items-center justify-center gap-1.5">
            <span>⏰ OFERTA ESPECIAL EXPIRA EM:</span>
          </p>

          {/* Clean Digit Block Countdown Display */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-xs mx-auto">
            <div className="bg-white rounded-2xl py-4 px-2 shadow-sm flex flex-col items-center justify-center border border-purple-100/30">
              <div className="font-display font-black text-3xl md:text-4xl text-acai-purple leading-none">
                {padZero(getHours())}
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                01 Horas
              </div>
            </div>

            <div className="bg-white rounded-2xl py-4 px-2 shadow-sm flex flex-col items-center justify-center border border-purple-100/30">
              <div className="font-display font-black text-3xl md:text-4xl text-acai-purple leading-none">
                {padZero(getMinutes())}
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                30 Min
              </div>
            </div>

            <div className="bg-white rounded-2xl py-4 px-2 shadow-sm flex flex-col items-center justify-center border border-purple-100/30">
              <div className="font-display font-black text-3xl md:text-4xl text-acai-purple leading-none">
                {padZero(getSeconds())}
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                09 Seg
              </div>
            </div>
          </div>
        </div>

        {/* Title layout verbatim */}
        <div className="text-center space-y-4 mb-6">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-acai-charcoal tracking-tight">
            Escolha Seu Plano
          </h2>
          <div className="w-24 h-1.5 bg-acai-purple mx-auto rounded-full" />
        </div>

        {/* Both Cards Grid alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto items-stretch">
          
          {/* Card: Plano Básico */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              {/* Header Centered */}
              <div className="text-center space-y-1">
                <h3 className="font-display font-extrabold text-3xl text-acai-charcoal">
                  Plano Básico
                </h3>
              </div>

              {/* Price Area Centered */}
              <div className="text-center space-y-1">
                <div className="text-gray-400 line-through text-sm font-sans">
                  R$67
                </div>
                <div className="font-display font-black text-5xl text-emerald-500 leading-none">
                  R$10,00
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide">
                  Pagamento único
                </div>
                <div className="text-xs font-bold text-emerald-500 mt-1">
                  Você economiza R$57,00
                </div>
              </div>

              {/* Checklist details matching image with real check icons */}
              <ul className="space-y-4 text-sm font-sans text-gray-700">
                <li className="flex items-center gap-2.5">
                   <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>🎬35 Vídeos Animados para Açaiterias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Conteúdo pronto para postar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Garantia de 7 dias</span>
                </li>
                <li className="flex items-center gap-2.5 text-red-600 font-medium">
                  <X className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Sem bônus exclusivos</span>
                </li>
              </ul>
            </div>

            {/* Button container */}
            <div className="pt-6">
              <button
                onClick={() => setIsUpsellOpen(true)}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-lg py-5 rounded-xl shadow-lg hover:shadow-xl shadow-emerald-500/10 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 group text-center"
              >
                <span>QUERO COMPRAR!</span>
              </button>
            </div>
          </div>

          {/* Card: Plano Premium */}
          <div id="premium-plan-card" className="bg-white border-3 border-acai-purple rounded-3xl p-8 relative flex flex-col justify-between shadow-xl ring-4 ring-acai-purple/5 hover:-translate-y-1 transition-transform duration-300">
            {/* Top Badge: "MAIS POPULAR 🔥" */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-acai-purple text-white font-display font-extrabold text-xs px-6 py-2 rounded-full shadow-lg border-2 border-banana-yellow flex items-center z-10">
              <span>MAIS POPULAR 🔥</span>
            </div>

            <div className="space-y-6 pt-2">
              {/* Header Centered */}
              <div className="text-center space-y-1">
                <h3 className="font-display font-extrabold text-3xl text-acai-charcoal">
                  Plano Premium
                </h3>
              </div>

              {/* Price Area Centered */}
              <div className="text-center space-y-1">
                <div className="text-gray-400 line-through text-sm font-sans">
                  R$297
                </div>
                <div className="font-display font-black text-5xl text-emerald-500 leading-none">
                  R$24,00
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide">
                  Pagamento único
                </div>
                <div className="text-xs font-bold text-emerald-500 mt-1">
                  Você economiza R$273,00 + bônus grátis
                </div>
              </div>

              {/* Checklist details matching image with real check and gift icons */}
              <ul className="space-y-4 text-sm font-sans text-gray-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>🎬100 Vídeos Animados para Açaiterias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Pacote completo de vídeos animados</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Pack de Vídeos que Vendem</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Vídeos em Qualidade 4K</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Vídeos Extras para Promoções</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Garantia de 7 dias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
            </div>

            {/* High impact color CTA Button */}
            <div className="pt-6">
              <a
                href="https://pay.wiapy.com/C-qhShyN51"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-lg py-5 rounded-xl shadow-lg hover:shadow-xl shadow-emerald-500/10 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 group text-center"
              >
                <span>QUERO COMPRAR!</span>
              </a>
            </div>
          </div>
          
        </div>

      </div>

      <UpsellPopup
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAccept={() => {
          // Open Premium Checkout with special discount price R$ 14,90
          window.open("https://pay.wiapy.com/43BX7I_YoI", "_blank", "noopener,noreferrer");
          setIsUpsellOpen(false);
        }}
        onDecline={() => {
          // Open original Basic Checkout
          window.open("https://pay.wiapy.com/-pBo3Ts7Xl", "_blank", "noopener,noreferrer");
          setIsUpsellOpen(false);
        }}
      />
    </section>
  );
}

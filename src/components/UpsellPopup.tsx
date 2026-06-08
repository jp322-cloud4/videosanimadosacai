import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface UpsellPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellPopup({ isOpen, onClose, onAccept, onDecline }: UpsellPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-white rounded-[32px] w-full max-w-[420px] p-6 md:p-8 border border-orange-100 shadow-2xl z-10 flex flex-col items-center select-none"
          >
            {/* Close button in top-right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 font-bold" />
            </button>

            {/* Header Red Title */}
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-[#C82323] tracking-wide text-center mt-2 mb-6 uppercase">
              DESCONTO ESPECIAL
            </h3>

            {/* Checklist of premium features */}
            <ul className="w-full space-y-3 mb-6 text-sm md:text-base font-sans text-slate-800">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">🎬 100 Vídeos Animados pra Açaiterias</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">Pacote completo de vídeos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">Pack de Vídeos que Vendem</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">Vídeos em Qualidade 4K</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">Vídeos Extras para Promoções</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">Acesso imediato</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">Garantia de 7 dias</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#05C181] md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-slate-700">Suporte prioritário</span>
              </li>
            </ul>

            {/* Separator */}
            <div className="w-full h-[1px] bg-slate-100 mb-5" />

            {/* Pricing Section */}
            <div className="text-center space-y-1 mb-5">
              <div className="text-[#EF4444] line-through text-sm font-bold">
                De R$ 24,00
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest text-[#64748B]">
                POR APENAS:
              </div>
              <div className="font-display font-black text-5xl md:text-6xl text-[#00C286] tracking-tight">
                R$ 14,90
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full space-y-4 text-center">
              <button
                onClick={onAccept}
                className="w-full bg-[#00C286] hover:bg-[#00B07A] text-white font-display font-black text-lg md:text-xl py-4 rounded-2xl shadow-lg hover:shadow-xl shadow-emerald-500/10 transition-all transform active:scale-[0.97] cursor-pointer"
              >
                SIM! QUERO COM DESCONTO
              </button>
              
              <button
                onClick={onDecline}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-900 font-display font-bold text-sm md:text-base py-3.5 px-4 rounded-2xl transition-all transform active:scale-[0.97] cursor-pointer"
              >
                Não, quero apenas o Pacote Básico por <span className="whitespace-nowrap">R$ 10,00</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

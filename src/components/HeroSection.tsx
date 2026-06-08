import { Sparkles, ShoppingBag } from "lucide-react";

interface HeroSectionProps {
  onScrollToPlans: () => void;
}

export default function HeroSection({ onScrollToPlans }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-acai-beige pt-12 pb-6 md:pt-16 md:pb-8 px-4 border-b border-purple-200">
      {/* Decorative patterns imitating direct fire and warm oven glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4A126C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-banana-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-acai-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        
        {/* Title Block */}
        <div className="space-y-4">
          <h1 className="font-display font-extrabold text-[35px] text-acai-charcoal leading-tight md:leading-tight tracking-tight">
            35 Vídeos Animados para Açaiterias <br />
            <span className="text-acai-purple inline-block mt-2 font-black drop-shadow-sm bg-gradient-to-r from-acai-purple to-purple-800 bg-clip-text text-transparent">
              + Bônus Exclusivos
            </span>
          </h1>

          <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Deixe sua açaiteria mais profissional, atraia mais clientes e aumente seus pedidos com vídeos animados prontos para postar.
          </p>
        </div>

        {/* Video Preview: Positioned directly after the subheadline */}
        <div className="flex flex-col items-center justify-center py-1">
          <div className="relative w-72 md:w-80 aspect-[9/16] bg-black rounded-3xl shadow-2xl overflow-hidden border border-purple-200/50">
            <iframe
              src="https://www.youtube.com/embed/YZn8-b5BYr8"
              title="Vídeo Demonstrativo"
              className="w-full h-full absolute inset-0 border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Interactive Buy button & stats immediately follows the video */}
        <div className="space-y-6 pt-1">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={onScrollToPlans}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-display font-bold text-lg px-12 py-5 rounded-full shadow-xl shadow-green-600/25 transform transition-all hover:scale-105 active:scale-95 duration-150 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <ShoppingBag className="w-5.5 h-5.5 group-hover:animate-bounce" />
              <span>QUERO AGORA!</span>
            </button>
          </div>
          

        </div>

      </div>
    </section>
  );
}

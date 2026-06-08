import { useState } from "react";
import HeaderDiscountBar from "./components/HeaderDiscountBar";
import HeroSection from "./components/HeroSection";
import WhatYouWillReceive from "./components/WhatYouWillReceive";
import ExclusiveBenefits from "./components/ExclusiveBenefits";
import BonusSection from "./components/BonusSection";
import VerticalVideoShowcase from "./components/VerticalVideoShowcase";
import PricingPlans from "./components/PricingPlans";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Guarantee from "./components/Guarantee";
import CheckoutModal from "./components/CheckoutModal";
import { Shield } from "lucide-react";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<"Básico" | "Premium">("Premium");
  const [selectedPlanPrice, setSelectedPlanPrice] = useState("R$ 24,00");

  const scrollToPlans = () => {
    const element = document.getElementById("premium-plan-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSelectPlan = (planName: "Básico" | "Premium", price: string) => {
    setSelectedPlanName(planName);
    setSelectedPlanPrice(price);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-acai-beige text-acai-charcoal flex flex-col font-sans selection:bg-acai-purple selection:text-white">
      {/* 1. top discounted notification ticker */}
      <HeaderDiscountBar />

      <main className="flex-grow">
        {/* 2. Hero Section with phone animation showcase */}
        <HeroSection onScrollToPlans={scrollToPlans} />

        {/* 3. What you receive items presentation */}
        <WhatYouWillReceive />

        {/* 4. Core benefits layout */}
        <ExclusiveBenefits />

        {/* 5. Special bonuses and alert clock countdown */}
        <BonusSection />

        {/* Vertical demonstration video below bonuses */}
        <VerticalVideoShowcase />

        {/* 6. High conversions Pricing card options */}
        <PricingPlans onSelectPlan={handleSelectPlan} />

        {/* 7. Real social proofs testimonials */}
        <Testimonials />

        {/* 9. Satisfaction legal security guarantees details */}
        <Guarantee onScrollToPlans={scrollToPlans} />

        {/* 8. Interactive help center FAQ accordions */}
        <FAQ />
      </main>

      {/* 10. Floating Interactive purchase center modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={selectedPlanName}
        price={selectedPlanPrice}
      />

      {/* 11. Footer verbatim */}
      <footer className="bg-acai-charcoal text-gray-400 py-12 px-4 border-t border-purple-950/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="font-display font-extrabold text-white text-lg tracking-tight">
              🍧 Vídeos Animados para Açaiterias
            </div>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              Destaque-se no mercado de delivery e aumente suas vendas semanais com material de marketing premium focado em alta conversão.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Shield className="w-3.5 h-3.5 text-acai-purple" />
              <span>Plataforma de Demonstração Segura e Criptografada</span>
            </div>
            <div className="text-sm font-sans tracking-tight text-gray-400">
              © 2026 Vídeos Animados para Açaiterias. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

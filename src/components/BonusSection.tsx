export default function BonusSection() {
  const bonuses = [
    {
      id: "bonus-1",
      title: "Pack de Vídeos que Vendem",
      image: "https://i.ibb.co/nNQzbW7g/6dfaa186-aad7-4bf9-b3bd-61af2851503a.webp"
    },
    {
      id: "bonus-2",
      title: "Vídeos em Qualidade 4K",
      image: "https://i.ibb.co/0vxrdVN/Chat-GPT-Image-2-de-jun-de-2026-09-46-03.webp"
    },
    {
      id: "bonus-3",
      title: "Vídeos Extras para Promoções",
      image: "https://i.ibb.co/LzpCdL3L/Chat-GPT-Image-2-de-jun-de-2026-09-50-36.webp"
    }
  ];

  return (
    <section id="bonuses" className="bg-white pt-8 md:pt-12 pb-4 md:pb-6 px-4 border-b border-purple-100">
      <div className="max-w-5xl mx-auto">
        {/* Title Block using exact copy */}
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-acai-charcoal tracking-tight">
            Bônus Exclusivos
          </h2>
          <div className="w-24 h-1.5 bg-banana-yellow mx-auto rounded-full" />
        </div>

        {/* Visual Showcase of individual bonuses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={bonus.id}
              className="bg-gradient-to-br from-acai-light to-acai-beige/60 border-2 border-acai-purple/50 rounded-[2rem] p-4 flex flex-col justify-between shadow-[0_10px_30px_rgba(74,18,108,0.05)] hover:border-acai-purple/80 hover:shadow-[0_12px_35px_rgba(74,18,108,0.08)] transition-all duration-300"
            >
              <div>
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full aspect-square object-cover rounded-2xl shadow-sm mb-4"
                  referrerPolicy="no-referrer"
                />
                <div className="px-1 pb-1 flex flex-col items-start space-y-2">
                  <span className="inline-block text-[10px] font-bold tracking-widest text-acai-purple bg-acai-purple/10 px-2.5 py-1 rounded-full uppercase">
                    Bônus #{index + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg md:text-xl text-acai-charcoal text-left leading-snug">
                    {bonus.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

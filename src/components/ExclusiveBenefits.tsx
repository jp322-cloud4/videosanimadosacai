export default function ExclusiveBenefits() {
  const benefits = [
    {
      title: "Mais Clientes no Delivery",
      desc: "Vídeos que despertam vontade de pedir açaí na hora.",
      icon: (
        <img
          src="https://i.ibb.co/XxYM2NvZ/Chat-GPT-Image-2-de-jun-de-2026-08-22-43-Photoroom.webp"
          alt="Mais Clientes no Delivery"
          className="w-[140px] h-[140px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Perfil Mais Profissional",
      desc: "Deixe o perfil da sua açaiteria mais bonito, organizado e chamativo.",
      icon: (
        <img
          src="https://i.ibb.co/TByyXth2/Chat-GPT-Image-2-de-jun-de-2026-08-23-30-Photoroom.webp"
          alt="Perfil Mais Profissional"
          className="w-[140px] h-[140px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Mais Engajamento",
      desc: "Mais curtidas, comentários e atenção para suas promoções.",
      icon: (
        <img
          src="https://i.ibb.co/YxgTxqp/Chat-GPT-Image-2-de-jun-de-2026-08-24-16-Photoroom.webp"
          alt="Mais Engajamento"
          className="w-[140px] h-[140px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Nunca Mais Fique Sem Conteúdo",
      desc: "Poste todos os dias sem precisar pensar no que criar para divulgar sua açaiteria.",
      icon: (
        <img
          src="https://i.ibb.co/HfCKjYKN/baa19a31-2ff7-4300-98e6-70819ff579b0-Photoroom.webp"
          alt="Nunca Mais Fique Sem Conteúdo"
          className="w-[80px] h-[80px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    }
  ];

  return (
    <section id="exclusive-benefits" className="bg-acai-beige/30 pt-10 md:pt-14 pb-8 md:pb-12 px-4 border-b border-purple-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-acai-charcoal tracking-tight">
            Benefícios Exclusivos
          </h2>
          <div className="w-24 h-1.5 bg-acai-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-purple-200/50 px-6 pt-5 pb-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-2"
            >
              <div className="w-[140px] h-[100px] -mb-1 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-acai-charcoal">
                  {benefit.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed text-base md:text-lg">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

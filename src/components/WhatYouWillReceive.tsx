export default function WhatYouWillReceive() {
  const items = [
    {
      title: "Vídeos Animados Profissionais",
      desc: "Vídeos chamativos para destacar sua açaiteria nas redes sociais.",
      icon: (
        <img
          src="https://i.ibb.co/TxzJ6BxB/Chat-GPT-Image-2-de-jun-de-2026-08-11-10-Photoroom.webp"
          alt="Vídeos Animados Profissionais"
          className="w-[140px] h-[140px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Conteúdo Pronto Para Postar",
      desc: "Poste vídeos de açaí, copos, combos e promoções sem precisar editar.",
      icon: (
        <img
          src="https://i.ibb.co/BH6mHGYf/Chat-GPT-Image-2-de-jun-de-2026-08-12-36-Photoroom.webp"
          alt="Conteúdo Pronto Para Postar"
          className="w-[140px] h-[140px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Acesso Digital Completo",
      desc: "Acesse pelo celular, tablet ou computador quando quiser.",
      icon: (
        <img
          src="https://i.ibb.co/chbj9sjZ/Chat-GPT-Image-2-de-jun-de-2026-08-13-22-Photoroom.webp"
          alt="Acesso Digital Completo"
          className="w-[140px] h-[140px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Mais Alcance e Mais Pedidos",
      desc: "Vídeos feito para despertar vontade de pedir açaí e aumentar os pedidos no delivery.",
      icon: (
        <img
          src="https://i.ibb.co/4ZKYGf3Q/Chat-GPT-Image-2-de-jun-de-2026-08-14-08-Photoroom.webp"
          alt="Mais Alcance e Mais Pedidos"
          className="w-[140px] h-[140px] object-contain"
          referrerPolicy="no-referrer"
        />
      )
    }
  ];

  return (
    <section id="what-you-will-receive" className="bg-white pt-8 pb-10 md:pt-12 md:pb-14 px-4 border-b border-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-acai-charcoal tracking-tight">
            O Que Você Vai Receber
          </h2>
          <div className="w-24 h-1.5 bg-banana-yellow mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-acai-beige/40 border border-purple-200/50 px-6 pt-5 pb-6 rounded-3xl shadow-sm hover:shadow-xl hover:bg-acai-beige/80 transition-all duration-300 group flex flex-col items-center text-center gap-2"
            >
              <div className="w-[140px] h-[100px] -mb-1 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-acai-charcoal">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Phone, Paperclip, MoreVertical, Smile, Camera, Mic, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const marcosAvatar = "https://i.ibb.co/spp4PPKH/images-2-1.webp";
const brunaAvatar = "https://i.ibb.co/zhVVWzJg/images-3.webp";
const sandroAvatar = "https://i.ibb.co/CsBgJVNW/JLEA-com-rcio-aliment-cio-LTDA-1730652233625blob.webp";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : direction < 0 ? -40 : 0,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : direction < 0 ? 40 : 0,
    opacity: 0
  })
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      contact: {
        name: "Julia (Açaí Di Roma)",
        avatar: marcosAvatar,
        status: "online"
      },
      messages: [
        { sender: "buyer", text: "Comprei o Pack de videos ontem á noite e já postei o primeiro reel hoje cedo no insta!", time: "09:12" },
        { sender: "seller", text: "Excelente, Julia! Me conta, como foi o engajamento dele?", time: "09:15" },
        { sender: "buyer", text: "Marivilhoso, em menos de 4 horas bateu 3 mil visualizações! Todo mundo comentando querendo açai e adicionais kkkk", time: "09:18" }
      ]
    },
    {
      id: 2,
      contact: {
        name: "Bruna Silva (Açaí Gourmet)",
        avatar: brunaAvatar,
        status: "online"
      },
      messages: [
        { sender: "buyer", text: "Queria agradecer muito pelo pack. Eu era super travada pra criar postagens bonitas de açaí...", time: "11:40" },
        { sender: "seller", text: "Olá Bruna! Tudo bem? Fico muito feliz! Deu pra usar bem os videos ?", time: "11:42" },
        { sender: "buyer", text: "Simm! Foi ridículo de fácil. Coloquei nossa logo por cima e a oferta do combo de barca de açaí. O whatsapp tá lotado de gente perguntando se entregamos em bairros vizinhos!", time: "11:45" }
      ]
    },
    {
      id: 3,
      contact: {
        name: "Sandro Pereira",
        avatar: sandroAvatar,
        status: "online"
      },
      messages: [
        { sender: "buyer", text: "Passando pra deixar meu feedback oficial. Sou Dono de 3 açaiterias aqui da região e comprei o pack de videos.", time: "16:05" },
        { sender: "seller", text: "Massa Sandro! Deu tudo certo ?", time: "16:08" },
        { sender: "buyer", text: "Sem palavras esses videos 3D retém a atenção das pessoas no feed por muito mais tempo sem contar que é execelente pra divulgação.", time: "16:12" }
      ]
    }
  ];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const activeChat = testimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-white pt-10 pb-4 md:pt-14 md:pb-6 px-4 border-b border-purple-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-acai-charcoal tracking-tight">
            Vejam o que estão dizendo:
          </h2>
          <div className="w-24 h-1.5 bg-banana-yellow mx-auto rounded-full" />
        </div>

        {/* Carousel Outer Containment bounds */}
        <div className="relative flex flex-col items-center max-w-[360px] xs:max-w-[380px] mx-auto w-full">
          
          <div className="w-full relative min-h-[500px]">
            <AnimatePresence mode="wait" custom={direction}>
              {/* Main WhatsApp Screenshot Chat Card Frame (No cellular device mockup) */}
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full bg-white rounded-3xl shadow-xl flex flex-col border border-gray-200/90 overflow-hidden"
              >
                
                {/* WhatsApp Premium Title/Contact Header */}
                <div className="bg-[#075e54] text-white px-3.5 py-4 flex items-center justify-between shadow-md select-none">
                  <div className="flex items-center gap-2">
                    <img
                      src={activeChat.contact.avatar}
                      alt={activeChat.contact.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shrink-0 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs md:text-sm leading-tight truncate max-w-[160px]">
                        {activeChat.contact.name}
                      </h4>
                      <p className="text-[10px] text-teal-100 flex items-center gap-1 font-whatsapp mt-0.5">
                        <span className="w-1.5 h-1.5 bg-[#25d366] rounded-full animate-pulse inline-block" />
                        <span>{activeChat.contact.status}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 text-teal-100/95">
                    <Phone className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <Paperclip className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Chat Canvas with WhatsApp classic doodle texture */}
                <div 
                  style={{
                    backgroundColor: "#e5ddd5",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23bfaf9b' fill-opacity='0.15'%3E%3Cpath d='M10 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12 25c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-15 25c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm20-10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm15-20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm15 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10-25c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}
                  className="h-[380px] overflow-y-auto px-4 py-4 space-y-4 flex flex-col select-none scrollbar-none"
                >
                  {/* Security info label */}
                  <div className="self-center bg-[#fcf5c8] text-[9.5px] text-[#4a4a4a] border border-[#e2dcb3] px-2.5 py-1 rounded shadow-3xs text-center max-w-[85%] font-whatsapp mb-1 leading-normal">
                    🔒 As mensagens são protegidas por criptografia de ponta a ponta.
                  </div>

                  {activeChat.messages.map((msg, mIdx) => {
                    const isBuyer = msg.sender === "buyer";
                    return (
                      <div
                        key={mIdx}
                        className={`max-w-[82%] rounded-[12px] px-3 py-1.5 shadow-sm text-[14.5px] leading-[19px] relative font-whatsapp ${
                          isBuyer
                            ? "bg-white text-[#111b21] self-start rounded-tl-none"
                            : "bg-[#dcf8c6] text-[#111b21] self-end rounded-tr-none"
                        }`}
                      >
                        {/* Real WhatsApp Chat bubble corner tails */}
                        {isBuyer ? (
                          <div className="absolute top-0 -left-1.5 w-1.5 h-2 overflow-hidden">
                            <div className="w-3 h-3 bg-white rotate-45 transform origin-top-right rounded-t-[1px]"></div>
                          </div>
                        ) : (
                          <div className="absolute top-0 -right-1.5 w-1.5 h-2 overflow-hidden">
                            <div className="w-3 h-3 bg-[#dcf8c6] rotate-45 transform origin-top-left rounded-t-[1px]"></div>
                          </div>
                        )}

                        {/* Message body text */}
                        <p className="font-whatsapp break-words pb-1 pr-10 text-[14px] md:text-[14.5px] font-normal text-[#111b21]">
                          {msg.text}
                        </p>

                        {/* Meta Time & Double ticks absolute position overlay */}
                        <span className="absolute bottom-1 right-2 text-[9px] text-[#667781] flex items-center gap-0.5 select-none font-whatsapp">
                          <span>{msg.time}</span>
                          {!isBuyer && (
                            <CheckCheck className="w-3.5 h-3.5 text-[#34b7f1] stroke-[2.5]" />
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Audio and Camera input mimics */}
                <div className="bg-[#e5ddd5]/95 pb-3 px-3 pt-1.5 flex items-center gap-2 border-t border-gray-300">
                  <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 border border-gray-200/90 shadow-2xs min-w-0">
                    <Smile className="w-4 h-4 text-gray-400 shrink-0 cursor-pointer" />
                    <input
                      type="text"
                      placeholder="Digite uma mensagem..."
                      disabled
                      className="flex-1 text-[11px] text-gray-400 bg-transparent outline-none border-none select-none font-whatsapp"
                    />
                    <Paperclip className="w-4 h-4 text-gray-400 shrink-0 rotate-45" />
                    <Camera className="w-4 h-4 text-gray-400 shrink-0" />
                  </div>
                  <div className="w-8.5 h-8.5 shrink-0 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm">
                    <Mic className="w-4.5 h-4.5" />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left carousel navigational button offset outside the container */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-12 -translate-y-1/2 bg-acai-charcoal text-white hover:bg-acai-purple hover:scale-110 p-3 rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer z-20 border border-purple-200/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right carousel navigational button offset outside the container */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-12 -translate-y-1/2 bg-acai-charcoal text-white hover:bg-acai-purple hover:scale-110 p-3 rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer z-20 border border-purple-200/20"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Pagination Indicators below */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-acai-purple w-6"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Ir para a conversa ${idx + 1}`}
              />
            ))}
          </div>

        </div>


      </div>
    </section>
  );
}

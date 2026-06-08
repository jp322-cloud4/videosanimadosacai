import React from "react";

export default function VerticalVideoShowcase() {
  return (
    <section id="demo-video" className="bg-gradient-to-b from-white to-acai-beige/10 pt-4 md:pt-6 pb-8 px-4 border-b border-purple-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Title above the video */}
        <div className="text-center mb-6">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-acai-charcoal tracking-tight">
            ⚠️<span className="text-acai-purple">ATENÇÃO</span>
          </h2>
        </div>

        {/* Embedded YouTube Short Container */}
        <div className="w-full max-w-[350px] aspect-[9/16] bg-black rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden relative">
          <iframe
            className="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/oSD8mPPUdN4"
            title="Vídeo de Demonstração"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}


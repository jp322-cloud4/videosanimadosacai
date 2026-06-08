import { useState, useEffect, FormEvent } from "react";
import { X, ShieldCheck, CreditCard, QrCode, ClipboardCheck, ArrowRight, Download, CheckCircle, Video, FolderGit, Sparkles, FolderDown } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: "Básico" | "Premium";
  price: string;
}

export default function CheckoutModal({ isOpen, onClose, selectedPlan, price }: CheckoutModalProps) {
  const [step, setStep] = useState<"checkout" | "processing" | "success">("checkout");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  
  // Checkout Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [copiedPix, setCopiedPix] = useState(false);
  const [error, setError] = useState("");
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const triggerDownloadNotification = (fileName: string) => {
    setDownloadNotification(`Iniciando simulação de download do arquivo: ${fileName}`);
    setTimeout(() => {
      setDownloadNotification((prev) => prev?.includes(fileName) ? null : prev);
    }, 4000);
  };

  const handleStartPayment = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Por favor, digite seu nome completo.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Por favor, insira um e-mail válido para receber os dados.");
      return;
    }
    setError("");
    setStep("processing");

    // Simulate 2 seconds of high security check processing
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  const handleCopyPix = () => {
    setCopiedPix(true);
    navigator.clipboard?.writeText(
      "00020101021126580014br.gov.bcb.pix0136693ff18c-309b-4ff4-a8ac-40acaiterias2026520400005303986540510.005802BR5925VideosAnimadosAcaiteria6009SaoPaulo62070503***6304E2D5"
    );
    setTimeout(() => setCopiedPix(false), 2000);
  };

  if (!isOpen) return null;

  // Mock list of files based on package
  const basicFiles = [
    { name: "01_Acai_Copo_Sensacao.mp4", duration: "15s", category: "Promoções" },
    { name: "02_Ninho_Nutella_Derretendo.mp4", duration: "12s", category: "Apetite Appeal" },
    { name: "03_Combo_Barca_Completa.mp4", duration: "15s", category: "Combos" },
    { name: "04_Delivery_Acai_Gelado_Stories.mp4", duration: "10s", category: "Institucional" },
    { name: "05_Acai_Tigela_Banana_Morango.mp4", duration: "15s", category: "Menu" },
    { name: "06_Delivery_Mais_Rapido_Da_Regiao.mp4", duration: "12s", category: "Delivery" },
    { name: "07_Adicionais_Granola_E_Leite.mp4", duration: "15s", category: "Apetite Appeal" },
    { name: "08_Fim_De_Semana_Pede_Acai.mp4", duration: "15s", category: "Engajamento" },
    { name: "09_Promo_Compre_Copo_Ganhe_Adicional.mp4", duration: "15s", category: "Promoções" },
    { name: "10_Fechamento_De_Domingo_Acai.mp4", duration: "15s", category: "Engajamento" },
    { name: "11_Barca_De_Acai_Doce_Gourmet.mp4", duration: "12s", category: "Sabores" },
    { name: "12_Promo_Quarta_Em_Dobro_Acai.mp4", duration: "15s", category: "Promoções" },
    { name: "13_Ingredientes_Selecionados_Frescos.mp4", duration: "18s", category: "Qualidade" },
    { name: "14_Sabor_Do_Verdadeiro_Acai_Nativo.mp4", duration: "15s", category: "Institucional" },
    { name: "15_Combo_Familia_Duas_Barcas_Promo.mp4", duration: "15s", category: "Combos" },
    { name: "16_Copo_Meio_A_Meio_Gigante.mp4", duration: "15s", category: "Menu" },
    { name: "17_Sabor_Super_Nutella_Com_Morango.mp4", duration: "12s", category: "Sabores" },
    { name: "18_Calor_Pede_Delivery_Gelado.mp4", duration: "15s", category: "Delivery" },
    { name: "19_Promocao_De_Terca_Feira_Acai.mp4", duration: "15s", category: "Promoções" },
    { name: "20_Polpa_Artesanal_Especial_Pura.mp4", duration: "15s", category: "Qualidade" },
    { name: "21_Tigela_Marguerita_Doce_Gourmet.mp4", duration: "12s", category: "Sabores" },
    { name: "22_Cupom_De_Desconto_Acai_Stories.mp4", duration: "15s", category: "Promoções" },
    { name: "23_Cascata_De_Leite_Condensado.mp4", duration: "15s", category: "Apetite Appeal" },
    { name: "24_Acaiteria_Aberta_Vem_Pedir.mp4", duration: "10s", category: "Institucional" },
    { name: "25_Dia_De_Acai_Com_Amigos.mp4", duration: "15s", category: "Engajamento" },
    { name: "26_Promo_Compre_2_Ganhe_Adicional.mp4", duration: "15s", category: "Promoções" },
    { name: "27_Acai_Doce_Kitkat_E_Mms.mp4", duration: "12s", category: "Sabores" },
    { name: "28_Delivery_Seguro_Embalado_Lacrado.mp4", duration: "15s", category: "Delivery" },
    { name: "29_Combo_Quinta_Classica_Acai.mp4", duration: "15s", category: "Combos" },
    { name: "30_Acai_Tradicional_Amazonico.mp4", duration: "15s", category: "Sabores" },
    { name: "31_Cupom_Primeira_Compra_Acai.mp4", duration: "15s", category: "Promoções" },
    { name: "32_Xarope_De_Guarana_Artesanal.mp4", duration: "12s", category: "Qualidade" },
    { name: "33_Animacao_Copo_Transbordando.mp4", duration: "15s", category: "Apetite Appeal" },
    { name: "34_Acaiteria_Infantil_Comemorativa.mp4", duration: "15s", category: "Engajamento" },
    { name: "35_Feedback_Clientes_Satisfeitos_Acai.mp4", duration: "15s", category: "Social Proof" }
  ];

  const premiumFiles = [
    ...basicFiles,
    ...basicFiles.map((file, idx) => ({
      name: `${idx + 36}_Exclusive_Premium_${file.name.slice(3)}`,
      duration: file.duration,
      category: "Premium Gold"
    }))
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl my-8">
        
        {/* Top Header */}
        <div className="bg-acai-charcoal text-white p-6 flex justify-between items-center relative">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍧</span>
            <div>
              <h3 className="font-display font-extrabold text-lg md:text-xl">
                {step === "success" ? "Acesso Liberado! 🎉" : "Finalizar Compra Segura"}
              </h3>
              <p className="text-xs text-purple-200/90 font-sans">
                {selectedPlan === "Premium" ? "Plano Premium com Bônus Inclusos" : "Plano Básico Selecionado"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Checkout Form */}
        {step === "checkout" && (
          <form onSubmit={handleStartPayment} className="p-6 md:p-8 space-y-6">
            
            {/* Value Indicators */}
            <div className="bg-acai-beige/50 border border-purple-200/40 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Pacote Selecionado:</span>
                <h4 className="font-display font-extrabold text-acai-charcoal text-base md:text-lg">
                  {selectedPlan} • {selectedPlan === "Premium" ? "100" : "35"} Vídeos Animados para Açaiterias
                </h4>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold uppercase tracking-wider text-acai-purple block">Valor:</span>
                <span className="font-display font-black text-xl md:text-2xl text-acai-purple">{price}</span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                ⚠️ {error}
              </div>
            )}

            {/* User Bio Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">Nome Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-acai-purple/40"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">E-mail de Recebimento</label>
                <input
                  type="email"
                  required
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white rounded-xl py-3 px-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-acai-purple/40"
                />
              </div>
            </div>

            {/* Payment Mode Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wide block">Escolha o Método de Pagamento</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`border-2 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === "pix"
                      ? "border-acai-purple bg-acai-purple/5 text-acai-purple"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <QrCode className="w-6 h-6" />
                  <span className="font-display font-bold text-sm">PIX Instantâneo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`border-2 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-acai-purple bg-acai-purple/5 text-acai-purple"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <CreditCard className="w-6 h-6" />
                  <span className="font-display font-bold text-sm">Cartão de Crédito</span>
                </button>
              </div>
            </div>

            {/* Payment Forms Content */}
            {paymentMethod === "pix" ? (
              <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 text-center space-y-4">
                <div className="w-28 h-28 bg-white border border-gray-200 p-2 mx-auto rounded-xl flex items-center justify-center">
                  {/* Decorative Simulated QR Code */}
                  <div className="grid grid-cols-4 gap-1.5 w-full h-full opacity-80">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${
                          (i % 3 === 0 || i % 7 === 0 || i === 0 || i === 15) ? "bg-acai-charcoal animate-pulse" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 max-w-sm mx-auto font-sans">
                  Escaneie o QR Code ou copie o código Pix copia e cola abaixo para aprovação instantânea com liberação imediata.
                </p>
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="mx-auto bg-white py-2 px-4 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:text-acai-charcoal flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
                >
                  <ClipboardCheck className={`w-4 h-4 ${copiedPix ? "text-green-600" : "text-gray-500"}`} />
                  <span>{copiedPix ? "CÓDIGO COPIADO! ✅" : "COPIAR CÓDIGO PIX"}</span>
                </button>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest block">Número do Cartão</label>
                  <input
                    type="text"
                    required
                    maxLength={19}
                    placeholder="4444 4444 4444 4444"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                    className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm font-sans focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest block">Validade</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm font-sans focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest block">Código CVV</label>
                    <input
                      type="text"
                      required
                      maxLength={3}
                      placeholder="123"
                      className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm font-sans focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-acai-purple hover:bg-acai-purple/90 text-white font-display font-extrabold text-base py-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CONFIRMAR PAGAMENTO SIMULADO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-gray-500 font-sans mt-3">
                Ao clicar em confirmar, você simulará um ambiente de compra 100% aprovada para testar o painel de entrega do material.
              </p>
            </div>
          </form>
        )}

        {/* Step 2: High Security Encryption Verification Loader */}
        {step === "processing" && (
          <div className="p-12 text-center space-y-6">
            <div className="w-16 h-16 border-4 border-acai-purple border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="space-y-2">
              <h4 className="font-display font-extrabold text-xl text-acai-charcoal">
                Criptografando conexões bancárias...
              </h4>
              <p className="text-sm text-gray-500 font-sans max-w-sm mx-auto">
                Verificando autenticidade nos servidores locais de simulação financeira protegida. Por favor, aguarde.
              </p>
            </div>
            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-green-600 font-bold bg-green-50 max-w-xs mx-auto py-2 rounded-full border border-green-100">
              <ShieldCheck className="w-4 h-4" />
              <span>Conexão SSL Segura de 256 bits</span>
            </div>
          </div>
        )}

        {/* Step 3: Success and Access Center */}
        {step === "success" && (
          <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Header banner */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md shadow-green-500/10">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-extrabold text-2xl text-green-800">
                  Parabéns, {name || "Cliente Satisfeito"}!
                </h4>
                <p className="text-sm text-green-700 font-sans">
                  Seu pagamento simulado do <strong>Plano {selectedPlan}</strong> foi processado e aprovado!
                </p>
              </div>
              <p className="text-xs text-gray-500 font-sans bg-white p-2.5 rounded-lg border border-green-100 max-w-md mx-auto">
                Enviamos as credenciais oficiais simuladas para o e-mail: <strong>{email || "cliente@acaiteria.com"}</strong>. Baixe o pacote agora.
              </p>
            </div>

            {downloadNotification && (
              <div className="bg-sky-50 border border-sky-200 text-sky-800 rounded-2xl p-4 text-xs font-semibold flex items-center justify-between gap-3 shadow-xs animate-pulse">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-sky-600 border-t-transparent rounded-full animate-spin shrink-0 block" />
                  <span>{downloadNotification}</span>
                </div>
                <span className="shrink-0 text-[10px] bg-sky-100 border border-sky-200 text-sky-800 px-2 py-0.5 rounded-full uppercase tracking-wider font-sans">
                  Simulação Ativa
                </span>
              </div>
            )}

            {/* List of Deliverable Videos */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h5 className="font-display font-bold text-acai-charcoal text-base md:text-lg flex items-center gap-2">
                  <FolderDown className="w-5 h-5 text-acai-purple" />
                  <span>Seus Arquivos Desbloqueados</span>
                </h5>
                <span className="text-xs bg-acai-purple/10 text-acai-purple font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {selectedPlan === "Premium" ? "100 Vídeos" : "35 Vídeos"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-1 border border-purple-100 p-2.5 rounded-xl bg-purple-50/10">
                {(selectedPlan === "Premium" ? premiumFiles : basicFiles).map((file, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-150 p-3 rounded-xl flex items-center justify-between gap-3 text-xs hover:border-acai-purple/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-left overflow-hidden">
                      <Video className="w-4 h-4 text-acai-purple flex-shrink-0" />
                      <div className="truncate">
                        <p className="font-mono text-gray-800 font-bold truncate">{file.name}</p>
                        <p className="text-[10px] text-gray-400 font-sans">{file.category} • {file.duration}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => triggerDownloadNotification(file.name)}
                      className="p-2 bg-acai-beige text-acai-charcoal hover:bg-acai-purple hover:text-white rounded-lg transition-colors cursor-pointer"
                      title="Fazer Download"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Bonuses Bundle */}
            {selectedPlan === "Premium" && (
              <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-purple-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-acai-purple animate-acai" />
                  <h6 className="font-display font-black text-gray-900 text-sm tracking-wide">
                    🎁 Pasta Dos Seus Bônus Exclusivos Premium
                  </h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    onClick={() => triggerDownloadNotification("Pack de Vídeos que Vendem (ZIP)")}
                    className="bg-white hover:bg-purple-50 border border-purple-100 p-3 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors text-left"
                  >
                    <FolderGit className="w-6 h-6 text-acai-purple" />
                    <span className="text-[10px] font-bold text-gray-700 leading-tight">Pack de Vídeos que Vendem</span>
                  </button>
                  <button
                    onClick={() => triggerDownloadNotification("Vídeos em Qualidade 4K (ZIP)")}
                    className="bg-white hover:bg-purple-50 border border-purple-100 p-3 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors text-left"
                  >
                    <FolderGit className="w-6 h-6 text-acai-purple" />
                    <span className="text-[10px] font-bold text-gray-700 leading-tight">Vídeos em Qualidade 4K</span>
                  </button>
                  <button
                    onClick={() => triggerDownloadNotification("Vídeos Extras para Promoções (ZIP)")}
                    className="bg-white hover:bg-purple-50 border border-purple-100 p-3 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors text-left"
                  >
                    <FolderGit className="w-6 h-6 text-acai-purple" />
                    <span className="text-[10px] font-bold text-gray-700 leading-tight">Vídeos Extras para Promoções</span>
                  </button>
                </div>
              </div>
            )}

            {/* Download area footer */}
            <div className="text-center">
              <button
                onClick={() => {
                  setStep("checkout");
                  setName("");
                  setEmail("");
                  onClose();
                }}
                className="bg-acai-charcoal text-white hover:bg-acai-charcoal/90 px-6 py-3 rounded-xl font-display font-bold text-sm transition-colors cursor-pointer"
              >
                Voltar para a Página Principal
              </button>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}

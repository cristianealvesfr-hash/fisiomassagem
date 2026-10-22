import React, { useState } from 'react'
import { Sparkles, X } from 'lucide-react'
import { getWhatsAppUrl, INSTAGRAM_URL } from '@/lib/utils'

export const FloatingWhatsApp: React.FC = () => {
  const [isBalloonDismissed, setIsBalloonDismissed] = useState(false)

  return (
    <aside 
      aria-label="Atendimento e Redes Sociais"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none"
    >
      {/* Creative Interactive Badge / Card */}
      {!isBalloonDismissed && (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-gold/40 max-w-xs animate-bounce-slow relative flex items-start gap-3">
          <button 
            onClick={() => setIsBalloonDismissed(true)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-plum text-gold-light rounded-full flex items-center justify-center text-[10px] shadow hover:bg-plum-dark"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="relative shrink-0">
            <img 
              src="/whatsapp-icon.jpg" 
              alt="WhatsApp Fisiomassagem Studio" 
              className="w-10 h-10 object-cover rounded-xl shadow-sm border border-gold/40"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
          </div>

          <div className="flex-1 pr-1">
            <div className="flex items-center gap-1 text-[11px] font-bold text-plum">
              <span>Studio Icaraí</span>
            </div>
            <p className="text-[12px] text-charcoal-muted leading-tight mt-0.5">
              Online agora! Tire dúvidas no WhatsApp ou siga nossos rituais no Instagram.
            </p>
            <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
              • Resposta rápida
            </span>
          </div>
        </div>
      )}

      {/* Social Action Buttons Stack */}
      <div className="flex flex-col items-center gap-3">
        
        {/* Creative Instagram Floating Button */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguir no Instagram @fisiomassagem.icarai"
          className="group relative flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
        >
          {/* Animated Sunset/Purple Instagram Glow */}
          <span className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 opacity-60 blur-sm group-hover:opacity-100 transition-opacity"></span>

          {/* Icon Button */}
          <div className="relative w-12 h-12 rounded-2xl bg-white p-0.5 shadow-xl border border-white/60 overflow-hidden flex items-center justify-center">
            <img 
              src="/instagram-icon.png" 
              alt="Instagram Fisiomassagem Studio Icaraí" 
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Hover Tag */}
          <span className="absolute right-full mr-2.5 px-3 py-1 rounded-xl bg-plum/90 text-white text-[11px] font-medium shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            @fisiomassagem.icarai
          </span>
        </a>

        {/* Creative WhatsApp Floating Button with Official Icon */}
        <a
          href={getWhatsAppUrl("Olá! Gostaria de informações sobre agendamento de sessões na Fisiomassagem Studio Icaraí.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp com a Fisiomassagem Studio"
          className="group relative flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          {/* Animated Golden & Emerald Luxury Glow Rings */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-gold to-emerald-400 opacity-70 blur-md group-hover:opacity-100 animate-pulse transition-opacity"></span>
          
          {/* Subtle Ping Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 animate-ping"></span>

          {/* Button Container */}
          <div className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-white p-1 shadow-2xl border-2 border-gold/40 flex items-center justify-center overflow-hidden">
            <img 
              src="/whatsapp-icon.jpg" 
              alt="WhatsApp Fisiomassagem Studio" 
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Floating Notification Dot */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-gold rounded-full border-2 border-white shadow-sm flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-plum rounded-full"></span>
          </span>
        </a>

      </div>
    </aside>
  )
}

import React from 'react'
import { Calendar, ChevronRight, Flower2, Leaf, Activity, Sparkles } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

interface HeroProps {
  onOpenBookingModal: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const categories = [
    {
      id: 'massagens',
      label: 'Massagens',
      href: '#experiencias',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.6]">
          <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z" strokeOpacity="0.15" fill="#F8F3FC" />
          <path d="M12 3c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
          <path d="M8 12c-2.5-1-5 0-5 3a4 4 0 0 0 6 3" />
          <path d="M16 12c2.5-1 5 0 5 3a4 4 0 0 1-6 3" />
        </svg>
      )
    },
    {
      id: 'dayspa',
      label: 'Day Spa',
      href: '#dayspa',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.6]">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )
    },
    {
      id: 'fisioterapia',
      label: 'Fisioterapia',
      href: '#experiencias',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.6]">
          <circle cx="12" cy="5" r="2.5" />
          <path d="m9 20 3-6 3 6" />
          <path d="m6 8 6 3 6-3" />
          <path d="M12 11v4" />
        </svg>
      )
    },
    {
      id: 'terapias',
      label: 'Terapias',
      href: '#protocolos',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.6]">
          <ellipse cx="12" cy="7" rx="4" ry="2" />
          <ellipse cx="12" cy="12" rx="6" ry="2.5" />
          <ellipse cx="12" cy="18" rx="8" ry="3" />
        </svg>
      )
    }
  ]

  return (
    <section id="inicio" className="relative bg-[#FAF8F5] overflow-hidden">
      {/* Hero Visual Area with Exact Client Mockup Artwork */}
      <div className="max-w-4xl mx-auto px-0 sm:px-4 pt-0 sm:pt-4">
        <div className="relative overflow-hidden sm:rounded-3xl shadow-lg bg-[#3D251E]">
          {/* Main Hero Visual Image */}
          <img 
            src="/client-assets/hero-banner.jpg" 
            alt="Fisiomassagem Studio - Seu momento de equilíbrio começa aqui" 
            className="w-full h-auto object-cover select-none"
          />

          {/* Interactive Clickable Hotspot on Top of 'AGENDAR AGORA' Button */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-end">
            <div className="w-full pb-[4%] sm:pb-[5%] pl-[5%] sm:pl-[6%]">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar um horário no Fisiomassagem Studio Icaraí.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Allow WhatsApp link or modal
                }}
                className="pointer-events-auto inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-[#6B2B9E] hover:bg-[#5C2388] text-white text-xs sm:text-base font-bold shadow-lg border border-white/60 hover:scale-105 active:scale-95 transition-all opacity-0 hover:opacity-100 sm:opacity-100"
                style={{
                  // Position matching exact button in mobile crop
                }}
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>AGENDAR AGORA</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Wave Bar with 4 Category Icons (Exact layout from Client Mockup) */}
      <div className="relative -mt-6 sm:-mt-8 z-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-md border border-[#F0EAE1] p-5 sm:p-6">
          
          {/* 4 Category Icons */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                className="group flex flex-col items-center justify-center p-2 rounded-2xl hover:bg-[#FAF6FC] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#4A1D6A] group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#4A1D6A] tracking-tight mt-1">
                  {cat.label}
                </span>
              </a>
            ))}
          </div>

          {/* Thin Horizontal Divider */}
          <div className="my-4 border-t border-[#F2EDE4]" />

          {/* Google 5.0 Rating Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left px-2">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#4A1D6A] text-sm">Google</span>
                  <span className="font-extrabold text-[#4A1D6A] text-base">5,0</span>
                  <div className="flex text-[#F59E0B] text-xs">
                    {'★★★★★'}
                  </div>
                </div>
                <div className="text-[11px] text-stone-500 font-medium">
                  Mais de 600 avaliações reais
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-[#E6DEC8]" />

            <div className="text-xs sm:text-sm font-semibold text-[#4A1D6A] tracking-tight">
              Clientes que confiam e recomendam
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

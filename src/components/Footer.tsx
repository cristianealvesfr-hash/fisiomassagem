import React from 'react'
import { MapPin, Instagram, Facebook } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const handleOpenLegal = (e: React.MouseEvent, tab: 'termos' | 'privacidade') => {
    e.preventDefault()
    if (typeof (window as any).openLegalModal === 'function') {
      ;(window as any).openLegalModal(tab)
    }
  }

  return (
    <footer className="bg-white border-t border-[#EDE7DC] py-8 text-stone-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Barra Centralizada Idêntica ao Mockup Oficial */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#F0EAE1] text-xs sm:text-sm">
          {/* Logo e Nome */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#B38738] stroke-current fill-none stroke-[1.8]">
              <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z" strokeOpacity="0.15" fill="#FAF6EC" />
              <path d="M12 3c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
            </svg>
            <span className="font-serif font-bold text-[#4A1D6A] tracking-wider uppercase text-xs">
              FISIOMASSAGEM <span className="text-[#B38738] font-normal italic lowercase text-sm">Studio</span>
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-[#E2D9CC]" />

          {/* Localização */}
          <div className="flex items-center gap-1.5 text-stone-600 text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#B38738]" />
            <span>Icaraí, Niterói - RJ</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-[#E2D9CC]" />

          {/* Redes Sociais */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/fisiomassagemstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#4A1D6A] text-white flex items-center justify-center hover:bg-[#5C2388] transition-colors"
              aria-label="Instagram Fisiomassagem Studio"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/fisiomassagemstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#4A1D6A] text-white flex items-center justify-center hover:bg-[#5C2388] transition-colors"
              aria-label="Facebook Fisiomassagem Studio"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Rodapé com Direitos Reservados e Links LGPD/Termos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 text-center sm:text-left">
          <p>© {currentYear} Fisiomassagem Studio. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleOpenLegal(e, 'termos')}
              className="hover:text-[#4A1D6A] underline underline-offset-2 transition-colors"
            >
              Termos de Uso
            </button>
            <button
              onClick={(e) => handleOpenLegal(e, 'privacidade')}
              className="hover:text-[#4A1D6A] underline underline-offset-2 transition-colors"
            >
              Privacidade (LGPD)
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

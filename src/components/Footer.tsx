import React from 'react'
import { Sparkles, MessageCircle, Phone, MapPin, Instagram, Heart, ArrowUp } from 'lucide-react'
import { getWhatsAppUrl, GOOGLE_MAPS_REVIEW_URL, NUVEMSHOP_BASE_URL } from '@/lib/utils'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-plum-900 text-cream-200 pt-16 pb-12 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center mb-4 bg-white/90 p-2 rounded-2xl border border-gold/30">
              <img 
                src="/logo-oficial.png" 
                alt="Fisiomassagem Saúde e Estética Icaraí Niterói" 
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-cream-300 leading-relaxed mb-6">
              Desde 2017 proporcionando uma experiência ímpar em Day Spa, Massoterapia de Alta Performance e Reabilitação com Fisioterapia em Icaraí, Niterói RJ.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gold-light font-semibold">
                ★ 5.0 no Google (+600 Avaliações)
              </span>
              <a
                href="https://www.instagram.com/fisiomassagem.icarai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-cream-200 hover:text-gold transition-colors ml-2"
              >
                <img src="/instagram-icon.png" alt="Instagram" className="w-4 h-4 rounded-md" />
                <span>@fisiomassagem.icarai</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream-300">
              <li>
                <a href="#experiencias" className="hover:text-gold transition-colors">
                  Massagens
                </a>
              </li>
              <li>
                <a href="#dayspa" className="hover:text-gold transition-colors">
                  Coleção Day Spa
                </a>
              </li>
              <li>
                <a href="#fisioterapia" className="hover:text-gold transition-colors">
                  Fisioterapia & Traumato-Ortopedia
                </a>
              </li>
              <li>
                <a href="#orientais" className="hover:text-gold transition-colors">
                  Terapias Orientais & Acupuntura
                </a>
              </li>
              <li>
                <a href="#vale-presente" className="hover:text-gold text-gold-light font-semibold transition-colors">
                  Vale Presente de Luxo
                </a>
              </li>
              <li>
                <a href="#fundador" className="hover:text-gold transition-colors">
                  Ricardo Pimentel (Fisioterapeuta)
                </a>
              </li>
            </ul>
          </div>

          {/* Special Experiences */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Day Spa
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream-300">
              <li><a href="#dayspa" className="hover:text-gold">Meu Momento</a></li>
              <li><a href="#dayspa" className="hover:text-gold">Renascer</a></li>
              <li><a href="#dayspa" className="hover:text-gold">Aniversário</a></li>
              <li><a href="#dayspa" className="hover:text-gold">Casal Romântico</a></li>
              <li><a href="#dayspa" className="hover:text-gold">Premium & Luxo</a></li>
            </ul>
          </div>

          {/* Contact and Booking */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-gold/20 pb-2">
              Atendimento Exclusivo
            </h3>
            
            <p className="text-xs text-cream-300 mb-3 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Icaraí • Niterói – RJ</span>
            </p>

            <p className="text-xs text-cream-300 mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>(21) 98568-3222</span>
            </p>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com o Studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <img 
                src="/whatsapp-icon.jpg" 
                alt="WhatsApp" 
                className="w-4 h-4 rounded-full object-cover shrink-0" 
              />
              <span>Agendar via WhatsApp</span>
            </a>

            <a
              href="https://loja.fisiomassagem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2.5 bg-gold hover:bg-gold-amber text-plum font-bold text-xs py-2.5 px-4 rounded-xl text-center transition-colors"
            >
              Loja Online • Comprar Vouchers
            </a>
          </div>

        </div>

        {/* Bottom copyright, legal and credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-300 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Fisiomassagem Studio. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 text-gold-light/80">
              <button
                onClick={() => (window as any).openLegalModal?.('termos')}
                className="hover:text-gold underline transition-colors"
              >
                Termos de Uso
              </button>
              <span>•</span>
              <button
                onClick={() => (window as any).openLegalModal?.('privacidade')}
                className="hover:text-gold underline transition-colors"
              >
                Política de Privacidade & LGPD
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gold-light">
              Icaraí • Niterói – Rio de Janeiro
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-gold text-white hover:text-plum transition-colors"
              aria-label="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

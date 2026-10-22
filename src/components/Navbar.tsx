import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles, MessageCircle, Phone, Clock, MapPin, ShoppingBag } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

interface NavbarProps {
  onOpenBookingModal: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-plum-900 text-gold-light py-1.5 px-4 text-xs font-medium tracking-wider flex items-center justify-between border-b border-gold/20">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline">Icaraí, Niterói - RJ • Atendimento exclusivo com hora marcada</span>
            <span className="sm:hidden">Icaraí • Niterói RJ</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-gold">
              ★ 5.0 no Google (600+ Avaliações)
            </span>
            <a 
              href="tel:+5521985683222" 
              className="hidden md:flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>(21) 98568-3222</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-soft py-3' 
            : 'bg-cream-100/95 backdrop-blur-md py-4 border-b border-gold/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Oficial Centralizado e Nítido */}
          <a href="#" className="flex items-center shrink-0 mr-4 sm:mr-6 group">
            <img 
              src="/logo-oficial.png" 
              alt="Fisiomassagem Saúde e Estética Icaraí Niterói" 
              className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            <a 
              href="#" 
              className="text-sm font-medium text-charcoal hover:text-plum transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Home
            </a>
            
            <a 
              href="#fundador" 
              className="text-sm font-medium text-charcoal hover:text-plum transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full whitespace-nowrap"
            >
              O Studio
            </a>

            {/* Tratamentos dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <a 
                href="#experiencias" 
                className="text-sm font-medium text-charcoal hover:text-plum transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>Tratamentos</span>
                <span className="text-[9px] text-gold">▼</span>
              </a>

              {activeDropdown && (
                <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-luxury border border-gold/20 p-3 flex flex-col gap-1 animate-fadeIn z-50">
                  <a 
                    href="#massagens" 
                    className="p-2.5 rounded-xl hover:bg-cream-100 transition-colors text-xs font-medium text-charcoal hover:text-plum flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Massagens
                  </a>
                  <a 
                    href="#drenagem" 
                    className="p-2.5 rounded-xl hover:bg-cream-100 transition-colors text-xs font-medium text-charcoal hover:text-plum flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Drenagem & Estética Corporal
                  </a>
                  <a 
                    href="#fisioterapia" 
                    className="p-2.5 rounded-xl hover:bg-cream-100 transition-colors text-xs font-medium text-charcoal hover:text-plum flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Fisioterapia & Reabilitação
                  </a>
                  <a 
                    href="#orientais" 
                    className="p-2.5 rounded-xl hover:bg-cream-100 transition-colors text-xs font-medium text-charcoal hover:text-plum flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Terapias Orientais & Shiatsu
                  </a>
                  <a 
                    href="#protocolos" 
                    className="p-2.5 rounded-xl hover:bg-cream-100 transition-colors text-xs font-medium text-charcoal hover:text-plum flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Protocolos Integrativos
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#dayspa" 
              className="text-sm font-medium text-charcoal hover:text-plum transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Day Spa
            </a>

            <a 
              href="#vale-presente" 
              className="text-sm font-semibold text-wine hover:text-wine-dark transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Vale Presente
            </a>

            <a 
              href="#publicos" 
              className="text-sm font-medium text-charcoal hover:text-plum transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full whitespace-nowrap"
            >
              Experiências
            </a>

            <a 
              href="#localizacao" 
              className="text-sm font-medium text-charcoal hover:text-plum transition-colors whitespace-nowrap"
            >
              Localização
            </a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0 ml-4">
            {/* Carrinho / Loja Oficial */}
            <a
              href="https://loja.fisiomassagem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir para Loja Oficial / Carrinho de Compras"
              title="Acessar Loja Oficial / Carrinho de Compras"
              className="relative group p-2.5 rounded-full border border-gold/40 bg-white hover:bg-gold text-plum hover:text-white shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </a>

            <button
              onClick={onOpenBookingModal}
              className="bg-gold hover:bg-gold-amber text-white font-medium text-xs tracking-wider uppercase px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              Agendar Horário
            </button>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma sessão na Fisiomassagem Studio Icaraí.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-all hover:scale-105"
            >
              <img 
                src="/whatsapp-icon.jpg" 
                alt="WhatsApp" 
                className="w-5 h-5 rounded-full object-cover shrink-0"
              />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Actions: Cart + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://loja.fisiomassagem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Loja Oficial / Carrinho"
              title="Loja Oficial / Carrinho de Compras"
              className="relative p-2 rounded-xl text-plum hover:bg-cream-200 focus:outline-none transition-colors border border-gold/30 bg-white shadow-xs flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5 text-gold" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-plum hover:bg-cream-200 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-50 border-b border-gold/20 px-6 py-6 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Home
              </a>
              <a 
                href="#fundador" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                O Studio (Ricardo Pimentel)
              </a>
              <a 
                href="#experiencias" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Tratamentos & Massagens
              </a>
              <a 
                href="#dayspa" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Day Spa Exclusivo
              </a>
              <a 
                href="#protocolos" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Protocolos Integrativos
              </a>
              <a 
                href="#vale-presente" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-wine py-1 border-b border-cream-200 flex items-center justify-between"
              >
                <span>Vale Presente</span>
                <span className="text-xs bg-wine text-gold-light px-2.5 py-0.5 rounded-full">Luxo</span>
              </a>
              <a 
                href="#publicos" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Experiências Personalizadas
              </a>
              <a 
                href="#avaliacoes" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Depoimentos do Google
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Dúvidas Frequentes (FAQ)
              </a>
              <a 
                href="#localizacao" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-plum py-1 border-b border-cream-200"
              >
                Localização & Contato
              </a>

              <a 
                href="https://loja.fisiomassagem.com.br/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gold-dark hover:text-plum py-2 flex items-center justify-between bg-gold/10 px-3 rounded-xl border border-gold/30"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-gold" />
                  <span>Loja Oficial & Carrinho</span>
                </div>
                <span className="text-xs bg-gold text-white px-2 py-0.5 rounded-full font-medium">Acessar</span>
              </a>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma sessão na Fisiomassagem Studio Icaraí.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>🟢 Agende via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenBookingModal()
                  }}
                  className="w-full bg-gold hover:bg-gold-amber text-white text-sm font-semibold py-3 rounded-2xl text-center shadow-sm"
                >
                  Consultar Disponibilidade
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

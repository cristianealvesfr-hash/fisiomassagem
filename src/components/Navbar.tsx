import React, { useState } from 'react'
import { Menu, X, MessageCircle, Phone, ShoppingBag } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

interface NavbarProps {
  onOpenBookingModal: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Day Spa', href: '#dayspa' },
    { label: 'Vale Presente', href: '#valepresente' },
    { label: 'Experiências', href: '#experiencias' },
    { label: 'Protocolos', href: '#protocolos' },
    { label: 'Dúvidas', href: '#duvidas' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Left: Mobile Hamburger or Desktop Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-[#4A1D6A] hover:bg-[#F7F2FA] rounded-xl transition-colors focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" strokeWidth={2.2} />}
            </button>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A1D6A]/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#A87B2C] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center: Official Logo (Exact from Client Mockup) */}
          <a href="#inicio" className="flex items-center justify-center -my-2 group">
            <img 
              src="/client-assets/logo-header.jpg" 
              alt="Fisiomassagem Studio - Icaraí Niterói RJ" 
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Right: WhatsApp Official Green Circular Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://loja.fisiomassagem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#8C6D28] text-xs font-semibold hover:bg-[#FAF6ED] transition-colors"
              title="Acessar Loja Online"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Loja</span>
            </a>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de agendar um horário no Fisiomassagem Studio Icaraí.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md hover:bg-[#20ba59] hover:scale-105 transition-all focus:outline-none"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#FAF5EE]">
                <img 
                  src="/client-assets/logo-header.jpg" 
                  alt="Fisiomassagem Studio" 
                  className="h-12 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-500 hover:text-stone-900 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-3 px-4 text-[#4A1D6A] font-medium text-base hover:bg-[#F9F5FC] rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#A87B2C]">›</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#FAF5EE] space-y-3">
              <a
                href="https://loja.fisiomassagem.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#FAF6ED] text-[#8C6D28] font-semibold text-center flex items-center justify-center gap-2 border border-[#D4AF37]/30"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>Comprar na Loja Online</span>
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de tirar dúvidas ou agendar no Fisiomassagem Studio Icaraí.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

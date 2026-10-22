import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ReviewsSection } from './components/ReviewsSection'
import { ServicesShowcase } from './components/ServicesShowcase'
import { DaySpaSection } from './components/DaySpaSection'
import { GiftCardSection } from './components/GiftCardSection'
import { ExperiencesHub } from './components/ExperiencesHub'
import { IntegrativeProtocols } from './components/IntegrativeProtocols'
import { FAQSection } from './components/FAQSection'
import { LocationSection } from './components/LocationSection'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { BookingModal } from './components/BookingModal'
import { LegalModal } from './components/LegalModal'
import { CookieConsentBanner } from './components/CookieConsentBanner'

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [legalModalState, setLegalModalState] = useState<{ isOpen: boolean; tab: 'termos' | 'privacidade' }>({
    isOpen: false,
    tab: 'termos'
  })

  React.useEffect(() => {
    ;(window as any).openLegalModal = (tab: 'termos' | 'privacidade' = 'termos') => {
      setLegalModalState({ isOpen: true, tab })
    }
    return () => {
      delete (window as any).openLegalModal
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col font-sans text-stone-800 antialiased selection:bg-[#4A1D6A] selection:text-white">
      {/* 1. Header Oficial com Logo Centralizada, Menu e WhatsApp */}
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Sequência Exata Solicitada pelo Cliente */}
      <main className="flex-1">
        {/* Seção 01: Topo / Hero / 4 Categorias / Selo Google */}
        <Hero onOpenBookingModal={() => setIsBookingModalOpen(true)} />

        {/* Seção 02: Experiência Real (Depoimentos Google + Toalha Oficial) */}
        <ReviewsSection />

        {/* Seção 03: Destaques do Mês (Escolhas Especiais para Você) */}
        <ServicesShowcase />

        {/* Seção 04: Day Spa (4 Banners Oficiais) */}
        <DaySpaSection />

        {/* Seção 05: Vale Presente Oficial (Vinho & Dourado) */}
        <GiftCardSection />

        {/* Seção 06: Escolha sua Experiência (Foto da Sala + 4 Cards) */}
        <ExperiencesHub />

        {/* Seção 07: Protocolos Terapêuticos Integrativos */}
        <IntegrativeProtocols />

        {/* Seção 08: Perguntas & Respostas (FAQ Oficial + Banner WhatsApp) */}
        <FAQSection />

        {/* Localização & Mapa Icaraí Niterói */}
        <LocationSection />
      </main>

      {/* Rodapé Oficial Fisiomassagem Studio */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal de Agendamento Interativo */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      {/* Modal de Termos de Uso e Privacidade (LGPD) */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Banner LGPD */}
      <CookieConsentBanner />
    </div>
  )
}

export default App

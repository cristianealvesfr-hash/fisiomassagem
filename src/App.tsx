import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ExperiencesHub } from './components/ExperiencesHub'
import { DaySpaSection } from './components/DaySpaSection'
import { IntegrativeProtocols } from './components/IntegrativeProtocols'
import { GiftCardSection } from './components/GiftCardSection'
import { ServicesShowcase } from './components/ServicesShowcase'
import { AudienceTabs } from './components/AudienceTabs'
import { FounderSection } from './components/FounderSection'
import { ReviewsSection } from './components/ReviewsSection'
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
    <div className="min-h-screen bg-cream-100 flex flex-col font-sans text-charcoal">
      {/* Fixed Header with Glassmorphism */}
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Main Single Page Application Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBookingModal={() => setIsBookingModalOpen(true)} />

        {/* 2. Escolha sua Experiência (Card Hub) */}
        <ExperiencesHub />

        {/* 3. Coleção Day Spa Exclusivo */}
        <DaySpaSection />

        {/* 4. Protocolos Terapêuticos Integrativos */}
        <IntegrativeProtocols />

        {/* 5. Seção Vale Presente (Vinho Imperial) */}
        <GiftCardSection />

        {/* 6. Vitrine de Tratamentos & Vale Presente (Com os 4 Banners Oficiais) */}
        <ServicesShowcase />

        {/* 7. Experiências Personalizadas por Público (Tabs) */}
        <AudienceTabs />

        {/* 7. O Fundador & A Tradição (Ricardo Pimentel) */}
        <FounderSection />

        {/* 8. Prova Social & Google Reviews */}
        <ReviewsSection />

        {/* 9. Perguntas & Respostas Frequentes (FAQ) */}
        <FAQSection />

        {/* 10. Localização, Mapa Google & Contato */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      {/* Interactive Terms & Privacy Legal Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState(prev => ({ ...prev, isOpen: false }))}
      />

      {/* LGPD Cookie Consent Banner for every new user */}
      <CookieConsentBanner />
    </div>
  )
}

export default App

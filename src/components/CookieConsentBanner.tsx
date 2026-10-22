import React, { useState, useEffect } from 'react'
import { ShieldCheck, Cookie, X, ExternalLink } from 'lucide-react'

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted or configured cookies
    const consent = localStorage.getItem('fisiomassagem_cookie_consent')
    if (!consent) {
      // Small delay for smooth, non-intrusive entrance
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('fisiomassagem_cookie_consent', 'accepted')
    setIsVisible(false)
  }

  const handleAcceptEssential = () => {
    localStorage.setItem('fisiomassagem_cookie_consent', 'essential')
    setIsVisible(false)
  }

  const openPrivacyPolicy = () => {
    if ((window as any).openLegalModal) {
      (window as any).openLegalModal('privacidade')
    }
  }

  if (!isVisible) return null

  return (
    <div 
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-fadeIn"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-2xl border border-gold/40 relative text-charcoal">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-cream-100 border border-gold/30 flex items-center justify-center text-gold-dark">
              <Cookie className="w-4 h-4 text-gold" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dark block">
                Privacidade & LGPD
              </span>
              <h4 className="font-serif text-sm font-bold text-plum leading-tight">
                Valorizamos Sua Privacidade
              </h4>
            </div>
          </div>

          <button
            onClick={handleAcceptEssential}
            className="text-charcoal-light hover:text-plum p-1 rounded-lg hover:bg-cream-100 transition-colors"
            aria-label="Dispensar aviso de cookies"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Informative Text */}
        <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
          Utilizamos cookies essenciais e tecnologias semelhantes para garantir o funcionamento seguro do site, personalizar sua experiência e analisar o tráfego conforme a nossa{' '}
          <button
            onClick={openPrivacyPolicy}
            className="text-plum font-semibold underline hover:text-gold-dark transition-colors inline-flex items-center gap-0.5"
          >
            <span>Política de Privacidade</span>
          </button>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 border-t border-cream-200">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-plum hover:bg-plum-dark text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all hover:scale-[1.02] text-center"
          >
            Aceitar Todos
          </button>

          <button
            onClick={handleAcceptEssential}
            className="bg-cream-100 hover:bg-cream-200 text-charcoal border border-gold/30 font-medium text-xs py-2.5 px-3 rounded-xl transition-colors text-center"
          >
            Apenas Essenciais
          </button>
        </div>

      </div>
    </div>
  )
}

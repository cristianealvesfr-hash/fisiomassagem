import React, { useState, useEffect } from 'react'
import { Sparkles, Calendar, Star, ArrowRight, ShieldCheck, Heart, ChevronLeft, ChevronRight, Flower2, Activity, Waves, ArrowUpRight } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

interface HeroProps {
  onOpenBookingModal: () => void
}

interface HeroBanner {
  id: string
  image: string
  alt: string
  targetUrl: string
  badge: string
}

  const TARGET_PROMO_URL = "https://loja.fisiomassagem.com.br/produtos/corpo-harmonia-2026/"

const banners: HeroBanner[] = [
  {
    id: 'verao',
    image: '/banner-verao.png',
    alt: 'Sinta-se Mais Poderosa no seu Próprio Corpo neste Verão 2026 - Fisiomassagem Studio Icaraí',
    targetUrl: TARGET_PROMO_URL,
    badge: 'Destaque Verão 2026'
  },
  {
    id: 'tratamentos',
    image: '/banner-tratamentos.png',
    alt: 'Seja bem-vindo à Fisiomassagem Studio em Icaraí Niterói RJ - Tratamentos para o público feminino, masculino e casal',
    targetUrl: TARGET_PROMO_URL,
    badge: 'Feminino • Masculino • Casal'
  },
  {
    id: 'outubro-rosa',
    image: '/banner-outubro-rosa.png',
    alt: 'Mini Day Spa Combos Outubro Rosa 8 Opções Diferentes - Fisiomassagem Studio Icaraí Niterói RJ',
    targetUrl: TARGET_PROMO_URL,
    badge: 'Oferta Especial • A partir de R$ 189,90'
  }
]

export function Hero({ onOpenBookingModal }: HeroProps) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  const nextBanner = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBannerIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }

  // Automatic banner transition every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24 bg-gradient-to-b from-cream-100 via-cream-200/50 to-cream-100">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-plum/5 via-gold/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-gold/10 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP CAROUSEL OF BANNERS (Impacto Visual Imediato & Interativo) */}
        <div className="relative mb-12 sm:mb-16 group select-none">
          {/* Outer glowing luxury border */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/30 via-plum/20 to-gold/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>

          {/* Carousel Frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-luxury border-2 border-gold/40 bg-white">
            
            {/* Clickable Banner Link */}
            <a
              href={banners[currentBannerIndex].targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full overflow-hidden cursor-pointer group/link"
              title="Clique para acessar o tratamento Corpo Harmonia na loja oficial"
            >
              {/* Image banner */}
              <img
                src={banners[currentBannerIndex].image}
                alt={banners[currentBannerIndex].alt}
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] md:max-h-[480px] object-cover sm:object-contain object-center transition-all duration-700 transform group-hover/link:scale-[1.01]"
              />

              {/* Floating CTA Overlay Pill */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-gold/50 shadow-luxury flex items-center gap-2 group-hover/link:bg-plum group-hover/link:text-white transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] sm:text-xs font-bold tracking-wide text-plum group-hover/link:text-gold-light">
                  Clique na imagem para agendar →
                </span>
              </div>

              {/* Top Left Badge */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-6 bg-plum/90 backdrop-blur-md text-gold-light px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase border border-gold/40 shadow-sm">
                {banners[currentBannerIndex].badge}
              </div>
            </a>

            {/* Navigation Left / Right Arrows */}
            <button
              onClick={(e) => {
                e.preventDefault()
                prevBanner()
              }}
              aria-label="Banner Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-plum text-plum hover:text-white shadow-luxury border border-gold/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                nextBanner()
              }}
              aria-label="Próximo Banner"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-plum text-plum hover:text-white shadow-luxury border border-gold/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Indicator Dots Bar */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentBannerIndex(idx)
                  }}
                  aria-label={`Ir para banner ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentBannerIndex === idx
                      ? 'w-7 bg-gold shadow-sm'
                      : 'w-2 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Main Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-gold/30 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span className="text-xs uppercase tracking-wider font-semibold text-plum">
                Saúde, Beleza e Bem-Estar em Icaraí • Niterói RJ
              </span>
            </div>

            {/* Editorial Serif H1 */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-plum tracking-tight leading-[1.15] mb-4">
              Seu momento de <br className="hidden sm:inline" />
              <span className="italic font-serif text-plum-light font-medium">equilíbrio</span> começa aqui.
            </h1>

            {/* Elegant Subtitle */}
            <p className="font-serif italic text-lg sm:text-xl text-gold-dark mb-4">
              "Mais saúde para uma vida mais leve. Permita-se."
            </p>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl mb-8">
              Desde 2017 como referência em <strong>massagem em Icaraí</strong> e <strong>massagem em Niterói</strong>. 
              Massagens relaxantes e terapêuticas, experiências exclusivas de Day Spa, drenagem linfática e fisioterapia de alta precisão em um ambiente acolhedor e silencioso.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma sessão na Fisiomassagem Studio Icaraí.")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg hover:brightness-105 text-white font-medium text-sm tracking-wide px-8 py-4 rounded-full shadow-lg shadow-gold/20 flex items-center justify-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span className="font-semibold">AGENDAR AGORA 📅</span>
              </a>

              <a
                href="#dayspa"
                className="bg-white hover:bg-cream-50 text-plum font-semibold text-sm px-7 py-4 rounded-full border border-gold/40 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-gold"
              >
                <span>Conhecer Day Spa</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Proof Google Review Badge */}
            <a 
              href="https://maps.app.goo.gl/nDfmkQhqY9SpC83W6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white/80 border border-gold/25 shadow-soft hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-plum flex items-center justify-center text-white font-serif text-lg font-bold shadow-sm">
                5.0
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                  <span className="text-xs font-bold text-plum ml-1">5.0 Estrelas</span>
                </div>
                <p className="text-xs text-charcoal font-medium group-hover:text-plum transition-colors">
                  Mais de <strong>600 avaliações reais comprovadas</strong> no Google
                </p>
                <span className="text-[11px] text-gold-dark font-medium underline">
                  Icaraí, Niterói • Ver no Google Maps →
                </span>
              </div>
            </a>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative luxury frame */}
              <div className="absolute -inset-3 rounded-3xl border border-gold/30 -rotate-1 pointer-events-none"></div>
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border-2 border-white bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                  alt="Massagem e Spa em Icaraí Niterói Fisiomassagem Studio"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gold/30 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-gold-dark font-semibold">
                        Experiência Sensorial
                      </p>
                      <p className="font-serif text-base font-bold text-plum">
                        Fisiomassagem Studio
                      </p>
                    </div>
                    <span className="text-xs bg-cream-200 text-plum font-semibold px-3 py-1 rounded-full border border-gold/20">
                      8+ Anos em Icaraí
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted mt-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Atendimento individualizado e fisioterapeuta responsável
                  </p>
                </div>
              </div>

              {/* Floating Pill Tag */}
              <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-2xl shadow-luxury border border-gold/30 flex items-center gap-2 animate-bounce-slow">
                <Heart className="w-4 h-4 text-wine fill-wine" />
                <span className="text-xs font-semibold text-plum">
                  Day Spa & Massagens
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Acesso Rápido - Visual Boutique & Sofisticado */}
        <div className="mt-16 pt-10 border-t border-gold/20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark bg-gold/10 px-4 py-1 rounded-full border border-gold/30 mb-2">
              Experiências em Icaraí • Niterói
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-plum">
              O que o seu corpo e mente pedem hoje?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Massagens */}
            <a
              href="#experiencias"
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury border border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-1 bg-white flex flex-col justify-between"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
                  alt="Massagens em Icaraí Niterói"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/40 to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold group-hover:bg-plum group-hover:text-gold-light transition-colors">
                  <Waves className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-light bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-gold/30">
                    7 Modalidades
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-plum group-hover:text-gold-dark transition-colors font-serif">
                    Massagens
                  </h4>
                  <p className="text-[11px] text-charcoal-light mt-0.5">
                    Relaxante, Pedras Quentes & Modeladora
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Card 2: Day Spa */}
            <a
              href="#dayspa"
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury border border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-1 bg-white flex flex-col justify-between"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                  alt="Day Spa em Icaraí Niterói"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/40 to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold group-hover:bg-plum group-hover:text-gold-light transition-colors">
                  <Flower2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-light bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-gold/30">
                    6 Rituais Exclusivos
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-plum group-hover:text-gold-dark transition-colors font-serif">
                    Day Spa
                  </h4>
                  <p className="text-[11px] text-charcoal-light mt-0.5">
                    Rituais completos com imersão e chá
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Card 3: Fisioterapia */}
            <a
              href="#fisioterapia"
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury border border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-1 bg-white flex flex-col justify-between"
            >
              <div className="relative h-36 w-full overflow-hidden bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=600&q=80"
                  alt="Fisioterapia e Reabilitação Motora em Icaraí Niterói"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/40 to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold group-hover:bg-plum group-hover:text-gold-light transition-colors">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-light bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-gold/30">
                    Reabilitação Clínica
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-plum group-hover:text-gold-dark transition-colors font-serif">
                    Fisioterapia
                  </h4>
                  <p className="text-[11px] text-charcoal-light mt-0.5">
                    Coluna, articulações e pós-operatório
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Card 4: Terapias Orientais */}
            <a
              href="#orientais"
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury border border-gold/30 hover:border-gold transition-all duration-300 transform hover:-translate-y-1 bg-white flex flex-col justify-between"
            >
              <div className="relative h-36 w-full overflow-hidden bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
                  alt="Acupuntura, Shiatsu e Terapias Orientais em Icaraí Niterói"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/40 to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold group-hover:bg-plum group-hover:text-gold-light transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-light bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-gold/30">
                    Acupuntura & Shiatsu
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-plum group-hover:text-gold-dark transition-colors font-serif">
                    Terapias Orientais
                  </h4>
                  <p className="text-[11px] text-charcoal-light mt-0.5">
                    Equilíbrio energético e alívio de dor
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

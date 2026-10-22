import React, { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react'
import { REVIEWS_DATA } from '@/data/content'
import { GOOGLE_MAPS_REVIEW_URL } from '@/lib/utils'

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Real review image assets from workspace
  const reviewImages = [
    { name: 'Lumena', file: '/depoimento Lumena.png', title: 'Depoimento Lumena' },
    { name: 'Gustavo Rodrigues', file: '/Depoimento Gustavo Rodrigues.png', title: 'Depoimento Gustavo Rodrigues' },
    { name: 'Ana Beatriz Leal', file: '/depoimento Ana Beatriz leal.png', title: 'Depoimento Ana Beatriz' },
    { name: 'Breno', file: '/depoimento Breno.png', title: 'Depoimento Breno' },
    { name: 'Eduarda', file: '/depoimento eduarda.png', title: 'Depoimento Eduarda' },
    { name: 'Priscila Dias', file: '/depoimento priscila Dias.png', title: 'Depoimento Priscila Dias' },
    { name: 'Roberta de Carvalho', file: '/Depoimento Roberta de Carvalho.png', title: 'Depoimento Roberta' },
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length)
  }

  // Automatic scrolling for main review card (every 4.5 seconds)
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      nextReview()
    }, 4500)
    return () => clearInterval(interval)
  }, [isPaused, currentIndex])

  return (
    <section id="avaliacoes" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Score Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/30 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-plum">
              Avaliações 100% Verificadas no Google
            </span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <span className="font-serif text-6xl sm:text-7xl font-bold text-plum tracking-tight">
              5,0
            </span>
            <div className="flex flex-col items-start">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-charcoal tracking-wide mt-1">
                Classificação Máxima no Google Meu Negócio
              </span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-plum mb-3">
            O Que Nossos Clientes Dizem em <span className="italic font-serif">Icaraí</span>
          </h2>

          <p className="text-charcoal-muted text-sm sm:text-base max-w-xl">
            Mais de <strong>600 avaliações autênticas</strong> que atestam nosso compromisso com o silêncio, a técnica e a renovação de corpo e mente.
          </p>

          {/* Official Google Button */}
          <div className="mt-6">
            <a
              href={GOOGLE_MAPS_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-cream-50 text-plum border border-gold/40 shadow-soft hover:shadow text-xs sm:text-sm font-semibold transition-all group"
            >
              <span>Ver todas as 600+ avaliações reais no Google</span>
              <ExternalLink className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Carousel / Slider of Testimonials with Auto-scroll and pause on hover */}
        <div 
          className="max-w-4xl mx-auto relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-luxury relative transition-all duration-500">
            <Quote className="w-12 h-12 text-gold/20 absolute top-6 right-8 pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(REVIEWS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="text-xs font-semibold text-charcoal-light ml-2">
                  {REVIEWS_DATA[currentIndex].date}
                </span>
              </div>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {REVIEWS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-gold' : 'w-2 bg-cream-300 hover:bg-gold/50'
                    }`}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <p className="font-serif italic text-lg sm:text-2xl text-charcoal leading-relaxed mb-6 min-h-[90px] sm:min-h-[80px]">
              "{REVIEWS_DATA[currentIndex].comment}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-cream-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cream-200 border border-gold/30 flex items-center justify-center font-serif text-lg font-bold text-plum">
                  {REVIEWS_DATA[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-plum">
                    {REVIEWS_DATA[currentIndex].author}
                  </h4>
                  <p className="text-xs text-charcoal-light">
                    Experiência: <strong className="text-gold-dark">{REVIEWS_DATA[currentIndex].service}</strong>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  aria-label="Depoimento Anterior"
                  className="w-10 h-10 rounded-full border border-gold/30 bg-cream-50 hover:bg-cream-200 text-plum flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Próximo Depoimento"
                  className="w-10 h-10 rounded-full border border-gold/30 bg-cream-50 hover:bg-cream-200 text-plum flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Real Review Screenshots - Infinite Auto-Scrolling Marquee Strip */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-charcoal-light">
              Capturas de Depoimentos Espontâneos no Google
            </span>
          </div>

          {/* Marquee Carousel Container with subtle left/right gradient masks */}
          <div className="relative overflow-hidden w-full py-2">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream-100 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream-100 to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
              {/* Duplicate array for seamless infinite marquee loop */}
              {[...reviewImages, ...reviewImages].map((img, i) => (
                <div
                  key={i}
                  className="w-72 shrink-0 rounded-2xl overflow-hidden bg-white p-3 border border-gold/25 shadow-soft hover:shadow-md transition-all group"
                >
                  <img
                    src={img.file}
                    alt={img.title}
                    className="w-full h-auto rounded-xl object-contain max-h-48 group-hover:scale-[1.02] transition-transform"
                  />
                  <p className="text-[11px] text-center text-charcoal-light font-medium mt-2">
                    ✓ Avaliação verificada • {img.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

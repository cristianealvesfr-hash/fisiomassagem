import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Ana Paula',
      avatar: '/client-assets/avatar-ana.jpg',
      rating: 5,
      text: '“Ambiente maravilhoso, profissionais atenciosos e uma experiência incrível. Super recomendo!”'
    },
    {
      id: 2,
      name: 'Mariana',
      avatar: '/client-assets/avatar-mariana.jpg',
      rating: 5,
      text: '“Massagem perfeita! Saí renovada, com mais energia e bem-estar. Já quero voltar!”'
    },
    {
      id: 3,
      name: 'Carlos',
      avatar: '/client-assets/avatar-carlos.jpg',
      rating: 5,
      text: '“Atendimento excelente, ambiente acolhedor e profissionais muito qualificados. Recomendo!”'
    }
  ]

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="avaliacoes" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Banner Superior com a Toalha, Flor e Frase do Mockup */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#EFE8DD] mb-8 bg-white">
          <img 
            src="/client-assets/experiencia-real-banner.jpg" 
            alt="Quem vive a experiência, recomenda - Fisiomassagem Studio" 
            className="w-full h-auto object-cover select-none"
          />
        </div>

        {/* Selo Central Google 5.0 */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#EFE8DD] p-4 sm:p-6 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-10 h-10 shrink-0">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span className="font-bold text-[#4A1D6A] text-2xl tracking-tight">Google</span>
          </div>

          <div className="hidden sm:block w-px h-10 bg-[#E6DEC8]" />

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#4A1D6A] text-2xl">5,0</span>
              <div className="flex text-[#F59E0B] text-lg">
                {'★★★★★'}
              </div>
            </div>
            <span className="text-xs font-semibold text-stone-500 tracking-wider uppercase">
              Mais de 600 avaliações reais
            </span>
          </div>
        </div>

        {/* 3 Review Cards (Carousel no mobile / 3 cards lado a lado no desktop) */}
        <div className="relative">
          {/* Desktop: 3 Cards Grid */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {reviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#EFE8DD] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="w-12 h-12 rounded-full object-cover border border-[#EFE8DD]"
                    />
                    <div>
                      <div className="font-bold text-[#4A1D6A] text-sm">{rev.name}</div>
                      <div className="flex text-[#F59E0B] text-xs">
                        {'★★★★★'}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {rev.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Interactive Carousel with Arrows */}
          <div className="md:hidden relative flex items-center justify-center">
            <button
              onClick={prevReview}
              className="absolute -left-2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-[#EAE3D6] flex items-center justify-center text-[#4A1D6A] hover:bg-[#FAF6FC]"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="w-full px-6">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#EFE8DD] transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={reviews[currentIndex].avatar} 
                    alt={reviews[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover border border-[#EFE8DD]"
                  />
                  <div>
                    <div className="font-bold text-[#4A1D6A] text-sm">{reviews[currentIndex].name}</div>
                    <div className="flex text-[#F59E0B] text-xs">
                      {'★★★★★'}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {reviews[currentIndex].text}
                </p>
              </div>
            </div>

            <button
              onClick={nextReview}
              className="absolute -right-2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-[#EAE3D6] flex items-center justify-center text-[#4A1D6A] hover:bg-[#FAF6FC]"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-4">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-5 bg-[#4A1D6A]' : 'w-2 bg-[#D9CFDF]'
                }`}
                aria-label={`Ir para avaliação ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

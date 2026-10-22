import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react'

export const ServicesShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const highlights = [
    {
      id: 'ayurvedica',
      title: 'Massagem Ayurvédica',
      subtitle: 'Equilíbrio para o corpo, mente e emoções.',
      image: '/client-assets/destaque-ayurvedica-card.jpg',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 'drenagem',
      title: 'Drenagem Linfática',
      subtitle: 'Mais leveza e bem-estar.',
      image: '/client-assets/destaque-drenagem-card.jpg',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 'meumomento',
      title: 'Day Spa Meu Momento',
      subtitle: 'Uma pausa só para você.',
      image: '/client-assets/destaque-meumomento-card.jpg',
      url: 'https://loja.fisiomassagem.com.br/'
    }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % highlights.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  return (
    <section id="destaques" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#A87B2C] uppercase mb-2">
            <span className="w-6 h-px bg-[#A87B2C]/50" />
            DESTAQUES DO MÊS
            <span className="w-6 h-px bg-[#A87B2C]/50" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1D6A]">
            Escolhas especiais <span className="italic text-[#A87B2C]">para você.</span>
          </h2>
        </div>

        {/* Desktop: 3 Cards Lado a Lado (Primeiro em Evidência) */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-end">
          {highlights.map((item, idx) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-[#EFE8DD] transition-all hover:shadow-md hover:-translate-y-1 ${
                idx === 0 ? 'scale-105 z-10 border-[#A87B2C]/40 shadow-md' : 'opacity-95'
              }`}
            >
              <div 
                className="cursor-pointer relative overflow-hidden group"
                onClick={() => setSelectedImage(item.image)}
                title="Clique para ampliar a arte"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="p-4 pt-3 text-center bg-[#FCFAF7] border-t border-[#F2EDE4]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#8C6D28] hover:bg-[#785C1F] text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <span>SAIBA MAIS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carrossel com o Primeiro Card em Evidência + 2 Mini Cards Abaixo */}
        <div className="md:hidden space-y-6">
          {/* Main Carousel */}
          <div className="relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute -left-2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-[#EAE3D6] flex items-center justify-center text-[#4A1D6A]"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="w-full max-w-xs px-2">
              <div 
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#EFE8DD] cursor-pointer"
                onClick={() => setSelectedImage(highlights[activeSlide].image)}
              >
                <img 
                  src={highlights[activeSlide].image} 
                  alt={highlights[activeSlide].title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-3 text-center">
                <a
                  href={highlights[activeSlide].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full bg-[#8C6D28] text-white text-xs font-bold tracking-wider uppercase shadow-sm"
                >
                  <span>SAIBA MAIS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute -right-2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-[#EAE3D6] flex items-center justify-center text-[#4A1D6A]"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-1.5">
            {highlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === idx ? 'w-5 bg-[#4A1D6A]' : 'w-2 bg-[#D9CFDF]'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* 2 Mini Cards Abaixo Conforme Mockup do Cliente */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#EFE8DD] cursor-pointer"
              onClick={() => setSelectedImage(highlights[1].image)}
            >
              <img src={highlights[1].image} alt={highlights[1].title} className="w-full h-auto object-cover" />
            </div>

            <div 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#EFE8DD] cursor-pointer"
              onClick={() => setSelectedImage(highlights[2].image)}
            >
              <img src={highlights[2].image} alt={highlights[2].title} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Imagem Ampliada ao Tocar */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedImage} alt="Arte ampliada" className="w-full h-auto object-cover" />
          </div>
        </div>
      )}
    </section>
  )
}

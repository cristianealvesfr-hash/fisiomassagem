import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react'

export const DaySpaSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const packages = [
    {
      id: 'meumomento',
      title: 'Day Spa Meu Momento',
      image: '/client-assets/dayspa-meu-momento.jpg',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 'renascer',
      title: 'Day Spa Renascer',
      image: '/client-assets/dayspa-renascer.jpg',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 'premium',
      title: 'Day Spa Premium',
      image: '/client-assets/dayspa-premium.jpg',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 'luxo',
      title: 'Day Spa Luxo (A Dois)',
      image: '/client-assets/dayspa-luxo.jpg',
      url: 'https://loja.fisiomassagem.com.br/'
    }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % packages.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + packages.length) % packages.length)
  }

  return (
    <section id="dayspa" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Oficial do Day Spa com Linhas Douradas */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#A87B2C] uppercase mb-2">
            <span className="w-6 h-px bg-[#A87B2C]/50" />
            DAY SPA
            <span className="w-6 h-px bg-[#A87B2C]/50" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1D6A] mb-2">
            Mais que um momento, <span className="italic text-[#A87B2C]">uma experiência.</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
            Rituais completos para renovar sua energia, beleza e bem-estar.
          </p>
        </div>

        {/* Desktop: 4 Cards em Grid 2x2 com as Artes Oficiais Enviadas pelo Cliente */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#EFE8DD] transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div 
                className="cursor-pointer relative overflow-hidden group"
                onClick={() => setSelectedImage(pkg.image)}
                title="Clique para ampliar a arte"
              >
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="p-4 bg-[#FCFAF7] border-t border-[#F2EDE4] text-center">
                <a
                  href={pkg.url}
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

        {/* Mobile: Carrossel com as Artes Oficiais */}
        <div className="md:hidden space-y-4">
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
                onClick={() => setSelectedImage(packages[activeSlide].image)}
              >
                <img 
                  src={packages[activeSlide].image} 
                  alt={packages[activeSlide].title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-3 text-center">
                <a
                  href={packages[activeSlide].url}
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
            {packages.map((_, idx) => (
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
        </div>

      </div>

      {/* Lightbox Modal */}
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
            <img src={selectedImage} alt="Day Spa Ampliado" className="w-full h-auto object-cover" />
          </div>
        </div>
      )}
    </section>
  )
}

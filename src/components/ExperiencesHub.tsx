import React, { useState } from 'react'
import { Sparkles, Droplets, Stethoscope, Compass, ChevronRight, Clock, CheckCircle2, MessageCircle } from 'lucide-react'
import { SERVICE_CATEGORIES } from '@/data/content'
import { getWhatsAppUrl } from '@/lib/utils'

export const ExperiencesHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('massagens')

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (['massagens', 'drenagem', 'fisioterapia', 'orientais'].includes(hash)) {
        setSelectedCategory(hash)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const currentCategory = SERVICE_CATEGORIES.find(c => c.id === selectedCategory) || SERVICE_CATEGORIES[0]

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'massagens':
        return <Sparkles className="w-5 h-5" />
      case 'drenagem':
        return <Droplets className="w-5 h-5" />
      case 'fisioterapia':
        return <Stethoscope className="w-5 h-5" />
      case 'orientais':
        return <Compass className="w-5 h-5" />
      default:
        return <Sparkles className="w-5 h-5" />
    }
  }

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)
    // Suave rolagem direta para o painel de tratamentos detalhados
    const detailsEl = document.getElementById('detalhes-tratamentos')
    if (detailsEl) {
      detailsEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const categoryImages: Record<string, string> = {
    massagens: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    drenagem: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80',
    fisioterapia: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=600&q=80',
    orientais: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
  }

  return (
    <section id="experiencias" className="py-20 bg-cream-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-dark bg-white px-4 py-1.5 rounded-full border border-gold/30 shadow-sm">
            Menu de Tratamentos em Icaraí
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-plum mt-4 mb-4">
            Escolha Seu <span className="italic">Tratamento</span>
          </h2>
          <p className="text-charcoal-muted text-base sm:text-lg">
            Terapias manuais, reabilitação física e bem-estar integrativo desenhados sob medida para suas necessidades. Clique em uma das áreas para ver os procedimentos detalhados.
          </p>
        </div>

        {/* 4 Main Cards Selector com Visual Sofisticado e Imagem */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`text-left rounded-3xl transition-all duration-300 relative border overflow-hidden group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-plum text-white border-gold shadow-luxury ring-2 ring-gold/50 transform -translate-y-1'
                    : 'bg-white hover:bg-cream-100/90 text-charcoal border-gold/25 shadow-soft hover:shadow-md hover:border-gold/60 hover:-translate-y-0.5'
                }`}
              >
                {/* Header Image Thumbnail */}
                <div className="relative h-32 w-full overflow-hidden">
                  <img 
                    src={categoryImages[cat.id]} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${isSelected ? 'bg-gradient-to-t from-plum via-plum/60 to-transparent' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'}`} />
                  
                  {/* Floating Icon badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-2xl flex items-center justify-center bg-white/95 backdrop-blur-md text-plum border border-gold/40 shadow-sm">
                    {getCategoryIcon(cat.id)}
                  </div>

                  <span className="absolute top-3 right-3 text-xs font-serif italic text-gold-light bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-gold/20">
                    0{idx + 1}.
                  </span>

                  <div className="absolute bottom-2 left-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-gold-light bg-plum-900/80 px-2.5 py-0.5 rounded-full border border-gold/30">
                      {cat.items.length} Tratamentos
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-serif text-lg font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-plum'}`}>
                      {cat.title}
                    </h3>

                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        isSelected ? 'text-cream-200' : 'text-charcoal-muted'
                      }`}
                    >
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-gold/15">
                    <span className={`text-[11px] font-bold tracking-wider uppercase ${isSelected ? 'text-gold-light' : 'text-gold-dark'}`}>
                      {isSelected ? '✓ Selecionado' : 'Explorar Tratamentos'}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                        isSelected ? 'bg-gold text-plum font-bold' : 'bg-cream-100 text-plum border border-gold/30'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Category Details Tab Content */}
        <div 
          id="detalhes-tratamentos"
          className="bg-white rounded-3xl p-6 sm:p-10 border border-gold/30 shadow-luxury transition-all duration-300 scroll-mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-cream-200 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-plum">
                  {currentCategory.title}
                </span>
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-plum font-semibold">
                {currentCategory.subtitle}
              </h4>
              <p className="text-charcoal-muted text-sm mt-2 max-w-2xl">
                {currentCategory.description}
              </p>
            </div>

            <a
              href={getWhatsAppUrl(`Olá! Gostaria de consultar horários e valores para os serviços de ${currentCategory.title} na Fisiomassagem Studio.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow-sm whitespace-nowrap self-start md:self-auto"
            >
              <img 
                src="/whatsapp-icon.jpg" 
                alt="WhatsApp" 
                className="w-4 h-4 rounded-full object-cover shrink-0" 
              />
              <span>Consultar Valores no WhatsApp</span>
            </a>
          </div>

          {/* Grid of Sub-services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-cream-50/70 border border-gold/20 hover:border-gold hover:bg-cream-100 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h5 className="font-serif text-lg font-bold text-plum group-hover:text-gold-dark transition-colors">
                      {item.name}
                    </h5>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-plum bg-white px-2.5 py-1 rounded-full border border-gold/20 shadow-xs whitespace-nowrap">
                      <Clock className="w-3 h-3 text-gold" />
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm text-charcoal-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    <span>Indicado para: <strong>{item.indication}</strong></span>
                  </div>
                  
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de agendar o procedimento de ${item.name} na Fisiomassagem Studio Icaraí.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-plum hover:text-gold-dark flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Agendar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

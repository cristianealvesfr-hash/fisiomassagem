import React, { useState } from 'react'
import { User, Users, Heart, CheckCircle2, ChevronRight, Calendar } from 'lucide-react'
import { TARGET_AUDIENCES } from '@/data/content'
import { getWhatsAppUrl } from '@/lib/utils'

export const AudienceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('feminino')

  const currentAudience = TARGET_AUDIENCES.find(a => a.id === activeTab) || TARGET_AUDIENCES[0]

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'feminino':
        return <User className="w-4 h-4" />
      case 'masculino':
        return <Users className="w-4 h-4" />
      case 'casal':
        return <Heart className="w-4 h-4" />
      default:
        return <User className="w-4 h-4" />
    }
  }

  return (
    <section id="publicos" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-dark bg-white px-4 py-1.5 rounded-full border border-gold/30 shadow-sm">
            Atendimento Personalizado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-plum mt-4 mb-4">
            Experiências Moldadas ao <span className="italic">Seu Perfil</span>
          </h2>
          <p className="text-charcoal-muted text-base sm:text-lg">
            Eliminamos padrões impessoais. Adaptamos aromas, intensidade do toque, ambiente e técnicas para cada cliente e ocasião.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-cream-200/80 border border-gold/30">
            {TARGET_AUDIENCES.map((item) => {
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-plum text-white shadow-md'
                      : 'text-charcoal-muted hover:text-plum hover:bg-cream-100'
                  }`}
                >
                  {getTabIcon(item.id)}
                  <span>{item.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-luxury transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-cream-200">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-gold-dark">
                {currentAudience.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum mt-1">
                {currentAudience.title}
              </h3>
            </div>

            <div className="p-3 rounded-2xl bg-cream-50 border border-gold/20 text-xs text-charcoal">
              <span className="text-gold-dark font-semibold">Recomendação Especial:</span>
              <p className="font-bold text-plum mt-0.5">{currentAudience.recommended}</p>
            </div>
          </div>

          <p className="text-charcoal-muted text-base leading-relaxed mb-8">
            {currentAudience.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {currentAudience.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-cream-50/60 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-charcoal leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-cream-200 gap-4">
            <span className="text-xs text-charcoal-light text-center sm:text-left">
              Consulte nossa equipe para adequar os óleos e a intensidade exata para o seu momento.
            </span>

            <a
              href={getWhatsAppUrl(`Olá! Gostaria de uma consultoria personalizada para a experiência ${currentAudience.title} na Fisiomassagem Studio Icaraí.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-amber text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-sm flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Agendar Minha Sessão</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

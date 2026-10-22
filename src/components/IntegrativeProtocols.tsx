import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { INTEGRATIVE_PROTOCOLS } from '@/data/content'
import { getWhatsAppUrl } from '@/lib/utils'

export const IntegrativeProtocols: React.FC = () => {
  const protocolImages: Record<string, string> = {
    'estresse-ansiedade': 'https://images.unsplash.com/photo-1512290900672-1f416d8a7a97?auto=format&fit=crop&w=600&q=80',
    'sono-qualidade': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    'energia-equilibrio': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    'mais-leve-saude': 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80'
  }

  return (
    <section id="protocolos" className="py-20 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-gold-dark bg-white px-4 py-1.5 rounded-full border border-gold/30 shadow-xs">
            Fisioterapia & Terapias Holísticas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-plum mt-4 mb-4">
            Protocolos Terapêuticos <span className="italic">Integrativos</span>
          </h2>
          <p className="text-charcoal-muted text-base sm:text-lg">
            Abordagem clínica e humanizada que une a precisão da reabilitação física ao equilíbrio das terapias de bem-estar.
          </p>
        </div>

        {/* 2x2 Grid com fotos reais e acabamento nobre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTEGRATIVE_PROTOCOLS.map((protocol) => (
            <div
              key={protocol.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold/25 shadow-soft hover:shadow-luxury hover:border-gold transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Photo Header */}
              <div className="relative h-44 w-full overflow-hidden bg-cream-200">
                <img
                  src={protocolImages[protocol.id]}
                  alt={protocol.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-plum-900/35 to-transparent" />
                
                {/* Protocol Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-light bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-gold/30 shadow-sm">
                    {protocol.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide drop-shadow-sm">
                    {protocol.title}
                  </h3>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed mb-6">
                    {protocol.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2.5 mb-6">
                    {protocol.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-cream-200">
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de saber mais e agendar o protocolo integrativo de ${protocol.title} na Fisiomassagem Studio Icaraí.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-plum hover:text-gold-dark group-hover:translate-x-1 transition-all"
                  >
                    <span>Consultar Protocolo Clínico</span>
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

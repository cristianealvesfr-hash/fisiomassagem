import React, { useState } from 'react'
import { Crown, Sparkles, Clock, Check, ShoppingBag, MessageCircle, Heart, ChevronRight, Layers } from 'lucide-react'
import { DAY_SPA_COLLECTION, DaySpaItem } from '@/data/content'
import { getWhatsAppUrl } from '@/lib/utils'

export const DaySpaSection: React.FC = () => {
  const [selectedMeuMomentoOption, setSelectedMeuMomentoOption] = useState<number>(0)
  const [activeModalItem, setActiveModalItem] = useState<DaySpaItem | null>(null)

  return (
    <section id="dayspa" className="py-24 bg-gradient-to-b from-cream-100 via-white to-cream-100 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-plum/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum text-gold-light border border-gold/30 shadow-sm mb-4">
            <Crown className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-widest font-semibold">
              Rituais de Imersão e Cuidado
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-plum tracking-tight mb-4">
            Coleção <span className="italic font-serif">Day Spa</span> em Icaraí & Niterói
          </h2>

          <p className="font-serif italic text-lg text-gold-dark mb-4">
            "A melhor experiência de Day Spa em Icaraí e Day Spa em Niterói para desacelerar, cuidar e florescer."
          </p>

          <p className="text-charcoal-muted text-base max-w-2xl mx-auto">
            Cada ritual foi desenhado com óleos essenciais nobres, toalhas aquecidas, escalda-pés com ervas medicinais e técnicas de fisioterapia e massoterapia de alto padrão.
          </p>
        </div>

        {/* Day Spa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DAY_SPA_COLLECTION.map((spa) => {
            const isFeatured = spa.id === 'casal' || spa.id === 'luxo' || spa.id === 'meu-momento'

            return (
              <div
                key={spa.id}
                className={`flex flex-col justify-between rounded-3xl overflow-hidden bg-white border transition-all duration-300 hover:shadow-luxury group ${
                  isFeatured 
                    ? 'border-gold shadow-md relative' 
                    : 'border-gold/20 shadow-soft hover:border-gold/60'
                }`}
              >
                {/* Top Image & Badge */}
                <div className="relative h-60 overflow-hidden bg-cream-200">
                  <img
                    src={spa.image}
                    alt={`${spa.title} em Icaraí Niterói`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/30 to-transparent"></div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/30 flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-gold-dark" />
                    <span className="text-xs font-semibold text-plum">
                      {spa.duration}
                    </span>
                  </div>

                  {/* Featured Tag */}
                  {spa.id === 'casal' && (
                    <div className="absolute top-4 right-4 bg-wine text-gold-light px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1 shadow-sm">
                      <Heart className="w-3 h-3 fill-gold" />
                      <span>Para Dois</span>
                    </div>
                  )}

                  {spa.id === 'luxo' && (
                    <div className="absolute top-4 right-4 bg-plum text-gold px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1 shadow-sm border border-gold/40">
                      <Crown className="w-3 h-3 text-gold" />
                      <span>Experiência VIP</span>
                    </div>
                  )}

                  {spa.id === 'meu-momento' && (
                    <div className="absolute top-4 right-4 bg-gold text-plum px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1 shadow-sm">
                      <Layers className="w-3 h-3" />
                      <span>7 Opções</span>
                    </div>
                  )}

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                      {spa.title}
                    </h3>
                    <p className="font-serif italic text-xs text-gold-light line-clamp-1">
                      {spa.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-5">
                      {spa.description}
                    </p>

                    {/* Interactive selector for 'Meu Momento' */}
                    {spa.id === 'meu-momento' && spa.options && (
                      <div className="mb-5 p-3.5 rounded-2xl bg-cream-50 border border-gold/30">
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-plum mb-2">
                          Selecione o ritual de sua preferência:
                        </label>
                        <select
                          value={selectedMeuMomentoOption}
                          onChange={(e) => setSelectedMeuMomentoOption(Number(e.target.value))}
                          aria-label="Selecione o ritual de sua preferência no Day Spa Meu Momento"
                          className="w-full text-xs p-2 rounded-xl border border-gold/40 bg-white text-charcoal focus:outline-none focus:ring-1 focus:ring-plum"
                        >
                          {spa.options.map((opt, i) => (
                            <option key={i} value={i}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <p className="text-[10px] text-charcoal-light mt-1.5 italic">
                          ✓ Você também pode personalizar livremente no dia do seu atendimento.
                        </p>
                      </div>
                    )}

                    {/* Bullet Points Highlights */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-plum mb-1.5 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-gold" />
                        O que inclui a experiência:
                      </p>
                      {spa.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Nuvemshop CTA */}
                  <div className="pt-4 border-t border-gold/15 flex flex-col gap-2.5">
                    
                    {/* Buy Online Button */}
                    <a
                      href="https://loja.fisiomassagem.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full gold-gradient-bg hover:brightness-105 text-white font-semibold text-xs tracking-wider uppercase py-3 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span>Comprar Voucher Online</span>
                    </a>

                    {/* WhatsApp Consult Button */}
                    <a
                      href={getWhatsAppUrl(
                        spa.id === 'meu-momento' && spa.options
                          ? `${spa.whatsappMessage} (Opção selecionada: ${spa.options[selectedMeuMomentoOption]})`
                          : spa.whatsappMessage
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-cream-50 hover:bg-cream-100 text-plum border border-gold/30 font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                      <img 
                        src="/whatsapp-icon.jpg" 
                        alt="WhatsApp" 
                        className="w-4 h-4 rounded-full object-cover shrink-0" 
                      />
                      <span>Consultar Detalhes no WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-cream-50 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-plum text-gold flex items-center justify-center shrink-0 border border-gold/30">
              <Crown className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-plum">
                Deseja montar um Day Spa Corporativo ou em Grupo?
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Atendemos eventos especiais de noivas, aniversários intimistas e presentes corporativos para empresas de Niterói.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de consultar sobre Day Spa personalizado para grupos ou datas especiais.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-plum hover:bg-plum-dark text-gold-light border border-gold/40 text-xs font-semibold px-6 py-3.5 rounded-full shadow-sm whitespace-nowrap flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Falar com Concierge no WhatsApp</span>
            <ChevronRight className="w-4 h-4 text-gold" />
          </a>
        </div>

      </div>
    </section>
  )
}

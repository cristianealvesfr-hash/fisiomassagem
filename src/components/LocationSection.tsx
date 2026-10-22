import React from 'react'
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react'
import { getWhatsAppUrl, GOOGLE_MAPS_REVIEW_URL } from '@/lib/utils'

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-12 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100 border border-gold/30 text-plum shadow-xs mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-widest font-semibold">
              Endereço Privilegiado em Niterói
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-plum tracking-tight mb-4">
            Venha Nos Visitar em <span className="italic font-serif">Icaraí</span>
          </h2>

          <p className="text-charcoal-muted text-base max-w-xl mx-auto">
            Um refúgio de paz e tranquilidade no coração do bairro mais charmoso de Niterói RJ.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-cream-50 p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-luxury flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
                  Localização
                </span>
                <h3 className="font-serif text-2xl font-bold text-plum mt-1">
                  Fisiomassagem Studio
                </h3>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Spa, Saúde & Bem-Estar
                </p>
              </div>

              {/* Address Details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gold/30 flex items-center justify-center shrink-0 text-plum">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum">
                    Endereço
                  </h4>
                  <p className="text-sm text-charcoal mt-1">
                    Icaraí • Niterói – RJ
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Fácil acesso, próximo às principais vias e comércio de Icaraí. Estacionamentos rotativos na região.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gold/30 flex items-center justify-center shrink-0 text-plum">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum">
                    Horários de Atendimento
                  </h4>
                  <p className="text-sm text-charcoal mt-1">
                    Segunda a Sexta: 08:00 às 20:00
                  </p>
                  <p className="text-sm text-charcoal">
                    Sábados: 09:00 às 17:00
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-gold-dark mt-1">
                    *Exclusivamente com agendamento prévio
                  </span>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gold/30 flex items-center justify-center shrink-0 text-plum">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum">
                    Telefone & WhatsApp
                  </h4>
                  <p className="text-sm font-semibold text-charcoal mt-1">
                    (21) 98568-3222
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Canal oficial para dúvidas, agendamentos e compra de Vale Presente.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Directions Buttons */}
            <div className="pt-8 border-t border-cream-200 mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-plum hover:bg-plum-dark text-white text-xs font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-gold" />
                <span>Traçar Rota no Waze / Maps</span>
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de confirmar o endereço e agendar um horário na Fisiomassagem Studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <img 
                  src="/whatsapp-icon.jpg" 
                  alt="WhatsApp" 
                  className="w-4 h-4 rounded-full object-cover shrink-0" 
                />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Google Maps Iframe */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-gold/30 shadow-luxury bg-cream-100 min-h-[380px] flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.316127253971!2d-43.1136134!3d-22.901707899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983e6f849bc47%3A0xa305154d96c9dcfc!2sFisiomassagem%20Studio%20-%20Spa%20e%20Massagem%20em%20Icara%C3%AD%20Niter%C3%B3i%20RJ!5e0!3m2!1spt-PT!2sbr!4v1792165317726!5m2!1spt-PT!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', borderRadius: '1.5rem' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Localização Fisiomassagem Studio Icaraí Niterói"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  )
}

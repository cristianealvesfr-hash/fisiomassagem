import React from 'react'
import { Award, ShieldCheck, CheckCircle2, Clock, MapPin, ChevronRight } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

export const FounderSection: React.FC = () => {
  return (
    <section id="fundador" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Outer border decoration */}
              <div className="absolute -inset-4 rounded-3xl border border-gold/40 rotate-1 pointer-events-none"></div>

              {/* Main Professional Portrait */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border-2 border-cream-200 bg-cream-100">
                <img
                  src="/ricardo-pimentel-cropped.jpg"
                  alt="Ricardo Pimentel Fisioterapeuta da Fisiomassagem Studio Icaraí"
                  className="w-full h-[520px] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/20 to-transparent"></div>

                {/* Floating Badge in Portrait */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gold/30 shadow-md">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-plum">
                      Ricardo Pimentel
                    </h3>
                  </div>
                  <p className="text-[11px] text-charcoal-muted mt-2">
                    Especialista em Terapias Manuais, Reabilitação Osteomuscular e Day Spa Sensorial.
                  </p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-plum text-gold-light p-4 rounded-2xl shadow-luxury border border-gold/40 flex flex-col items-center">
                <span className="font-serif text-2xl font-bold text-gold">8+</span>
                <span className="text-[10px] uppercase tracking-wider text-center font-semibold">
                  Anos em<br />Icaraí
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100 border border-gold/30 text-plum mb-4">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Autoridade & Tradição em Icaraí
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-plum tracking-tight mb-6">
              O Equilíbrio Entre o <br />
              <span className="italic font-serif text-gold-dark">Rigor Clínico</span> e o Acolhimento Spa
            </h2>

            <p className="text-charcoal-muted text-base leading-relaxed mb-6">
              A <strong>Fisiomassagem Studio</strong> nasceu do desejo de proporcionar a Niterói um espaço onde a precisão anatômica da fisioterapia se conecta à atmosfera relaxante, delicada e sensorial dos melhores spas internacionais.
            </p>

            <p className="text-charcoal-muted text-base leading-relaxed mb-8">
              Sob a liderança do fisioterapeuta <strong>Ricardo Pimentel</strong>, cada paciente e cliente é recebido com atenção exclusiva. Aqui, jamais tratamos você como um número: cada sessão é precedida por escuta atenta, avaliação minuciosa das queixas posturais e alinhamento do ritual ideal.
            </p>

            {/* Credibility Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-cream-50 border border-gold/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-plum">
                    Rigor Clínico e Ético
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Protocolos baseados em anatomia, fisiologia muscular e biossegurança rigorosa.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-gold/20 flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-plum">
                    Pontualidade & Exclusividade
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Horários reservados sem salas de espera cheias ou ruídos externos incômodos.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Olá Dr. Ricardo! Gostaria de agendar uma consulta / sessão na Fisiomassagem Studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-plum hover:bg-plum-dark text-white font-medium text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-md flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Falar Diretamente com a Equipe</span>
              <ChevronRight className="w-4 h-4 text-gold" />
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

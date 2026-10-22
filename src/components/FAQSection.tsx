import React, { useState } from 'react'
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react'
import { FAQS_DATA } from '@/data/content'
import { getWhatsAppUrl } from '@/lib/utils'

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-cream-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/30 shadow-xs mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-widest font-semibold text-plum">
              Tire Suas Dúvidas
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-plum tracking-tight mb-4">
            Perguntas & Respostas <span className="italic">Frequentes</span>
          </h2>

          <p className="text-charcoal-muted text-base max-w-xl mx-auto">
            Tudo o que você precisa saber sobre horários, preparação, métodos de pagamento e segurança clínica.
          </p>
        </div>

        {/* Accordion List styled warm beige with circular + / - buttons */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? 'bg-cream-100/90 border-gold shadow-sm'
                    : 'bg-white border-gold/20 hover:border-gold/40 shadow-soft'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-plum">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform duration-200 ${
                      isOpen
                        ? 'bg-plum text-gold-light rotate-180'
                        : 'bg-cream-200 text-plum'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed border-t border-gold/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Banner FAQ */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-plum to-plum-dark text-white text-center shadow-luxury border border-gold/30">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-light mb-2">
            Ainda tem dúvidas? Fale conosco pelo WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-cream-200 max-w-lg mx-auto mb-5 sm:mb-6 leading-relaxed">
            Nossa equipe de recepção e os fisioterapeutas estão prontos para orientar a escolha do melhor procedimento para você.
          </p>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar algumas dúvidas sobre os serviços da Fisiomassagem Studio Icaraí.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
          >
            <img 
              src="/whatsapp-icon.jpg" 
              alt="WhatsApp" 
              className="w-4 h-4 rounded-full object-cover shrink-0" 
            />
            <span>Falar com Nossa Equipe no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  )
}

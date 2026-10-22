import React, { useState } from 'react'
import { Plus, Minus, Calendar, Clock, CreditCard, Gift, Heart, Car, UserCheck, Sparkles, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

export const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(1) // Default question 2 open (index 1) as in mockup

  const faqs = [
    {
      num: '01',
      color: 'bg-[#6B2B9E] text-white',
      icon: <Calendar className="w-4 h-4 text-[#6B2B9E]" />,
      question: 'Preciso agendar horário?',
      answer: 'Sim! Nosso atendimento é exclusivamente com hora marcada para garantir sua total privacidade, conforto e pontualidade.'
    },
    {
      num: '02',
      color: 'bg-[#B38738] text-white',
      icon: <Clock className="w-4 h-4 text-[#B38738]" />,
      question: 'Quanto tempo dura cada sessão?',
      answer: 'Nossas sessões variam de acordo com o tratamento escolhido. Em média, duram entre 50 minutos e 2 horas. Consulte o tempo exato na descrição de cada serviço.'
    },
    {
      num: '03',
      color: 'bg-[#8C7A6B] text-white',
      icon: <CreditCard className="w-4 h-4 text-[#8C7A6B]" />,
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos PIX, cartões de crédito (com opção de parcelamento na loja online) e cartões de débito.'
    },
    {
      num: '04',
      color: 'bg-[#332A38] text-white',
      icon: <Gift className="w-4 h-4 text-[#332A38]" />,
      question: 'Vocês oferecem pacotes ou planos?',
      answer: 'Sim, dispomos de planos mensais e pacotes promocionais com sessões combinadas para continuidade do seu bem-estar.'
    },
    {
      num: '05',
      color: 'bg-[#8B5E83] text-white',
      icon: <Heart className="w-4 h-4 text-[#8B5E83]" />,
      question: 'Posso presentear alguém com os serviços?',
      answer: 'Com certeza! Nosso Vale Presente exclusivo pode ser personalizado com qualquer experiência ou valor na loja online.'
    },
    {
      num: '06',
      color: 'bg-[#B38738] text-white',
      icon: <Car className="w-4 h-4 text-[#B38738]" />,
      question: 'Existe estacionamento no local?',
      answer: 'Estamos localizados em ponto nobre de Icaraí com estacionamentos rotativos conveniados e vagas próximas ao edifício.'
    },
    {
      num: '07',
      color: 'bg-[#8C7A6B] text-white',
      icon: <UserCheck className="w-4 h-4 text-[#8C7A6B]" />,
      question: 'É necessário ter restrições ou contraindicações?',
      answer: 'Antes de qualquer sessão realizamos uma breve anamnese para verificar histórico de saúde e adaptar as técnicas de forma 100% segura.'
    },
    {
      num: '08',
      color: 'bg-[#4A1D6A] text-white',
      icon: <Sparkles className="w-4 h-4 text-[#4A1D6A]" />,
      question: 'Qual a diferença entre massagem relaxante e terapêutica?',
      answer: 'A relaxante foca em diminuir o estresse global e induzir calma profunda. A terapêutica foca em pontos específicos de dor, nós de tensão e alívio musculoesquelético.'
    }
  ]

  const toggle = (idx: number) => {
    setOpenItem(openItem === idx ? null : idx)
  }

  return (
    <section id="duvidas" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Banner Superior com a Foto das Velas e Lavanda */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#EFE8DD] mb-8 bg-white">
          <img 
            src="/client-assets/faq-header-full.jpg" 
            alt="Perguntas e Respostas - Fisiomassagem Studio" 
            className="w-full h-auto object-cover select-none"
          />
        </div>

        {/* 8 Accordion Itens com Tabs Coloridas */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openItem === idx

            return (
              <div
                key={faq.num}
                className="bg-white rounded-2xl border border-[#EDE7DC] shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left hover:bg-[#FAF8F5] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${faq.color}`}>
                      {faq.num}
                    </span>
                    <div className="p-1 rounded-md bg-[#FAF6FC] shrink-0 hidden sm:flex">
                      {faq.icon}
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-[#241A2D]">
                      {faq.question}
                    </span>
                  </div>

                  <div className="w-6 h-6 rounded-full border border-[#D4AF37] text-[#8C6D28] flex items-center justify-center shrink-0 ml-2">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 sm:pl-16">
                    <div className="bg-[#FCFAF7] rounded-xl p-3.5 border-l-2 border-[#D4AF37] text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Banner Oficial 'Ainda tem dúvidas? Fale conosco pelo WhatsApp.' */}
        <div className="relative rounded-2xl overflow-hidden shadow-md mb-8">
          <a
            href={getWhatsAppUrl("Olá! Ainda tenho algumas dúvidas sobre os atendimentos no Fisiomassagem Studio Icaraí.")}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img 
              src="/client-assets/banner-whatsapp-duvidas.jpg" 
              alt="Ainda tem dúvidas? Falar pelo WhatsApp" 
              className="w-full h-auto object-cover group-hover:brightness-105 transition-all"
            />
          </a>
        </div>

      </div>
    </section>
  )
}

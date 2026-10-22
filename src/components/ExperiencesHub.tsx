import React from 'react'
import { ChevronRight } from 'lucide-react'

export const ExperiencesHub: React.FC = () => {
  const experiences = [
    {
      num: '01',
      title: 'Massagens',
      desc: 'Relaxante, Terapêutica, Desportiva, Modeladora, Ayurvédica e outras experiências.',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      num: '02',
      title: 'Drenagem & Estética',
      desc: 'Drenagem Linfática, protocolos corporais e cuidados personalizados.',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      num: '03',
      title: 'Fisioterapia',
      desc: 'Traumato-Ortopédica, Pós-Cirúrgica, Funcional e Laboral.',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      num: '04',
      title: 'Terapias Orientais',
      desc: 'Acupuntura, Auriculoterapia, Shiatsu, Reflexologia e Ventosaterapia.',
      url: 'https://loja.fisiomassagem.com.br/'
    }
  ]

  return (
    <section id="experiencias" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Foto Oficial da Sala do Studio com Logo na Parede */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#EFE8DD] mb-10 bg-white">
          <img 
            src="/client-assets/studio-room.jpg" 
            alt="Fisiomassagem Studio Icaraí - Ambiente de Atendimento" 
            className="w-full h-auto object-cover select-none"
          />
        </div>

        {/* Header da Seção */}
        <div className="text-center mb-8">
          <div className="w-10 h-0.5 bg-[#4A1D6A]/30 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1F1625] mb-3">
            Escolha sua experiência
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
            Uma apresentação mais limpa, com imagens, espaços generosos e informações objetivas para facilitar a escolha.
          </p>
        </div>

        {/* Grid 2x2 de Cards Minimalistas (Exatamente como o Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {experiences.map((exp) => (
            <a
              key={exp.num}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAF8F6] hover:bg-white rounded-3xl p-6 border border-[#EDE7DC] hover:border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[170px]"
            >
              <div>
                <span className="text-xs font-semibold text-[#8B6E9E] tracking-widest block mb-1">
                  {exp.num}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#23182C] group-hover:text-[#4A1D6A] transition-colors mb-2">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {exp.desc}
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <div className="w-8 h-8 rounded-full bg-[#EAE2F2] group-hover:bg-[#4A1D6A] group-hover:text-white text-[#4A1D6A] flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Divisor Ornamental Dourado */}
        <div className="flex items-center justify-center gap-4 text-[#A87B2C]/60 my-6">
          <span className="w-16 h-px bg-[#A87B2C]/30" />
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <span className="w-16 h-px bg-[#A87B2C]/30" />
        </div>

      </div>
    </section>
  )
}

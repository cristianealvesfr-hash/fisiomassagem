import React from 'react'
import { ChevronRight, Heart, Leaf, Sun, Flower2 } from 'lucide-react'

export const IntegrativeProtocols: React.FC = () => {
  const protocols = [
    {
      id: 1,
      image: '/client-assets/protocolo-top-1.jpg',
      title: 'ESTRESSE & ANSIEDADE',
      desc: 'Técnicas integrativas para acalmar a mente, aliviar tensões e recuperar o equilíbrio emocional.',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 2,
      image: '/client-assets/protocolo-top-2.jpg',
      title: 'RELAXAMENTO & SONO DE QUALIDADE',
      desc: 'Protocolos que favorecem o relaxamento profundo e ajudam você a dormir melhor.',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 3,
      image: '/client-assets/protocolo-top-3.jpg',
      title: 'ENERGIA EQUILÍBRIO CORPORAL & EMOCIONAL',
      desc: 'Integração de terapias para harmonizar corpo e mente, aumentar sua energia e vitalidade.',
      url: 'https://loja.fisiomassagem.com.br/'
    },
    {
      id: 4,
      image: '/client-assets/protocolo-top-4.jpg',
      title: 'MAIS LEVE, MAIS SAÚDE, MAIS BELA',
      desc: 'Protocolos que reduzem inchaço, melhoram o contorno corporal e realçam sua beleza natural, com mais saúde e bem-estar.',
      url: 'https://loja.fisiomassagem.com.br/'
    }
  ]

  return (
    <section id="protocolos" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header da Seção com Selo Oficial à Direita */}
        <div className="relative mb-10 text-center sm:text-left pr-0 sm:pr-24">
          {/* Selo Redondo no Topo Direito */}
          <div className="hidden sm:block absolute top-0 right-0 w-24 h-auto">
            <img 
              src="/client-assets/protocolo-seal.jpg" 
              alt="Saúde, Beleza, Bem-Estar em Equilíbrio" 
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-center">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#A87B2C] uppercase mb-2">
              CORPO • MENTE • EQUILÍBRIO • BEM-ESTAR
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A1D6A] mb-1 font-bold">
              PROTOCOLOS TERAPÊUTICOS
            </h2>
            <div className="text-lg sm:text-xl font-serif tracking-widest text-[#A87B2C] mb-3">
              INTEGRATIVOS
            </div>

            <p className="text-xs sm:text-sm text-stone-700 font-medium mb-3">
              Cuidado completo para uma vida mais saudável e equilibrada
            </p>

            <div className="w-16 h-px bg-[#A87B2C]/40 mx-auto mb-3" />

            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
              Nossos protocolos combinam técnicas, terapias e recursos naturais para promover saúde, bem-estar e qualidade de vida.
            </p>
          </div>
        </div>

        {/* Grid 2x2 dos 4 Cards Oficiais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {protocols.map((proto) => (
            <div 
              key={proto.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#EFE8DD] flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <img 
                  src={proto.image} 
                  alt={proto.title} 
                  className="w-full h-auto object-cover select-none"
                />

                <div className="p-5 pt-3">
                  <h3 className="text-sm sm:text-base font-bold font-serif text-[#4A1D6A] mb-2 leading-snug">
                    {proto.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {proto.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 flex justify-end">
                <a
                  href={proto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#D4AF37] text-[#8C6D28] flex items-center justify-center hover:bg-[#8C6D28] hover:text-white transition-colors"
                  aria-label={`Ver mais sobre ${proto.title}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Frase Cursiva Embaixo */}
        <div className="text-center mb-8">
          <p className="text-xl sm:text-2xl font-serif italic text-[#4A1D6A]">
            Uma vida mais leve e saudável começa aqui.
          </p>
        </div>

        {/* 4 Ícones de Rodapé da Seção */}
        <div className="grid grid-cols-4 gap-2 text-center pt-4 border-t border-[#EFE8DD]">
          <div className="flex flex-col items-center">
            <Flower2 className="w-5 h-5 text-[#4A1D6A] mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-[#4A1D6A] tracking-wider uppercase">SAÚDE</span>
          </div>

          <div className="flex flex-col items-center">
            <Heart className="w-5 h-5 text-[#4A1D6A] mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-[#4A1D6A] tracking-wider uppercase">BELEZA</span>
          </div>

          <div className="flex flex-col items-center">
            <Leaf className="w-5 h-5 text-[#4A1D6A] mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-[#4A1D6A] tracking-wider uppercase">BEM-ESTAR</span>
          </div>

          <div className="flex flex-col items-center">
            <Sun className="w-5 h-5 text-[#4A1D6A] mb-1" />
            <span className="text-[10px] sm:text-xs font-bold text-[#4A1D6A] tracking-wider uppercase">QUALIDADE DE VIDA</span>
          </div>
        </div>

      </div>
    </section>
  )
}

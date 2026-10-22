import React from 'react'

interface ServiceShowcaseItem {
  id: string
  titlePrefix: string
  titleMain: string
  image: string
  alt: string
  link: string
}

const SERVICES_SHOWCASE: ServiceShowcaseItem[] = [
  {
    id: 'femininos',
    titlePrefix: 'Conheça nossos',
    titleMain: 'Tratamentos Femininos',
    image: '/card-tratamentos-femininos.png',
    alt: 'Tratamentos Femininos Fisiomassagem Studio Icaraí Niterói RJ',
    link: 'https://fisiomassagemstudio.com/massagens-para-mulheres/'
  },
  {
    id: 'casais',
    titlePrefix: 'Conheça nossos',
    titleMain: 'Tratamentos para Casais',
    image: '/card-tratamentos-casais.png',
    alt: 'Tratamentos para Casais Fisiomassagem Studio Icaraí Niterói RJ',
    link: 'https://fisiomassagemstudio.com/servicos-fisiomassagem-studio/'
  },
  {
    id: 'masculinos',
    titlePrefix: 'Conheça nossos',
    titleMain: 'Tratamentos Masculinos',
    image: '/card-tratamentos-masculinos.png',
    alt: 'Tratamentos Masculinos Fisiomassagem Studio Icaraí Niterói RJ',
    link: 'https://fisiomassagemstudio.com/servicos-fisiomassagem-studio/'
  },
  {
    id: 'vale-presente',
    titlePrefix: '',
    titleMain: 'Vale Presentes',
    image: '/card-vale-presentes.png',
    alt: 'Vale Presente Fisiomassagem Studio Icaraí Niterói RJ',
    link: 'https://loja.fisiomassagem.com.br/produtos/massagem-e-day-spa-em-niteroi-vale-presente-fisiomassagem/'
  }
]

export const ServicesShowcase: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-white border-y border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Cards Grid - Exatamente como enviado na foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {SERVICES_SHOWCASE.map((item) => (
            <div key={item.id} className="flex flex-col">
              
              {/* Banner Image Clickable */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-1 group"
                title={`${item.titlePrefix} ${item.titleMain}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>

              {/* Title Block */}
              <div className="pt-3 pb-3 flex flex-col min-h-[52px]">
                {item.titlePrefix && (
                  <span className="text-[13px] text-charcoal-muted leading-tight font-normal">
                    {item.titlePrefix}
                  </span>
                )}
                <h3 className="text-base font-bold text-charcoal leading-tight">
                  {item.titleMain}
                </h3>
              </div>

              {/* Dark Plum Button "Clique aqui" */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#3B144D] hover:bg-[#2A0E37] text-white text-sm font-semibold py-2.5 rounded-lg text-center transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99]"
              >
                Clique aqui
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { Gift, Sparkles, Heart, ArrowRight, ShieldCheck, ShoppingBag, Send } from 'lucide-react'
import { getWhatsAppUrl, NUVEMSHOP_BASE_URL } from '@/lib/utils'

export const GiftCardSection: React.FC = () => {
  return (
    <section id="vale-presente" className="py-24 wine-gradient-bg text-cream-100 relative overflow-hidden">
      {/* Decorative Golden accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold/40 text-gold-light mb-6 backdrop-blur-sm">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                O Presente Mais Desejado de Niterói
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
              Vale Presente <br />
              <span className="gold-gradient-text italic font-serif">de Puro Luxo</span>
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-gold-light/90 mb-4">
              "Um presente que transforma momentos em cuidados especiais. Um carinho que se transforma em momentos inesquecíveis de bem-estar."
            </p>

            <p className="text-cream-200 text-base leading-relaxed mb-8 max-w-xl">
              Surpreenda quem você ama com uma experiência que desacelera a rotina, renova as energias e expressa afeto genuíno. Escolha entre Voucher Digital instantâneo ou Voucher Físico de Luxo.
            </p>

            {/* Tags de Valor */}
            <div className="flex flex-wrap items-center gap-2.5 mb-10">
              {['Saúde', 'Bem-Estar', 'Beleza', 'Qualidade de Vida', 'Memória Afetiva'].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-white/10 border border-gold/40 text-xs text-gold-light font-medium tracking-wide shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="https://loja.fisiomassagem.com.br/produtos/massagem-e-day-spa-em-niteroi-vale-presente-fisiomassagem/"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg hover:brightness-110 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-black/40 flex items-center justify-center gap-3 group transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>QUERO PRESENTEAR →</span>
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de encomendar um Vale Presente personalizado na Fisiomassagem Studio Icaraí.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-gold/40 text-sm font-semibold px-6 py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4 text-gold" />
                <span>Personalizar no WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-cream-300">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>Validade de até 90 dias • Agendamento flexível pelo presenteado</span>
            </div>

          </div>

          {/* Right Visual Card Showcase com a Imagem Oficial do Vale Presente */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/40 via-amber-500/30 to-gold/40 rounded-3xl blur-2xl opacity-75"></div>

              {/* Clickable Official Voucher Image Link */}
              <a
                href="https://loja.fisiomassagem.com.br/produtos/massagem-e-day-spa-em-niteroi-vale-presente-fisiomassagem/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-3xl overflow-hidden border-2 border-gold/60 shadow-2xl group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                title="Clique para adquirir o Vale Presente Oficial na Loja"
              >
                <img
                  src="/vale-presente-oficial.png"
                  alt="Vale Presente Fisiomassagem Studio Icaraí Niterói RJ"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Action Banner Over Image */}
                <div className="absolute bottom-4 right-4 bg-plum/90 backdrop-blur-md px-4 py-2 rounded-full border border-gold/60 shadow-luxury flex items-center gap-2 group-hover:bg-gold group-hover:text-plum text-white transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold tracking-wide">
                    Clique na imagem para comprar →
                  </span>
                </div>
              </a>

              {/* Delivery pill */}
              <div className="mt-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-gold/30 flex items-center justify-around text-xs text-gold-light text-center">
                <span>📱 Envio Digital Imediato</span>
                <span>•</span>
                <span>🎁 Opção Envelope Físico</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

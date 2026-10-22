import React from 'react'
import { ArrowRight, Heart, Sparkles, ShieldCheck, Award } from 'lucide-react'

export const GiftCardSection: React.FC = () => {
  return (
    <section id="valepresente" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Arte Oficial Completa Enviada pelo Cliente */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#3E1A22] bg-[#2E0B14]">
          <img 
            src="/client-assets/vale-presente.jpg" 
            alt="Vale Presente Oficial Fisiomassagem Studio - Icaraí Niterói RJ" 
            className="w-full h-auto object-cover select-none"
          />

          {/* Botão Interativo Sobreposto ao 'QUERO PRESENTEAR' */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full pt-[28%] sm:pt-[24%] px-[8%] text-center">
              <a
                href="https://loja.fisiomassagem.com.br/produtos/corpo-harmonia-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#B38738] hover:bg-[#C89B48] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>QUERO PRESENTEAR</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

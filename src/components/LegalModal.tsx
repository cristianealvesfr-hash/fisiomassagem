import React from 'react'
import { ShieldCheck, Clock, Calendar, AlertCircle, FileText, Lock, ChevronLeft, ArrowLeft } from 'lucide-react'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: 'termos' | 'privacidade'
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab = 'termos' }) => {
  const [activeTab, setActiveTab] = React.useState<'termos' | 'privacidade'>(initialTab)

  React.useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab, isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gold/40 overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="bg-plum p-6 text-white flex items-center justify-between border-b border-gold/30">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gold-light transition-colors"
              aria-label="Voltar"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Termos de Uso & Políticas de Privacidade
              </h2>
              <p className="text-xs text-cream-200 mt-0.5">
                Fisiomassagem Studio • Icaraí, Niterói RJ • Em conformidade com a LGPD
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-cream-300 hover:text-white text-xs font-semibold px-4 py-2 rounded-full border border-gold/30 hover:bg-white/10 transition-colors"
          >
            Fechar
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-cream-100 p-3 border-b border-gold/20 flex gap-2">
          <button
            onClick={() => setActiveTab('termos')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'termos'
                ? 'bg-plum text-white shadow-sm'
                : 'text-charcoal hover:bg-white/80'
            }`}
          >
            <Clock className="w-4 h-4 text-gold" />
            <span>Regras de Agendamento, Reagendamento & Validade</span>
          </button>

          <button
            onClick={() => setActiveTab('privacidade')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'privacidade'
                ? 'bg-plum text-white shadow-sm'
                : 'text-charcoal hover:bg-white/80'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Privacidade, LGPD & Cookies</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-charcoal leading-relaxed text-sm sm:text-base">
          
          {activeTab === 'termos' ? (
            <div className="space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-gold-dark">
                  Políticas Oficiais de Atendimento
                </span>
                <h3 className="font-serif text-2xl font-bold text-plum mt-1">
                  Termos de Uso, Prazos de Validade e Agendamento
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                  Para mantermos a excelência do ambiente com total silêncio, acolhimento exclusivo e respeito à agenda dos nossos terapeutas e clientes, aplicam-se as seguintes condições:
                </p>
              </div>

              {/* 1. Validade das Compras */}
              <div className="p-5 rounded-2xl bg-cream-50 border border-gold/30 space-y-3">
                <div className="flex items-center gap-2 text-plum font-serif text-lg font-bold">
                  <Calendar className="w-5 h-5 text-gold" />
                  <h4>1. Prazos de Validade para Compras pelo Site / Vouchers</h4>
                </div>
                
                <div className="space-y-2 text-xs sm:text-sm text-charcoal">
                  <div className="p-3 bg-white rounded-xl border border-cream-300 flex items-center justify-between">
                    <span>• Compra de <strong>até 2 tratamentos</strong>:</span>
                    <strong className="text-plum bg-cream-100 px-3 py-1 rounded-lg">30 dias corridos</strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-cream-300 flex items-center justify-between">
                    <span>• Compra de <strong>3 a 6 tratamentos</strong>:</span>
                    <strong className="text-plum bg-cream-100 px-3 py-1 rounded-lg">60 dias corridos</strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-cream-300 flex items-center justify-between">
                    <span>• Compra de <strong>7 a 10 tratamentos</strong>:</span>
                    <strong className="text-plum bg-cream-100 px-3 py-1 rounded-lg">90 dias corridos</strong>
                  </div>
                </div>
                <p className="text-[11px] text-charcoal-muted italic">
                  *Os prazos contam-se a partir da data de confirmação do pagamento.
                </p>
              </div>

              {/* 2. Reagendamento & Comunicação Prévia */}
              <div className="p-5 rounded-2xl bg-cream-50 border border-gold/30 space-y-3">
                <div className="flex items-center gap-2 text-plum font-serif text-lg font-bold">
                  <Clock className="w-5 h-5 text-gold" />
                  <h4>2. Política de Reagendamento de Sessões</h4>
                </div>
                
                <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></span>
                    <span>O cliente pode reagendar <strong>até três (3) vezes</strong> o mesmo tratamento.</span>
                  </li>
                  
                  <li className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 font-medium">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>OBSERVAÇÃO IMPORTANTE:</strong> Para todo e qualquer tipo de reagendamento, precisamos de uma comunicação formal com no mínimo <strong>24 horas de antecedência</strong>. Esse tempo hábil é indispensável para que possamos contactar e relocar outro cliente no horário destinado ao seu atendimento.
                    </div>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></span>
                    <span className="text-rose-900 font-semibold">
                      O não comparecimento sem aviso prévio ou a não comunicação com a antecedência mínima de 24 horas implica na perda automática da sessão (tratamento).
                    </span>
                  </li>

                  <li className="flex items-start gap-2 p-3 bg-white rounded-xl border border-gold/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                    <span>
                      <strong>Ressalva médica:</strong> Em caso de imprevisto de saúde comprovado mediante apresentação de atestado médico com laudo discriminando a impossibilidade de comparecimento, o reagendamento será concedido sem ônus.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3. Pontualidade e Tolerância de Atraso */}
              <div className="p-5 rounded-2xl bg-cream-50 border border-gold/30 space-y-3">
                <div className="flex items-center gap-2 text-plum font-serif text-lg font-bold">
                  <AlertCircle className="w-5 h-5 text-gold" />
                  <h4>3. Política de Pontualidade & Atrasos</h4>
                </div>

                <p className="text-xs sm:text-sm text-charcoal">
                  Para assegurar o bem-estar e o respeito a todos os clientes com horários subsequentes marcados:
                </p>

                <div className="p-3 bg-white rounded-xl border border-gold/20 text-xs sm:text-sm text-charcoal">
                  <strong>Atrasos superiores a 15 minutos</strong> serão abatidos no tempo total do tratamento contratado, a fim de não interferir nos atendimentos dos clientes agendados posteriormente.
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-gold-dark">
                  Segurança, Confidencialidade e LGPD
                </span>
                <h3 className="font-serif text-2xl font-bold text-plum mt-1">
                  Política de Privacidade & Cookies
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                  A Fisiomassagem Studio valoriza a sua privacidade. Esta política descreve como tratamos e protegemos seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
                </p>
              </div>

              {/* 1. Coleta e Finalidade */}
              <div className="p-5 rounded-2xl bg-cream-50 border border-gold/30 space-y-3">
                <h4 className="font-serif text-lg font-bold text-plum flex items-center gap-2">
                  <Lock className="w-5 h-5 text-gold" />
                  1. Coleta de Dados e Finalidade
                </h4>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                  Coletamos apenas informações estritamente necessárias para prestação dos serviços de saúde e estética:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal pl-4 list-disc">
                  <li><strong>Dados de contato</strong>: Nome, telefone/WhatsApp e e-mail para agendamento, confirmação de horários e envio de vouchers.</li>
                  <li><strong>Dados de saúde (Anamnese)</strong>: Informações sobre histórico osteomuscular, cirurgias prévias e restrições clínicas, coletadas exclusivamente para garantir a segurança biológica do tratamento, sob sigilo profissional do fisioterapeuta responsável.</li>
                </ul>
              </div>

              {/* 2. Direitos do Titular (LGPD) */}
              <div className="p-5 rounded-2xl bg-cream-50 border border-gold/30 space-y-3">
                <h4 className="font-serif text-lg font-bold text-plum flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  2. Seus Direitos conforme a LGPD
                </h4>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                  Você tem o direito de solicitar a qualquer momento:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal pl-4 list-disc">
                  <li>Confirmação da existência de tratamento e acesso aos seus dados.</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                  <li>Eliminação dos dados pessoais tratados mediante consentimento, respeitados os prazos legais de guarda de prontuários clínicos exigidos pelos órgãos de fiscalização de saúde.</li>
                </ul>
              </div>

              {/* 3. Política de Cookies */}
              <div className="p-5 rounded-2xl bg-cream-50 border border-gold/30 space-y-3">
                <h4 className="font-serif text-lg font-bold text-plum flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gold" />
                  3. Política de Cookies e Tecnologias de Navegação
                </h4>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                  Utilizamos cookies essenciais para o correto funcionamento da plataforma, melhoria de velocidade de carregamento e medição estatística anônima de tráfego (Google Analytics). Você pode configurar ou desativar o uso de cookies nas preferências do seu navegador web a qualquer momento.
                </p>
              </div>

              {/* 4. Contato do Encarregado de Dados (DPO) */}
              <div className="p-4 rounded-xl bg-white border border-gold/25 text-xs text-charcoal flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <strong>Canal de Privacidade & LGPD:</strong>
                  <p className="text-charcoal-muted mt-0.5">Dúvidas sobre seus dados ou solicitações de exclusão?</p>
                </div>
                <a
                  href="https://wa.me/5521985683222?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20a%20pol%C3%ADtica%20de%20privacidade%20e%20meus%20dados%20conforme%20a%20LGPD."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-plum text-gold-light hover:bg-plum-dark px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-colors"
                >
                  Falar com o Studio no WhatsApp
                </a>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Action */}
        <div className="bg-cream-100 p-4 border-t border-gold/20 flex items-center justify-between">
          <span className="text-xs text-charcoal-muted">
            Fisiomassagem Studio • Icaraí, Niterói RJ
          </span>
          <button
            onClick={onClose}
            className="bg-gold hover:bg-gold-amber text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-sm"
          >
            Entendi e Concordo
          </button>
        </div>

      </div>
    </div>
  )
}

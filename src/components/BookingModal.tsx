import React, { useState } from 'react'
import { X, Calendar, Clock, User, Phone, Sparkles, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Day Spa Meu Momento')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${name}. Gostaria de solicitar agendamento na Fisiomassagem Studio Icaraí:\n\n• Serviço: ${service}\n• Período Preferido: ${preferredPeriod} (${preferredDate || 'A combinar'})\n• Telefone: ${phone}\n\nPodem me confirmar a disponibilidade?`
    window.open(getWhatsAppUrl(msg), '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-gold/40 shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-plum p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gold-light hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atendimento Exclusivo</span>
          </div>

          <h3 className="font-serif text-2xl font-bold">
            Agendamento de Sessão
          </h3>
          <p className="text-xs text-cream-200 mt-1">
            Fisiomassagem Studio • Icaraí, Niterói RJ
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-plum mb-1.5">
              Seu Nome Completo
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gold-dark absolute left-3 top-3" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Mariana Silva"
                className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gold/30 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-plum"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-plum mb-1.5">
              WhatsApp com DDD
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gold-dark absolute left-3 top-3" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(21) 99999-9999"
                className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gold/30 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-plum"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-plum mb-1.5">
              Experiência Desejada
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full text-sm px-3 py-2.5 rounded-xl border border-gold/30 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-plum"
            >
              <optgroup label="Day Spa">
                <option value="Day Spa Meu Momento">Day Spa Meu Momento</option>
                <option value="Day Spa Renascer">Day Spa Renascer</option>
                <option value="Day Spa Aniversário">Day Spa Aniversário</option>
                <option value="Day Spa Casal">Day Spa Casal</option>
                <option value="Day Spa Premium">Day Spa Premium</option>
                <option value="Day Spa Luxo">Day Spa Luxo</option>
              </optgroup>
              <optgroup label="Massagens & Terapias">
                <option value="Massagem Relaxante">Massagem Relaxante</option>
                <option value="Massagem Terapêutica Miofascial">Massagem Terapêutica Miofascial</option>
                <option value="Massagem Desportiva">Massagem Desportiva</option>
                <option value="Massagem com Pedras Quentes">Massagem com Pedras Quentes</option>
                <option value="Drenagem Linfática Corporal/Pós-Op">Drenagem Linfática Corporal/Pós-Op</option>
                <option value="Fisioterapia Traumato-Ortopédica">Fisioterapia Traumato-Ortopédica</option>
                <option value="Acupuntura & Terapias Orientais">Acupuntura & Terapias Orientais</option>
                <option value="Vale Presente Especial">Vale Presente Especial</option>
              </optgroup>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-plum mb-1.5">
                Data Preferida
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-gold/30 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-plum"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-plum mb-1.5">
                Turno
              </label>
              <select
                value={preferredPeriod}
                onChange={(e) => setPreferredPeriod(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-gold/30 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-plum"
              >
                <option value="Manhã (08h às 12h)">Manhã</option>
                <option value="Tarde (12h às 17h)">Tarde</option>
                <option value="Noite (17h às 20h)">Noite</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Enviar Solicitação pelo WhatsApp</span>
            </button>
            <p className="text-[11px] text-charcoal-light text-center mt-2">
              Você será direcionado para o atendimento direto com nossa recepcionista.
            </p>
          </div>
        </form>

      </div>
    </div>
  )
}

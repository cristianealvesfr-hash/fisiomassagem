import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = "5521985683222"
export const WHATSAPP_DISPLAY = "(21) 98568-3222"
export const GOOGLE_MAPS_REVIEW_URL = "https://maps.app.goo.gl/nDfmkQhqY9SpC83W6"
export const INSTAGRAM_URL = "https://www.instagram.com/fisiomassagem.icarai/"
export const NUVEMSHOP_BASE_URL = "https://loja.fisiomassagem.com.br"

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

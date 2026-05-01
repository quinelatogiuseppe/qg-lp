// Centralized site config — replace WHATSAPP_NUMBER with the real one (digits only, with country code).
export const WHATSAPP_NUMBER = "5500000000000";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  generic: "Olá, quero falar com um especialista da Quinelato Giuseppe.",
  gmb: "Olá! Quero o plano de Dominação no Google Meu Negócio da Quinelato Giuseppe.",
  ads: "Olá! Quero agendar o diagnóstico de Tráfego Pago com a Quinelato Giuseppe.",
  diag: "Olá! Quero agendar um Diagnóstico Estratégico com a Quinelato Giuseppe.",
};

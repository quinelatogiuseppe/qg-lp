import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Reveal } from "./Reveal";

const QA = [
  {
    q: "Como a Quinelato Giuseppe faz o tráfego pago?",
    a: "De forma 100% personalizada. O processo começa obrigatoriamente com uma reunião de diagnóstico no Google Meet para entender a fundo o seu modelo de negócios.",
  },
  {
    q: "Por que preciso investir por 6 meses no Google Meu Negócio?",
    a: "A construção de autoridade digital leva tempo. O plano de 6 meses (R$ 2.300,00) permite a criação da ficha e a otimização mensal contínua, período necessário para o Google posicionar sua empresa no topo.",
  },
  {
    q: "Qualquer empresa pode rodar tráfego pago?",
    a: "Não. Avaliamos sua presença digital antes. Se a empresa não tiver um posicionamento mínimo, o tráfego pode gerar o efeito reverso.",
  },
];

export const FAQ = () => (
  <section id="faq" className="relative py-28 sm:py-36">
    <div className="container">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Reveal as="div" className="mb-5 text-[11px] uppercase tracking-[0.32em] text-gold">
            Perguntas frequentes
          </Reveal>
          <Reveal as="h2" delay={100} className="font-sans text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-tightest">
            Antes de você{" "}
            <span className="font-display italic font-medium text-gradient-gold">decidir</span>.
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-14">
          <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
            {QA.map((item, idx) => (
              <AccordionPrimitive.Item
                key={idx}
                value={`item-${idx}`}
                className="group overflow-hidden rounded-2xl glass transition-colors duration-300 hover:border-gold/40 data-[state=open]:border-gold/50"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-base font-medium text-foreground transition-colors sm:px-8 sm:text-lg [&[data-state=open]>div>svg]:rotate-45">
                    <span>{item.q}</span>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform">
                      <Plus className="h-4 w-4 transition-transform duration-300" strokeWidth={1.8} />
                    </div>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-7 sm:px-8">
                    <div className="mb-4 h-px w-full bg-foreground/10" />
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </div>
  </section>
);

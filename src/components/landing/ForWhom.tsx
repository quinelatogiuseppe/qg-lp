import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const FOR = [
  "Empresas com operação validada e ticket médio relevante.",
  "Quem entende que reputação digital é construída no longo prazo.",
  "Negócios que querem escalar com previsibilidade, não com sorte.",
  "Quem está disposto a fazer um diagnóstico real antes de investir.",
];

const NOT_FOR = [
  "Quem busca fórmulas mágicas ou resultado em 7 dias.",
  "Empresas em busca do menor preço, não do melhor retorno.",
  "Quem quer terceirizar o problema sem participar da estratégia.",
  "Negócios que não estão prontos para uma operação profissional.",
];

export const ForWhom = () => (
  <section id="para-quem" className="relative py-28 sm:py-36">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal as="div" className="mb-5 text-[11px] uppercase tracking-[0.32em] text-gold">
          Critério editorial
        </Reveal>
        <Reveal as="h2" delay={100} className="font-sans text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-tightest">
          Para quem isso é{" "}
          <span className="font-display italic font-medium text-gradient-gold">e não é</span>.
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl glass p-8 sm:p-10">
            <div className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold">
              <Check className="h-3 w-3" strokeWidth={2.4} /> Para quem é
            </div>
            <ul className="space-y-4">
              {FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="h-full rounded-3xl glass p-8 sm:p-10">
            <div className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              <X className="h-3 w-3" strokeWidth={2.4} /> Para quem NÃO é
            </div>
            <ul className="space-y-4">
              {NOT_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/20" />
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

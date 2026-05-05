import { Reveal } from "./Reveal";
import { Search, LayoutGrid, Award, Gem } from "lucide-react";

const STEPS = [
  {
    n: "01",
    letter: "R",
    icon: Search,
    title: "Raiz",
    text: "Diagnóstico profundo do perfil e identificação dos fatores que impedem o negócio de aparecer no Google.",
  },
  {
    n: "02",
    letter: "E",
    icon: LayoutGrid,
    title: "Estrutura",
    text: "Otimização completa do Google Business Profile para gerar confiança, relevância e profissionalismo.",
  },
  {
    n: "03",
    letter: "A",
    icon: Award,
    title: "Autoridade",
    text: "Construção de reputação com avaliações, conteúdo e sinais locais que comprovam excelência.",
  },
  {
    n: "04",
    letter: "L",
    icon: Gem,
    title: "Lapidação",
    text: "Ajustes contínuos para subir no ranking e sustentar crescimento previsível mês a mês.",
  },
];

export const HowItWorks = () => (
  <section id="processo" className="relative py-28 sm:py-36">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal as="div" className="mb-5 text-[11px] uppercase tracking-[0.32em] text-gold">
          Método R.E.A.L
        </Reveal>
        <Reveal as="h2" delay={100} className="font-sans text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-tightest">
          Um processo desenhado para{" "}
          <span className="font-display italic font-medium text-gradient-gold">
            escalar com base
          </span>
          .
        </Reveal>
        <Reveal as="div" delay={180} className="mt-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Raiz <span className="text-gold/60">·</span> Estrutura{" "}
          <span className="text-gold/60">·</span> Autoridade{" "}
          <span className="text-gold/60">·</span> Lapidação
        </Reveal>
      </div>

      <div className="relative mt-20">
        {/* Connector line (desktop) */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[3.25rem] hidden h-px md:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.5) 15%, hsl(var(--gold) / 0.5) 85%, transparent)",
          }}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120} className="relative">
              <div className="relative flex flex-col items-start">
                {/* Letter badge */}
                <div className="relative z-10 mb-6 flex h-[6.5rem] w-[6.5rem] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-background" />
                  <div className="absolute inset-0 rounded-full border border-gold/40" />
                  <div className="relative flex h-full w-full flex-col items-center justify-center">
                    <span className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground">
                      {step.n}
                    </span>
                    <span className="font-display italic text-4xl leading-none text-gold">
                      {step.letter}
                    </span>
                    <step.icon className="mt-1 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

import { Reveal } from "./Reveal";
import { useTilt } from "@/hooks/use-tilt";

const STEPS = [
  {
    n: "01",
    letter: "R",
    title: "Raiz",
    text: "Diagnóstico profundo do perfil e identificação dos fatores que impedem o negócio de aparecer no Google.",
  },
  {
    n: "02",
    letter: "E",
    title: "Estrutura",
    text: "Otimização completa do Google Business Profile para gerar confiança, relevância e profissionalismo.",
  },
  {
    n: "03",
    letter: "A",
    title: "Autoridade",
    text: "Construção de reputação com avaliações, conteúdo e sinais locais que comprovam excelência.",
  },
  {
    n: "04",
    letter: "L",
    title: "Lapidação",
    text: "Ajustes contínuos para subir no ranking e sustentar crescimento previsível mês a mês.",
  },
];

const TiltCard = ({ step, i }: { step: (typeof STEPS)[number]; i: number }) => {
  const ref = useTilt<HTMLDivElement>(8);
  return (
    <Reveal delay={i * 120}>
      <div
        ref={ref}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="group relative h-full overflow-hidden rounded-2xl glass border border-foreground/10 p-7 sm:p-8 transition-[border-color,box-shadow] duration-300 hover:border-gold/40 hover:shadow-gold-soft"
      >
        {/* Watermark letter */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-5 top-2 select-none font-display italic leading-none text-[5.5rem] sm:text-[6.5rem] text-gold/15 transition-colors duration-300 group-hover:text-gold/30"
        >
          {step.letter}
        </span>

        <div className="relative">
          <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Etapa {step.n}
          </div>
          <h3 className="mt-6 font-display text-3xl font-medium text-foreground">
            {step.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {step.text}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

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

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <TiltCard key={step.n} step={step} i={i} />
        ))}
      </div>
    </div>
  </section>
);

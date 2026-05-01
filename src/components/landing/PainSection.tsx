import { Reveal } from "./Reveal";

export const PainSection = () => (
  <section className="relative py-32 sm:py-40">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal as="div" className="mb-6 text-[11px] uppercase tracking-[0.32em] text-gold">
          ⟶ Verdade desconfortável
        </Reveal>
        <Reveal as="h2" delay={100} className="font-sans text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-tightest text-foreground">
          Nem toda empresa está pronta para{" "}
          <span className="font-display italic font-medium text-gradient-gold">escalar</span>.
          <br />
          Nós sabemos disso.
        </Reveal>
        <Reveal as="p" delay={300} className="mx-auto mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Injetar dinheiro em tráfego sem uma presença mínima é{" "}
          <span className="text-foreground">queimar caixa</span>: o cliente clica no anúncio,
          procura sua empresa no Google, não sente confiança e compra do seu concorrente.
          <br className="hidden sm:block" />
          <span className="mt-4 block text-foreground/90">
            Nós evitamos que isso aconteça preparando seu negócio para a escala de verdade.
          </span>
        </Reveal>

        <Reveal delay={500} className="mx-auto mt-14 h-px w-40 hairline-gold" />
      </div>
    </div>
  </section>
);

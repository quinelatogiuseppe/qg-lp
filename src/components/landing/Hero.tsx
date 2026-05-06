import { ArrowRight } from "lucide-react";
import { ShaderBackground } from "./ShaderBackground";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32">
      <AuroraBackground />

      <div className="container relative z-10">
        <Reveal as="div" className="mx-auto max-w-4xl text-center">
          {/* H1 */}
          <h1 className="font-sans text-[clamp(2.4rem,6.4vw,5.5rem)] font-bold leading-[0.98] tracking-tightest text-foreground">
            O tráfego pago não vai{" "}
            <span className="font-display italic font-medium text-foreground/80">salvar</span>{" "}
            a sua empresa.
            <br />
            <span className="mt-2 inline-block">
              Uma presença digital de{" "}
              <span className="font-display italic font-medium text-gradient-gold">excelência</span>
              <span className="text-gold">,</span> sim.
            </span>
          </h1>

          {/* Subtitle */}
          <Reveal delay={200} as="p" className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dominamos o Google e estruturamos a sua base digital{" "}
            <span className="text-foreground">antes</span> de colocar seu dinheiro em anúncios.
            Estratégia real para negócios reais.
          </Reveal>

          {/* CTAs */}
          <Reveal delay={400} as="div" className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href={waLink(WA_MESSAGES.generic)} target="_blank" rel="noopener">
              Falar com um Especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="#processo" variant="ghost" magnetic={false} glow={false}>
              Como funciona
            </MagneticButton>
          </Reveal>

          {/* Trust line */}
          <Reveal delay={600} as="div" className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">
            <span>Diagnóstico via Google Meet</span>
            <span className="h-1 w-1 rounded-full bg-gold/60" />
            <span>Operação 100% personalizada</span>
            <span className="h-1 w-1 rounded-full bg-gold/60" />
            <span>Sem pacotes prontos</span>
          </Reveal>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/15 p-1.5">
          <span className="h-2 w-px animate-pulse bg-gold" />
        </div>
      </div>
    </section>
  );
};

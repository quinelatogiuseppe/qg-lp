import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";

const ShaderBackground = lazy(() =>
  import("./ShaderBackground").then((m) => ({ default: m.ShaderBackground })),
);

/** Static gold-tinted background for mobile (no WebGL, no Three.js). */
const StaticGoldBackground = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-background" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 35%, hsl(39 47% 56% / 0.22), transparent 65%), radial-gradient(ellipse 60% 40% at 50% 80%, hsl(36 45% 42% / 0.18), transparent 70%)",
      }}
    />
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    <div className="grain" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 50%, hsl(0 0% 0% / 0.6) 100%)",
      }}
    />
  </div>
);

export const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 769px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32">
      {isDesktop ? (
        <Suspense fallback={<StaticGoldBackground />}>
          <ShaderBackground />
        </Suspense>
      ) : (
        <StaticGoldBackground />
      )}

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
    </section>
  );
};

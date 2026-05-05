import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import { waLink, WA_MESSAGES } from "@/lib/site";

export const Footer = () => (
  <footer className="relative overflow-hidden pb-32 pt-24 sm:pb-12 sm:pt-40">
    {/* CTA aurora */}
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80%]">
      <div
        className="absolute left-1/2 top-0 h-[60vh] w-[80vh] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(39 47% 56% / 0.25), transparent 70%)" }}
      />
    </div>

    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal as="div" className="mb-5 text-[11px] uppercase tracking-[0.32em] text-gold">
          Próximo passo
        </Reveal>
        <Reveal as="h2" delay={100} className="font-sans text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tightest">
          Vamos descobrir se sua empresa está pronta para{" "}
          <span className="font-display italic font-medium text-gradient-gold">crescer com base</span>.
        </Reveal>
        <Reveal as="p" delay={250} className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          Conversa direta, sem promessas vazias. Diagnóstico estratégico via Google Meet e WhatsApp.
        </Reveal>

        <Reveal delay={400} className="mt-12 flex justify-center">
          <MagneticButton href={waLink(WA_MESSAGES.diag)} target="_blank" rel="noopener" className="!px-9 !py-5 !text-sm">
            Agendar Diagnóstico Estratégico
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 h-px w-full max-w-4xl hairline-gold" />

      <div className="mt-10 flex flex-col items-center justify-center gap-6">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Quinelato Giuseppe</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:inline-block" />
          <span>Marketing Digital</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:inline-block" />
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </div>
  </footer>
);

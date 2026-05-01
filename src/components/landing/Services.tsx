import { ArrowUpRight, MapPin, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";

export const Services = () => (
  <section id="servicos" className="relative py-28 sm:py-36">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal as="div" className="mb-5 text-[11px] uppercase tracking-[0.32em] text-gold">
          Nossos serviços
        </Reveal>
        <Reveal as="h2" delay={100} className="font-sans text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-tightest">
          Dois caminhos.{" "}
          <span className="font-display italic font-medium text-gradient-gold">Uma única filosofia</span>.
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <ServiceCard
          icon={MapPin}
          tag="Plano · 6 meses"
          title="Dominação no Google Meu Negócio"
          description="O plano definitivo de 6 meses para tornar sua empresa a referência principal nas buscas locais. É o tempo exato para o algoritmo do Google reconhecer sua relevância."
          investmentLabel="Investimento"
          investmentMain="R$ 2.300"
          investmentSub="por semestre · em até 6x"
          breakdown={[
            { label: "Criação / reestruturação da ficha", value: "R$ 500" },
            { label: "Otimização contínua", value: "R$ 300/mês" },
          ]}
          ctaLabel="Quero esse plano"
          ctaHref={waLink(WA_MESSAGES.gmb)}
        />
        <ServiceCard
          icon={Target}
          tag="Personalizado"
          title="Tráfego Pago Personalizado"
          description='Não vendemos "pacotes prontos". O tráfego exige inteligência de negócio. Nossa primeira etapa é sempre um diagnóstico via Meet para entender sua operação a fundo. Só escalamos o que está pronto para crescer.'
          investmentLabel="Investimento"
          investmentMain="Sob diagnóstico"
          investmentSub="definido após reunião estratégica"
          breakdown={[
            { label: "Diagnóstico via Google Meet", value: "Etapa inicial" },
            { label: "Operação personalizada", value: "Sob demanda" },
          ]}
          ctaLabel="Agendar diagnóstico"
          ctaHref={waLink(WA_MESSAGES.ads)}
        />
      </div>
    </div>
  </section>
);

interface ServiceCardProps {
  icon: typeof MapPin;
  tag: string;
  title: string;
  description: string;
  investmentLabel: string;
  investmentMain: string;
  investmentSub: string;
  breakdown: { label: string; value: string }[];
  ctaLabel: string;
  ctaHref: string;
}

const ServiceCard = ({
  icon: Icon,
  tag,
  title,
  description,
  investmentLabel,
  investmentMain,
  investmentSub,
  breakdown,
  ctaLabel,
  ctaHref,
}: ServiceCardProps) => (
  <Reveal className="group relative">
    {/* hover glow halo */}
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-px rounded-[calc(var(--radius)+8px)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--gold) / 0.35), transparent 70%)" }}
    />

    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl glass p-8 transition-all duration-500 will-change-transform group-hover:-translate-y-1 group-hover:border-gold/50 sm:p-10">
      {/* top hairline */}
      <div className="absolute inset-x-8 top-0 h-px hairline-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <header className="flex items-start justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
          <Icon className="h-3 w-3" strokeWidth={1.8} /> {tag}
        </div>
      </header>

      <h3 className="mt-8 font-sans text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{description}</p>

      <div className="my-8 h-px w-full bg-foreground/10" />

      {/* Investment block */}
      <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
        <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{investmentLabel}</div>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="font-display italic text-4xl text-gradient-gold sm:text-5xl">{investmentMain}</span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{investmentSub}</div>

        <ul className="mt-5 space-y-2">
          {breakdown.map((b) => (
            <li key={b.label} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{b.label}</span>
              <span className="font-medium text-foreground">{b.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener"
        className="mt-8 inline-flex items-center justify-between rounded-full border border-foreground/15 bg-foreground/[0.02] px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-gold/60 hover:bg-gold/5 hover:text-gold"
      >
        {ctaLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </article>
  </Reveal>
);

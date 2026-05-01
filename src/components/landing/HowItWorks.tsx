import { Reveal } from "./Reveal";
import { Compass, LayoutGrid, LineChart, Rocket } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Compass,
    title: "Diagnóstico",
    text: "Reunião estratégica via Google Meet para entender sua operação, ticket e maturidade digital.",
  },
  {
    n: "02",
    icon: LayoutGrid,
    title: "Estruturação",
    text: "Construímos a base: ficha do Google Meu Negócio, autoridade local e gatilhos de confiança.",
  },
  {
    n: "03",
    icon: LineChart,
    title: "Otimização",
    text: "Ajustes mensais contínuos guiados por dados — relevância, conteúdo e posicionamento.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Escala",
    text: "Com a base sólida, ativamos o tráfego pago personalizado para multiplicar resultado.",
  },
];

export const HowItWorks = () => (
  <section id="processo" className="relative py-28 sm:py-36">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal as="div" className="mb-5 text-[11px] uppercase tracking-[0.32em] text-gold">
          O método
        </Reveal>
        <Reveal as="h2" delay={100} className="font-sans text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-tightest">
          Um processo desenhado para{" "}
          <span className="font-display italic font-medium text-gradient-gold">escalar com base</span>.
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
                {/* Number badge */}
                <div className="relative z-10 mb-6 flex h-[6.5rem] w-[6.5rem] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-background" />
                  <div className="absolute inset-0 rounded-full border border-gold/40" />
                  <div className="relative flex h-full w-full flex-col items-center justify-center">
                    <span className="font-display italic text-3xl text-gold">{step.n}</span>
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

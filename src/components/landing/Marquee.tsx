const PHRASE = "A consistência é a assinatura da excelência";

export const Marquee = () => {
  const items = Array.from({ length: 8 });
  return (
    <section aria-label="Princípio Quinelato Giuseppe" className="relative overflow-hidden border-y border-foreground/5 py-10">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {items.concat(items).map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-sans text-[clamp(1.2rem,3vw,2rem)] font-light tracking-tight text-foreground/80">
              A consistência é a{" "}
              <span className="font-display italic font-medium text-gradient-gold">assinatura</span>{" "}
              da excelência
            </span>
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-gold/70" />
          </div>
        ))}
      </div>
      <span className="sr-only">{PHRASE}</span>
    </section>
  );
};

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "full" | "monogram";
}

/** Tipographic wordmark "Quinelato Giuseppe" + monograma QG dourado.
 *  Substituível assim que o usuário enviar o logo SVG/PNG oficial. */
export const Logo = ({ className, variant = "full" }: Props) => {
  if (variant === "monogram") {
    return (
      <div className={cn("inline-flex items-center justify-center", className)} aria-label="Quinelato Giuseppe">
        <Monogram />
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-3", className)} aria-label="Quinelato Giuseppe">
      <Monogram />
      <div className="leading-none">
        <div className="font-display italic text-[15px] tracking-tight text-foreground">
          Quinelato<span className="text-gold">·</span>Giuseppe
        </div>
        <div className="mt-1 text-[9px] uppercase tracking-[0.32em] text-muted-foreground">
          Marketing of Excellence
        </div>
      </div>
    </div>
  );
};

const Monogram = () => (
  <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/50">
    <span className="absolute inset-0 rounded-full bg-gradient-gold opacity-10" />
    <span className="font-display italic text-[15px] text-gold">QG</span>
  </span>
);

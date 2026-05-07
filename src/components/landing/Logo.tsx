import { cn } from "@/lib/utils";
import logoQG from "@/assets/logo-qg.webp";

interface Props {
  className?: string;
  variant?: "full" | "monogram";
}

/** Logotipo oficial Quinelato Giuseppe — monograma QG dourado conforme manual de marca.
 *  Tipografia: Cormorant Garamond (institucional, equivalente web ao Garamond Premier Pro)
 *  + Inter (apoio, equivalente ao Helvetica Neue do manual). */
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
        <div className="font-serif text-[17px] font-medium tracking-[0.04em] text-foreground">
          Quinelato Giuseppe
        </div>
        <div className="mt-1.5 font-institutional text-[9px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
          Marketing Digital
        </div>
      </div>
    </div>
  );
};

const Monogram = () => (
  <img
    src={logoQG}
    alt="Quinelato Giuseppe — Monograma QG"
    className="h-9 w-9 select-none object-contain"
    width={36}
    height={36}
    decoding="async"
    draggable={false}
  />
);

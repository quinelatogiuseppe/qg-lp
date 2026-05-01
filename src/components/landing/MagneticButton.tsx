import { forwardRef, type AnchorHTMLAttributes } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  magnetic?: boolean;
  glow?: boolean;
}

export const MagneticButton = forwardRef<HTMLAnchorElement, Props>(
  ({ variant = "primary", magnetic = true, glow = true, className, children, ...rest }, _ref) => {
    const innerRef = useMagnetic<HTMLSpanElement>(magnetic ? 0.22 : 0);

    const base =
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300";

    const variants: Record<Variant, string> = {
      primary:
        "bg-gradient-gold text-gold-foreground shadow-gold-soft hover:shadow-gold",
      ghost:
        "border border-foreground/15 bg-foreground/[0.02] text-foreground backdrop-blur-md hover:border-gold/60 hover:text-gold",
    };

    return (
      <a
        {...rest}
        className={cn(base, variants[variant], glow && variant === "primary" && "animate-glow-pulse", className)}
      >
        <span ref={innerRef} className="relative z-10 inline-flex items-center gap-2 transition-transform duration-200">
          {children}
        </span>
        {/* shimmer */}
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 animate-shimmer"
          />
        )}
      </a>
    );
  },
);
MagneticButton.displayName = "MagneticButton";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-500 sm:px-6",
            scrolled
              ? "border-foreground/10 bg-background/70 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#top" aria-label="Quinelato Giuseppe — Início">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#processo" className="transition-colors hover:text-foreground">Processo</a>
            <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
          </nav>
          <MagneticButton
            href={waLink(WA_MESSAGES.generic)}
            target="_blank"
            rel="noopener"
            className="!px-5 !py-2.5 !text-[11px]"
            glow={false}
          >
            WhatsApp
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};

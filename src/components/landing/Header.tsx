import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#processo", label: "Processo" },
  { href: "#servicos", label: "Serviços" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#faq", label: "FAQ" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-6",
            scrolled || open
              ? "border-foreground/10 bg-background/70 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#top" aria-label="Quinelato Giuseppe — Início" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
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

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.02] text-foreground transition-colors hover:border-gold/60 hover:text-gold md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            open ? "mt-2 max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="rounded-3xl border border-foreground/10 bg-background/90 p-6 backdrop-blur-xl">
            <nav className="flex flex-col gap-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 transition-colors hover:bg-foreground/[0.03] hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <a
                href={waLink(WA_MESSAGES.generic)}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-gold-soft"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

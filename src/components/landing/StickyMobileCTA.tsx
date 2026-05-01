import { MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/site";

/** Sticky WhatsApp CTA — visible only on small screens. */
export const StickyMobileCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden">
    <div className="rounded-2xl border border-foreground/10 bg-background/80 p-2 backdrop-blur-xl">
      <a
        href={waLink(WA_MESSAGES.generic)}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-gold-foreground shadow-gold-soft"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
        Falar no WhatsApp
      </a>
    </div>
  </div>
);

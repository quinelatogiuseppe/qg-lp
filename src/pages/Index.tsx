import { lazy, Suspense } from "react";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";

// Below-the-fold sections: code-split to reduce initial JS and main-thread work.
const PainSection = lazy(() => import("@/components/landing/PainSection").then(m => ({ default: m.PainSection })));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks").then(m => ({ default: m.HowItWorks })));
const Services = lazy(() => import("@/components/landing/Services").then(m => ({ default: m.Services })));
const ForWhom = lazy(() => import("@/components/landing/ForWhom").then(m => ({ default: m.ForWhom })));
const Marquee = lazy(() => import("@/components/landing/Marquee").then(m => ({ default: m.Marquee })));
const FAQ = lazy(() => import("@/components/landing/FAQ").then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import("@/components/landing/Footer").then(m => ({ default: m.Footer })));
const StickyMobileCTA = lazy(() => import("@/components/landing/StickyMobileCTA").then(m => ({ default: m.StickyMobileCTA })));

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <PainSection />
        <HowItWorks />
        <Services />
        <ForWhom />
        <Marquee />
        <FAQ />
        <Footer />
        <StickyMobileCTA />
      </Suspense>
    </main>
  );
};

export default Index;

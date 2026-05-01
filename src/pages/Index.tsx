import { CustomCursor } from "@/components/landing/CustomCursor";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PainSection } from "@/components/landing/PainSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Services } from "@/components/landing/Services";
import { ForWhom } from "@/components/landing/ForWhom";
import { Marquee } from "@/components/landing/Marquee";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <Header />
      <Hero />
      <PainSection />
      <HowItWorks />
      <Services />
      <ForWhom />
      <Marquee />
      <FAQ />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;

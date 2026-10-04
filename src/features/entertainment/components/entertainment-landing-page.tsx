import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { CreatorsSection } from "@/features/entertainment/components/creators-section";
import { EntertainmentPartnershipSection } from "@/features/entertainment/components/entertainment-partnership-section";
import { FormatsSection } from "@/features/entertainment/components/formats-section";
import { ImmersiveHeroSection } from "@/features/entertainment/components/immersive-hero-section";
import { SiteFooter } from "@/features/entertainment/components/site-footer";
import { SiteHeader } from "@/features/entertainment/components/site-header";
import { TonightSection } from "@/features/entertainment/components/tonight-section";

export function EntertainmentLandingPage() {
  return (
    <div className="bg-vibe-bg mx-auto w-full max-w-[1440px] overflow-hidden">
      <main id="top">
        <SiteHeader />
        <ScrollReveal direction="up">
          <ImmersiveHeroSection />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <TonightSection />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <CreatorsSection />
        </ScrollReveal>
        <ScrollReveal direction="down">
          <FormatsSection />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <EntertainmentPartnershipSection />
        </ScrollReveal>
      </main>
      <ScrollReveal direction="up">
        <SiteFooter />
      </ScrollReveal>
    </div>
  );
}

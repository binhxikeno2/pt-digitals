import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { AiDiscoverySection } from "@/features/entertainment/components/ai-discovery-section";
import { FeaturedStoriesSection } from "@/features/entertainment/components/featured-stories-section";
import { HeroSection } from "@/features/entertainment/components/hero-section";
import { IpLicensingSection } from "@/features/entertainment/components/ip-licensing-section";
import { MetricsSection } from "@/features/entertainment/components/metrics-section";
import { NewsroomSection } from "@/features/entertainment/components/newsroom-section";
import { PartnershipSection } from "@/features/entertainment/components/partnership-section";
import { SiteFooter } from "@/features/entertainment/components/site-footer";
import { SiteHeader } from "@/features/entertainment/components/site-header";

export default function HomePage() {
  return (
    <div className="bg-vibe-bg mx-auto w-full max-w-[1440px] overflow-hidden">
      <main id="top">
        <SiteHeader />
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <MetricsSection />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedStoriesSection />
        </ScrollReveal>
        <ScrollReveal>
          <AiDiscoverySection />
        </ScrollReveal>
        <ScrollReveal>
          <IpLicensingSection />
        </ScrollReveal>
        <ScrollReveal>
          <NewsroomSection />
        </ScrollReveal>
        <ScrollReveal>
          <PartnershipSection />
        </ScrollReveal>
      </main>
      <ScrollReveal>
        <SiteFooter />
      </ScrollReveal>
    </div>
  );
}

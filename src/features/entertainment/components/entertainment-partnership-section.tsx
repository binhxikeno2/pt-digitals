import { PageContainer } from "@/components/layout/page-container";
import { CtaLink } from "@/features/entertainment/components/cta-link";

export function EntertainmentPartnershipSection() {
  return (
    <section id="partnership" aria-labelledby="entertainment-partnership-title" className="bg-[#1a1424] xl:h-[234px]">
      <PageContainer className="grid h-full grid-cols-1 items-center gap-6 py-10 xl:grid-cols-[804px_476px] xl:items-start xl:gap-8 xl:pt-[48px] xl:pb-0">
        <div>
          <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold">
            MAKE SOMETHING PEOPLE FEEL
          </p>
          <h2
            id="entertainment-partnership-title"
            className="font-display mt-[4px] text-[28px] leading-[50px] font-bold text-[#f8f6ff] xl:mt-[8px] xl:w-[840px] xl:text-[36px]"
          >
            Bring your next format to life.
          </h2>
          <p className="text-vibe-muted mt-[4px] text-[13px] leading-[22px] xl:w-[780px] xl:text-[15px]">
            Explore a partnership across original shows, spatial experiences
            and creator communities.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[18px] xl:items-end xl:gap-[22px] xl:pt-[30px]">
          <CtaLink
            href="mailto:hello@ptdigitals.vn"
            className="mr-8 h-12 w-full max-w-[304px] justify-start px-[22px] py-0 text-[11px]"
          >
            START A PARTNERSHIP&nbsp; →
          </CtaLink>
          <p className="text-vibe-muted w-full max-w-[444px] self-start text-[11px] leading-[22px]">
            Original shows&nbsp; • &nbsp;Spatial experiences&nbsp; •
            &nbsp;Creator communities
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

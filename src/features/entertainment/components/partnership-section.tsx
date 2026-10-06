import { PageContainer } from "@/components/layout/page-container";
import { CtaLink } from "@/features/entertainment/components/cta-link";

export function PartnershipSection() {
  return (
    <section
      id="partnership"
      data-node-id="13:2"
      aria-labelledby="partnership-title"
      className="bg-[linear-gradient(90deg,#8d3cff_0%,#5c2abd_58%,#162d24_100%)] xl:h-[440px]"
    >
      <PageContainer className="flex h-full flex-col items-center justify-center gap-6 py-16 text-center xl:py-0">
        <p
          data-node-id="13:3"
          className="flex w-[151px] justify-center rounded-full bg-[rgba(22,14,36,0.65)] px-0 py-2 text-[11px] leading-[13px] font-semibold text-[#d8ff68]"
        >
          PARTNER WITH PT Digitals
        </p>
        <h2
          data-node-id="13:5"
          id="partnership-title"
          className="font-display w-full max-w-[920px] text-4xl leading-tight font-bold text-white sm:text-5xl xl:w-[920px] xl:text-[58px] xl:leading-[61px]"
        >
          TOGETHER, CREATE
          <br />
          THE NEXT SIGNAL.
        </h2>
        <p
          data-node-id="13:6"
          className="w-full max-w-[760px] text-[16px] leading-[19px] text-[#e2d9eb] xl:w-[760px]"
        >
          Original content. Transparent rights. AI-powered smart distribution.
        </p>
        <div
          data-node-id="13:7"
          className="flex flex-wrap items-start justify-center gap-3"
        >
          <CtaLink href="mailto:legal@ptdigitals.com" className="w-[266px] px-6">
            SUBMIT PARTNERSHIP PROPOSAL&nbsp;&nbsp;→
          </CtaLink>
          <CtaLink href="#rights" variant="glass" className="w-[178px] px-6">
            EXPLORE IP CATALOG
          </CtaLink>
        </div>
      </PageContainer>
    </section>
  );
}

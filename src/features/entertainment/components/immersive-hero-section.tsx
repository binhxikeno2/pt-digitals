import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";

export function ImmersiveHeroSection() {
  return (
    <section
      aria-labelledby="immersive-title"
      className="relative overflow-hidden bg-[#1a1424] xl:h-[760px]"
    >
      <PageContainer className="grid h-full grid-cols-1 gap-10 py-12 xl:grid-cols-[620px_608px] xl:gap-[84px] xl:py-[46px]">
        <div className="flex flex-col items-start xl:pt-[22px]">
          <p className="text-vibe-lime text-[12px] leading-[22px] font-semibold">
            PT Digitals PRESENTS&nbsp; • &nbsp;LIVE CULTURE
          </p>
          <h1
            id="immersive-title"
            className="font-display mt-[24px] text-[52px] leading-[1.06] font-bold text-[#f8f6ff] sm:text-[64px] xl:mt-[36px] xl:text-[72px]"
          >
            STAGE.
            <br />
            STORIES.
            <br />
            SENSES.
          </h1>
          <p className="font-display text-vibe-purple mt-[20px] text-[20px] leading-[35px] font-semibold xl:mt-[27px] xl:text-[25px]">
            VIRTUAL WORLDS, REAL IMPULSE.
          </p>
          <p className="text-vibe-muted mt-[12px] max-w-[535px] text-[16px] leading-[1.4] xl:mt-[17px] xl:text-[18px]">
            Immersive shows, original formats and creator led worlds built for
            the way culture moves now.
          </p>
        </div>

        <article className="relative h-[584px] w-full overflow-hidden rounded-[28px] bg-[#1f142e] xl:h-[618px] xl:w-[608px]">
          <Image
            src="/figma/entertainment/beach-please-crowd-lights.jpg"
            alt="An artist on stage facing a crowd illuminated by thousands of phone lights"
            width={1280}
            height={854}
            priority
            className="absolute inset-x-0 top-0 h-[390px] w-full rounded-[24px] object-cover"
          />
          <div className="absolute inset-x-0 top-[365px] h-[299px] bg-[#130e1c]" />
          <div className="absolute top-[407px] left-7 text-[11px] leading-[22px] font-semibold text-vibe-lime">
            ●&nbsp; SPATIAL LIVE
          </div>
          <h2 className="font-display absolute top-[442px] left-7 text-[26px] leading-[42px] font-bold text-[#f8f6ff] xl:text-[30px]">
            NEON COLISEUM: VR TOUR
          </h2>
          <p className="absolute top-[490px] left-7 text-[12px] leading-[22px] text-vibe-muted xl:text-[13px]">
            Interactive reality&nbsp; • &nbsp;Live render&nbsp; • &nbsp;1.2M
            spatial nodes
          </p>
          <span className="absolute top-[548px] left-7 flex h-[34px] items-center rounded-[17px] bg-[#2e213b] px-[14px] text-[11px] leading-[22px] font-medium text-vibe-lime">
            99.4% LATENCY SYNC
          </span>
        </article>
      </PageContainer>
    </section>
  );
}

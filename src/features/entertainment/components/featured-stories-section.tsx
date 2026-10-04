import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";

export function FeaturedStoriesSection() {
  return (
    <section
      id="entertainment"
      data-node-id="9:2"
      aria-labelledby="featured-title"
      className="bg-[#0b0911] xl:h-[760px]"
    >
      <PageContainer className="flex h-full flex-col gap-[30px] py-16 xl:py-16">
        <div
          data-node-id="9:3"
          className="flex items-end justify-between gap-8 xl:h-[62px]"
        >
          <div className="flex flex-col items-start gap-[7px]">
            <p className="text-vibe-lime text-[11px] leading-[13px] font-semibold">
              NOW / TRENDING
            </p>
            <h2
              id="featured-title"
              className="font-display text-3xl font-bold text-[#f7f4fa] xl:text-[36px] xl:leading-[39px]"
            >
              Content making waves.
            </h2>
          </div>
          <a
            href="#music"
            className="text-vibe-purple focus-visible:outline-vibe-lime shrink-0 rounded-sm text-[12px] leading-[15px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 xl:w-[75px]"
          >
            VIEW ALL&nbsp; →
          </a>
        </div>

        <div
          data-node-id="9:8"
          className="grid gap-[18px] lg:grid-cols-[1.567fr_1fr] xl:h-[540px] xl:grid-cols-[790px_504px]"
        >
          <article
            data-node-id="9:9"
            className="rounded-panel-lg flex min-h-[500px] flex-col items-start justify-between overflow-hidden bg-[linear-gradient(110.09deg,#5a2ab5_0%,#a141c5_55%,#d7ff4b_100%)] px-[30px] py-7 xl:h-[540px]"
          >
            <span className="rounded-full bg-[rgba(19,15,27,0.72)] px-3 py-2 text-[11px] leading-[13px] font-semibold text-white">
              MUSIC ORIGINAL
            </span>

            <div className="w-full overflow-hidden xl:h-[262px] xl:w-[730px]">
              <Image
                src="/figma/music-artwork.svg"
                alt="Orbital artwork for Neon Afterglow"
                width={730}
                height={262}
                className="block max-w-full"
              />
            </div>

            <div className="flex flex-col items-start gap-[9px]">
              <h3 className="font-display text-3xl font-bold text-white xl:text-[42px] xl:leading-[46px]">
                NEON AFTERGLOW
              </h3>
              <p className="text-[13px] leading-4 font-medium text-[#f0eaf5]">
                Visual album • 12 tracks • AI-enhanced spatial mix
              </p>
            </div>
          </article>

          <div
            data-node-id="9:19"
            className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-1 xl:h-[540px]"
          >
            <article className="rounded-panel flex min-h-[240px] flex-col items-start justify-between overflow-hidden bg-gradient-to-r from-[#12313c] to-[#5b29a3] px-[26px] py-6 xl:h-[261px]">
              <span className="rounded-full bg-[rgba(14,10,22,0.72)] px-[10px] py-[7px] text-[10px] leading-3 font-semibold text-white">
                ENTERTAINMENT
              </span>
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-display max-w-[440px] text-[27px] leading-[29px] font-bold text-white">
                  INSIDE THE VIRTUAL STAGE UNIVERSE
                </h3>
                <p className="text-[12px] leading-[15px] text-[#d9d2e0]">
                  Experience • Culture • 8 min read
                </p>
              </div>
            </article>

            <article className="rounded-panel flex min-h-[240px] flex-col items-start justify-between overflow-hidden bg-gradient-to-r from-[#22351a] to-[#83640e] px-[26px] py-6 xl:h-[261px]">
              <span className="rounded-full bg-[rgba(14,10,22,0.72)] px-[10px] py-[7px] text-[10px] leading-3 font-semibold text-white">
                NEWSROOM
              </span>
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-display max-w-[440px] text-[27px] leading-[29px] font-bold text-white">
                  AI IS REWRITING THE RULES OF CONTENT
                </h3>
                <p className="text-[12px] leading-[15px] text-[#d9d2e0]">
                  Technology • Rights • Analysis
                </p>
              </div>
            </article>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

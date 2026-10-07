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
              THIS WEEK
            </p>
            <h2
              id="featured-title"
              className="font-display text-3xl font-bold text-[#f7f4fa] xl:text-[36px] xl:leading-[39px]"
            >
              What people are listening to.
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
            className="rounded-panel-lg relative flex min-h-[500px] flex-col items-start justify-between overflow-hidden bg-[#151018] px-[30px] py-7 xl:h-[540px]"
          >
            <Image
              src="/sing.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 790px, (min-width: 1024px) 61vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,9,18,0.18)_0%,rgba(12,9,18,0.32)_42%,rgba(12,9,18,0.88)_100%)]" />

            <span className="relative z-10 rounded-full bg-[rgba(19,15,27,0.72)] px-3 py-2 text-[11px] leading-[13px] font-semibold text-white">
              NEW MUSIC
            </span>

            <div className="relative z-10 flex flex-col items-start gap-[9px]">
              <h3 className="font-display text-3xl font-bold text-white xl:text-[42px] xl:leading-[46px]">
                LATE NIGHT SIGNALS
              </h3>
              <p className="text-[13px] leading-4 font-medium text-[#f0eaf5]">
                12 tracks • mellow pop • updated weekly
              </p>
            </div>
          </article>

          <div
            data-node-id="9:19"
            className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-1 xl:h-[540px]"
          >
            <article className="rounded-panel flex min-h-[240px] flex-col items-start justify-between overflow-hidden bg-gradient-to-r from-[#12313c] to-[#5b29a3] px-[26px] py-6 xl:h-[261px]">
              <span className="rounded-full bg-[rgba(14,10,22,0.72)] px-[10px] py-[7px] text-[10px] leading-3 font-semibold text-white">
                STUDIO NOTES
              </span>
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-display max-w-[440px] text-[27px] leading-[29px] font-bold text-white">
                  A live session, from first take to final mix
                </h3>
                <p className="text-[12px] leading-[15px] text-[#d9d2e0]">
                  Behind the scenes • 5 min read
                </p>
              </div>
            </article>

            <article className="rounded-panel flex min-h-[240px] flex-col items-start justify-between overflow-hidden bg-gradient-to-r from-[#22351a] to-[#83640e] px-[26px] py-6 xl:h-[261px]">
              <span className="rounded-full bg-[rgba(14,10,22,0.72)] px-[10px] py-[7px] text-[10px] leading-3 font-semibold text-white">
                RIGHTS BASICS
              </span>
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-display max-w-[440px] text-[27px] leading-[29px] font-bold text-white">
                  What artists should check before licensing
                </h3>
                <p className="text-[12px] leading-[15px] text-[#d9d2e0]">
                  Music rights • Practical guide
                </p>
              </div>
            </article>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { CtaLink } from "@/features/entertainment/components/cta-link";

const liveSignalBars = [34, 52, 72, 46, 88, 61, 40, 76, 58, 67, 48, 82];

export function HeroSection() {
  return (
    <section
      id="music"
      data-node-id="4:2"
      aria-labelledby="hero-title"
      className="bg-[linear-gradient(123.69deg,#0b0812_0%,#161027_55%,#0a1114_100%)] xl:h-[720px]"
    >
      <PageContainer className="flex h-full flex-col gap-12 py-16 xl:flex-row xl:items-center xl:gap-[54px] xl:py-[68px]">
        <div
          data-node-id="4:3"
          className="flex flex-col items-start gap-6 overflow-hidden xl:w-[650px] xl:shrink-0"
        >
          <div className="flex items-center gap-[10px] rounded-full border border-[#49355f] bg-[#1b1527] px-3 py-2">
            <Image
              src="/figma/live-dot.svg"
              alt=""
              width={8}
              height={8}
              aria-hidden="true"
            />
            <p className="text-[12px] leading-[15px] font-semibold whitespace-nowrap text-[#d8ff68]">
              NEXT-GEN MEDIA &amp; IP PLATFORM
            </p>
          </div>

          <h1
            id="hero-title"
            className="font-display text-5xl leading-[1.03] font-bold text-[#f8f6ff] sm:text-6xl xl:w-[650px] xl:text-[72px] xl:leading-[74px]"
          >
            MUSIC.
            <br />
            STORIES.
            <br />
            FUTURE.
          </h1>

          <p className="font-display text-vibe-purple text-[22px] leading-7 font-semibold xl:w-[650px] xl:text-[26px]">
            AMPLIFIED BY AI.
          </p>

          <p className="max-w-[590px] text-[18px] leading-[29px] font-normal text-[#b5aec2]">
            Where music, entertainment and news converge — powered by data,
            artificial intelligence and an intellectual property rights
            ecosystem.
          </p>

          <div className="flex flex-wrap items-start gap-3">
            <CtaLink
              href="#entertainment"
              className="w-[189px] text-[13px] leading-4"
            >
              EXPLORE CONTENT&nbsp;&nbsp;→
            </CtaLink>
            <CtaLink
              href="#rights"
              variant="panel"
              className="w-[194px] text-[13px] leading-4"
            >
              LICENSE PARTNERSHIP
            </CtaLink>
          </div>
        </div>

        <article
          data-node-id="4:15"
          className="rounded-studio flex w-full flex-col items-start gap-5 overflow-hidden border border-[rgba(91,60,120,0.7)] bg-[linear-gradient(90deg,#2a1640_0%,#171323_55%,#102427_100%)] px-5 py-6 sm:px-[26px] xl:h-[584px] xl:w-[608px] xl:shrink-0"
        >
          <div className="flex h-[26px] w-full items-center justify-between text-[12px] font-semibold xl:w-[556px]">
            <p className="leading-[15px] text-[#ece5f5]">AI SIGNAL STUDIO</p>
            <p className="text-vibe-lime text-[11px] leading-[13px]">
              ●&nbsp; LIVE ANALYSIS
            </p>
          </div>

          <LiveMusicVideoMock />

          <div className="flex flex-col items-start gap-[7px] overflow-hidden">
            <p className="text-[10px] leading-3 font-semibold text-[#9e8baf]">
              NOW ANALYZING
            </p>
            <h2 className="font-display text-[24px] leading-[26px] font-semibold whitespace-nowrap text-white">
              Neon Pulse Live
            </h2>
            <p className="text-[13px] leading-4 whitespace-pre-wrap text-[#bdb2c9]">
              Live music&nbsp; • &nbsp;122 BPM&nbsp; • &nbsp;Mood: Electric /
              Hopeful
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] leading-[13px] font-medium">
            <span className="rounded-full bg-[#30213a] px-[11px] py-2 text-[#d6ff52]">
              98% trend fit
            </span>
            <span className="rounded-full bg-[#1b1a25] px-[11px] py-2 text-[#d6cfdf]">
              12 IP matches
            </span>
            <span className="rounded-full bg-[#1b1a25] px-[11px] py-2 text-[#d6cfdf]">
              3 audience clusters
            </span>
          </div>
        </article>
      </PageContainer>
    </section>
  );
}

function LiveMusicVideoMock() {
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[22px] border border-[rgba(207,255,58,0.16)] bg-[#09080e] shadow-[0_20px_80px_rgba(9,8,14,0.45)] sm:h-[318px] xl:w-[556px]">
      <Image
        src="/figma/entertainment/featured-stage.jpeg"
        alt="Live music performance on a neon stage"
        fill
        sizes="(min-width: 1440px) 556px, (min-width: 640px) 556px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,14,0.22)_0%,rgba(9,8,14,0.1)_42%,rgba(9,8,14,0.88)_100%)]" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-2 rounded-full border border-[rgba(207,255,58,0.28)] bg-[rgba(9,8,14,0.72)] px-3 py-2 text-[10px] leading-3 font-semibold text-[#f7f5ff] backdrop-blur-md">
          <span className="bg-vibe-lime size-2 rounded-full shadow-[0_0_18px_rgba(207,255,58,0.9)]" />
          LIVE MUSIC
        </div>
        <div className="rounded-full bg-[rgba(9,8,14,0.68)] px-3 py-2 text-[10px] leading-3 font-semibold text-[#d6cfdf] backdrop-blur-md">
          00:34&nbsp; / &nbsp;AI MIX
        </div>
      </div>
      <button
        type="button"
        aria-label="Preview live music video"
        className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(15,10,24,0.55)] text-[#f8f6ff] shadow-[0_0_38px_rgba(183,108,255,0.42)] backdrop-blur-md"
      >
        <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-current" />
      </button>
      <div className="absolute right-4 bottom-[76px] left-4 h-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.2)]">
        <div className="bg-vibe-lime h-full w-[42%] rounded-full" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-[linear-gradient(180deg,rgba(13,10,20,0)_0%,rgba(13,10,20,0.92)_24%,#0d0a14_100%)] px-4 pt-12 pb-4">
        <div className="min-w-0">
          <p className="text-vibe-lime text-[10px] leading-3 font-semibold">
            NEON PULSE LIVE
          </p>
          <p className="font-display mt-1 text-[20px] leading-[22px] font-semibold text-white">
            Crowd energy rising
          </p>
          <p className="mt-1 text-[11px] leading-[13px] text-[#bdb2c9]">
            Spatial audio&nbsp; • &nbsp;Live trend scan
          </p>
        </div>
        <div className="flex h-[54px] shrink-0 items-end gap-[3px] rounded-[14px] bg-[rgba(31,26,46,0.72)] px-3 py-2">
          {liveSignalBars.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="bg-vibe-lime w-[4px] animate-pulse rounded-full"
              style={{
                height: `${height}%`,
                animationDelay: `${index * 90}ms`,
                animationDuration: "1100ms",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { CtaLink } from "@/features/entertainment/components/cta-link";
import { LiveMusicVideoPlayer } from "@/features/entertainment/components/live-music-video-player";

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

          <LiveMusicVideoPlayer />

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

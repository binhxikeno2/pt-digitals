import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SiteFooter } from "@/features/entertainment/components/site-footer";
import { SiteHeader } from "@/features/entertainment/components/site-header";

const latestStories = [
  {
    date: "01 OCT 2026",
    category: "NEW MUSIC",
    title: "Victoria Monét releases 22-track album Frequency of Love",
    source: "AP  •  MUSIC",
    image: "/figma/news/frequency-of-love.png",
    imageAlt: "A concert stage lit by golden holographic light streams",
    compactTitle: false,
  },
  {
    date: "28 SEP 2026",
    category: "VIDEO PREMIERE",
    title:
      "Taylor Swift's Patient Zero video stars Dakota Johnson and Colin Farrell",
    source: "REUTERS  •  MUSIC",
    image: "/figma/news/madonna-vmas.png",
    imageAlt: "A neon arena performance with a luminous stage",
    compactTitle: false,
  },
  {
    date: "01 OCT 2026",
    category: "K-POP",
    title: "BTS teases a new season of Run BTS!",
    source: "INQUIRER  •  K-POP",
    image: "/figma/news/patient-zero.png",
    imageAlt: "A performer in reflective futuristic stage styling",
    compactTitle: false,
  },
  {
    date: "01 OCT 2026",
    category: "FILM",
    title: "Anne Hathaway debuts baby bump at Verity premiere",
    source: "PEOPLE  •  FILM",
    image: "/figma/news/verity-premiere.png",
    imageAlt: "A cybernetic musician standing in a studio",
    compactTitle: true,
  },
] as const;

const artistWatchItems = [
  {
    eyebrow: "NEW ALBUM",
    copy: "Victoria Monét returns with a 22-track R&B project.",
  },
  {
    eyebrow: "VMA HISTORY",
    copy: "Madonna takes seven awards in a career-spanning return.",
  },
  {
    eyebrow: "ON SCREEN",
    copy: "Taylor Swift's latest video brings two stars into the story.",
  },
] as const;

const fanStories = [
  {
    index: "01",
    title: "FROM CLIP TO CULTURAL MOMENT",
    copy: "How a few seconds of video travel across fan communities.",
    meta: "6 MIN READ  •  SOCIAL",
  },
  {
    index: "02",
    title: "WHY K-POP TRAVELS",
    copy: "Music, choreography and online fandom move across borders.",
    meta: "8 MIN READ  •  GLOBAL",
  },
  {
    index: "03",
    title: "THE NEW WATCH PARTY",
    copy: "Fans turn a weekly episode into a shared live conversation.",
    meta: "5 MIN READ  •  TV",
  },
] as const;

export function NewsLandingPage() {
  return (
    <div className="bg-vibe-bg mx-auto w-full max-w-[1440px] overflow-hidden">
      <main id="top">
        <SiteHeader />
        <NewsMasthead />
        <LeadStorySection />
        <ArtistDeskSection />
        <FanConversationsSection />
        <WeeklyBriefingSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function NewsMasthead() {
  return (
    <section
      aria-labelledby="news-masthead-title"
      className="bg-vibe-bg xl:h-[550px]"
    >
      <PageContainer className="h-full py-9 xl:pb-[34px]">
        <div className="relative min-h-[480px] rounded-[20px] bg-[#131018] px-6 py-8 sm:px-8 xl:h-[480px] xl:py-0">
          <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold xl:absolute xl:top-8 xl:left-8">
            PT Digitals&nbsp; / &nbsp;THE CULTURE DESK
          </p>
          <h1
            id="news-masthead-title"
            className="font-display mt-[22px] text-[44px] leading-[1.03] font-bold text-[#f8f6ff] sm:text-[58px] xl:absolute xl:top-20 xl:left-8 xl:mt-0 xl:w-[720px] xl:text-[58px] xl:leading-[74px]"
          >
            CULTURE,
            <br />
            IN REAL TIME.
          </h1>
          <p className="text-vibe-muted mt-[22px] max-w-[650px] text-[17px] leading-6 xl:absolute xl:top-64 xl:left-8 xl:mt-0 xl:w-[650px]">
            Global music, film and fandom stories shaping the feed today.
          </p>
          <div className="mt-8 h-px w-full bg-[#30263b] xl:absolute xl:top-[328px] xl:left-8 xl:mt-0 xl:w-[calc(100%-64px)]" />
          <div className="mt-6 flex flex-col gap-5 xl:mt-0">
            <p className="text-vibe-purple text-[11px] leading-[22px] font-semibold xl:absolute xl:top-[354px] xl:left-8 xl:w-[360px]">
              DAILY SIGNAL&nbsp; / &nbsp;01 OCT 2026
            </p>
            <p className="font-display text-[28px] leading-[39px] font-semibold text-[#f8f6ff] xl:absolute xl:top-[382px] xl:left-8 xl:w-[650px]">
              The world, in one feed.
            </p>
            <p className="text-vibe-muted text-[11px] leading-[22px] font-medium xl:absolute xl:top-[389px] xl:right-8 xl:w-[294px]">
              LIVE EDIT&nbsp; • &nbsp;MUSIC / SCREEN / FANDOM
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function LeadStorySection() {
  return (
    <section
      aria-labelledby="lead-story-title"
      className="bg-vibe-bg xl:h-[790px]"
    >
      <PageContainer className="h-full py-12 xl:py-0">
        <div className="relative h-full">
          <p className="text-vibe-purple text-[11px] leading-[22px] font-semibold xl:absolute xl:top-12 xl:left-0">
            ARTIST SPOTLIGHT&nbsp; / &nbsp;2026 VMAs
          </p>

          <div className="mt-[18px] grid gap-10 lg:grid-cols-[minmax(0,720px)_minmax(360px,520px)] lg:gap-12 xl:absolute xl:top-[88px] xl:left-0 xl:mt-0 xl:grid-cols-[720px_520px]">
            <figure className="relative h-[360px] overflow-hidden rounded-[18px] sm:h-[430px] xl:h-[430px]">
              <Image
                src="/figma/news/madonna-vmas.png"
                alt="A neon arena performance with a luminous stage"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1440px) 720px, (min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex h-[50px] items-center bg-[#0d0a14] px-5 text-[10px] leading-[22px] font-semibold text-[#f8f6ff]">
                2026 VMAs&nbsp; • &nbsp;7 WINS&nbsp; •
                &nbsp;CAREER-SPANNING RETURN
              </figcaption>
            </figure>

            <article className="xl:pt-[14px]">
              <h2
                id="lead-story-title"
                className="font-display max-w-[520px] text-[36px] leading-[43px] font-bold text-[#f8f6ff] xl:text-[42px] xl:leading-[52px]"
              >
                Madonna rules the 2026 VMAs with seven wins
              </h2>
              <p className="text-vibe-muted mt-7 max-w-[500px] text-[16px] leading-[26px] xl:mt-8">
                Madonna opened the show with Sabrina Carpenter and Charli XCX,
                then left as its top winner.
              </p>
              <p className="text-vibe-purple mt-8 text-[10px] leading-[22px] font-semibold xl:mt-8">
                PEOPLE&nbsp; • &nbsp;01 OCT 2026
              </p>
              <div className="mt-4 h-px max-w-[480px] bg-[#30263b]" />
              <p className="text-vibe-lime mt-5 text-[10px] leading-[22px] font-semibold xl:mt-[25px]">
                MORE FROM THE NIGHT
              </p>
              <div className="mt-[11px] flex flex-col gap-[13px] text-[13px] leading-[22px] font-medium text-[#f8f6ff]">
                <p>01&nbsp;&nbsp; Taylor Swift makes VMA history with her 33rd win</p>
                <p>02&nbsp;&nbsp; Lisa takes Best Pop for &apos;Dream&apos;</p>
              </div>
            </article>
          </div>

          <div className="mt-12 rounded-[14px] bg-[#131018] px-6 py-[21px] xl:absolute xl:top-[566px] xl:left-0 xl:mt-0 xl:h-[150px] xl:w-full">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[390px_245px_245px_245px] xl:gap-x-[42px]">
              <div>
                <p className="text-vibe-lime text-[10px] leading-[22px] font-semibold">
                  ARTIST WATCH
                </p>
                <h3 className="font-display mt-[3px] text-[20px] leading-7 font-semibold text-[#f8f6ff]">
                  The names moving pop culture today.
                </h3>
              </div>
              {artistWatchItems.map((item) => (
                <div key={item.eyebrow}>
                  <p className="text-vibe-purple text-[10px] leading-[22px] font-semibold">
                    {item.eyebrow}
                  </p>
                  <p className="text-vibe-muted mt-0 max-w-[245px] text-[12px] leading-[21px]">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ArtistDeskSection() {
  return (
    <section
      aria-labelledby="artist-desk-title"
      className="bg-[#131018] xl:h-[620px]"
    >
      <PageContainer className="h-full py-[52px] xl:pb-0">
        <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold">
          LATEST ARTIST NEWS&nbsp; / &nbsp;OCT 01
        </p>
        <h2
          id="artist-desk-title"
          className="font-display mt-2 max-w-[800px] text-[30px] leading-[38px] font-bold text-[#f8f6ff] xl:text-[34px] xl:leading-[48px]"
        >
          New music, big wins and the moments fans are following.
        </h2>

        <div className="mt-[26px] xl:mt-[30px]">
          {latestStories.map((story) => (
            <article
              key={story.title}
              className="relative min-h-[138px] border-b border-[#30263b] py-4 pl-[132px] xl:h-[114px] xl:min-h-0 xl:py-0 xl:pl-[140px]"
            >
              <div className="absolute top-4 left-0 h-[84px] w-28 overflow-hidden rounded-[10px] xl:top-0">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 xl:gap-[5px]">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-[14px] xl:h-[18px]">
                  <p className="text-vibe-muted w-[108px] text-[10px] leading-[18px] font-medium">
                    {story.date}
                  </p>
                  <p className="text-vibe-purple text-[10px] leading-[18px] font-semibold xl:w-[220px]">
                    {story.category}
                  </p>
                </div>
                <h3
                  className={`font-display max-w-[930px] pr-0 font-semibold text-[#f8f6ff] xl:pr-48 ${
                    story.compactTitle
                      ? "text-[20px] leading-[28px]"
                      : "text-[22px] leading-[29px]"
                  }`}
                >
                  {story.title}
                </h3>
              </div>
              <p className="text-vibe-muted mt-3 text-[11px] leading-[18px] xl:absolute xl:top-1 xl:right-[6px] xl:mt-0 xl:w-[180px] xl:text-right">
                {story.source}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

function FanConversationsSection() {
  return (
    <section
      aria-labelledby="fan-conversations-title"
      className="bg-vibe-bg xl:h-[470px]"
    >
      <PageContainer className="h-full py-[54px] xl:pb-0">
        <p className="text-vibe-purple text-[11px] leading-[22px] font-semibold">
          FANDOM&nbsp; / &nbsp;THE SOCIAL EDIT
        </p>
        <h2
          id="fan-conversations-title"
          className="font-display mt-[6px] text-[32px] leading-[42px] font-bold text-[#f8f6ff] xl:text-[36px] xl:leading-[50px]"
        >
          The stories fans keep sharing.
        </h2>

        <div className="mt-5 grid gap-6 md:grid-cols-3 xl:grid-cols-[repeat(3,416px)]">
          {fanStories.map((story) => (
            <article
              key={story.index}
              className="relative h-[248px] overflow-hidden rounded-[16px] bg-[#131018] px-[22px] py-[18px]"
            >
              <p className="font-display text-vibe-purple text-[24px] leading-[34px] font-bold">
                {story.index}
              </p>
              <h3 className="font-display mt-[18px] text-[19px] leading-[27px] font-semibold text-[#f8f6ff]">
                {story.title}
              </h3>
              <p className="text-vibe-muted mt-3 max-w-[370px] text-[13px] leading-[22px]">
                {story.copy}
              </p>
              <p className="text-vibe-lime absolute bottom-4 left-[22px] text-[10px] leading-[22px] font-semibold">
                {story.meta}
              </p>
            </article>
          ))}
        </div>

        <p className="text-vibe-muted mt-[25px] text-[10px] leading-[22px] font-medium">
          EDITOR&apos;S SELECTION&nbsp; / &nbsp;UPDATED DAILY
        </p>
      </PageContainer>
    </section>
  );
}

function WeeklyBriefingSection() {
  return (
    <section
      aria-labelledby="weekly-briefing-title"
      className="bg-[#1a1424] xl:h-[300px]"
    >
      <PageContainer className="h-full py-[52px] xl:pb-0">
        <div className="grid gap-10 xl:grid-cols-[650px_526px] xl:gap-[136px]">
          <div>
            <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold">
              THE WEEKLY CULTURE BRIEF
            </p>
            <h2
              id="weekly-briefing-title"
              className="font-display mt-2 text-[34px] leading-[48px] font-bold text-[#f8f6ff]"
            >
              Stay close to the conversation.
            </h2>
            <p className="text-vibe-muted mt-[3px] max-w-[650px] text-[14px] leading-[22px]">
              A sharp edit of music, film, celebrity and fandom stories from
              around the world.
            </p>
          </div>

          <form className="pt-[34px]" action="#">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="weekly-brief-email">
                Work email address
              </label>
              <input
                id="weekly-brief-email"
                type="email"
                placeholder="Your work email address"
                className="h-12 w-full rounded-[24px] border-0 bg-[#131018] px-[22px] text-[13px] leading-[22px] text-[#f8f6ff] outline-none placeholder:text-[#b0abc2] focus-visible:ring-2 focus-visible:ring-vibe-lime sm:w-[350px]"
              />
              <button
                type="submit"
                className="bg-vibe-lime text-vibe-bg h-12 rounded-[24px] px-[21px] text-left text-[11px] leading-[22px] font-semibold whitespace-nowrap sm:w-[164px]"
              >
                SUBSCRIBE&nbsp; →
              </button>
            </div>
            <p className="text-vibe-purple mt-[25px] text-[10px] leading-[22px] font-semibold">
              MUSIC&nbsp; • &nbsp;FILM&nbsp; • &nbsp;FANDOM
            </p>
            <p className="text-vibe-muted mt-[2px] text-[11px] leading-[22px]">
              One culture briefing each week. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </PageContainer>
    </section>
  );
}

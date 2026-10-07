import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { SiteFooter } from "@/features/entertainment/components/site-footer";
import { SiteHeader } from "@/features/entertainment/components/site-header";

const hollywoodStories = [
  {
    date: "31 AUG 2026",
    category: "HOLLYWOOD",
    title: "Hollywood bids farewell to Dolly Parton",
    summary:
      "U.S. networks aired tribute programming as Hollywood stars and political figures shared condolences.",
    href: "https://vnexpress.net/hollywood-tien-biet-dolly-parton-5115326.html",
    image: "/figma/news/vnexpress/dolly-parton-farewell.png",
    imageAlt: "Dolly Parton in a portrait shared on Instagram",
  },
  {
    date: "27 AUG 2026",
    category: "SCREEN LEGACY",
    title: "Dolly Parton's screen legacy",
    summary:
      "Her role as Doralee Rhodes in 9 to 5 helped make the country icon a Hollywood standout.",
    href: "https://vnexpress.net/dau-an-tren-man-anh-cua-dolly-parton-5113502.html",
    image: "/figma/news/vnexpress/dolly-parton-screen-legacy.jpg",
    imageAlt: "Dolly Parton in the film 9 to 5",
  },
  {
    date: "25 AUG 2026",
    category: "RED CARPET",
    title: "Stars who went barefoot at major events",
    summary:
      "Julia Roberts, Cameron Diaz, Emma Thompson and others chose comfort at film and fashion events.",
    href: "https://vnexpress.net/nhung-ngoi-sao-di-chan-tran-du-su-kien-5112524.html",
    image: "/figma/news/vnexpress/barefoot-stars.jpg",
    imageAlt: "Stars appearing barefoot at public events",
  },
  {
    date: "21 AUG 2026",
    category: "FASHION",
    title: "Margaret Qualley steps out in Chanel's heel-only shoes",
    summary:
      "The actor's barely-there footwear at The Dog Stars premiere sparked a wave of online debate.",
    href: "https://vnexpress.net/my-nhan-hollywood-dien-mot-giay-chi-co-got-5111850.html",
    image: "/figma/news/vnexpress/heel-only-shoes.jpg",
    imageAlt: "Margaret Qualley wearing Chanel heel-only shoes at a premiere",
  },
  {
    date: "03 AUG 2026",
    category: "POP CULTURE",
    title: "Fans voice concern over Ariana Grande's appearance",
    summary:
      "Viewers reacted to the singer's look in a new music video and raised questions about her health.",
    href: "https://vnexpress.net/fan-lo-lang-cho-ngoai-hinh-cua-ariana-grande-5104406.html",
    image: "/figma/news/vnexpress/ariana-grande.png",
    imageAlt: "Ariana Grande wearing a sweater printed with her album title",
  },
  {
    date: "08 JUL 2026",
    category: "AI FILM",
    title: "AI actor Tilly Norwood lands a lead role in Hollywood",
    summary:
      "The virtual performer is set to star in Misaligned, the debut feature from studio Particle6.",
    href: "https://vnexpress.net/dien-vien-ai-lan-dau-dong-chinh-phim-hollywood-5094832.html",
    image: "/figma/news/vnexpress/tilly-norwood.jpg",
    imageAlt: "AI actor Tilly Norwood in a promotional image",
  },
  {
    date: "30 JUN 2026",
    category: "HOLLYWOOD CULTURE",
    title: "The rush to buy burial plots beside famous people",
    summary:
      "Some Americans are paying six-figure sums for resting places near Hollywood stars and music legends.",
    href: "https://vnexpress.net/con-sot-mua-mo-canh-nguoi-noi-tieng-5091439.html",
    image: "/figma/news/vnexpress/celebrity-burial-plots.jpg",
    imageAlt: "Anthony Jabin posing near Marilyn Monroe's resting place",
  },
  {
    date: "25 JUN 2026",
    category: "AI FILMMAKING",
    title: "Google invests $75 million in A24's AI filmmaking tools",
    summary:
      "The deal gives A24 access to DeepMind support as Hollywood experiments with AI production workflows.",
    href: "https://vnexpress.net/google-rot-hang-chuc-trieu-usd-cho-cong-cu-lam-phim-ai-5088937.html",
    image: "/figma/news/vnexpress/google-a24-ai.jpg",
    imageAlt: "A collage of A24 films for the Google and A24 AI partnership",
  },
] as const;

const artistWatchItems = [
  {
    eyebrow: "TRIBUTE BROADCASTS",
    copy: "U.S. networks aired prime-time specials honoring her life and work.",
  },
  {
    eyebrow: "OPRY HOMECOMING",
    copy: "Grand Ole Opry artists gathered in Nashville to celebrate her influence.",
  },
  {
    eyebrow: "LASTING LEGACY",
    copy: "Her songs, screen roles and philanthropy shaped generations of fans.",
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
        <ScrollReveal direction="up">
          <NewsMasthead />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <LeadStorySection />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <ArtistDeskSection />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <FanConversationsSection />
        </ScrollReveal>
        <ScrollReveal direction="down">
          <WeeklyBriefingSection />
        </ScrollReveal>
      </main>
      <ScrollReveal direction="up">
        <SiteFooter />
      </ScrollReveal>
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
        <div className="relative min-h-[480px] overflow-hidden rounded-[20px] bg-[#131018] px-6 py-8 sm:px-8 xl:h-[480px] xl:py-0">
          <div
            className="news-signal-line pointer-events-none absolute top-0 left-0 h-px w-1/2 bg-[linear-gradient(90deg,transparent,#cfff3a,transparent)] opacity-70"
            aria-hidden="true"
          />
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
            ARTIST SPOTLIGHT&nbsp; / &nbsp;DOLLY PARTON
          </p>

          <div className="mt-[18px] grid gap-10 lg:grid-cols-[minmax(0,720px)_minmax(360px,520px)] lg:gap-12 xl:absolute xl:top-[88px] xl:left-0 xl:mt-0 xl:grid-cols-[720px_520px]">
            <figure className="group relative h-[360px] overflow-hidden rounded-[18px] sm:h-[430px] xl:h-[430px]">
              <Image
                src="/figma/news/vnexpress/dolly-parton-farewell.png"
                alt="Dolly Parton in a portrait shared on Instagram"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1440px) 720px, (min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex h-[50px] items-center bg-[#0d0a14] px-5 text-[10px] leading-[22px] font-semibold text-[#f8f6ff]">
                DOLLY PARTON&nbsp; • &nbsp;TRIBUTE BROADCASTS&nbsp; • &nbsp;31
                AUG 2026
              </figcaption>
            </figure>

            <article className="xl:pt-[14px]">
              <h2
                id="lead-story-title"
                className="font-display max-w-[520px] text-[36px] leading-[43px] font-bold text-[#f8f6ff] xl:text-[42px] xl:leading-[52px]"
              >
                <a
                  href="https://vnexpress.net/hollywood-tien-biet-dolly-parton-5115326.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vibe-lime focus-visible:text-vibe-lime focus-visible:outline-vibe-lime rounded-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Hollywood bids farewell to Dolly Parton
                </a>
              </h2>
              <p className="text-vibe-muted mt-7 max-w-[500px] text-[16px] leading-[26px] xl:mt-8">
                Networks, artists and public figures honored the country icon as
                fans revisited her music, films and philanthropy.
              </p>
              <p className="text-vibe-purple mt-8 text-[10px] leading-[22px] font-semibold xl:mt-8">
                VNEXPRESS&nbsp; • &nbsp;31 AUG 2026
              </p>
              <div className="mt-4 h-px max-w-[480px] bg-[#30263b]" />
              <p className="text-vibe-lime mt-5 text-[10px] leading-[22px] font-semibold xl:mt-[25px]">
                MORE FROM THE STORY
              </p>
              <div className="mt-[11px] flex flex-col gap-[13px] text-[13px] leading-[22px] font-medium text-[#f8f6ff]">
                <p>
                  01&nbsp;&nbsp; CBS and U.S. networks revisited a rhinestone
                  life
                </p>
                <p>
                  02&nbsp;&nbsp; Grand Ole Opry and global tributes remembered
                  her joy
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 rounded-[14px] bg-[#131018] px-6 py-[21px] xl:absolute xl:top-[566px] xl:left-0 xl:mt-0 xl:h-[150px] xl:w-full">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[390px_245px_245px_245px] xl:gap-x-[42px]">
              <div>
                <p className="text-vibe-lime text-[10px] leading-[22px] font-semibold">
                  DOLLY PARTON BRIEF
                </p>
                <h3 className="font-display mt-[3px] text-[20px] leading-7 font-semibold text-[#f8f6ff]">
                  A farewell to a country icon.
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
    <section aria-labelledby="artist-desk-title" className="bg-[#131018]">
      <PageContainer className="h-full py-[52px] xl:py-16">
        <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold">
          VNEXPRESS HOLLYWOOD&nbsp; / &nbsp;TRANSLATED EDIT
        </p>
        <h2
          id="artist-desk-title"
          className="font-display mt-2 max-w-[800px] text-[30px] leading-[38px] font-bold text-[#f8f6ff] xl:text-[34px] xl:leading-[48px]"
        >
          Hollywood today
        </h2>

        <div className="news-artist-list mt-[26px] xl:mt-[30px]">
          {hollywoodStories.map((story) => (
            <article
              key={story.title}
              className="news-artist-list-item group hover:border-vibe-purple/70 relative min-h-[162px] border-b border-[#30263b] py-4 pl-[132px] transition-colors duration-300 xl:min-h-[134px] xl:py-0 xl:pl-[140px]"
            >
              <div className="absolute top-4 left-0 h-[84px] w-28 overflow-hidden rounded-[10px] xl:top-0">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
                <h3 className="font-display max-w-[930px] pr-0 text-[21px] leading-[28px] font-semibold text-[#f8f6ff] xl:pr-48 xl:text-[22px] xl:leading-[29px]">
                  <a
                    href={story.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-vibe-lime focus-visible:text-vibe-lime focus-visible:outline-vibe-lime rounded-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {story.title}
                  </a>
                </h3>
                <p className="text-vibe-muted max-w-[780px] text-[12px] leading-[21px] xl:pr-48">
                  {story.summary}
                </p>
              </div>
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
              className="relative h-[248px] overflow-hidden rounded-[16px] bg-[#131018] px-[22px] py-[18px] transition-transform duration-300 hover:-translate-y-1"
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
                className="focus-visible:ring-vibe-lime h-12 w-full rounded-[24px] border-0 bg-[#131018] px-[22px] text-[13px] leading-[22px] text-[#f8f6ff] outline-none placeholder:text-[#b0abc2] focus-visible:ring-2 sm:w-[350px]"
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

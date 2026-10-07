import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";

const lineup = [
  {
    category: "THEATER PICKS",
    title: "A screen big enough to make the night feel different.",
    detail: "Cinema releases, special screenings and one-night premieres.",
    image: "/figma/entertainment/tonight-empty-cinema.jpg",
    imageAlt: "Rows of red cinema seats facing a large movie screen",
    imagePosition: "object-center",
  },
  {
    category: "MOVIE NIGHT",
    title: "A watch party that feels warm, low-key and cinematic.",
    detail: "Home premieres, comfort rewatches and outdoor-screen energy.",
    image: "/figma/entertainment/tonight-outdoor-movie.jpg",
    imageAlt: "An outdoor movie night setup with a projection screen and string lights",
    imagePosition: "object-[center_58%]",
  },
  {
    category: "BEHIND THE SCENES",
    title: "The shot everyone talks about starts before the cut.",
    detail: "Trailers, set notes and production stories worth saving.",
    image: "/figma/entertainment/tonight-film-camera.jpg",
    imageAlt: "A professional cinema camera on a film set",
    imagePosition: "object-[center_52%]",
  },
];

const schedule = [
  { time: "PICK", detail: "Films, series and trailers worth starting now" },
  { time: "WATCH", detail: "Cinema seats, sofa premieres and watch parties" },
  { time: "SHARE", detail: "Scenes, reviews and behind-the-scenes notes" },
];

export function TonightSection() {
  return (
    <section
      aria-labelledby="tonight-title"
      className="bg-[#09080e] xl:h-[840px]"
    >
      <PageContainer className="flex h-full flex-col pt-[58px] pb-10 xl:pb-0">
        <p className="text-vibe-purple text-[11px] leading-[22px] font-semibold">
          TONIGHT WATCHLIST
        </p>
        <h2
          id="tonight-title"
          className="font-display mt-1 text-[32px] leading-[53px] font-bold text-[#f8f6ff] xl:text-[38px]"
        >
          What should we watch tonight?
        </h2>
        <p className="text-vibe-muted mt-[4px] max-w-[610px] text-[14px] leading-[22px] xl:text-[16px]">
          A faster way into the night: films, series, premieres and production
          stories people will still be talking about tomorrow.
        </p>

        <div className="mt-[18px] grid gap-[18px] xl:mt-[21px] xl:grid-cols-[790px_492px]">
          <article className="relative h-[440px] w-full overflow-hidden rounded-[24px] xl:h-[486px] xl:w-[790px]">
            <Image
              src="/figma/entertainment/tonight-cinema-audience.jpg"
              alt="A cinema audience watching a movie on a large screen"
              fill
              sizes="(min-width: 1440px) 790px, (min-width: 1024px) 61vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,14,0.08)_0%,rgba(9,8,14,0.24)_42%,rgba(9,8,14,0.92)_100%)]" />
            <div className="absolute right-7 bottom-7 left-7">
              <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold">
                FEATURED PICK
              </p>
              <h3 className="font-display mt-[4px] max-w-[640px] text-[25px] leading-[34px] font-bold text-[#f8f6ff] xl:text-[34px] xl:leading-[43px]">
                A real cinema night, without the endless scrolling.
              </h3>
              <p className="text-vibe-muted mt-[7px] max-w-[560px] text-[13px] leading-[22px] xl:text-[14px]">
                Pick a film, queue a series, or follow the scene behind the
                scene before your friends spoil it.
              </p>
            </div>
          </article>

          <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-1">
            {lineup.map((item) => (
              <article
                key={item.title}
                className="relative h-[156px] overflow-hidden rounded-[18px] bg-[#131018] px-[22px] pt-[18px]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1440px) 492px, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${item.imagePosition}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,8,14,0.92)_0%,rgba(9,8,14,0.72)_54%,rgba(9,8,14,0.22)_100%)]" />
                <div className="relative z-10 max-w-[330px]">
                  <p className="text-vibe-purple text-[10px] leading-[22px] font-semibold">
                    {item.category}
                  </p>
                  <h3 className="font-display mt-[6px] text-[17px] leading-[25px] font-semibold text-[#f8f6ff] xl:text-[20px] xl:leading-[28px]">
                    {item.title}
                  </h3>
                  <p className="text-vibe-muted mt-[4px] text-[11px] leading-[18px] xl:text-[12px] xl:leading-[20px]">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-[40px] border-t border-[#30263b] pt-[18px] xl:mt-[30px] xl:pt-[13px]">
          <div className="grid gap-y-5 md:grid-cols-2 md:gap-0 xl:grid-cols-3">
            {schedule.map((item, index) => (
              <div
                key={item.time}
                className={`flex min-h-[34px] items-center gap-4 ${
                  index > 0 ? "md:border-l md:border-[#30263b] md:pl-8" : ""
                }`}
              >
                {index === 0 && (
                  <span className="text-vibe-lime w-[220px] shrink-0 text-[10px] leading-[22px] font-semibold">
                    START WITH
                  </span>
                )}
                <strong className="font-display shrink-0 text-[17px] leading-[24px] font-semibold text-[#f8f6ff]">
                  {item.time}
                </strong>
                <span className="text-vibe-muted text-[12px] leading-[22px]">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

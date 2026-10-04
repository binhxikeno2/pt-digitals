import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";

const lineup = [
  {
    category: "REALITY FORMAT",
    title: "IP IDOL: GLOBAL AUDITIONS",
    detail: "Interact • Pitch • Season 3 Live",
  },
  {
    category: "DOCUMENTARY",
    title: "SOUNDSCAPES OF SAKURA",
    detail: "Art • Heritage • 6-part cultural study",
  },
  {
    category: "LIVE / 20:45",
    title: "IP IDOL LIVE",
    detail: "Global audition night • 90 min",
  },
];

const schedule = [
  { time: "20:45", detail: "IP Idol Live" },
  { time: "21:30", detail: "Sakura VR Set" },
  { time: "22:15", detail: "Regional IP Markets" },
];

export function TonightSection() {
  return (
    <section aria-labelledby="tonight-title" className="bg-[#09080e] xl:h-[840px]">
      <PageContainer className="flex h-full flex-col pt-[58px] pb-10 xl:pb-0">
        <p className="text-vibe-purple text-[11px] leading-[22px] font-semibold">
          ON THE CULTURE RADAR
        </p>
        <h2
          id="tonight-title"
          className="font-display mt-1 text-[32px] leading-[53px] font-bold text-[#f8f6ff] xl:text-[38px]"
        >
          Find your next world.
        </h2>

        <div className="mt-[18px] grid gap-[18px] xl:mt-[21px] xl:grid-cols-[790px_492px]">
          <article className="relative h-[440px] w-full overflow-hidden rounded-[24px] xl:w-[790px]">
            <Image
              src="/figma/entertainment/featured-stage.jpeg"
              alt="An expansive neon virtual reality stage and audience"
              width={1584}
              height={672}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[126px] bg-[#0f0a17]/95" />
            <p className="absolute bottom-[84px] left-7 text-[11px] leading-[22px] font-semibold text-vibe-lime">
              VR ORIGINAL SERIES
            </p>
            <h3 className="font-display absolute bottom-[38px] left-7 text-[25px] leading-[42px] font-bold text-[#f8f6ff] xl:text-[30px]">
              NEON STAGE: VR EXPERIENCE
            </h3>
          </article>

          <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-1">
            {lineup.map((item) => (
              <article
                key={item.title}
                className="relative h-[136px] overflow-hidden rounded-[18px] bg-[#131018] px-[22px] pt-[18px]"
              >
                <p className="text-vibe-purple text-[10px] leading-[22px] font-semibold">
                  {item.category}
                </p>
                <h3 className="font-display mt-[8px] text-[18px] leading-[31px] font-semibold text-[#f8f6ff] xl:text-[22px]">
                  {item.title}
                </h3>
                <p className="text-vibe-muted mt-[3px] text-[12px] leading-[22px]">
                  {item.detail}
                </p>
                <div className="absolute right-[22px] bottom-[16px] left-[22px] h-px bg-[#30263b]" />
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
                    COMING UP TONIGHT
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

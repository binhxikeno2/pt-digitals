import { PageContainer } from "@/components/layout/page-container";

const formats = [
  {
    number: "01",
    title: "Interactive stages",
    detail: "Spatial audio, live rendering and audience participation.",
  },
  {
    number: "02",
    title: "Reality formats",
    detail: "Creator led concepts designed to localize across markets.",
  },
  {
    number: "03",
    title: "Cultural worlds",
    detail: "Documentary and visual stories rooted in place and people.",
  },
];

export function FormatsSection() {
  return (
    <section aria-labelledby="formats-title" className="bg-[#09080e] xl:h-[480px]">
      <PageContainer className="flex h-full flex-col pt-[54px] pb-10 xl:pb-0">
        <p className="text-vibe-purple text-[11px] leading-[22px] font-semibold">
          FROM FIRST IDEA TO FULL WORLD
        </p>
        <h2
          id="formats-title"
          className="font-display mt-[4px] text-[32px] leading-[53px] font-bold text-[#f8f6ff] xl:text-[38px]"
        >
          Formats that travel.
        </h2>
        <div className="mt-[18px] grid gap-6 sm:grid-cols-2 xl:mt-[29px] xl:grid-cols-[repeat(3,416px)]">
          {formats.map((format) => (
            <article
              key={format.number}
              className="min-h-[200px] rounded-[18px] bg-[#131018] px-6 pt-[23px] pb-[18px] xl:h-[236px]"
            >
              <p className="font-display text-vibe-purple text-[26px] leading-[42px] font-bold xl:text-[30px]">
                {format.number}
              </p>
              <h3 className="font-display mt-[13px] max-w-[360px] text-[20px] leading-[32px] font-semibold text-[#f8f6ff] xl:text-[23px]">
                {format.title}
              </h3>
              <p className="text-vibe-muted mt-[13px] max-w-[360px] text-[13px] leading-[22px] xl:text-[14px]">
                {format.detail}
              </p>
            </article>
          ))}
        </div>
        <a
          href="#partnership"
          className="text-vibe-lime mt-auto pt-8 text-[11px] leading-[22px] font-semibold xl:mt-[28px] xl:pt-0"
        >
          EXPLORE THE FULL FORMAT CATALOG&nbsp; →
        </a>
      </PageContainer>
    </section>
  );
}

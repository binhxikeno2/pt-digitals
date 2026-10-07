import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { newsroomArticles } from "@/features/entertainment/data/content";

export function NewsroomSection() {
  return (
    <section
      id="news"
      data-node-id="12:2"
      aria-labelledby="news-title"
      className="bg-[#0a090e] xl:h-[680px]"
    >
      <PageContainer className="flex h-full flex-col gap-[34px] pt-16 pb-[60px]">
        <div
          data-node-id="12:3"
          className="flex items-end justify-between gap-8 xl:h-[66px] xl:shrink-0"
        >
          <div className="flex flex-col items-start gap-[7px]">
            <p className="text-vibe-purple text-[11px] leading-[13px] font-semibold">
              TRENDING / MOST ACCESSED
            </p>
            <h2
              id="news-title"
              className="font-display text-3xl font-bold text-[#f7f4fa] xl:text-[36px] xl:leading-[39px]"
            >
              Most-accessed content right now.
            </h2>
          </div>
          <a
            href="/news"
            className="text-vibe-lime focus-visible:outline-vibe-lime shrink-0 rounded-sm text-[12px] leading-[15px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 xl:w-[127px]"
          >
            VIEW RANKING&nbsp; →
          </a>
        </div>

        <div
          data-node-id="12:8"
          className="-mx-5 overflow-hidden md:-mx-10 xl:-mx-16"
        >
          <div className="pl-5 md:pl-10 xl:pl-16">
            <div className="newsroom-marquee-track flex w-max">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex shrink-0 gap-[18px] pr-[18px]"
                  aria-hidden={groupIndex === 1}
                >
                  {newsroomArticles.map((article) => (
                    <article
                      key={`${groupIndex}-${article.index}`}
                      className="rounded-panel group flex min-h-[456px] w-[min(82vw,425px)] shrink-0 flex-col items-start gap-5 overflow-hidden border border-[#2d2734] bg-[#14111a] px-[18px] pt-[18px] pb-[22px]"
                    >
                      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[18px] bg-[#100d16]">
                        <Image
                          src={article.image}
                          alt={article.imageAlt}
                          fill
                          sizes="(min-width: 1440px) 389px, min(82vw, 389px)"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,14,0.18)_0%,rgba(10,9,14,0.22)_38%,rgba(10,9,14,0.74)_100%)]"
                          aria-hidden="true"
                        />
                        <p className="font-display absolute top-[54px] left-6 text-[104px] leading-[113px] font-bold text-white opacity-[0.34]">
                          {article.index}
                        </p>
                        <span className="absolute top-[18px] left-5 rounded-full bg-[rgba(14,11,20,0.72)] px-[10px] py-[7px] text-[10px] leading-3 font-semibold text-white">
                          {article.category}
                        </span>
                        <span className="absolute right-5 bottom-[18px] rounded-full bg-[rgba(207,255,58,0.9)] px-[10px] py-[7px] text-[10px] leading-3 font-semibold text-[#11140b]">
                          {article.signal}
                        </span>
                      </div>
                      <div className="flex w-[380px] max-w-full flex-col items-start gap-3">
                        <h3 className="font-display max-w-[380px] text-[24px] leading-[26px] font-semibold text-white">
                          {article.title}
                        </h3>
                        <p className="text-[12px] leading-[15px] text-[#8f8697]">
                          {article.meta}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

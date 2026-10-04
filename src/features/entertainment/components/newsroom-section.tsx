import { PageContainer } from "@/components/layout/page-container";
import { newsroomArticles } from "@/features/entertainment/data/content";
import { cn } from "@/lib/utils";

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
              NEWSROOM / PERSPECTIVES
            </p>
            <h2
              id="news-title"
              className="font-display text-3xl font-bold text-[#f7f4fa] xl:text-[36px] xl:leading-[39px]"
            >
              Perspectives that never stand still.
            </h2>
          </div>
          <a
            href="#news"
            className="text-vibe-lime focus-visible:outline-vibe-lime shrink-0 rounded-sm text-[12px] leading-[15px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 xl:w-[127px]"
          >
            READ NEWSROOM&nbsp; →
          </a>
        </div>

        <div
          data-node-id="12:8"
          className="grid gap-[18px] md:grid-cols-2 xl:h-[456px] xl:grid-cols-[repeat(3,425px)]"
        >
          {newsroomArticles.map((article) => (
            <article
              key={article.index}
              className="rounded-panel flex min-h-[456px] flex-col items-start gap-5 overflow-hidden border border-[#2d2734] bg-[#14111a] px-[18px] pt-[18px] pb-[22px]"
            >
              <div
                className={cn(
                  "relative h-[220px] w-full shrink-0 overflow-hidden rounded-[18px] bg-gradient-to-r xl:w-[389px]",
                  article.gradient,
                )}
              >
                <p className="font-display absolute top-[54px] left-6 text-[104px] leading-[113px] font-bold text-white opacity-[0.26]">
                  {article.index}
                </p>
                <span className="absolute top-[18px] left-5 rounded-full bg-[rgba(14,11,20,0.72)] px-[10px] py-[7px] text-[10px] leading-3 font-semibold text-white">
                  {article.category}
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
      </PageContainer>
    </section>
  );
}

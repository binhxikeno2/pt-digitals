import { PageContainer } from "@/components/layout/page-container";
import {
  aiCapabilities,
  aiResults,
} from "@/features/entertainment/data/content";

export function AiDiscoverySection() {
  return (
    <section
      id="ai"
      data-node-id="10:2"
      aria-labelledby="ai-title"
      className="bg-[#110d19] xl:h-[640px]"
    >
      <PageContainer className="flex h-full flex-col gap-14 py-16 xl:flex-row xl:items-center xl:gap-20 xl:py-16">
        <div
          data-node-id="10:3"
          className="flex flex-col items-start gap-[22px] overflow-hidden xl:w-[510px] xl:shrink-0"
        >
          <p className="text-vibe-purple text-[11px] leading-[13px] font-semibold">
            VIBE AI / CONTENT INTELLIGENCE
          </p>
          <h2
            id="ai-title"
            className="font-display text-4xl leading-tight font-bold text-[#f7f3fa] sm:text-5xl xl:w-[510px] xl:text-[52px] xl:leading-[56px]"
          >
            Find the right signal
            <br />
            in a sea of content.
          </h2>
          <p className="max-w-[480px] text-[17px] leading-[27px] text-[#aaa1b5]">
            AI understands mood, context and audience behavior to connect works
            with the right people — at the right moment.
          </p>

          <ol className="flex flex-col gap-[14px] xl:w-[480px]">
            {aiCapabilities.map((capability, index) => (
              <li
                key={capability}
                className="flex min-h-[46px] items-center gap-4"
              >
                <span
                  className={`flex size-[34px] shrink-0 items-center justify-center rounded-[10px] text-[11px] leading-[13px] font-semibold ${
                    index === 0
                      ? "bg-vibe-lime text-[#11150b]"
                      : "bg-[#282131] text-[#c1b5cb]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-[17px] font-medium text-[#eee9f2]">
                  {capability}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <article
          data-node-id="10:20"
          className="rounded-panel-lg flex w-full flex-col items-start gap-[18px] overflow-hidden border border-[#4f3b5c] bg-gradient-to-r from-[#251534] to-[#102329] px-5 py-[26px] sm:pr-[26px] sm:pl-7 xl:h-[500px] xl:w-[720px] xl:shrink-0"
        >
          <div
            data-node-id="10:21"
            className="flex h-9 w-full items-center justify-between"
          >
            <h3 className="font-display text-[16px] leading-[17px] font-semibold text-white">
              ✦&nbsp; VIBE AI
            </h3>
            <span className="text-vibe-lime rounded-full bg-[#1e3524] px-[11px] py-[7px] text-[10px] leading-3 font-semibold">
              ONLINE
            </span>
          </div>

          <div
            data-node-id="10:25"
            className="w-full rounded-[18px] bg-[#332840] px-[18px] py-[15px] xl:w-[636px]"
          >
            <p className="text-[14px] leading-[17px] text-[#f4eff8]">
              “Find positive energy content for a summer launch campaign.”
            </p>
          </div>

          <div
            data-node-id="10:27"
            className="flex w-full flex-col items-start gap-[13px] rounded-[18px] bg-[#13111b] px-[18px] py-4 xl:h-[225px] xl:w-[636px]"
          >
            <p className="text-[13px] leading-4 text-[#bdb4c5]">
              Analyzed 2,438 pieces of content and found 3 matching clusters:
            </p>
            <ol className="flex w-full flex-col gap-[13px] xl:w-[594px]">
              {aiResults.map((result, index) => (
                <li
                  key={result.title}
                  className="flex h-[46px] w-full items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] leading-[13px] font-semibold ${
                        index === 0 ? "text-vibe-lime" : "text-[#8d8297]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col items-start gap-[3px]">
                      <p className="text-[13px] leading-4 font-semibold text-[#f8f5fa]">
                        {result.title}
                      </p>
                      <p className="text-[11px] leading-[13px] text-[#918798]">
                        {result.detail}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-vibe-purple text-[16px] leading-[19px] font-semibold"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div
            data-node-id="10:50"
            className="flex h-12 w-full items-center justify-between rounded-full border border-[#3d3347] bg-[#0c0b11] pr-2 pl-4"
          >
            <p className="truncate text-[12px] leading-[15px] text-[#756c7e]">
              Ask VIBE AI about content, trends or rights...
            </p>
            <span className="bg-vibe-lime flex size-[34px] shrink-0 items-center justify-center rounded-full text-[16px] leading-[19px] font-semibold text-[#10130a]">
              ↑
            </span>
          </div>
        </article>
      </PageContainer>
    </section>
  );
}

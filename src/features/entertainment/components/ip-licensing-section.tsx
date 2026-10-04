import { PageContainer } from "@/components/layout/page-container";
import { CtaLink } from "@/features/entertainment/components/cta-link";
import { ipCapabilities } from "@/features/entertainment/data/content";

export function IpLicensingSection() {
  return (
    <section
      id="rights"
      data-node-id="11:2"
      aria-labelledby="rights-title"
      className="bg-vibe-lime text-[#10130a] xl:h-[600px]"
    >
      <PageContainer className="flex h-full flex-col gap-14 py-16 xl:flex-row xl:items-center xl:gap-24 xl:py-16">
        <div
          data-node-id="11:3"
          className="flex flex-col items-start gap-[22px] overflow-hidden xl:w-[560px] xl:shrink-0"
        >
          <p className="text-[11px] leading-[13px] font-semibold text-[#28300f]">
            IP OWNERSHIP / LICENSING
          </p>
          <h2
            id="rights-title"
            className="font-display text-4xl leading-tight font-bold sm:text-5xl xl:w-[560px] xl:text-[50px] xl:leading-[54px]"
          >
            Not just distribution.
            <br />
            We own
            <br />
            and grow IP.
          </h2>
          <p className="max-w-[500px] text-[16px] leading-[25px] text-[#343a20]">
            From music masters, show formats to characters and original series —
            a clear rights ecosystem, ready to scale.
          </p>
          <CtaLink
            href="#partnership"
            variant="dark"
            className="w-[198px] py-3.5"
          >
            START A PARTNERSHIP&nbsp;&nbsp;→
          </CtaLink>
        </div>

        <ol
          data-node-id="11:9"
          className="flex w-full flex-col gap-[14px] xl:h-[446px] xl:w-[656px] xl:shrink-0"
        >
          {ipCapabilities.map((capability, index) => (
            <li
              key={capability.title}
              className={`flex min-h-[138px] flex-col justify-center gap-5 rounded-[20px] border border-[#3e4329] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-0 ${
                index === 0 ? "bg-[#15170e]" : "bg-[#202318]"
              }`}
            >
              <div className="flex items-center gap-[18px]">
                <span
                  className={`font-display flex size-11 shrink-0 items-center justify-center rounded-[14px] text-[14px] leading-[15px] font-semibold ${
                    index === 0
                      ? "bg-vibe-lime text-[#10130a]"
                      : "bg-[#323725] text-[#cbd3a9]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col items-start gap-1.5">
                  <h3 className="font-display text-[17px] leading-[18px] font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="text-[12px] leading-[15px] text-[#aaafa0]">
                    {capability.description}
                  </p>
                </div>
              </div>
              <span className="w-fit rounded-full bg-[#2b3020] px-3 py-2 text-[11px] leading-[13px] font-semibold whitespace-nowrap text-[#d8ff68]">
                {capability.stat}
              </span>
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  );
}

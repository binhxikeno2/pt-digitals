import { PageContainer } from "@/components/layout/page-container";
import { footerGroups } from "@/features/entertainment/data/content";

export function SiteFooter() {
  return (
    <footer data-node-id="14:2" className="bg-[#08070b] xl:h-[300px]">
      <PageContainer className="flex h-full flex-col justify-between gap-12 pt-12 pb-7 xl:gap-0">
        <div
          data-node-id="14:3"
          className="flex flex-col items-start justify-between gap-12 lg:flex-row xl:h-[150px] xl:shrink-0"
        >
          <div className="flex flex-col items-start gap-[14px] xl:w-[230px]">
            <p className="font-display text-[28px] leading-[30px] font-bold text-white">
              PT Digitals
            </p>
            <p className="text-[14px] leading-[17px] text-[#8e8696]">
              Culture, amplified.
              <br />
              Rights, respected.
            </p>
          </div>

          <div
            data-node-id="14:7"
            className="grid w-full grid-cols-2 gap-10 sm:grid-cols-4 lg:w-auto lg:gap-[72px] xl:w-[604px] xl:grid-cols-[89px_80px_63px_156px]"
          >
            {footerGroups.map((group) => (
              <nav
                key={group.title}
                aria-label={group.title}
                className="flex flex-col gap-[11px]"
              >
                <p className="text-vibe-lime text-[10px] leading-3 font-semibold">
                  {group.title}
                </p>
                {group.links.map((link) => (
                  <a
                    key={link}
                    href="#top"
                    className="focus-visible:outline-vibe-lime rounded-sm text-[13px] leading-4 font-medium text-[#b7afbe] hover:text-white focus-visible:outline-2"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            ))}

            <div className="flex flex-col items-start gap-[10px]">
              <p className="text-vibe-purple text-[10px] leading-3 font-semibold">
                NEW BUSINESS
              </p>
              <a
                href="mailto:hello@ptdigitals.vn"
                className="focus-visible:outline-vibe-lime rounded-sm text-[14px] leading-[17px] font-medium text-white focus-visible:outline-2"
              >
                hello@ptdigitals.vn
              </a>
              <p className="text-[12px] leading-[15px] text-[#8e8696]">
                Ho Chi Minh City • Vietnam
              </p>
            </div>
          </div>
        </div>

        <div
          data-node-id="14:27"
          className="flex min-h-[34px] flex-col justify-end gap-3 border-t border-[#29242f] pt-4 text-[11px] leading-[13px] text-[#6f6875] sm:flex-row sm:items-end sm:justify-between sm:pt-0"
        >
          <p>© 2026 PT Digitals. All rights reserved.</p>
          <p>Privacy&nbsp; • &nbsp;Terms&nbsp; • &nbsp;Rights policy</p>
        </div>
      </PageContainer>
    </footer>
  );
}

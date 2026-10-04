import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";

const creators = [
  {
    name: "Zephyr-A",
    role: "Visual Stage Architect",
    image: "/figma/entertainment/zephyr-a.jpeg",
    width: 928,
    height: 1152,
  },
  {
    name: "Tuan Minh",
    role: "Spatial Sound Designer",
    image: "/figma/entertainment/tuan-minh.jpeg",
    width: 928,
    height: 1152,
  },
  {
    name: "K-V0X",
    role: "Holographic Performer",
    image: "/figma/entertainment/k-v0x.jpeg",
    width: 928,
    height: 1152,
  },
];

export function CreatorsSection() {
  return (
    <section aria-labelledby="creators-title" className="bg-[#131018] xl:h-[560px]">
      <PageContainer className="flex h-full flex-col pt-[60px] pb-10 xl:pb-0">
        <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold">
          PEOPLE MAKING THE NEXT SCENE
        </p>
        <h2
          id="creators-title"
          className="font-display mt-[6px] text-[32px] leading-[53px] font-bold text-[#f8f6ff] xl:text-[38px]"
        >
          Built with culture makers.
        </h2>
        <p className="text-vibe-muted mt-[4px] max-w-[480px] text-[14px] leading-[22px] xl:text-[16px]">
          Artists, spatial designers and performers shape every world from the
          first signal to the live moment.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 xl:mt-[-135px] xl:ml-[564px] xl:grid-cols-[repeat(3,204px)] xl:gap-8">
          {creators.map((creator) => (
            <article key={creator.name} className="min-w-0">
              <Image
                src={creator.image}
                alt={`${creator.name}, ${creator.role}`}
                width={creator.width}
                height={creator.height}
                className="h-[200px] w-full rounded-[16px] object-cover sm:h-[276px] xl:w-[204px]"
              />
              <h3 className="font-display mt-[16px] truncate text-[15px] leading-[27px] font-semibold text-[#f8f6ff] xl:text-[19px]">
                {creator.name}
              </h3>
              <p className="text-vibe-muted mt-[3px] text-[10px] leading-[22px] sm:text-[12px]">
                {creator.role}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-auto border-t border-[#30263b] pt-[16px] xl:mt-[34px] xl:pt-[21px]">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:gap-0">
            <p className="text-vibe-purple text-[10px] leading-[22px] font-semibold xl:w-[186px]">
              MADE TOGETHER
            </p>
            <p className="text-[12px] leading-[22px] text-[#f8f6ff] xl:flex-1 xl:text-[13px]">
              Artists, sound designers and performers are credited as
              collaborators across every original world.
            </p>
            <a
              href="#partnership"
              className="text-vibe-lime ml-0 text-[11px] leading-[22px] font-semibold xl:ml-5 xl:w-[316px]"
            >
              MEET THE CREATOR NETWORK&nbsp; →
            </a>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

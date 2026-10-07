import { PageContainer } from "@/components/layout/page-container";
import { platformMetrics } from "@/features/entertainment/data/content";

export function MetricsSection() {
  return (
    <section
      data-node-id="7:2"
      aria-labelledby="metrics-title"
      className="border-y border-[#2a2235] bg-[#0e0b16] xl:h-[180px]"
    >
      <PageContainer className="flex h-full flex-col justify-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-between xl:py-0">
        <div
          data-node-id="7:3"
          className="flex flex-col items-start gap-2 xl:w-[271px]"
        >
          <p className="text-vibe-purple text-[11px] leading-[13px] font-medium">
            CONTENT ECOSYSTEM
          </p>
          <h2
            id="metrics-title"
            className="font-display text-[22px] leading-6 font-bold text-[#f5f2f8]"
          >
            Measured growth, real traction.
          </h2>
        </div>

        <dl
          data-node-id="7:6"
          className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 xl:grid-cols-[92px_99px_83px_60px] xl:gap-[54px]"
        >
          {platformMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-start gap-[5px]"
            >
              <dt
                className={`font-display text-[30px] leading-[33px] font-bold ${
                  metric.highlighted ? "text-vibe-lime" : "text-white"
                }`}
              >
                {metric.value}
              </dt>
              <dd className="text-[12px] leading-[15px] whitespace-nowrap text-[#948c9f]">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </PageContainer>
    </section>
  );
}

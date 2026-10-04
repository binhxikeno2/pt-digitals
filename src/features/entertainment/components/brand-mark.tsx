export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      data-node-id="3:3"
      href="#top"
      aria-label="PT Digitals home"
      className="focus-visible:outline-vibe-lime inline-flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <span
        data-node-id="3:4"
        className={`to-vibe-lime flex items-center justify-center rounded-xl bg-gradient-to-r from-[#ab4aff] text-[14px] leading-[17px] font-semibold text-[#0d0a14] transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          compact ? "size-[26px]" : "size-[38px]"
        }`}
      >
        ▶
      </span>
      <span
        className={`font-display leading-6 font-bold text-[#f7f5ff] transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          compact ? "text-[18px]" : "text-[22px]"
        }`}
      >
        PT Digitals
      </span>
    </a>
  );
}

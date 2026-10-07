export function LiveMusicVideoPlayer() {
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-[22px] border border-[rgba(207,255,58,0.16)] bg-[#09080e] shadow-[0_20px_80px_rgba(9,8,14,0.45)] sm:h-[318px] xl:w-[556px]">
      <video
        className="h-full w-full object-cover"
        src="/45447-443133782.mp4"
        controls
        loop
        muted
        playsInline
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-2 rounded-full border border-[rgba(207,255,58,0.28)] bg-[rgba(9,8,14,0.72)] px-3 py-2 text-[10px] leading-3 font-semibold text-[#f7f5ff] backdrop-blur-md">
          <span className="bg-vibe-lime size-2 rounded-full shadow-[0_0_18px_rgba(207,255,58,0.9)]" />
          LIVE MUSIC
        </div>
        <div className="rounded-full bg-[rgba(9,8,14,0.68)] px-3 py-2 text-[10px] leading-3 font-semibold text-[#d6cfdf] backdrop-blur-md">
          AI MIX
        </div>
      </div>
    </div>
  );
}

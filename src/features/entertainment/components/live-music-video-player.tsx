"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const durationSeconds = 34;
const liveSignalBars = [34, 52, 72, 46, 88, 61, 40, 76, 58, 67, 48, 82];

function formatTime(seconds: number) {
  const roundedSeconds = Math.floor(seconds);
  return `00:${String(roundedSeconds).padStart(2, "0")}`;
}

export function LiveMusicVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    if (!isPlaying) return;

    let animationFrame = 0;
    const startedAt = performance.now() - progressRef.current * durationSeconds;

    const tick = (timestamp: number) => {
      const elapsedSeconds = (timestamp - startedAt) / 1000;
      const nextProgress = (elapsedSeconds % durationSeconds) / durationSeconds;
      setProgress(nextProgress);
      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isPlaying]);

  const currentSeconds = progress * durationSeconds;

  return (
    <div
      data-playing={isPlaying}
      className="group relative h-[280px] w-full overflow-hidden rounded-[22px] border border-[rgba(207,255,58,0.16)] bg-[#09080e] shadow-[0_20px_80px_rgba(9,8,14,0.45)] sm:h-[318px] xl:w-[556px]"
    >
      <Image
        src="/figma/entertainment/featured-stage.jpeg"
        alt="Live music performance on a neon stage"
        fill
        sizes="(min-width: 1440px) 556px, (min-width: 640px) 556px, 100vw"
        className={`object-cover transition-transform duration-[6000ms] ease-linear ${
          isPlaying ? "scale-110" : "scale-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(207,255,58,0.2),transparent_24%),linear-gradient(180deg,rgba(9,8,14,0.2)_0%,rgba(9,8,14,0.08)_42%,rgba(9,8,14,0.9)_100%)] transition-opacity duration-500 ${
          isPlaying ? "opacity-100" : "opacity-80"
        }`}
      />
      <div
        className={`absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent_0%,rgba(207,255,58,0.14)_45%,transparent_100%)] blur-sm transition-transform duration-[1800ms] ease-in-out ${
          isPlaying ? "translate-x-[220%]" : "-translate-x-full"
        }`}
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-2 rounded-full border border-[rgba(207,255,58,0.28)] bg-[rgba(9,8,14,0.72)] px-3 py-2 text-[10px] leading-3 font-semibold text-[#f7f5ff] backdrop-blur-md">
          <span
            className={`bg-vibe-lime size-2 rounded-full shadow-[0_0_18px_rgba(207,255,58,0.9)] ${
              isPlaying ? "animate-pulse" : ""
            }`}
          />
          {isPlaying ? "LIVE MUSIC" : "READY TO PLAY"}
        </div>
        <div className="rounded-full bg-[rgba(9,8,14,0.68)] px-3 py-2 text-[10px] leading-3 font-semibold text-[#d6cfdf] backdrop-blur-md">
          {formatTime(currentSeconds)}&nbsp; / &nbsp;AI MIX
        </div>
      </div>

      <button
        type="button"
        aria-label={isPlaying ? "Pause live music video" : "Play live music video"}
        onClick={() => setIsPlaying((current) => !current)}
        className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(15,10,24,0.62)] text-[#f8f6ff] shadow-[0_0_38px_rgba(183,108,255,0.42)] backdrop-blur-md transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vibe-lime motion-reduce:transition-none"
      >
        {isPlaying ? (
          <Pause size={22} strokeWidth={2.4} aria-hidden="true" />
        ) : (
          <Play className="ml-1" size={23} fill="currentColor" aria-hidden="true" />
        )}
      </button>

      <div
        className="absolute right-4 bottom-[76px] left-4 h-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.2)]"
        role="progressbar"
        aria-label="Live music video progress"
        aria-valuemin={0}
        aria-valuemax={durationSeconds}
        aria-valuenow={Math.round(currentSeconds)}
      >
        <div
          className="bg-vibe-lime h-full rounded-full transition-[width] duration-150"
          style={{ width: `${Math.max(progress * 100, 2)}%` }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-[linear-gradient(180deg,rgba(13,10,20,0)_0%,rgba(13,10,20,0.92)_24%,#0d0a14_100%)] px-4 pt-12 pb-4">
        <div className="min-w-0">
          <p className="text-vibe-lime text-[10px] leading-3 font-semibold">
            NEON PULSE LIVE
          </p>
          <p className="font-display mt-1 text-[20px] leading-[22px] font-semibold text-white">
            {isPlaying ? "Crowd energy rising" : "Tap play to preview"}
          </p>
          <p className="mt-1 text-[11px] leading-[13px] text-[#bdb2c9]">
            Spatial audio&nbsp; • &nbsp;Live trend scan
          </p>
        </div>
        <div className="flex h-[54px] shrink-0 items-end gap-[3px] rounded-[14px] bg-[rgba(31,26,46,0.72)] px-3 py-2">
          {liveSignalBars.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={`bg-vibe-lime w-[4px] rounded-full ${
                isPlaying ? "animate-pulse" : ""
              }`}
              style={{
                height: isPlaying ? `${height}%` : "18%",
                animationDelay: `${index * 90}ms`,
                animationDuration: "1100ms",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

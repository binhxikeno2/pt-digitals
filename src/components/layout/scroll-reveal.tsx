"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = ComponentPropsWithoutRef<"div">;
type RevealDirection = "up" | "down" | "left" | "right";
const revealSelector = "article, h1, h2, h3, p, a, img, li, strong, dl > div";
const entertainmentDirections: RevealDirection[] = [
  "up",
  "left",
  "right",
  "down",
  "up",
  "left",
];
const allDirections: RevealDirection[] = ["up", "left", "right", "down"];

export function ScrollReveal({
  className,
  direction,
  ...props
}: ScrollRevealProps & { direction?: RevealDirection }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealState, setRevealState] =
    useState<"initial" | "pending" | "visible">("initial");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const candidates = Array.from(
      container.querySelectorAll<HTMLElement>(revealSelector),
    );
    const revealItems = candidates.filter(
      (element) =>
        element.matches("img") ||
        !element.parentElement?.closest(revealSelector),
    );

    revealItems.forEach((element, index) => {
      element.dataset.revealItem = "true";
      element.dataset.revealKind = element.matches("article")
        ? "card"
        : element.matches("img")
          ? "image"
          : element.matches("a")
            ? "action"
            : "copy";
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 90, 630)}ms`,
      );
      const directionSequence = direction
        ? [direction, ...allDirections.filter((item) => item !== direction)]
        : entertainmentDirections;
      const itemDirection = directionSequence[index % directionSequence.length];
      element.dataset.revealDirection = element.matches("article")
        ? itemDirection === "left"
          ? "left"
          : itemDirection === "right"
            ? "right"
            : itemDirection
        : itemDirection;
    });

    let frame = 0;
    let hasInitialized = false;

    const reveal = () => {
      setRevealState("visible");
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
    };

    const checkVisibility = () => {
      frame = 0;
      const bounds = container.getBoundingClientRect();
      const entersViewport =
        bounds.top < window.innerHeight && bounds.bottom > 0;

      if (!hasInitialized) {
        hasInitialized = true;
        setRevealState("pending");

        if (entersViewport) {
          frame = window.requestAnimationFrame(() => {
            frame = 0;
            reveal();
          });
        }
        return;
      }

      if (entersViewport) {
        reveal();
      }
    };

    const scheduleCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(checkVisibility);
    };

    scheduleCheck();
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.cancelAnimationFrame(frame);
    };
  }, [direction]);

  return (
    <div
      ref={containerRef}
      data-scroll-reveal={revealState}
      className={cn("scroll-reveal", className)}
      {...props}
    />
  );
}
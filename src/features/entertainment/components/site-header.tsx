'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { BrandMark } from "@/features/entertainment/components/brand-mark";
import { navigationItems } from "@/features/entertainment/data/content";

const navigationItemWidths = ["w-10", "w-[96px]", "w-[38px]", "w-[59px]"];
type NavigationLabel = (typeof navigationItems)[number]["label"];
type HeaderNavigationItem = {
  label: NavigationLabel;
  href: string;
};
const sectionByNavigationItem: Partial<Record<NavigationLabel, string>> = {
  Music: "music",
};
const pendingSectionKey = "pt-digitals:pending-section";

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export function SiteHeader({
  navigationVariant = "default",
}: {
  navigationVariant?: "default" | "contact";
} = {}) {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    let animationFrame = 0;
    let pendingScrollFrame = 0;

    const updateHeader = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        const shouldCompact = window.scrollY > 48;
        setIsCompact((current) =>
          current === shouldCompact ? current : shouldCompact,
        );
        animationFrame = 0;
      });
    };

    if (pathname !== "/entertainment") {
      const pendingSection = window.sessionStorage.getItem(pendingSectionKey);
      if (pendingSection) {
        let attempts = 0;
        const scrollWhenReady = () => {
          const section = document.getElementById(pendingSection);

          if (section) {
            window.sessionStorage.removeItem(pendingSectionKey);
            section.scrollIntoView({
              behavior: getScrollBehavior(),
              block: "start",
            });
            return;
          }

          attempts += 1;
          if (attempts < 60) {
            pendingScrollFrame = window.requestAnimationFrame(scrollWhenReady);
          }
        };

        pendingScrollFrame = window.requestAnimationFrame(scrollWhenReady);
      }
      updateHeader();
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(pendingScrollFrame);
    };
  }, [pathname]);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    item: HeaderNavigationItem,
  ) => {
    if (
      item.label === "Entertainment" ||
      item.label === "News" ||
      item.label === "Contact"
    ) {
      return;
    }

    const sectionId = sectionByNavigationItem[item.label];
    if (!sectionId) return;

    if (pathname === "/") {
      event.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: getScrollBehavior(),
        block: "start",
      });
      return;
    }

    window.sessionStorage.setItem(pendingSectionKey, sectionId);
  };

  const activeNavigationItem: HeaderNavigationItem["label"] | null =
    pathname === "/"
      ? "Music"
      : pathname === "/entertainment"
        ? "Entertainment"
        : pathname === "/news"
          ? "News"
          : pathname === "/contact"
            ? "Contact"
            : null;

  return (
    <>
      <header
        data-node-id="3:2"
        className={`bg-vibe-bg fixed inset-x-0 top-0 z-50 transition-[height] duration-300 ease-in-out motion-reduce:transition-none ${
          navigationVariant === "contact" ? "border-b border-[#2a2235]" : ""
        } ${
          isCompact ? "h-[50px]" : "h-24"
        }`}
      >
        <PageContainer className="flex h-full items-center justify-between gap-6 overflow-hidden">
          <BrandMark compact={isCompact} />

          <nav
            data-node-id="3:7"
            aria-label="Primary navigation"
            className="hidden h-[17px] items-center gap-8 md:flex xl:w-[329px]"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavigation(event, item)}
                className={`focus-visible:outline-vibe-lime rounded-sm text-[13px] leading-[17px] font-medium focus-visible:outline-2 focus-visible:outline-offset-4 ${navigationItemWidths[index]} ${
                  item.label === activeNavigationItem
                    ? "text-vibe-lime"
                    : "text-[#b0abc2] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            data-node-id="3:12"
            href="/"
            onClick={(event) => {
              if (pathname === "/") {
                event.preventDefault();
                document.getElementById("ai")?.scrollIntoView({
                  behavior: getScrollBehavior(),
                  block: "start",
                });
              } else {
                window.sessionStorage.setItem(pendingSectionKey, "ai");
              }
            }}
            className={`focus-visible:outline-vibe-lime flex w-10 shrink-0 items-center justify-center gap-2 rounded-full border border-[#4a3d66] bg-[#1f1a2e] px-0 text-[13px] leading-4 font-semibold transition-[height,padding] duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none sm:w-[144px] sm:justify-start sm:px-[14px] ${
              isCompact ? "h-[30px]" : "h-[38px]"
            }`}
          >
            <span className="w-3 text-[#c46eff]" aria-hidden="true">
              ✦
            </span>
            <span className="hidden text-[#f2f0fa] sm:inline">
              Explore with AI
            </span>
          </Link>
        </PageContainer>
      </header>
      <div aria-hidden="true" className="h-24" />
    </>
  );
}

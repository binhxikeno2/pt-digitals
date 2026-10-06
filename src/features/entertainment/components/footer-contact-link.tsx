"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

export function FooterContactLink() {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/contact") return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="/contact"
      onClick={handleClick}
      className="focus-visible:outline-vibe-lime rounded-sm text-[10px] leading-3 font-semibold text-vibe-lime hover:text-white focus-visible:outline-2"
    >
      CONTACT US
    </Link>
  );
}

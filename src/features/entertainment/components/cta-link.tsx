import type { ComponentPropsWithoutRef } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLinkVariant = "lime" | "dark" | "panel" | "glass";

type CtaLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: CtaLinkVariant;
};

const variantClassNames: Record<CtaLinkVariant, string> = {
  lime: "border-0 bg-vibe-lime text-[#11140b] hover:bg-vibe-lime",
  dark: "border-0 bg-[#12150b] text-[#f8faf2] hover:bg-[#12150b]",
  panel:
    "border border-[#40364f] bg-[#1b1724] text-[#f5f1fa] hover:bg-[#1b1724]",
  glass:
    "border border-[#bfa7d7] bg-[rgba(37,22,58,0.7)] text-white hover:bg-[rgba(37,22,58,0.7)]",
};

export function CtaLink({
  className,
  variant = "lime",
  ...props
}: CtaLinkProps) {
  return (
    <a
      className={cn(
        buttonVariants({ size: "lg" }),
        "focus-visible:ring-vibe-lime h-auto rounded-full px-[22px] py-[15px] text-[12px] leading-[15px] font-semibold",
        variantClassNames[variant],
        className,
      )}
      {...props}
    />
  );
}

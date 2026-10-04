import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function PageContainer({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-16",
        className,
      )}
      {...props}
    />
  );
}

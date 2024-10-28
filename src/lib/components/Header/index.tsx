"use client";
import { motion } from "framer-motion";
import lazy from "next/dynamic";
import { type HTMLAttributes } from "react";

import { NavbarDesktop, NavbarMobile } from "./Nav";

import { LinkTo } from "@/lib/components/Anchor";
import { cn } from "@/lib/helpers/utils";

const ColorSchemeToggle = lazy(
  () => import("@/lib/domains/colorScheme/client").then((mod) => mod.default),
  {
    ssr: false,
  },
);

export const Header = ({ className }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sticky top-0 z-50 h-[60px] w-screen bg-background",
      className,
    )}
    suppressHydrationWarning
  >
    <a
      id="skip-link"
      href="#main-content"
      className="absolute left-8 top-8 h-px w-px -translate-y-full overflow-hidden rounded-global bg-primary p-2 text-background [clip:rect(1px_1px_1px_1px)] visited:no-underline hover:underline hover:decoration-current hover:decoration-solid hover:decoration-2 focus:block focus:h-auto focus:w-auto focus:translate-y-0 focus:[clip:auto] focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary dark:text-foreground"
    >
      Skip to main content
    </a>
    <header className="mx-auto mt-1 grid h-full w-full max-w-[--max-width] grid-cols-[max-content_auto] content-center gap-8 px-2 py-4">
      <LinkTo href="/">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-10 w-10 rounded-full bg-orange-500" />
        </motion.div>
      </LinkTo>
      <div className="grid grid-flow-col place-items-center justify-center gap-x-4 justify-self-end">
        <NavbarDesktop />
        <NavbarMobile />
        <ColorSchemeToggle />
      </div>
    </header>
  </div>
);

"use client";

import { LinkTo } from "@/lib/components/Anchor";

export const NotFoundDogsLink = () => (
  <p className="pt-4 text-center">
    or check out{" "}
    <LinkTo
      href="https://www.theguardian.com/lifeandstyle/gallery/2018/jul/18/dog-photographer-of-the-year-2018-in-pictures"
      target="_blank"
    >
      the winners of Dog Photographer of the Year 2018
      <br />
      from The Guardian
    </LinkTo>
  </p>
);

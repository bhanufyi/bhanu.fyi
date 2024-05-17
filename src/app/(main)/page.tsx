import { isUndefined } from "lodash-es";
import Image from "next/image";
import { Suspense } from "react";

import { MDXContent } from "@/lib/components/MDX";
import { SocialLinks } from "@/lib/components/SocialLinks";
import { ViewsCounter } from "@/lib/components/ViewsCounter";
import profileImg from "@/public/bhanu.png";
import { allPages } from "contentlayer/generated";

export default function HomePage() {
  const post = allPages.find((page) => page.page_slug === "introduction");

  if (isUndefined(post)) {
    throw new Error("introduction.mdx is missing");
  }

  return (
    <>
      <h1 className="pb-10 pt-20 text-center font-serif text-6xl text-primary">
        Hey, I&apos;m Bhanu!
      </h1>
      <div className="my-10 flex items-center justify-center">
        <div className="relative">
          <Image
            src={profileImg}
            alt="Bhanu"
            width="128"
            height="128"
            quality="100"
            placeholder="blur"
            priority={true}
            className="h-32 w-32 rounded-full border-4 border-white"
          />
          <span className="absolute bottom-0 right-0 text-4xl">👋</span>
        </div>
      </div>
      <MDXContent code={post.body.code} components={{ SocialLinks }} />
      <Suspense>
        <ViewsCounter slug="/" hidden />
      </Suspense>
    </>
  );
}

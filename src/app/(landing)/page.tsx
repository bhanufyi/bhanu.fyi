import { isUndefined } from "lodash-es";
import { Suspense } from "react";

import { AnimatedBlobs } from "./_components/AnimatedBlobs";
import { AnimatedSphere } from "./_components/AnimatedSphere";
import { Hero } from "./_components/Hero";
import FeaturedBlogsWrapper from "./_components/featured-blogs/FeaturedBlogsWrapper";
import OpenSourceContributionsWrapper from "./_components/gh-contributions/OpenSourceContributionsWrapper";

import { Footer } from "@/lib/components/Footer";
import { Header } from "@/lib/components/Header";
import { MDXContent } from "@/lib/components/MDX";
import { SocialLinks } from "@/lib/components/SocialLinks";
import { ViewsCounter } from "@/lib/components/ViewsCounter";
import { allPages } from "contentlayer/generated";

function Blobs() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        className="h-auto w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(249, 115, 22, 0.1)"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 1440 320"
        className="-mt-1 h-auto w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(249, 115, 22, 0.05)"
          d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default function HomePage() {
  const post = allPages.find((page) => page.page_slug === "introduction");

  if (isUndefined(post)) {
    throw new Error("introduction.mdx is missing");
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated Blobs */}
      <AnimatedBlobs />
      <Header />
      <main
        id="main-content"
        className="relative z-10"
        suppressHydrationWarning
      >
        <Hero />
        <FeaturedBlogsWrapper />
        <OpenSourceContributionsWrapper />

        <div className="relative mt-12 grid grid-flow-col grid-cols-[1fr_min(var(--max-width),_calc(100%_-_2rem))_1fr] gap-x-5 children:[grid-column:2]">
          <MDXContent code={post.body.code} components={{ SocialLinks }} />
        </div>
        <AnimatedSphere />
        {/* <Background /> */}
        <Suspense>
          <ViewsCounter slug="/" hidden />
        </Suspense>
      </main>
      <Blobs />
      <Footer />
    </div>
  );
}

import { notFound } from "next/navigation";

import { SITE_TITLE_APPEND } from "@/config";
import { Education, Experience } from "@/lib/components/Experience";
import { MDXContent } from "@/lib/components/MDX";
import { SocialLinks } from "@/lib/components/SocialLinks";
import { ViewsCounter } from "@/lib/components/ViewsCounter";
import { allPages } from "contentlayer/generated";

export const metadata = {
  title: `About ${SITE_TITLE_APPEND}`,
};

export default function AboutPage() {
  const post = allPages.find((page) => page.page_path === "/about");

  if (!post) notFound();

  return (
    <>
      <h1 className="pb-20 pt-10 font-serif text-8xl">/about</h1>
      <Experience />
      <Education />
      <MDXContent code={post.body.code} components={{ SocialLinks }} />
      <ViewsCounter slug="/about" />
    </>
  );
}

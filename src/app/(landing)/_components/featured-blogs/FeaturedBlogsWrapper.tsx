// components/FeaturedBlogsWrapper.tsx
import { Suspense } from "react";

import FeaturedBlogsContent from "./FeaturedBlogsContent";

interface RawArticle {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  tag_list: string[];
  readable_publish_date: string;
  url: string;
  reading_time_minutes: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  comments_count: number;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  tag_list: string[];
  readable_publish_date: string;
  url: string;
  reading_time_minutes: number;
  total_reactions_count: number;
}

async function fetchBlogs(): Promise<Article[]> {
  const response = await fetch(
    "https://dev.to/api/articles?username=bhanufyi&per_page=5",
    { next: { revalidate: 3600 } },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const rawArticles: RawArticle[] = await response.json();

  return rawArticles.map((article) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    cover_image: article.cover_image,
    tag_list: article.tag_list,
    readable_publish_date: article.readable_publish_date,
    url: article.url,
    reading_time_minutes: article.reading_time_minutes,
    total_reactions_count:
      article.public_reactions_count +
      article.positive_reactions_count +
      article.comments_count,
  }));
}

export default async function FeaturedBlogsWrapper() {
  const blogs = await fetchBlogs();

  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <FeaturedBlogsContent blogs={blogs} />
    </Suspense>
  );
}

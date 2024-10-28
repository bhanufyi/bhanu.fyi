// components/FeaturedBlogsContent.tsx
"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  Clock,
  ThumbsUp,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { type Article } from "./FeaturedBlogsWrapper";

interface FeaturedBlogsContentProps {
  blogs: Article[];
}

export default function FeaturedBlogsContent({
  blogs,
}: FeaturedBlogsContentProps) {
  return (
    <section className="bg-gray-100 py-10 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between"
        >
          <h2 className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
            Featured Blogs
          </h2>
          <Rocket className="h-8 w-8 text-orange-500" />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                {blog.cover_image ? (
                  <Image
                    src={blog.cover_image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-gray-400 dark:text-gray-600" />
                  </div>
                )}
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <div className="mb-3 flex flex-wrap gap-2">
                  {blog.tag_list.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mb-3 flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{blog.reading_time_minutes} min read</span>
                  <ThumbsUp className="ml-4 mr-1 h-4 w-4" />
                  <span>{blog.total_reactions_count} reactions</span>
                </div>
                <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                  {blog.description}
                </p>
                <Link
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-orange-500 transition-colors hover:text-orange-600"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="https://dev.to/bhanufyi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-orange-700 dark:bg-orange-500 dark:text-gray-900 dark:hover:bg-orange-600"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

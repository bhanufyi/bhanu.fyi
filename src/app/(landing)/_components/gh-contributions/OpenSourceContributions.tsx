// components/OpenSourceContributions.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  GitPullRequest,
  ExternalLink,
  Star,
  GitFork,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { type Contribution } from "./OpenSourceContributionsWrapper";

interface OpenSourceContributionsProps {
  contributions: Contribution[];
}

export default function OpenSourceContributions({
  contributions,
}: OpenSourceContributionsProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedContributions = showAll
    ? contributions
    : contributions.slice(0, 6);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="mt-20 bg-gray-100 py-10 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between"
        >
          <h2 className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
            Open Source Contributions
          </h2>
          <GitPullRequest className="h-8 w-8 text-orange-500" />
        </motion.div>
        {contributions.length === 0 ? (
          <p className="text-center text-gray-400 dark:text-gray-400">
            No contributions found.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {displayedContributions.map((contribution, index) => (
                  <motion.div
                    key={contribution.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
                  >
                    <div className="flex h-full flex-col p-5">
                      <div className="mb-3 flex items-center">
                        <Image
                          src={contribution.repository.owner.avatarUrl}
                          alt={`${contribution.repository.owner.login}'s avatar`}
                          width={32}
                          height={32}
                          className="mr-2 rounded-full"
                        />
                        <div className="overflow-hidden">
                          <h3 className="line-clamp-1 text-base font-semibold">
                            <Link
                              href={contribution.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-colors hover:text-orange-500"
                            >
                              {contribution.title}
                            </Link>
                          </h3>
                          <Link
                            href={contribution.repository.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="line-clamp-1 text-xs text-gray-600 transition-colors hover:text-orange-500 dark:text-gray-400"
                          >
                            {contribution.repository.owner.login}/
                            {contribution.repository.name}
                          </Link>
                        </div>
                      </div>
                      {contribution.repository.description && (
                        <p className="mb-3 line-clamp-2 text-xs text-gray-600 dark:text-gray-400">
                          {contribution.repository.description}
                        </p>
                      )}
                      <div className="mb-3 flex flex-wrap gap-1">
                        {contribution.repository.languages.nodes.map(
                          (language, langIndex) => (
                            <span
                              key={langIndex}
                              className="rounded-full px-1.5 py-0.5 text-xs font-semibold"
                              style={{
                                backgroundColor: `${language.color}22`,
                                color: language.color,
                              }}
                            >
                              {language.name}
                            </span>
                          ),
                        )}
                      </div>
                      {contribution.repository.repositoryTopics.nodes.length >
                        0 && (
                        <div className="mb-3 flex flex-wrap gap-1">
                          {contribution.repository.repositoryTopics.nodes.map(
                            (topic, topicIndex) => (
                              <span
                                key={topicIndex}
                                className="rounded-full bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                              >
                                {topic.topic.name}
                              </span>
                            ),
                          )}
                        </div>
                      )}
                      <div className="mt-auto">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center text-xs text-gray-600 dark:text-gray-500">
                              <Star className="mr-1 h-3 w-3" />
                              {contribution.repository.stargazerCount}
                            </span>
                            <span className="flex items-center text-xs text-gray-600 dark:text-gray-500">
                              <GitFork className="mr-1 h-3 w-3" />
                              {contribution.repository.forkCount}
                            </span>
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-500">
                            {formatDate(contribution.createdAt)}
                          </span>
                        </div>
                        <Link
                          href={contribution.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-3 py-1.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-orange-700"
                        >
                          View PR <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {!showAll && contributions.length > 6 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-orange-700"
                >
                  See More <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

// components/OpenSourceContributionsWrapper.tsx
import { Suspense } from "react";

import OpenSourceContributions from "./OpenSourceContributions";

interface Language {
  name: string;
  color: string;
}

export interface Contribution {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  merged: boolean;
  repository: {
    name: string;
    url: string;
    description: string;
    stargazerCount: number;
    forkCount: number;
    owner: {
      login: string;
      avatarUrl: string;
    };
    languages: {
      nodes: Language[];
    };
    repositoryTopics: {
      nodes: {
        topic: {
          name: string;
        };
      }[];
    };
  };
}

async function fetchContributions(username: string): Promise<Contribution[]> {
  if (!process.env.GH_PAT_TOKEN) {
    throw new Error("GitHub token is not set");
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        pullRequests(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            id
            title
            url
            createdAt
            merged
            repository {
              name
              url
              description
              stargazerCount
              forkCount
              owner {
                login
                avatarUrl
              }
              languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                nodes {
                  name
                  color
                }
              }
              repositoryTopics(first: 5) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GH_PAT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error("GraphQL query failed");
    }

    return data.data.user.pullRequests.nodes.filter(
      (pr: Contribution) => pr.merged,
    );
  } catch (error) {
    return [];
  }
}

export default async function OpenSourceContributionsWrapper() {
  const contributions = await fetchContributions("bhanufyi"); // Replace with your GitHub username

  return (
    <Suspense fallback={null}>
      <OpenSourceContributions contributions={contributions} />
    </Suspense>
  );
}

import { type PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { isEmpty, isUndefined } from "lodash-es";
import { Suspense } from "react";

import { SITE_TITLE_APPEND } from "@/config";
import { Image } from "@/lib/components/Image";
import { ViewsCounter } from "@/lib/components/ViewsCounter";
import { NotionClient } from "@/lib/domains/Notion";

const WORKOUTS_DATABASE_ID = process.env.NOTION_WORKOUTS_PAGE_ID;

export const metadata = {
  title: `Workouts ${SITE_TITLE_APPEND}`,
};

export type WorkoutsDetails = {
  name: string;
  tags: Array<{ name: string }>;
  image: {
    url: string;
    height?: number;
    width?: number;
  };
};

export type WorkoutsDetailsFromNotion = WorkoutsDetails;

export default async function WorkoutssPage() {
  const workouts = await getWorkoutssFromNotion();

  return (
    <>
      <h1 className="pb-20 pt-10 font-serif text-8xl">/workouts</h1>

      <section className="grid gap-16">
        {workouts.map(({ name, tags, image }) => (
          <article
            key={name.toLowerCase().replace(" ", "-")}
            className="grid gap-4"
          >
            <div className="grid grid-flow-col items-center justify-between gap-8">
              <h3 className="pt-0 font-serif text-3xl">{name}</h3>
              <span className="flex gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="rounded-global bg-primary px-2 py-0 font-mono text-sm text-background"
                  >
                    {tag.name}
                  </span>
                ))}
              </span>
            </div>
            {image.url ? (
              "height" in image ? (
                <Image
                  src={image.url}
                  alt={name}
                  height={image.height}
                  width={image.width}
                />
              ) : (
                <Image src={image.url} alt={name} />
              )
            ) : null}
          </article>
        ))}
      </section>

      <Suspense>
        <ViewsCounter slug="/workouts" />
      </Suspense>
    </>
  );
}

const propertiesToRetrieve = ["name", "tags", "image"];
async function getWorkoutssFromNotion() {
  const notionClient = new NotionClient({ token: process.env.NOTION_TOKEN });

  if (isUndefined(WORKOUTS_DATABASE_ID) || isEmpty(WORKOUTS_DATABASE_ID)) {
    throw new Error("Workoutss database ID is undefined");
  }

  const { results } = await notionClient.queryDatabase(WORKOUTS_DATABASE_ID, {
    sorts: [{ property: "created_at", direction: "descending" }],
    filter_properties: propertiesToRetrieve,
  });

  const workoutsDetailsFormatted = results?.map((workoutDetails) => {
    const workoutDetailsFormatted = Object.keys(
      workoutDetails.properties,
    ).reduce((details, property) => {
      const propertyValue = workoutDetails.properties[property];

      if (propertyValue.type === "title") {
        details.name = getTitlePlainText(propertyValue);
      }
      if (propertyValue?.type === "files") {
        details.image = { url: getFiles(propertyValue)[0] };
      }
      if (propertyValue?.type === "multi_select") {
        details.tags = getMultiSelectNames(propertyValue);
      }

      return details;
    }, {} as WorkoutsDetailsFromNotion);

    return workoutDetailsFormatted;
  });
  return workoutsDetailsFormatted;
}

type PageObjectResponseProperty =
  PageObjectResponse["properties"][keyof PageObjectResponse["properties"]];
function getTitlePlainText(
  input: Extract<PageObjectResponseProperty, { type: "title" }>,
) {
  return input.title[0].plain_text;
}

function getMultiSelectNames(
  input: Extract<PageObjectResponseProperty, { type: "multi_select" }>,
) {
  return input.multi_select.map(({ name }) => ({ name }));
}

function getFiles(
  input: Extract<PageObjectResponseProperty, { type: "files" }>,
) {
  return input.files.reduce((urls, item) => {
    if (item.type === "file" && "file" in item) {
      urls.push(item.file.url);
    }
    return urls;
  }, [] as Array<string>);
}

import Link, { type LinkProps } from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { cn } from "../helpers/utils";

export const colorMap = {
  "full-time": "#F6D860",
  internship: "#FFE6BC",
};

interface LinkWrapperProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  linkIcon?: boolean;
  className?: string;
}

export const LinkWrapper: React.FC<LinkWrapperProps> = ({
  href,
  children,
  linkIcon,
  className,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex items-center",
      className,
      linkIcon
        ? "gap-1 transition-all ease-out hover:gap-2"
        : "underline underline-offset-4 hover:decoration-wavy",
    )}
    role="link"
  >
    <div>{children}</div>
    {linkIcon && <BsBoxArrowUpRight />}
  </Link>
);

export const ListWrapper: React.FC<{
  children: React.ReactNode;
  liProps?: React.HTMLProps<HTMLUListElement>;
}> = ({ children, liProps }) => {
  let cls = "space-y-1 list-disc w-full list-outside pl-6 text-sm font-normal";

  if (liProps) {
    cls = `${cls} ${liProps.className}`;
  }

  return <ul className={cls}>{children}</ul>;
};

export const DivWBorderWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div
    className="border-l-2 border-solid pl-4"
    style={{
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(to top left,#c21500,#ffc500)",
    }}
  >
    {children}
  </div>
);

export const Tag: React.FC<{
  label: string;
  tagProps?: React.HTMLProps<HTMLParagraphElement>;
}> = ({ label, tagProps }) => (
  <p
    className="w-fit rounded-[20px] px-3 text-[12px] font-medium text-black"
    aria-label={`tag-${label}`}
    {...tagProps}
  >
    {label}
  </p>
);

const experiences = [
  {
    duration: "Jun '22 - Present",
    tags: ["full-time"],
    skills: [
      "React",
      "Next.js",
      "Relay",
      "Hasura",
      "Node.js",
      "GraphQL",
      "Knex",
      "PostgreSQL",
      "GitHub Actions",
      "GCP",
      "Cloudflare",
      "Terraform",
    ],
    tagBgColors: [colorMap["full-time"]],
    href: "https://realadvisor.ch",
    get title() {
      return (
        <LinkWrapper href={this.href} linkIcon>
          Fullstack Engineer <span className="font-normal">at</span> RealAdvisor
        </LinkWrapper>
      );
    },
    location: "Remote (Switzerland)",
    desc: (
      <ListWrapper
        liProps={{
          className: "max-w-[385px]",
        }}
      >
        <li>
          Developed and implemented email sequences from the ground up,
          resulting in improved marketing campaign performance.
        </li>
        <li>
          Revamped the existing email architecture to reduce duplication and
          improve overall efficiency.
        </li>
        <li>
          Implemented Twilio SMS API to improve appraisal conversion rates in
          France and Spain.
        </li>
        <li>
          Assisted in the migration from a custom GraphQL API to Hasura API.
        </li>
      </ListWrapper>
    ),
  },
  {
    duration: "Dec '21 - May '22",
    tags: ["internship"],
    tagBgColors: [colorMap["internship"]],
    href: "https://realadvisor.ch",
    get title() {
      return (
        <LinkWrapper href={this.href} linkIcon>
          Fullstack Engineering Intern <span className="font-normal">at</span>{" "}
          RealAdvisor
        </LinkWrapper>
      );
    },
    location: "Remote (Switzerland)",
    desc: (
      <ListWrapper
        liProps={{
          className: "max-w-[385px]",
        }}
      >
        <li>
          Enhanced the leads list by adding various filters, providing agents
          with more flexibility when reviewing leads.
        </li>
        <li>
          Deployed the appraisal chatbot to new countries (Germany, UK, Italy),
          expanding the business in those regions.
        </li>
        <li>
          Implemented workflows to notify agents of property transactions using
          event triggers and n8n.
        </li>
        <li>Helped to migrate the code base from Flow to TypeScript.</li>
      </ListWrapper>
    ),
  },
  {
    duration: "Aug '21 - Jan '22",
    tags: ["internship"],
    skills: [
      "Spring Boot",
      "Netflix OSS",
      "React",
      "MongoDB",
      "Material-UI",
      "GCP",
    ],
    tagBgColors: [colorMap["internship"]],
    href: "https://tidbeat.com",
    get title() {
      return (
        <LinkWrapper href={this.href} linkIcon>
          Associate Software Trainee <span className="font-normal">at</span>{" "}
          Tidbeat
        </LinkWrapper>
      );
    },
    location: "Remote (Hyderabad)",
    desc: (
      <ListWrapper
        liProps={{
          className: "max-w-[385px]",
        }}
      >
        <li>
          Developed an online compiler feature for programming assignments using
          Sphere Engine API with parallel execution of test cases.
        </li>
        <li>
          Fixed the breaking changes in the Material UI Components in the front
          end.
        </li>
      </ListWrapper>
    ),
  },
];

const education = [
  {
    duration: "Jul '18 - Jun '22",
    tags: ["B.E", "CSE"],
    tagBgColors: [colorMap["full-time"], colorMap["internship"]],
    href: "https://www.vce.ac.in",
    get title() {
      return (
        <LinkWrapper href={this.href} linkIcon>
          Vasavi College of Engineering
        </LinkWrapper>
      );
    },
    location: "Hyderabad",
    skills: [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "Matlab",
      "Alogrithms",
      "Data Structures",
      "Computer Networks",
      "Operating Systems",
      "Database Management Systems",
      "PostgreSQL",
      "Computer Architecture",
      "Machine Learning",
      "Web Development",
      "Google Cloud Platform",
      "Bash Scripting",
      "Git",
    ],
    desc: (
      <ListWrapper
        liProps={{
          className: "max-w-[385px]",
        }}
      >
        <li>
          I&apos;ve completed my Bachelor of Engineering in Computer Science
          Engineering.
        </li>
        <li>
          I&apos;ve been a part of the college&apos;s technical team and
          organized many events.
        </li>
      </ListWrapper>
    ),
  },
];

export const Experience = () => (
  <div className="mb-20 flex flex-col gap-5">
    <p className="text-lg font-medium lowercase text-primary">Experience</p>
    <div className="space-y-4">
      {experiences.map(
        (
          { desc, duration, location, tagBgColors, tags, skills, title },
          index,
        ) => (
          <DivWBorderWrapper key={`exp-${index}`}>
            <div className="space-y-2 md:flex md:space-x-11 md:space-y-0">
              <div className="flex justify-between md:block md:space-y-2">
                <p className="text-sm" aria-label="duration">
                  {duration}
                </p>
                {tags.map((tag, i) => (
                  <Tag
                    label={tag}
                    tagProps={{
                      style: {
                        backgroundColor: tagBgColors[i],
                      },
                    }}
                    key={`exp-${index}`}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium" aria-label="place">
                  {title}
                  <br />
                  {location}
                </div>
                {desc}
              </div>
            </div>
            <div className="my-10 flex flex-row flex-wrap gap-2">
              {skills?.map((tag, index) => (
                <Tag
                  label={tag}
                  tagProps={{
                    style: {
                      backgroundColor: colorMap["full-time"],
                    },
                  }}
                  key={`exp-${index}`}
                />
              ))}
            </div>
          </DivWBorderWrapper>
        ),
      )}
    </div>
  </div>
);

export const Education = () => (
  <div className="mb-20 flex flex-col gap-5">
    <p className="text-lg font-medium lowercase text-primary">Education</p>
    <div className="space-y-4">
      {education.map(
        (
          { desc, duration, location, tagBgColors, tags, skills, title },
          index,
        ) => (
          <DivWBorderWrapper key={`edu-${index}`}>
            <div className="space-y-2 md:flex md:space-x-11 md:space-y-0">
              <div className="flex justify-between md:block md:space-y-2">
                <p className="text-sm" aria-label="duration">
                  {duration}
                </p>
                {tags.map((tag, i) => (
                  <Tag
                    label={tag}
                    tagProps={{
                      style: {
                        backgroundColor: tagBgColors[i],
                      },
                    }}
                    key={`edu-${index}`}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium" aria-label="place">
                  {title}
                  <br />
                  {location}
                </div>
                {desc}
              </div>
            </div>
            <div className="my-10 flex flex-row flex-wrap gap-2">
              {skills?.map((tag, index) => (
                <Tag
                  label={tag}
                  tagProps={{
                    style: {
                      backgroundColor: colorMap["full-time"],
                    },
                  }}
                  key={`exp-${index}`}
                />
              ))}
            </div>
          </DivWBorderWrapper>
        ),
      )}
    </div>
  </div>
);

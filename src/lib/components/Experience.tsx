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
    duration: "Aug '24 - Present",
    tags: ["Full Stack Engineer"],
    tagBgColors: [colorMap["internship"]],
    href: "https://www.ufl.edu",
    get title() {
      return (
        <LinkWrapper href={this.href} linkIcon>
          Full Stack Engineer <span className="font-normal">at</span> University
          of Florida
        </LinkWrapper>
      );
    },
    location: "Gainesville, FL",
    desc: (
      <ListWrapper
        liProps={{
          className: "max-w-[385px]",
        }}
      >
        <li>
          Developed a diagnostic tool to monitor Parkinson’s disease progression
          by analyzing patient videos through precise motion detection using the{" "}
          <strong>YOLOv8 algorithm</strong>, <strong>React.js</strong>,{" "}
          <strong>Plotly.js</strong>, <strong>Django</strong>,{" "}
          <strong>PyTorch</strong>, and <strong>MediaPipe</strong>, benefiting
          over <strong>50K patients</strong>.
        </li>
        <li>
          Containerized the application into a <strong>Docker</strong> image and
          repurposed it as a desktop application using <strong>Electron</strong>{" "}
          and <strong>PyInstaller</strong>, enabling local execution and
          ensuring patient privacy by eliminating network data transmission.
        </li>
      </ListWrapper>
    ),
  },
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
          Deployed a self-hosted <strong>n8n</strong> marketing instance
          executing <strong>2 million</strong> workflows per month on a{" "}
          <strong>$200</strong> infrastructure, achieving{" "}
          <strong>$10,000</strong> monthly savings.
        </li>
        <li>
          Redesigned CMA Reports, reducing churn from{" "}
          <strong>30% to 12%</strong> and driving sales with{" "}
          <strong>400 active subscriptions</strong>, generating{" "}
          <strong>$160,000</strong> in monthly recurring revenue, enhancing
          long-term profitability.
        </li>
        <li>
          Introduced an email sequences feature that produces{" "}
          <strong>1,000 leads</strong> monthly, significantly lowering lead
          acquisition costs by <strong>$200,000</strong> and yielding{" "}
          <strong>$100,000</strong> in revenue, streamlining marketing efforts
          and increasing ROI.
        </li>
        <li>
          Refactored inquiry processing from{" "}
          <strong>16 external portals</strong>, handling approximately{" "}
          <strong>2,000</strong> inquiries per month by parsing emails from
          various sources, boosting operational performance by{" "}
          <strong>40%</strong>.
        </li>
        <li>
          Devised a segmented backup strategy in <strong>PostgreSQL</strong> by
          separating pre-data and post-data segments and using{" "}
          <strong>pg_sample</strong> for efficient database sampling, shrinking
          development branch data from <strong>6GB to 500MB</strong>—a reduction
          of approximately <strong>92%</strong>.
        </li>
        <li>
          Accelerated data obfuscation by splitting the process into two stages,
          reducing time from <strong>1.5 hours to 40 minutes</strong>—a{" "}
          <strong>56%</strong> decrease—significantly enhancing developer
          productivity.
        </li>
        <li>
          Enhanced <strong>Next.js</strong> page delivery by storing
          server-rendered pages in <strong>MongoDB</strong> and implementing
          caching with <strong>Cloudflare Cache API</strong>, cutting response
          times from <strong>160ms to 40ms</strong>—a <strong>75%</strong>{" "}
          improvement in site speed.
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
          Optimized SMS costs by switching to <strong>GSM-7</strong> encoding
          from <strong>UTF-8</strong> and keeping messages under 140 characters,
          reducing expenses to <strong>$10</strong> using a self-hosted
          shortener with <strong>Cloudflare Workers</strong> and{" "}
          <strong>KV storage</strong>, saving <strong>$12,000</strong> monthly.
        </li>
        <li>
          Migrated from a legacy <strong>GraphQL Relay API</strong> using{" "}
          <strong>Knex.js</strong> to <strong>Hasura</strong>, leveraging
          Hasura&rsquo;s fine-grained permissions instead of{" "}
          <strong>PostgreSQL Row-Level Security (RLS)</strong>. This transition
          reduced the codebase by <strong>400,000 lines</strong> and improved
          query performance by eliminating RLS overhead.
        </li>
        <li>
          Expanded the appraisal chatbot to{" "}
          <strong>Italy, Germany, and the UK</strong>, achieving{" "}
          <strong>$360K ARR</strong> and <strong>37K</strong> organic users in
          Italy. Established staging/production routes, improved SEO, and
          configured multi-tenancy.
        </li>
        <li>
          Migrated codebase and libraries from <strong>Flow</strong> to{" "}
          <strong>TypeScript</strong>, updated custom React Relay hooks to
          built-in hooks (v11), and transitioned <strong>Material-UI</strong>{" "}
          from v4 to v5 with MUI utilities, resulting in a{" "}
          <strong>15% reduction in code complexity</strong> and a{" "}
          <strong>20% improvement</strong> in maintenance efficiency.
        </li>
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
          Associate Software Trainee <span className="font-normal" /> at Tidbeat
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
          Developed a microservice for programming assignments using{" "}
          <strong>Spring Boot</strong>, <strong>Groovy</strong>, and{" "}
          <strong>Netflix OSS</strong> (Zuul, Ribbon), integrating the{" "}
          <strong>Sphere Engine API</strong>, resulting in a{" "}
          <strong>30% faster</strong> submission processing.
        </li>
        <li>
          Implemented storage of uploaded course materials in{" "}
          <strong>Google Cloud Storage (GCS)</strong>, improving scalability and
          reducing storage costs by <strong>25%</strong>.
        </li>
        <li>
          Integrated code quality tools like <strong>Lint-staged</strong>,{" "}
          <strong>Husky</strong>, <strong>Prettier</strong>, and{" "}
          <strong>ESLint</strong> into a <strong>React</strong> application to
          enforce consistent code style, leading to a{" "}
          <strong>100% reduction</strong> in style-related review comments and
          significantly speeding up the development cycle.
        </li>
        <li>
          Configured <strong>CI/CD</strong> pipelines by setting up{" "}
          <strong>GitHub Actions</strong> to automate the deployment of a{" "}
          <strong>React</strong> app to <strong>Vercel</strong> and
          containerizing a <strong>Spring Boot</strong> application for{" "}
          <strong>Google Cloud Run</strong>, reducing release time by{" "}
          <strong>40%</strong> and improving deployment efficiency.
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
          <strong>Core Member of Google DSC (2020-2021):</strong> Conducted
          workshops on web and app development, machine learning, and
          competitive coding for 2nd and 3rd year students. Gave sessions on
          Git, GitHub actions, and open source contribution.
        </li>
        <li>
          <strong>IE Student Coordinator (2018-2022):</strong> Organized several
          events including Bellman Crown, a national level coding competition, a
          web design contest, reverse coding event, and career guidance sessions
          with alumni.
        </li>
        <li>
          <strong>Cisco Campus Ambassador (2021-2022):</strong> Assisted final
          year students in securing internships through a partnership between
          CISCO and AICTE. Facilitated courses on cybersecurity, packet tracer,
          and cybersecurity essentials.
        </li>
        <li>
          <strong>Street Cause Member, Social Impact Team (2020-2021):</strong>{" "}
          Helped raise funds to support the needy during the COVID-19 pandemic.
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

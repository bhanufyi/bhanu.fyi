import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

import { IconWithProps } from "../SocialLinks";

import { LinkTo } from "@/lib/components/Anchor";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/lib/components/Drawer";

const links = [
  { href: "/about", text: "about" },
  { href: "/blog", text: "blog" },
];

export const social_links = {
  github: {
    link: "https://github.com/bhanufyi",
    title: "Bhanu's GitHub",
    icon: <FaGithub />,
    ariaLabel: "Bhanu's GitHub",
  },
  devto: {
    link: "https://dev.to/bhanufyi",
    title: "Bhanu's DEV",
    icon: <FaDev />,
    ariaLabel: "Bhanu's DEV to",
  },
  twitter: {
    link: "https://twitter.com/bhanufyi",
    title: "Bhanu's Twitter",
    icon: <FaTwitter />,
    ariaLabel: "Bhanu's Twitter",
  },
  linkedin: {
    link: "https://www.linkedin.com/in/bhanufyi",
    title: "Bhanu's LinkedIn",
    icon: <FaLinkedin />,
    ariaLabel: "Bhanu's LinkedIn",
  },
  email: {
    link: "mailto:hello@bhanu.fyi",
    title: "Send email to Bhanu",
    icon: <FaEnvelope />,
    ariaLabel: "Send email to Bhanu",
  },
} as const;

const socialLinks = ["github", "devto", "twitter"].map(
  (key) => social_links[key as keyof typeof social_links],
);

const NavigationItems = () => (
  <nav className="contents w-min">
    <ul className="contents">
      {links.map(({ href, text }) => (
        <li key={href}>
          <LinkTo href={href} className="text-foreground hover:text-primary">
            {text}
          </LinkTo>
        </li>
      ))}
    </ul>
    <ul className="mt-12 grid grid-flow-col gap-x-8 md:mt-0 md:contents">
      {socialLinks.map(({ link, ...props }) => (
        <li key={link}>
          <LinkTo
            href={link}
            target="_blank"
            className="flex items-center text-3xl text-foreground hover:text-primary md:text-2xl"
          >
            <IconWithProps {...props} />
          </LinkTo>
        </li>
      ))}
    </ul>
  </nav>
);

export const NavbarDesktop = () => (
  <div className="hidden md:contents">
    <NavigationItems />
  </div>
);

export const NavbarMobile = () => (
  <Drawer>
    <div className="contents md:hidden">
      <DrawerTrigger asChild>
        <button className="text-2xl">
          <LuMenu />
        </button>
      </DrawerTrigger>
    </div>
    <DrawerContent className="grid w-full items-center sm:max-w-full">
      <div className="my-8 grid w-min gap-y-6 pl-12 text-2xl">
        <nav className="contents w-min">
          <ul className="contents">
            {links.map(({ href, text }) => (
              <li key={href}>
                <DrawerClose asChild>
                  <LinkTo
                    href={href}
                    className="text-foreground hover:text-primary"
                  >
                    {text}
                  </LinkTo>
                </DrawerClose>
              </li>
            ))}
          </ul>
          <ul className="mt-12 grid grid-flow-col gap-x-8 md:mt-0 md:contents">
            {socialLinks.map(({ link, ...props }) => (
              <li key={link}>
                <DrawerClose>
                  <LinkTo
                    href={link}
                    target="_blank"
                    className="flex items-center text-3xl text-foreground hover:text-primary md:text-2xl"
                  >
                    <IconWithProps {...props} />
                  </LinkTo>
                </DrawerClose>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </DrawerContent>
  </Drawer>
);

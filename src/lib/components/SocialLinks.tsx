"use client";

import { motion } from "framer-motion";
import { cloneElement } from "react";

import { social_links } from "./Header/Nav";

import { LinkTo } from "@/lib/components/Anchor";

type ExternalLinksArrayType = Array<{
  link: string;
  title: string;
  icon: JSX.Element;
  ariaLabel?: string;
  onClick?: () => void;
}>;

export const IconWithProps = ({
  icon,
  title,
  ariaLabel,
}: Omit<ExternalLinksArrayType[number], "onClick" | "link">) =>
  cloneElement(icon, { title, "aria-label": ariaLabel });

export const SocialLinks = () => {
  const external_links: ExternalLinksArrayType = Object.values(social_links);

  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="flex flex-wrap place-items-center justify-center gap-4 px-12 py-4 sm:p-4"
    >
      {external_links.map(({ link, onClick, ...props }) => (
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={props.title}
          className="text-2xl"
        >
          <LinkTo href={link} onClick={onClick}>
            <IconWithProps {...props} />
          </LinkTo>
        </motion.li>
      ))}
    </motion.ul>
  );
};

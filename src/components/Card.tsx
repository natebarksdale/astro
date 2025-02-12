import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, emoji, haiku } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "font-medium decoration-solid hover:underline",
  };

  return (
    <li className="mb-6">
      <a
        href={href}
        title={haiku}
        className="inline-block text-xl font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}><span class='.emoji'>{emoji}</span>{title}</h2>
        ) : (
          <h3 {...headerProps}><span class='.emoji'>{emoji}</span>{title}</h3>
        )}
      </a>
{/*       <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} /> */}
      <p>{description}</p>
    </li>
  );
}

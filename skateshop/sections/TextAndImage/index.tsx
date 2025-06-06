"use client";

import clsx from "clsx";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { ParallaxImage } from "./ParallaxImage";
import LinkButton from "@/components/Button";

type TextAndImageProps = {
  heading: string;
  body: string;
  button?: {
    text: string;
    href: string;
  };
  foregroundImage: {
    url: string;
    alt?: string;
  };
  backgroundImage: {
    url: string;
    alt?: string;
  };
  theme?: "Blue" | "Orange" | "Navy" | "Lime";
  variation?: "default" | "imageOnLeft";
  index?: number;
  headingClassName?: string; // <-- add optional headingClassName prop
  bodyClassName?: string; // <-- add optional bodyClassName prop
  bgColor?: string; // <-- add optional bgColor prop
};

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({
  heading,
  body,
  button,
  foregroundImage,
  backgroundImage,
  theme = "Blue",
  variation = "default",
  index = 0,
  headingClassName = "",
  bodyClassName = "",
  bgColor = "",
}: TextAndImageProps) => {
  return (
    <Bounded
      className={clsx(
        "sticky top-[calc(var(--index)*2rem)]",
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Orange" && "bg-texture bg-brand-orange text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime",
        bgColor // <-- add this
      )}
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            variation === "imageOnLeft" && "md:order-2"
          )}
        >
          <SlideIn>
            <Heading size="lg" as="h2" className={headingClassName}>
              {heading}
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className={clsx("max-w-md", bodyClassName)}>{body}</div>
          </SlideIn>
          {button && (
            <SlideIn>
              <LinkButton onClick={() => window.location.href = button.href}>{button.text}</LinkButton>
            </SlideIn>
          )}
        </div>
        <ParallaxImage
          foregroundImage={foregroundImage}
          backgroundImage={backgroundImage}
        />
      </div>
    </Bounded>
  );
};

export default TextAndImage;

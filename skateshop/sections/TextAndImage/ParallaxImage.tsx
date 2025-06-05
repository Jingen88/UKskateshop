"use client";

import clsx from "clsx";
import React from "react";
import Image from "next/image";

type ParallaxImageProps = {
  foregroundImage: {
    url: string;
    alt?: string;
  };
  backgroundImage: {
    url: string;
    alt?: string;
  };
};

export const ParallaxImage = ({
  foregroundImage,
  backgroundImage,
}: ParallaxImageProps) => (
  <div className="relative aspect-[4/5] w-full max-w-xs mx-auto">
    <Image
      src={backgroundImage.url}
      alt={backgroundImage.alt || ""}
      fill
      className={clsx("object-cover rounded-lg opacity-60")}
      style={{ zIndex: 1 }}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
    <Image
      src={foregroundImage.url}
      alt={foregroundImage.alt || ""}
      fill
      className={clsx("object-contain rounded-lg")}
      style={{ zIndex: 2 }}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
);

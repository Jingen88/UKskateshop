import React from "react";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { HorizontalLine, VerticalLine } from "@/components/Line";
import clsx from "clsx";
import { Scribble } from "./Scribble";
import { CustomizeButton } from "@/components/Button";

// Remove the fetch logic and just return a color
async function getDominantColor(url: string) {
  return "#A1EF03";
}

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: {
    url: string;
    alt?: string;
  };
  customizer_link?: string;
};

type Props = {
  product: Product;
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

export async function SkateboardProduct({ product }: Props) {
  const price =
    typeof product?.price === "number" && Number.isFinite(product.price)
      ? `$${(product.price / 100).toFixed(2)}`
      : "Price Not Available";

  // Always use the green color for the scribble
  const dominantColor = "#A1EF03";

  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <div className="flex items-center justify-between special-elite-bold ~text-sm/2xl">
        <span>£{(product.price / 100).toFixed(2)}</span>
        <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400 special-elite-bold" /> 37
        </span>
      </div>
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <div className="-mb-1 overflow-hidden py-4">
        <Scribble
          className="absolute inset-0 h-full w-full"
          color={dominantColor}
        />
        <img
          alt={product.image?.alt || ""}
          src={product.image?.url}
          width={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>
 <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />
      <h3 className="text-xl special-elite-bold mb-1 text-center">
        {product.name}
      </h3>

      {product.customizer_link && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Link href="/Builder">
            <CustomizeButton>Customize</CustomizeButton>
          </Link>
        </div>
      )}
    </div>
  );
}


import { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode; // <-- Change here
};

export function Bounded({
  as:section = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <section
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...(restProps as any)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

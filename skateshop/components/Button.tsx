'use client'
import React, { useState } from "react";
import { TbSkateboarding  } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import clsx from "clsx";

const SkateboardButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={` z-20 group relative cursor-pointer flex items-center justify-center gap-3 px-8 py-4 text-xl font-bold transition-all duration-300 overflow-hidden
        ${isHovered ? "animate-wobble" : ""}
        before:absolute before:inset-0 before:bg-black before:opacity-90
        after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzIDNhMiAyIDAgMCAwLTIgMkg3YTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJWN2EyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yLTJ6bS0zIDZIN3YyaDN2LTJ6bTcgMGgtM3YyaDN2LTJ6Ii8+PC9zdmc+')] after:opacity-20
        hover:shadow-xl hover:shadow-black/20
        focus:outline-none focus:ring-4 focus:ring-black/50
        active:scale-95 active:shadow-inner
        disabled:cursor-not-allowed disabled:opacity-50
        sm:px-10 sm:py-5 md:text-2xl
        transform skew-x-1 rotate-1
        rounded-[12px_4px_24px_8px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Build your custom skateboard"
      role="button"
      tabIndex={0}
    >
      <TbSkateboarding 
        className={`text-2xl text-orange-500 transform transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`}
        aria-hidden="true"
      />
      <span className="relative special-elite-bold text-white font-extrabold uppercase tracking-wider text-shadow-lg transform transition-transform duration-300 group-hover:scale-105">
        Build your Board
      </span>
    </button>
  );
};

export { SkateboardButton };

// Add these styles to your global CSS or tailwind.config.js
const styles = `
  @keyframes wobble {
    0% { transform: translateX(0) rotate(1deg) skew(-1deg); }
    25% { transform: translateX(-5px) rotate(-1deg) skew(1deg); }
    50% { transform: translateX(5px) rotate(1deg) skew(-1deg); }
    75% { transform: translateX(-2px) rotate(-1deg) skew(1deg); }
    100% { transform: translateX(0) rotate(1deg) skew(-1deg); }
  }

  .animate-wobble {
    animation: wobble 0.5s ease-in-out;
  }

  .text-shadow-lg {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;


const CartButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`group relative z-20 cursor-pointer flex items-center justify-center gap-3 px-8 py-4 text-xl font-bold transition-all duration-300 overflow-hidden
        ${isHovered ? "animate-wobble" : ""}
        before:absolute before:inset-0 before:bg-black before:opacity-90
        after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzIDNhMiAyIDAgMCAwLTIgMkg3YTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJWN2EyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yLTJ6bS0zIDZIN3YyaDN2LTJ6bTcgMGgtM3YyaDN2LTJ6Ii8+PC9zdmc+')] after:opacity-20
        hover:shadow-xl hover:shadow-black/20
        focus:outline-none focus:ring-4 focus:ring-black/50
        active:scale-95 active:shadow-inner
        disabled:cursor-not-allowed disabled:opacity-50
        sm:px-10 sm:py-5 md:text-2xl
        transform skew-x-1 rotate-1
        rounded-[12px_4px_24px_8px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="View your cart"
      role="button"
      tabIndex={0}
    >
      <FaShoppingCart
        className={`text-2xl text-orange-500 transform transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`}
        aria-hidden="true"
      />
      <span className="relative text-white special-elite-bold uppercase tracking-wider text-shadow-lg transform transition-transform duration-300 group-hover:scale-105">
        Cart
      </span>
    </button>
  );
};

export { CartButton };


interface CustomizeButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const CustomizeButton: React.FC<CustomizeButtonProps> = ({
  onClick,
  children = "Customize",
  className = "",
  type = "button",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`
      group relative cursor-pointer flex items-center justify-center w-full px-4 py-2
      rounded-[12px_4px_24px_8px]
      bg-gradient-to-b bg-black text-white special-elite-bold uppercase tracking-wider
      text-base shadow transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black/30
      text-shadow-lg
      ${className}
    `}
    style={{ fontSize: "1rem", padding: "0.5rem 1.25rem" }}
  >
    <span className="relative">{children}</span>
  </button>
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  color?: "lime" | "orange";
};

const LinkButton = ({ children = "Click Me", color = "lime", className, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={` z-50 group relative cursor-pointer flex items-center justify-center gap-3 px-8 py-4 text-xl font-bold transition-all duration-300 overflow-hidden
        ${isHovered ? "animate-wobble" : ""}
        before:absolute before:inset-0 before:bg-black before:opacity-90
        after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzIDNhMiAyIDAgMCAwLTIgMkg3YTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJWN2EyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yLTJ6bS0zIDZIN3YyaDN2LTJ6bTcgMGgtM3YyaDN2LTJ6Ii8+PC9zdmc+')] after:opacity-20
        hover:shadow-xl hover:shadow-black/20
        focus:outline-none focus:ring-4 focus:ring-black/50
        active:scale-95 active:shadow-inner
        disabled:cursor-not-allowed disabled:opacity-50
        sm:px-10 sm:py-5 md:text-2xl text-white
        transform skew-x-1 rotate-1
        rounded-[12px_4px_24px_8px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="View your cart"
      role="button"
      tabIndex={0}
      {...props}
    >
      <span className=" special-elite-bold relative z-10">{children}</span>
    </button>
  );
};

export default LinkButton;
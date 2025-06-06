import React from "react";
import Image from "next/image"; 
import { Bounded } from "./Bounded";
import { FooterPhysics } from "./FooterPhysics";

// Example static images for boards
const boardTextureURLs = [
  "/pink-drop-complete.png",
  "/yellow-black-complete.png",
  "/thank-you-complete.png",
  "/onimask-complete.png",
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
    <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
      {/* Static background image */}
      <img
        src="/gravity-bg.png"
        alt=""
        className="object-cover absolute inset-0 w-full h-full z-0"
        width={1200}
        height={600}
      />
      <FooterPhysics
        boardTextureURLs={boardTextureURLs}
        className="absolute inset-0 overflow-hidden z-10"
      />
      <Image
        src='/skateshop.png'
        width={130}
        height={130}
        alt='logo'
        className="pointer-events-none relative h-20 mix-blend-luminosity md:h-28 z-20"
      />
    </div>
    <Bounded as="nav">
      <ul className="flex special-elite-bold mt-8 mb-8 items-center text-centerflex-wrap justify-center gap-10 ~text-lg/xl">
        {navLinks.map((item) => (
          <li key={item.href} className="hover:text-[#A1EF03] hover:underline-offset-4">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </Bounded>
  </footer>
);

export default Footer;
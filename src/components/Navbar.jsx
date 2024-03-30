

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="flex justify-between fixed top-0 z-[40] w-full h-[100px] bg-transparent items-center px-10 md:px-20 border">
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white text-[25px] font-semibold">
          Turtle{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-800">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </div>
      {/* Hamburger menu icon for mobile */}
      <LuMenu
        className="cursor-pointer md:hidden"
        size={24}
        onClick={toggleMobileMenu}
      />

      {/* Navigation links for desktop */}

      <div className="hidden md:flex gap-5 justify-end items-center hover:cursor-pointer">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Projects</Link>

        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/project">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
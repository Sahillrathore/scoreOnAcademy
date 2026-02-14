"use client";

import Link from "next/link";
import React, { useState } from "react";
import {  } from "react-icons";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Courses", "Learning", "Tutors"];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 md:px-16 py-2">

          {/* Logo */}
          <img src="/logoss.png" alt="logo" className="w-28 md:w-32" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                href={`#${link.toLowerCase()}`}
                key={link}
                onClick={() => setActive(link)}
                className="relative group text-base text-[#013b7e] font-medium transition-colors duration-300 hover:text-[#002855]"
              >
                {link}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#002855] transition-all duration-300 ${
                    active === link ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#013b7e]"
            onClick={() => setIsOpen(true)}
          >
            <BiMenu size={26} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[350px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <CgClose size={28} className="text-[#013b7e]" />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 px-8 mt-6">
          {links.map((link) => (
            <Link
              href={`#${link.toLowerCase()}`}
              key={link}
              onClick={() => {
                setActive(link);
                setIsOpen(false);
              }}
              className="text-lg font-medium text-[#013b7e] border-b pb-3"
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;

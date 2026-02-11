"use client"

import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");

  const links = ["Home", "Courses", "Learning", "Tutors"];

  return (
    <div className="flex items-center justify-between p-4 py-1 bg-white max-w-360 mx-auto">
      <div>
        <img src="/logoss.png" alt="logo.." className="w-32" />
      </div>

      <div>
        <ul className="flex gap-8 items-center">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => setActive(link)}
              className="relative group cursor-pointer text-base text-[#013b7e] transition-colors duration-300 hover:text-[#002855] font-medium"
            >
              {link}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[1] bg-[#002855] transition-all duration-300 ${
                  active === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

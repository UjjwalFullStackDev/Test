import React, { useState, useEffect } from "react";
import logo from "../assets/logo_white.webp";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-5 sm:px-10 px-8 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex w-full screen-max-widht justify-between">
        <img src={logo} alt="logo" width={60} height={60} />

        <div className="flex gap-2 justify-center items-center">
          <Phone className="size-8 p-2 text-white border border-gray-500 rounded-full" />
          <Menu className="size-10 text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

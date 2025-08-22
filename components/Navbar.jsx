// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        isScrolled
          ? "bg-background/80 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#hero" className="text-lg font-bold">
          Shrish
        </Link>
        <div className="hidden space-x-8 md:flex">
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

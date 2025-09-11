// components/Navbar.jsx
"use client";
import {
  Github,
  Linkedin,
  MailIcon,
  Menu,
  SmartphoneIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./NavLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 z-50 w-full transition-all">
      <div
        className={`container mx-auto flex items-center justify-between rounded-md px-4 py-4 shadow ${
          isScrolled
            ? "bg-background/80 shadow-sm backdrop-blur"
            : "bg-background"
        }`}
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="mr-10 flex items-center gap-2 text-xl font-bold"
        >
          <Logo />
          Shrish
        </Link>

        {/* Desktop Links */}
        <div className="hidden space-x-8 font-semibold md:flex">
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a
            href="https://shrish-mythoughtpages.vercel.app/"
            target="_blank"
            className="hover:text-primary transition"
          >
            Blog
          </a>
          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>
          <a href="#process-contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Right Icons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+919828081466"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md border-2 p-2 transition"
          >
            <SmartphoneIcon className="h-6 w-6" />
          </a>
          <a
            href="mailto:shrishgour.dev@gmail.com"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md border-2 p-2 transition"
          >
            <MailIcon className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/shrishgour"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md border-2 p-2 transition"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shrish-gour-6200874a/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md border-2 p-2 transition"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="border-primary text-primary rounded-md border-2 p-2 md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="bg-background mt-2 rounded-md p-4 shadow md:hidden">
          <div className="flex flex-col space-y-4 font-semibold">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <a href="tel:+919828081466">
              <SmartphoneIcon className="h-6 w-6" />
            </a>
            <a href="mailto:yourmail@example.com">
              <MailIcon className="h-6 w-6" />
            </a>
            <a href="https://github.com/shrishgour">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

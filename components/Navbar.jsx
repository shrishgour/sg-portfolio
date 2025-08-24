// components/Navbar.jsx
"use client";
import { Github, Linkedin, MailIcon, SmartphoneIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <Link
          href="#hero"
          className="mr-10 flex items-center gap-2 text-xl font-bold"
        >
          <Logo />
          Shrish
        </Link>
        <div className="hidden space-x-8 font-semibold md:flex">
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

        <div className="flex items-center gap-4 font-bold">
          <a
            href="tel:+919828081466"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md border-2 p-2 transition"
          >
            <SmartphoneIcon className="h-6 w-6" />
            {/* <span>(+91) 9828081466 </span> */}
          </a>
          <a
            href="mailto:yourmail@example.com"
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
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md border-2 p-2 transition"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}

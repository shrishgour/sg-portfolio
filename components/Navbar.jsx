// components/Navbar.jsx
"use client";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
        className={`container mx-auto flex items-center rounded-md px-4 py-4 shadow ${
          isScrolled
            ? "bg-background/80 shadow-sm backdrop-blur"
            : "bg-background"
        }`}
      >
        <Link href="#hero" className="mr-10 text-xl font-bold">
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

        <div className="ml-auto flex items-center gap-8 font-bold">
          <a
            href="tel:+911234567890"
            className="hover:text-primary flex items-center gap-2 font-bold transition"
          >
            <DevicePhoneMobileIcon className="h-6 w-6" />
            <span>(+91) 9828081466 </span>
          </a>
          <a href="#contact">
            <Button size="lg" variant="dark">
              Contact Me
            </Button>
          </a>
          {/* <a
            href="mailto:yourmail@example.com"
            className="bg-foreground text-background hover:bg-foreground/80 rounded-md p-2 transition"
          >
            <EnvelopeIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background hover:bg-foreground/80 rounded-md p-2 transition"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a> */}
        </div>
      </div>
    </nav>
  );
}

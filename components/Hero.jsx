// components/Hero.jsx
"use client";

import heroImg from "@/public/hero-img-3.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-background flex min-h-screen flex-col items-center justify-center gap-14 text-center"
    >
      <div className="mt-48 flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary mb-4 text-lg sm:text-xl"
        >
          👋 Hi, I’m Shrish
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-bold tracking-tight uppercase sm:text-6xl"
        >
          Full-stack dev for modern web apps
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground mb-8 max-w-2xl text-lg sm:text-xl"
        >
          React/Next.js, Tailwind, and clean architectures that convert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4"
        >
          <Link
            href="#projects"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold shadow"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg border px-6 py-3 font-semibold"
          >
            Contect Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative mb-8 aspect-video w-full overflow-clip rounded-xl"
      >
        <Image
          src={heroImg}
          placeholder="blur"
          quality={80}
          fill
          alt="A image of code window on a laptop."
        />
      </motion.div>
    </section>
  );
}

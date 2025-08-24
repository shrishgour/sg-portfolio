// components/Hero.jsx
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
        Hi, I'm Shrish 👋
      </h1>
      <p className="text-muted-foreground mb-8 max-w-2xl text-lg md:text-xl">
        Full-stack developer crafting responsive, scalable, and elegant web
        applications with modern technologies.
      </p>
      <div className="flex space-x-4">
        <a href="#projects">
          <Button size="lg">View Projects</Button>
        </a>
      </div>
    </section>
  );
}

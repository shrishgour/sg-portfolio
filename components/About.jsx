// components/AboutMe.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <Card className="border-border/40 mx-auto max-w-5xl rounded-2xl border px-8 shadow-md">
          <CardHeader className="text-center">
            <h2>
              <CardTitle className="text-secondary-foreground text-4xl font-semibold tracking-[0.125rem] uppercase">
                About Me
              </CardTitle>
            </h2>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-8 text-lg leading-relaxed">
            <p className="text-foreground/90">
              My focus is on building fast, SEO-friendly websites that help
              businesses showcase their brand and convert visitors into
              customers.
            </p>

            <p>
              I’m a <span className="font-semibold">full-stack developer </span>
              transitioning from a deep background in{" "}
              <span className="font-semibold">C#</span> and{" "}
              <span className="font-semibold">Unity</span> — a foundation that
              taught me precision, architecture, and creative workflow.
            </p>

            <p>
              Since shifting to the web, I’ve advanced my skills in building
              dynamic, production-ready applications using:
            </p>

            <ul className="list-inside list-disc space-y-3 pl-2">
              <li>
                <span className="text-foreground font-medium">
                  React + Next.js
                </span>{" "}
                with the latest App Router and Server Components
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Modern state management
                </span>{" "}
                with React Query and Redux Toolkit
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Reusable patterns
                </span>{" "}
                using custom hooks, context, and performance-focused
                architecture
              </li>
              <li>
                <span className="text-foreground font-medium">
                  Clean styling
                </span>{" "}
                with Tailwind CSS and component systems like Shadcn/ui
              </li>
            </ul>

            <p>
              This mix of experience helps me build both{" "}
              <span className="italic">powerful</span> and{" "}
              <span className="italic">delightful</span> user experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

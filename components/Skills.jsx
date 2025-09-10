// components/Skills.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Palette, Workflow } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-20">
      <div className="container mx-auto px-6">
        <Card className="border-border/40 mx-auto max-w-6xl rounded-2xl border shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-secondary-foreground text-4xl font-semibold tracking-[0.125rem] uppercase">
              Skills
            </CardTitle>
          </CardHeader>

          <CardContent className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <div className="space-y-3">
              <Code className="text-primary mx-auto h-10 w-10" />
              <h3 className="text-xl font-semibold">Frontend</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>React + Next.js</li>
                <li>App Router / Server Components</li>
                <li>React Query, Redux Toolkit</li>
                <li>Custom Hooks & Context</li>
              </ul>
            </div>

            {/* Styling */}
            <div className="space-y-3">
              <Palette className="text-primary mx-auto h-10 w-10" />
              <h3 className="text-xl font-semibold">Styling</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Tailwind CSS v4</li>
                <li>Shadcn/ui</li>
                <li>Responsive & Accessible UI</li>
                <li>Design Systems</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="space-y-3">
              <Database className="text-primary mx-auto h-10 w-10" />
              <h3 className="text-xl font-semibold">Backend</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Node.js + Express</li>
                <li>REST APIs</li>
                <li>Authentication (JWT/NextAuth)</li>
                <li>Database (SQL, MongoDB, Supabase)</li>
              </ul>
            </div>

            {/* Workflow */}
            <div className="space-y-3">
              <Workflow className="text-primary mx-auto h-10 w-10" />
              <h3 className="text-xl font-semibold">Workflow</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Git + GitHub</li>
                <li>Agile / Scrum</li>
                <li>CI/CD (Vercel, Netlify)</li>
                <li>Testing & Debugging</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
